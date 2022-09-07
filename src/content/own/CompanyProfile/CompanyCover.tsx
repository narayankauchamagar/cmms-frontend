import { FC } from 'react';
import PropTypes from 'prop-types';
import type { User } from 'src/models/user';
import { Box, Button, Card, CardMedia, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import UploadTwoToneIcon from '@mui/icons-material/UploadTwoTone';

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

interface ProfileCoverProps {
  user: User;
}

const CompanyCover: FC<ProfileCoverProps> = ({ user }) => {
  const { t }: { t: any } = useTranslation();
  return (
    <>
      <CardCover>
        <CardMedia image={user.coverImg} />
        <CardCoverAction>
          <Input accept="image/*" id="change-cover" multiple type="file" />
          <label htmlFor="change-cover">
            <Button
              startIcon={<UploadTwoToneIcon />}
              variant="contained"
              component="span"
            >
              {t('Change cover')}
            </Button>
          </label>
        </CardCoverAction>
      </CardCover>
    </>
  );
};

CompanyCover.propTypes = {
  // @ts-ignore
  user: PropTypes.object.isRequired
};

export default CompanyCover;
