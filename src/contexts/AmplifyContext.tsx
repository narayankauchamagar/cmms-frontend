import { FC, ReactNode, createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import Amplify, { Auth } from 'aws-amplify';
import { amplifyConfig } from '../config';
import { User } from 'src/models/user';

Amplify.configure(amplifyConfig);

interface AuthState {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: User | null;
}

interface AuthContextValue extends AuthState {
  method: 'Amplify';
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  verifyCode: (username: string, code: string) => Promise<void>;
  resendCode: (username: string) => Promise<void>;
  passwordRecovery: (username: string) => Promise<void>;
  passwordReset: (
    username: string,
    code: string,
    newPassword: string
  ) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

type InitializeAction = {
  type: 'INITIALIZE';
  payload: {
    isAuthenticated: boolean;
    user: User | null;
  };
};

type LoginAction = {
  type: 'LOGIN';
  payload: {
    user: User;
  };
};

type LogoutAction = {
  type: 'LOGOUT';
};

type RegisterAction = {
  type: 'REGISTER';
};

type VerifyCodeAction = {
  type: 'VERIFY_CODE';
};

type ResendCodeAction = {
  type: 'RESEND_CODE';
};
type PasswordRecoveryAction = {
  type: 'PASSWORD_RECOVERY';
};

type PasswordResetAction = {
  type: 'PASSWORD_RESET';
};

type Action =
  | InitializeAction
  | LoginAction
  | LogoutAction
  | RegisterAction
  | VerifyCodeAction
  | ResendCodeAction
  | PasswordRecoveryAction
  | PasswordResetAction;

const initialAuthState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

const handlers: Record<
  string,
  (state: AuthState, action: Action) => AuthState
> = {
  INITIALIZE: (state: AuthState, action: InitializeAction): AuthState => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    };
  },
  LOGIN: (state: AuthState, action: LoginAction): AuthState => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    };
  },
  LOGOUT: (state: AuthState): AuthState => ({
    ...state,
    isAuthenticated: false,
    user: null
  }),
  REGISTER: (state: AuthState): AuthState => ({ ...state }),
  VERIFY_CODE: (state: AuthState): AuthState => ({ ...state }),
  RESEND_CODE: (state: AuthState): AuthState => ({ ...state }),
  PASSWORD_RECOVERY: (state: AuthState): AuthState => ({ ...state }),
  PASSWORD_RESET: (state: AuthState): AuthState => ({ ...state })
};

const reducer = (state: AuthState, action: Action): AuthState =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

const AuthContext = createContext<AuthContextValue>({
  ...initialAuthState,
  method: 'Amplify',
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
  verifyCode: () => Promise.resolve(),
  resendCode: () => Promise.resolve(),
  passwordRecovery: () => Promise.resolve(),
  passwordReset: () => Promise.resolve()
});

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  useEffect(() => {
    const initialize = async (): Promise<void> => {
      try {
        const user = await Auth.currentAuthenticatedUser();

        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: true,
            user: {
              id: user.sub,
              jobtitle: 'Lead Developer',
              avatar: user.picture,
              email: user.email,
              name: user.name,
              role: user.role,
              location: user.location,
              username: user.username,
              posts: user.posts,
              coverImg: user.coverImg,
              followers: user.followers,
              description: user.description
            }
          }
        });
      } catch (error) {
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      }
    };

    initialize();
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    const user = await Auth.signIn(email, password);

    if (user.challengeName) {
      console.error(`Can't login, "${user.challengeName}" failed.`);
      return;
    }

    dispatch({
      type: 'LOGIN',
      payload: {
        user: {
          id: user.sub,
          jobtitle: 'Lead Developer',
          avatar: user.picture,
          email: user.email,
          name: user.name,
          role: user.role,
          location: user.location,
          username: user.username,
          posts: user.posts,
          coverImg: user.coverImg,
          followers: user.followers,
          description: user.description
        }
      }
    });
  };

  const logout = async (): Promise<void> => {
    await Auth.signOut();
    dispatch({
      type: 'LOGOUT'
    });
  };

  const register = async (email: string, password: string): Promise<void> => {
    await Auth.signUp({
      username: email,
      password,
      attributes: { email }
    });
    dispatch({
      type: 'REGISTER'
    });
  };

  const verifyCode = async (username: string, code: string): Promise<void> => {
    await Auth.confirmSignUp(username, code);
    dispatch({
      type: 'VERIFY_CODE'
    });
  };

  const resendCode = async (username: string): Promise<void> => {
    await Auth.resendSignUp(username);
    dispatch({
      type: 'RESEND_CODE'
    });
  };

  const passwordRecovery = async (username: string): Promise<void> => {
    await Auth.forgotPassword(username);
    dispatch({
      type: 'PASSWORD_RECOVERY'
    });
  };

  const passwordReset = async (
    username: string,
    code: string,
    newPassword: string
  ): Promise<void> => {
    await Auth.forgotPasswordSubmit(username, code, newPassword);
    dispatch({
      type: 'PASSWORD_RESET'
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'Amplify',
        login,
        logout,
        register,
        verifyCode,
        resendCode,
        passwordRecovery,
        passwordReset
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
