import { ChangeEvent, FC, useContext, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardMedia,
  CircularProgress,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import UploadTwoToneIcon from '@mui/icons-material/UploadTwoTone';
import { CompanySettingsContext } from '../../../contexts/CompanySettingsContext';
import useAuth from '../../../hooks/useAuth';
import { Company } from '../../../models/owns/company';

const Input = styled('input')({
  display: 'none'
});

const CardCover = styled(Card)(
  ({ theme }) => `
    position: relative;

    .MuiCardMedia-root {
      height: ${theme.spacing(26)};
    }
`
);

const CardCoverAction = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    bottom: ${theme.spacing(2)};
`
);

interface CompanyCoverProps {
  image: string;
}

const CompanyCover: FC<CompanyCoverProps> = ({ image }) => {
  const { t }: { t: any } = useTranslation();
  const [changingPicture, setChangingPicture] = useState<boolean>(false);
  const { uploadFiles } = useContext(CompanySettingsContext);
  const { patchCompany } = useAuth();
  const onChangePicture = (event: ChangeEvent<HTMLInputElement>) => {
    setChangingPicture(true);
    uploadFiles([], Array.from(event.target.files))
      .then((files) =>
        patchCompany({ logo: { id: files[0].id } } as Partial<Company>)
      )
      .finally(() => setChangingPicture(false));
  };
  return (
    <>
      <CardCover>
        <CardMedia image={image} />
        <CardCoverAction>
          <Input
            accept="image/*"
            id="change-cover"
            disabled={changingPicture}
            onChange={onChangePicture}
            multiple
            type="file"
          />
          <label htmlFor="change-cover">
            <Button
              startIcon={
                changingPicture ? (
                  <CircularProgress size="1rem" />
                ) : (
                  <UploadTwoToneIcon />
                )
              }
              variant="contained"
              disabled={changingPicture}
              component="span"
            >
              {t('change_cover')}
            </Button>
          </label>
        </CardCoverAction>
      </CardCover>
    </>
  );
};

export default CompanyCover;
