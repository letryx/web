import { fetcher } from 'lib/fetcher';
import { set } from 'lib/store';
import { createContext, FC, useContext, useEffect, useState } from 'react';
import { AuthResponse } from 'types/api';
import { User } from 'types/user';

interface AppContextProps {
  loggedIn: boolean;
  currentUser: User | undefined;
  isAuthComplete: boolean;
}

const AppContext = createContext<AppContextProps>({
  currentUser: undefined,
  loggedIn: false,
  isAuthComplete: false,
});

export function useAppContext(): AppContextProps {
  const context = useContext(AppContext);

  if (!context) throw new Error('Wrap with AppProvider to access this data!');

  return context;
}

const AppProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAuthComplete, setIsAuthComplete] = useState(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const { data, res } = await fetcher<AuthResponse>('/api/auth');
      const isSuccessful = res.status === 200;
      setLoggedIn(isSuccessful);
      setIsAuthComplete(true);
      if (isSuccessful) {
        setCurrentUser(data.currentUser);
        set('api-token', data.token);
      }
    };
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ currentUser, isAuthComplete, loggedIn }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
