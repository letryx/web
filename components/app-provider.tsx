import { useUser } from '@auth0/nextjs-auth0';
import { Redirect } from 'components/redirect';
import {
  CurrentUserFragment,
  useGetCurrentUserQuery,
} from 'lib/generated/graphql/apollo-schema';
import { useRouter } from 'next/router';
import { createContext, FC, useContext } from 'react';

interface AppContextProps {
  isAppLoading: boolean;
  currentUser: CurrentUserFragment | undefined;
}

const AppContext = createContext<AppContextProps>({
  currentUser: undefined,
  isAppLoading: true,
});

export function useAppContext(): AppContextProps {
  const context = useContext(AppContext);

  if (!context) throw new Error('Wrap with AppProvider to access this data!');

  return context;
}

const AppProvider: FC = ({ children }) => {
  const {
    user: auth0User,
    error: authError,
    isLoading: authLoading,
  } = useUser();
  const {
    data: userData,
    error: userError,
    loading: userLoading,
  } = useGetCurrentUserQuery({
    skip: !auth0User,
    variables: { auth0_id: auth0User?.sub || 'none' },
  });
  const { asPath } = useRouter();
  const currentUser = userData?.user?.[0];
  const error = authError || userError;
  const isAppLoading = authLoading || userLoading;

  // handle case where auth0 hasn't refreshed the user's accesstoken
  const shouldRefreshToken = !isAppLoading && auth0User && !currentUser;

  if (error) {
    // eslint-disable-next-line no-console
    console.log('Login error:', error);
    if (
      typeof window !== 'undefined' &&
      process.env.NODE_ENV === 'development'
    ) {
      // eslint-disable-next-line no-alert
      alert(`Login error: ${error}`);
    }
  }

  return (
    <AppContext.Provider value={{ isAppLoading, currentUser }}>
      {shouldRefreshToken ? (
        <>
          Refreshing authentication credentials....
          <Redirect to={`/api/auth/login?returnTo=${asPath}`} />
        </>
      ) : (
        children
      )}
    </AppContext.Provider>
  );
};

export { AppProvider };
