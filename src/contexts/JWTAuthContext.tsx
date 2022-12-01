import { createContext, FC, ReactNode, useEffect, useReducer } from 'react';
import { OwnUser, UserResponseDTO } from 'src/models/user';
import api, { authHeader } from 'src/utils/api';
import { JWT_SECRET, verify } from 'src/utils/jwt';
import PropTypes from 'prop-types';
import {
  getCompanySettings,
  getUserInfos,
  getUserSettings
} from '../utils/userApi';
import UserSettings from 'src/models/owns/userSettings';
import CompanySettings from 'src/models/owns/companySettings';
import { GeneralPreferences } from '../models/owns/generalPreferences';
import internationalization from '../i18n/i18n';
import {
  FieldConfiguration,
  FieldType
} from '../models/owns/fieldConfiguration';

interface AuthState {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: UserResponseDTO | null;
  userSettings: UserSettings | null;
  companySettings: CompanySettings | null;
}
export type FieldConfigurationsType = 'workOrder' | 'request';

interface AuthContextValue extends AuthState {
  method: 'JWT';
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    password: string,
    role: number | undefined
  ) => Promise<void>;
  getInfos: () => void;
  patchUserSettings: (values: Partial<UserSettings>) => Promise<void>;
  patchUser: (values: Partial<OwnUser>) => Promise<void>;
  updatePassword: (values: {
    oldPassword: string;
    newPassword: string;
  }) => Promise<boolean>;
  fetchUserSettings: () => Promise<void>;
  fetchCompanySettings: () => Promise<void>;
  patchGeneralPreferences: (
    values: Partial<GeneralPreferences>
  ) => Promise<void>;
  patchFieldConfiguration: (
    fieldName: string,
    fieldType: FieldType,
    fieldConfigurationsType: FieldConfigurationsType
  ) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

type InitializeAction = {
  type: 'INITIALIZE';
  payload: {
    isAuthenticated: boolean;
    user: UserResponseDTO | null;
    companySettings: CompanySettings | null;
  };
};

type LoginAction = {
  type: 'LOGIN';
  payload: {
    user: UserResponseDTO;
    companySettings: CompanySettings;
  };
};

type LogoutAction = {
  type: 'LOGOUT';
};

type RegisterAction = {
  type: 'REGISTER';
  payload: {
    user: UserResponseDTO;
    companySettings: CompanySettings;
  };
};
type PatchUserSettingsAction = {
  type: 'PATCH_USER_SETTINGS';
  payload: {
    userSettings: UserSettings;
  };
};
type PatchUserAction = {
  type: 'PATCH_USER';
  payload: {
    user: UserResponseDTO;
  };
};
type FetchUserSettingsAction = {
  type: 'GET_USER_SETTINGS';
  payload: {
    userSettings: UserSettings;
  };
};
type FetchCompanySettingsAction = {
  type: 'GET_COMPANY_SETTINGS';
  payload: {
    companySettings: CompanySettings;
  };
};
type PatchGeneralPreferencesAction = {
  type: 'PATCH_GENERAL_PREFERENCES';
  payload: {
    generalPreferences: GeneralPreferences;
  };
};
type PatchFieldConfigurationAction = {
  type: 'PATCH_FIELD_CONFIGURATION';
  payload: {
    type: FieldConfigurationsType;
    fieldConfiguration: FieldConfiguration;
  };
};
type Action =
  | InitializeAction
  | LoginAction
  | LogoutAction
  | RegisterAction
  | PatchUserSettingsAction
  | PatchUserAction
  | FetchUserSettingsAction
  | FetchCompanySettingsAction
  | PatchGeneralPreferencesAction
  | PatchFieldConfigurationAction;

