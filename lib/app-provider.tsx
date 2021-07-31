import { useUser } from '@auth0/nextjs-auth0';
import {
  CurrentUserFragment,
  useGetCurrentUserQuery,
} from 'lib/generated/graphql/apollo-schema';
import { createContext, FC, useContext } from 'react';

interface AppContextProps {
  isLoading: boolean;
  isLoggedIn: boolean;
  currentUser: CurrentUserFragment | undefined;
}

const AppContext = createContext<AppContextProps>({
  currentUser: undefined,
  isLoggedIn: false,
  isLoading: true,
});

export function useAppContext(): AppContextProps {
  const context = useContext(AppContext);

  if (!context) throw new Error('Wrap with AppProvider to access this data!');

  return context;
}

const AppProvider: FC = ({ children }) => {
  const { user, error: authError, isLoading: authLoading } = useUser();
  const {
    data: userData,
    error: userError,
    loading: userLoading,
  } = useGetCurrentUserQuery({
    skip: !user,
    variables: { auth0_id: user?.sub || 'none' },
  });
  const currentUser = userData?.user?.[0];
  const error = authError || userError;
  const isLoading = authLoading || userLoading;

  if (error) {
    // eslint-disable-next-line no-console
    console.log(`Login error: ${error}`);
    if (
      typeof window !== 'undefined' &&
      process.env.NODE_ENV === 'development'
    ) {
      // eslint-disable-next-line no-alert
      alert(`Login error: ${error}`);
    }
  }

  return (
    <AppContext.Provider
      value={{ isLoading, isLoggedIn: !!currentUser, currentUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
