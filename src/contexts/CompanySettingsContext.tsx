import { createContext, FC, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { addFiles } from '../slices/file';
import { useDispatch, useSelector } from '../store';
import { FileType } from '../models/owns/file';
import { getUsersMini } from '../slices/user';

type CompanySettingsContext = {
  getFormattedDate: (dateString: string, hideTime?: boolean) => string;
  uploadFiles: (
    files: any[],
    images: any[]
  ) => Promise<{ id: number; type: FileType }[]>;
  getUserNameById: (id: number) => string | null;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CompanySettingsContext = createContext<CompanySettingsContext>(
  {} as CompanySettingsContext
);

export const CompanySettingsProvider: FC = ({ children }) => {
  const { companySettings } = useAuth();
  const dispatch = useDispatch();
  const { generalPreferences } = companySettings ?? { dateFormat: 'DDMMYY' };
  const { usersMini } = useSelector((state) => state.users);

  const getFormattedDate = (dateString: string, hideTime?: boolean) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const month = ('0' + (date.getMonth() + 1).toString()).substr(-2);
    const day = ('0' + date.getDate().toString()).substr(-2);
    const year = date.getFullYear().toString().substr(2);
    const time = hideTime
      ? ''
      : (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) +
        ':' +
        (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    if (generalPreferences.dateFormat === 'MMDDYY') {
      return month + '/' + day + '/' + year + ' ' + time;
    } else return day + '/' + month + '/' + year + ' ' + time;
  };

  const uploadFiles = async (
    files: [],
    images: []
  ): Promise<{ id: number; type: FileType }[]> => {
    let result: { id: number; type: FileType }[] = [];
    if (files?.length) {
      await dispatch(addFiles(files)).then((fileIds) => {
        if (Array.isArray(fileIds))
          result = [
            ...fileIds.map((id) => {
              return { id, type: 'OTHER' as const };
            })
          ];
      });
    }
    if (images?.length) {
      await dispatch(addFiles(images, 'IMAGE')).then((images) => {
        if (Array.isArray(images))
          result = [
            ...result,
            ...images.map((imageId) => {
              return { id: imageId, type: 'IMAGE' as const };
            })
          ];
      });
    }
    return result;
  };

  const getUserNameById = (id: number) => {
    const user = usersMini.find((user) => user.id === id);
    return user ? `${user.firstName} ${user.lastName}` : null;
  };

  useEffect(() => {
    dispatch(getUsersMini());
  }, []);
  return (
    <CompanySettingsContext.Provider
      value={{ getFormattedDate, uploadFiles, getUserNameById }}
    >
      {children}
    </CompanySettingsContext.Provider>
  );
};