const initialAuthState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  userSettings: null,
  companySettings: null
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
    const { isAuthenticated, user, companySettings } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
      companySettings
    };
  },
  LOGIN: (state: AuthState, action: LoginAction): AuthState => {
    const { user, companySettings } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
      companySettings
    };
  },
  LOGOUT: (state: AuthState): AuthState => ({
    ...state,
    isAuthenticated: false,
    user: null
  }),
  REGISTER: (state: AuthState, action: RegisterAction): AuthState => {
    const { user, companySettings } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
      companySettings
    };
  },
  PATCH_USER_SETTINGS: (
    state: AuthState,
    action: PatchUserSettingsAction
  ): AuthState => {
    const { userSettings } = action.payload;
    return {
      ...state,
      userSettings
    };
  },
  PATCH_USER: (state: AuthState, action: PatchUserAction): AuthState => {
    const { user } = action.payload;
    return {
      ...state,
      user
    };
  },
  GET_USER_SETTINGS: (
    state: AuthState,
    action: FetchUserSettingsAction
  ): AuthState => {
    const { userSettings } = action.payload;
    return {
      ...state,
      userSettings
    };
  },
  GET_COMPANY_SETTINGS: (
    state: AuthState,
    action: FetchCompanySettingsAction
  ): AuthState => {
    const { companySettings } = action.payload;
    return {
      ...state,
      companySettings
    };
  },
  PATCH_GENERAL_PREFERENCES: (
    state: AuthState,
    action: PatchGeneralPreferencesAction
  ): AuthState => {
    const { generalPreferences } = action.payload;
    return {
      ...state,
      companySettings: {
        ...state.companySettings,
        generalPreferences
      }
    };
  },
  PATCH_FIELD_CONFIGURATION: (
    state: AuthState,
    action: PatchFieldConfigurationAction
  ): AuthState => {
    const { type, fieldConfiguration } = action.payload;
    const stateClone = { ...state };
    if (type === 'workOrder') {
      stateClone.companySettings.workOrderConfiguration.workOrderFieldConfigurations =
        stateClone.companySettings.workOrderConfiguration.workOrderFieldConfigurations.map(
          (fC) => {
            if (fieldConfiguration.id === fC.id) {
              return fieldConfiguration;
            }
            return fC;
          }
        );
    } else {
      stateClone.companySettings.workOrderRequestConfiguration.fieldConfigurations =
        stateClone.companySettings.workOrderRequestConfiguration.fieldConfigurations.map(
          (fC) => {
            if (fieldConfiguration.id === fC.id) {
              return fieldConfiguration;
            }
            return fC;
          }
        );
    }
    return stateClone;
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
  getInfos: () => Promise.resolve(),
  patchUserSettings: () => Promise.resolve(),
  patchUser: () => Promise.resolve(),
  fetchUserSettings: () => Promise.resolve(),
  updatePassword: () => Promise.resolve(false),
  fetchCompanySettings: () => Promise.resolve(),
  patchGeneralPreferences: () => Promise.resolve(),
  patchFieldConfiguration: () => Promise.resolve()
});

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialAuthState);
  const switchLanguage = ({ lng }: { lng: any }) => {
    internationalization.changeLanguage(lng);
  };
  const updateUserInfos = async () => {
    const user = await getUserInfos();
    setCompanyId(user.companyId);
    return user;
  };
  const setupUser = async (user: UserResponseDTO) => {
    const companySettings = await getCompanySettings(user.companySettingsId);
    switchLanguage({
      lng: companySettings.generalPreferences.language.toLowerCase()
    });
    return companySettings;
  };
  const getInfos = async (): Promise<void> => {
    try {
      const accessToken = window.localStorage.getItem('accessToken');

      if (accessToken && verify(accessToken, JWT_SECRET)) {
        setSession(accessToken);
        const user = await updateUserInfos();
        const companySettings = await setupUser(user);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: true,
            user,
            companySettings
          }
        });
      } else {
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null,
            companySettings: null
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
          companySettings: null
        }
      });
    }
  };
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
    const companySettings = await setupUser(user);
    dispatch({
      type: 'LOGIN',
      payload: {
        user,
        companySettings
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
    password: string,
    role: number | undefined
  ): Promise<void> => {
    const response = await api.post<{ message: string; success: boolean }>(
      'auth/signup',
      role
        ? {
            email,
            firstName,
            lastName,
            phone,
            password,
            role: { id: role }
          }
        : { email, firstName, lastName, phone, password },
      { headers: authHeader(true) }
    );
    const { message, success } = response;
    setSession(message);
    const user = await updateUserInfos();
    const companySettings = await setupUser(user);
    dispatch({
      type: 'REGISTER',
      payload: {
        user,
        companySettings
      }
    });
  };

  const patchUserSettings = async (
    values: Partial<UserSettings>
  ): Promise<void> => {
    const userSettings = await api.patch<UserSettings>(
      `user-settings/${state.userSettings.id}`,
      values
    );
    dispatch({
      type: 'PATCH_USER_SETTINGS',
      payload: {
        userSettings
      }
    });
  };
  const patchUser = async (values: Partial<OwnUser>): Promise<void> => {
    const user = await api.patch<UserResponseDTO>(
      `users/${state.user.id}`,
      values
    );
    dispatch({
      type: 'PATCH_USER',
      payload: {
        user
      }
    });
  };
  const updatePassword = async (values: {
    oldPassword: string;
    newPassword: string;
  }): Promise<boolean> => {
    const response = await api.post<{ success: boolean }>(
      `auth/updatepwd`,
      values
    );
    const { success } = response;
    return success;
  };
  const fetchUserSettings = async (): Promise<void> => {
    const userSettings = await getUserSettings(state.user.userSettingsId);
    dispatch({
      type: 'GET_USER_SETTINGS',
      payload: {
        userSettings
      }
    });
  };

  const fetchCompanySettings = async (): Promise<void> => {
    const companySettings = await getCompanySettings(
      state.user.companySettingsId
    );
    dispatch({
      type: 'GET_COMPANY_SETTINGS',
      payload: {
        companySettings
      }
    });
  };
  const patchGeneralPreferences = async (
    values: Partial<GeneralPreferences>
  ): Promise<void> => {
    const generalPreferences = await api.patch<GeneralPreferences>(
      `general-preferences/${state.companySettings.generalPreferences.id}`,
      { ...state.companySettings.generalPreferences, ...values }
    );
    dispatch({
      type: 'PATCH_GENERAL_PREFERENCES',
      payload: {
        generalPreferences
      }
    });
  };

  const patchFieldConfiguration = async (
    fieldName: string,
    fieldType: FieldType,
    fieldConfigurationsType: FieldConfigurationsType
  ): Promise<void> => {
    let id;
    if (fieldConfigurationsType === 'workOrder') {
      id =
        state.companySettings.workOrderConfiguration.workOrderFieldConfigurations.find(
          (workOrderFieldConfiguration) =>
            workOrderFieldConfiguration.fieldName === fieldName
        ).id;
    } else {
      id =
        state.companySettings.workOrderRequestConfiguration.fieldConfigurations.find(
          (fieldConfiguration) => fieldConfiguration.fieldName === fieldName
        ).id;
    }
    const fieldConfiguration = await api.patch<FieldConfiguration>(
      `field-configurations/${id}`,
      { fieldType }
    );
    dispatch({
      type: 'PATCH_FIELD_CONFIGURATION',
      payload: {
        type: fieldConfigurationsType,
        fieldConfiguration
      }
    });
  };
  useEffect(() => {
    getInfos();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'JWT',
        login,
        logout,
        register,
        getInfos,
        patchUser,
        updatePassword,
        patchUserSettings,
        fetchUserSettings,
        fetchCompanySettings,
        patchGeneralPreferences,
        patchFieldConfiguration
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
