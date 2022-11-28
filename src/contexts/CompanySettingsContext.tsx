import { createContext, FC } from 'react';
import useAuth from '../hooks/useAuth';

type CompanySettingsContext = {
  getFormattedDate: (dateString: string, hideTime?: boolean) => string;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CompanySettingsContext = createContext<CompanySettingsContext>(
  {} as CompanySettingsContext
);

export const CompanySettingsProvider: FC = ({ children }) => {
  const { companySettings } = useAuth();
  const { generalPreferences } = companySettings ?? { dateFormat: 'DDMMYY' };

  const getFormattedDate = (dateString: string, hideTime?: boolean) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const month = ('0' + (date.getMonth() + 1).toString()).substr(-2);
    const day = ('0' + date.getDate().toString()).substr(-2);
    const year = date.getFullYear().toString().substr(2);
    const time = hideTime ? '' : date.getHours() + ':' + date.getMinutes();
    if (generalPreferences.dateFormat === 'MMDDYY') {
      return month + '/' + day + '/' + year + ' ' + time;
    } else return day + '/' + month + '/' + year + ' ' + time;
  };

  return (
    <CompanySettingsContext.Provider value={{ getFormattedDate }}>
      {children}
    </CompanySettingsContext.Provider>
  );
};
