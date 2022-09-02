import {
  Box,
  Avatar,
  Card,
  Typography,
  IconButton,
  Tooltip,
  alpha,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import PersonSearchTwoToneIcon from '@mui/icons-material/PersonSearchTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(13)};
    font-weight: bold;
    text-transform: uppercase;
    border-radius: ${theme.general.borderRadiusSm};
    padding: ${theme.spacing(0.9, 1.5, 0.7)};
    line-height: 1;
  `
);

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(1.5)};
    top: ${theme.spacing(1.5)};
    z-index: 7;
  `
);

function Block13() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      variant="outlined"
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: `${theme.colors.gradients.pink2}`,
        p: 3,
        textAlign: 'center'
      }}
    >
      <CardActions>
        <IconButton
          sx={{
            background: `${theme.colors.alpha.trueWhite[10]}`,
            color: `${theme.colors.alpha.trueWhite[70]}`,
            transition: `${theme.transitions.create(['all'])}`,

            '&:hover': {
              background: `${alpha(theme.colors.alpha.trueWhite[100], 0.2)}`,
              color: `${theme.colors.alpha.trueWhite[100]}`
            }
          }}
          size="small"
          color="primary"
        >
          <MoreHorizTwoToneIcon />
        </IconButton>
      </CardActions>
      <Avatar
        sx={{
          width: 100,
          height: 100,
          mb: 2,
          mx: 'auto',
          boxShadow: `0 .113rem .5rem ${theme.colors.alpha.black[10]}, 0 .126rem .225rem ${theme.colors.alpha.black[30]}`,
          border: `${theme.colors.alpha.white[100]} solid 3px`
        }}
        src="/static/images/avatars/3.jpg"
      />
      <Typography
        sx={{
          color: `${theme.colors.alpha.trueWhite[100]}`
        }}
        gutterBottom
        variant="h2"
      >
        Ricardo Cologne
      </Typography>
      <Typography
        sx={{
          color: `${theme.colors.alpha.trueWhite[70]}`
        }}
        variant="subtitle2"
      >
        Senior UX Designer
      </Typography>
      <Box mt={1}>
        <LabelWrapper
          sx={{
            background: `${theme.colors.warning.main}`,
            color: `${theme.palette.getContrastText(theme.colors.warning.dark)}`
          }}
        >
          {t('Pending')}
        </LabelWrapper>
      </Box>
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: `${theme.typography.pxToRem(16)}`,
          py: 3,
          color: `${theme.colors.alpha.trueWhite[70]}`
        }}
      >
        {t(
          'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
        )}
        .
      </Typography>
      <Box display="flex" justifyContent="center">
        <Tooltip arrow placement="top" title={t('View details')}>
          <IconButton
            sx={{
              width: 60,
              height: 60,
              color: `${theme.colors.alpha.trueWhite[70]}`,
              background: `${theme.colors.alpha.trueWhite[10]}`,
              transition: `${theme.transitions.create(['all'])}`,
              '&:hover': {
                color: `${theme.colors.alpha.trueWhite[100]}`,
                background: `${alpha(theme.colors.alpha.trueWhite[100], 0.2)}`
              },
              borderRadius: 50
            }}
            size="large"
          >
            <VisibilityTwoToneIcon
              sx={{
                fontSize: `${theme.typography.pxToRem(20)}`
              }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip arrow placement="top" title={t('Add to favourites')}>
          <IconButton
            size="large"
            sx={{
              width: 60,
              height: 60,
              color: `${theme.colors.alpha.trueWhite[70]}`,
              background: `${theme.colors.alpha.trueWhite[10]}`,
              transition: `${theme.transitions.create(['all'])}`,
              '&:hover': {
                color: `${theme.colors.alpha.trueWhite[100]}`,
                background: `${alpha(theme.colors.alpha.trueWhite[100], 0.2)}`
              },
              borderRadius: 50,
              mx: 0.5
            }}
          >
            <FavoriteTwoToneIcon
              sx={{
                fontSize: `${theme.typography.pxToRem(20)}`
              }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip arrow placement="top" title={t('View user profile')}>
          <IconButton
            sx={{
              width: 60,
              height: 60,
              color: `${theme.colors.alpha.trueWhite[70]}`,
              background: `${theme.colors.alpha.trueWhite[10]}`,
              transition: `${theme.transitions.create(['all'])}`,
              '&:hover': {
                color: `${theme.colors.alpha.trueWhite[100]}`,
                background: `${alpha(theme.colors.alpha.trueWhite[100], 0.2)}`
              },
              borderRadius: 50
            }}
            size="large"
          >
            <PersonSearchTwoToneIcon
              sx={{
                fontSize: `${theme.typography.pxToRem(20)}`
              }}
            />
          </IconButton>
        </Tooltip>
      </Box>
    </Card>
  );
}

export default Block13;
