import { FC, ReactNode, createContext, useEffect, useReducer } from 'react';
import { User } from 'src/models/user';
import firebase from 'src/utils/firebase';
import PropTypes from 'prop-types';

interface AuthState {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: User | null;
}

interface AuthContextValue extends AuthState {
  method: 'Firebase';
  createUserWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<any>;
  signInWithEmailAndPassword: (email: string, password: string) => Promise<any>;
  signInWithGoogle: () => Promise<any>;
  logout: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

type AuthStateChangedAction = {
  type: 'AUTH_STATE_CHANGED';
  payload: {
    isAuthenticated: boolean;
    user: User | null;
  };
};

type Action = AuthStateChangedAction;

const initialAuthState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

const reducer = (state: AuthState, action: Action): AuthState => {
  if (action.type === 'AUTH_STATE_CHANGED') {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    };
  }

  return state;
};

const AuthContext = createContext<AuthContextValue>({
  ...initialAuthState,
  method: 'Firebase',
  createUserWithEmailAndPassword: () => Promise.resolve(),
  signInWithEmailAndPassword: () => Promise.resolve(),
  signInWithGoogle: () => Promise.resolve(),
  logout: () => Promise.resolve()
});

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  useEffect(
    () =>
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          dispatch({
            type: 'AUTH_STATE_CHANGED',
            payload: {
              isAuthenticated: true,
              user: {
                id: user.uid,
                jobtitle: 'Lead Developer',
                avatar: user.photoURL,
                email: user.email,
                name: user.displayName || user.email,
                role: 'admin',
                location: 'San Francisco, USA',
                username: 'admin',
                posts: '4',
                coverImg: '/static/images/placeholders/covers/1.jpg',
                followers: '5684',
                description:
                  'Lorem ipsum is placeholder text commonly used in the graphic.'
              }
            }
          });
        } else {
          dispatch({
            type: 'AUTH_STATE_CHANGED',
            payload: {
              isAuthenticated: false,
              user: null
            }
          });
        }
      }),
    [dispatch]
  );

  const signInWithEmailAndPassword = (
    email: string,
    password: string
  ): Promise<any> => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const signInWithGoogle = (): Promise<any> => {
    const provider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(provider);
  };

  const createUserWithEmailAndPassword = async (
    email: string,
    password: string
  ): Promise<any> => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  const logout = (): Promise<void> => {
    return firebase.auth().signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'Firebase',
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signInWithGoogle,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthContext;
