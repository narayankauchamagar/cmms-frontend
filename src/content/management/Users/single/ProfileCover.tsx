import { FC } from 'react';
import PropTypes from 'prop-types';
import type { User } from 'src/models/user';
import {
  Box,
  Typography,
  Card,
  Tooltip,
  Avatar,
  CardMedia,
  Button,
  IconButton,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import { useNavigate, useLocation } from 'react-router-dom';
import UploadTwoToneIcon from '@mui/icons-material/UploadTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';

const Input = styled('input')({
  display: 'none'
});

const AvatarWrapper = styled(Card)(
  ({ theme }) => `
    position: relative;
    overflow: visible;
    display: inline-block;
    margin-top: -${theme.spacing(9)};
    margin-left: ${theme.spacing(2)};

    .MuiAvatar-root {
      width: ${theme.spacing(16)};
      height: ${theme.spacing(16)};
    }
`
);

const ButtonUploadWrapper = styled(Box)(
  ({ theme }) => `
    position: absolute;
    width: ${theme.spacing(4)};
    height: ${theme.spacing(4)};
    bottom: -${theme.spacing(1)};
    right: -${theme.spacing(1)};

    .MuiIconButton-root {
      border-radius: 100%;
      background: ${theme.colors.primary.main};
      color: ${theme.palette.primary.contrastText};
      box-shadow: ${theme.colors.shadows.primary};
      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};
      padding: 0;
  
      &:hover {
        background: ${theme.colors.primary.dark};
      }
    }
`
);

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

const ProfileCover: FC<ProfileCoverProps> = ({ user }) => {
  const { t }: { t: any } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = (): void => {
    return navigate(
      `/${location.pathname.split('/')[1]}/management/users/list`
    );
  };

  return (
    <>
      <Box display="flex" mb={3}>
        <Tooltip arrow placement="top" title={t('Go back')}>
          <IconButton
            onClick={handleBack}
            color="primary"
            sx={{
              p: 2,
              mr: 2
            }}
          >
            <ArrowBackTwoToneIcon />
          </IconButton>
        </Tooltip>
        <Box>
          <Typography variant="h3" component="h3" gutterBottom>
            {t('Profile for')} {user.name}
          </Typography>
          <Typography variant="subtitle2">
            {t('This is a profile page. Easy to modify, always blazing fast')}
          </Typography>
        </Box>
      </Box>
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
      <AvatarWrapper>
        <Avatar variant="rounded" alt={user.name} src={user.avatar} />
        <ButtonUploadWrapper>
          <Input
            accept="image/*"
            id="icon-button-file"
            name="icon-button-file"
            type="file"
          />
          <label htmlFor="icon-button-file">
            <IconButton component="span" color="primary">
              <UploadTwoToneIcon />
            </IconButton>
          </label>
        </ButtonUploadWrapper>
      </AvatarWrapper>
      <Box py={2} pl={2} mb={3}>
        <Typography gutterBottom variant="h4">
          {user.name}
        </Typography>
        <Typography variant="subtitle2">{user.description}</Typography>
        <Typography
          sx={{
            py: 2
          }}
          variant="subtitle2"
          color="text.primary"
        >
          {user.jobtitle} | {user.location} | {user.followers} {t('followers')}
        </Typography>
        <Box
          display={{ xs: 'block', md: 'flex' }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Button size="small" variant="contained">
              {t('Follow')}
            </Button>
            <Button
              size="small"
              sx={{
                mx: 1
              }}
              variant="outlined"
            >
              {t('View website')}
            </Button>
            <IconButton
              color="primary"
              sx={{
                p: 0.5
              }}
            >
              <MoreHorizTwoToneIcon />
            </IconButton>
          </Box>
          <Button
            sx={{
              mt: { xs: 2, md: 0 }
            }}
            size="small"
            variant="text"
            endIcon={<ArrowForwardTwoToneIcon />}
          >
            {t('See all')}
            {' ' + user.followers + ' '}
            {t('connections')}
          </Button>
        </Box>
      </Box>
    </>
  );
};

ProfileCover.propTypes = {
  // @ts-ignore
  user: PropTypes.object.isRequired
};

export default ProfileCover;
