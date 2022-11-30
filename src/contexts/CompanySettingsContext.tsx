import { createContext, FC } from 'react';
import useAuth from '../hooks/useAuth';
import { addFiles } from '../slices/file';
import { useDispatch } from '../store';

type CompanySettingsContext = {
  getFormattedDate: (dateString: string, hideTime?: boolean) => string;
  uploadFiles: (files, images) => Promise<number[]>;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CompanySettingsContext = createContext<CompanySettingsContext>(
  {} as CompanySettingsContext
);

export const CompanySettingsProvider: FC = ({ children }) => {
  const { companySettings } = useAuth();
  const dispatch = useDispatch();
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

  const uploadFiles = async (files, images): Promise<number[]> => {
    let result: number[] = [];
    if (files?.length) {
      await dispatch(addFiles(files)).then((fileIds) => {
        if (Array.isArray(fileIds)) result = [...fileIds];
      });
    }
    if (images?.length) {
      await dispatch(addFiles(images, 'IMAGE')).then((images) => {
        if (Array.isArray(images)) result = [...result, ...images];
      });
    }
    return result;
  };
  return (
    <CompanySettingsContext.Provider value={{ getFormattedDate, uploadFiles }}>
      {children}
    </CompanySettingsContext.Provider>
  );
};
