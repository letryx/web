import { User } from '@firebase/auth-types';
import { FirebaseAuthProvider } from '@react-firebase/auth';
import firebase from 'firebase/app';
import { createContext, FC } from 'react';

interface AuthContextType {
  user?: User;
  userId?: string;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  loading: true,
});

export const firebaseConfig = {
  apiKey: 'AIzaSyDSRS0egk3tFmCZxfvyqYfU1Hc80f9mBSI',
  authDomain: 'letryx-web.firebaseapp.com',
  projectId: 'letryx-web',
  storageBucket: 'letryx-web.appspot.com',
  messagingSenderId: '501625668246',
  appId: '1:501625668246:web:cdb538a3eb1f700dea38b7',
  measurementId: 'G-KWMPD3NXB4',
  databaseURL: 'https://letryx-web.firebaseio.com',
};

const AuthProvider: FC = ({ children }) => {
  return (
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      {children}
    </FirebaseAuthProvider>
  );
};

export default AuthProvider;
