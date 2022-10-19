import { FC, ReactNode, createContext, useEffect, useReducer } from 'react';
import { UserResponseDTO } from 'src/models/user';
import axios from 'src/utils/axios';
import api, { authHeader } from 'src/utils/api';
import { verify, JWT_SECRET } from 'src/utils/jwt';
import PropTypes from 'prop-types';
import { getUserInfos, getUserSettings } from '../utils/userApi';
import UserSettings from 'src/models/owns/userSettings';

interface AuthState {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: UserResponseDTO | null;
  userSettings: UserSettings | null;
}

interface AuthContextValue extends AuthState {
  method: 'JWT';
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    password: string
  ) => Promise<void>;
  getInfos: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

type InitializeAction = {
  type: 'INITIALIZE';
  payload: {
    isAuthenticated: boolean;
    user: UserResponseDTO | null;
    userSettings: UserSettings | null;
  };
};

type LoginAction = {
  type: 'LOGIN';
  payload: {
    user: UserResponseDTO;
    userSettings: UserSettings;
  };
};

type LogoutAction = {
  type: 'LOGOUT';
};

type RegisterAction = {
  type: 'REGISTER';
  payload: {
    user: UserResponseDTO;
    userSettings: UserSettings;
  };
};

type Action = InitializeAction | LoginAction | LogoutAction | RegisterAction;

const initialAuthState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  userSettings: null
};

const setSession = (accessToken: string | null): void => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
  } else {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('companyId');
  }
};

const setCompanyId = (companyId: number) => {
  localStorage.setItem('companyId', companyId.toString());
};

const handlers: Record<
  string,
  (state: AuthState, action: Action) => AuthState
> = {
  INITIALIZE: (state: AuthState, action: InitializeAction): AuthState => {
    const { isAuthenticated, user, userSettings } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
      userSettings
    };
  },
  LOGIN: (state: AuthState, action: LoginAction): AuthState => {
    const { user, userSettings } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
      userSettings
    };
  },
  LOGOUT: (state: AuthState): AuthState => ({
    ...state,
    isAuthenticated: false,
    user: null
  }),
  REGISTER: (state: AuthState, action: RegisterAction): AuthState => {
    const { user, userSettings } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
      userSettings
    };
  }
};

const reducer = (state: AuthState, action: Action): AuthState =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

const AuthContext = createContext<AuthContextValue>({
  ...initialAuthState,
  method: 'JWT',
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
  getInfos: () => Promise.resolve()
});

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  const updateUserInfos = async () => {
    const user = await getUserInfos();
    setCompanyId(user.companyId);
    return user;
  };
  const getInfos = async (): Promise<void> => {
    try {
      const accessToken = window.localStorage.getItem('accessToken');

      if (accessToken && verify(accessToken, JWT_SECRET)) {
        setSession(accessToken);
        const user = await updateUserInfos();
        const userSettings = await getUserSettings(user.userSettingsId);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: true,
            user,
            userSettings
          }
        });
      } else {
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null,
            userSettings: null
          }
        });
      }
    } catch (err) {
      console.error(err);
      dispatch({
        type: 'INITIALIZE',
        payload: {
          isAuthenticated: false,
          user: null,
          userSettings: null
        }
      });
    }
  };
  useEffect(() => {
    getInfos();
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    const response = await api.post<{ accessToken: string }>(
      'auth/signin',
      {
        email,
        type: 'client',
        password
      },
      { headers: authHeader(true) }
    );
    const { accessToken } = response;
    setSession(accessToken);
    const user = await updateUserInfos();
    const userSettings = await getUserSettings(user.userSettingsId);

    dispatch({
      type: 'LOGIN',
      payload: {
        user,
        userSettings
      }
    });
  };

  const logout = async (): Promise<void> => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  const register = async (
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    password: string
  ): Promise<void> => {
    const response = await api.post<{ message: string; success: boolean }>(
      'auth/signup',
      {
        email,
        firstName,
        lastName,
        phone,
        password
      },
      { headers: authHeader(true) }
    );
    const { message, success } = response;
    setSession(message);
    const user = await updateUserInfos();
    const userSettings = await getUserSettings(user.userSettingsId);
    dispatch({
      type: 'REGISTER',
      payload: {
        user,
        userSettings
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'JWT',
        login,
        logout,
        register,
        getInfos
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
