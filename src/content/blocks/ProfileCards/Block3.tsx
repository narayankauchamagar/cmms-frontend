import {
  alpha,
  Box,
  Card,
  Avatar,
  darken,
  CardMedia,
  Typography,
  IconButton,
  Button,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    bottom: ${theme.spacing(2)};
    z-index: 7;
  `
);

const Label = styled(Box)(
  ({ theme }) => `
    background: ${theme.palette.success.main};
    color: ${theme.palette.success.contrastText};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(10)};
    font-weight: bold;
    line-height: 23px;
    height: 22px;
    padding: ${theme.spacing(0, 1.2)};
    border-radius: 50px;
  `
);

const BgComposed = styled(Box)(
  ({ theme }) => `
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: inherit;
    transition: ${theme.transitions.create(['opacity'])};
    background: ${darken(alpha(theme.colors.primary.main, 0.9), 0.8)};
    z-index: 6;
    opacity: 0;
    box-shadow: inset 0 0 2.3rem 0.5rem ${darken(
      theme.colors.primary.main,
      0.9
    )};
  `
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
        width: ${theme.spacing(6)};
        height: ${theme.spacing(6)};
        transition: ${theme.transitions.create(['color', 'transform'])};
        border-radius: 100px;

        .MuiSvgIcon-root {
            transform: scale(1);
            transition: ${theme.transitions.create(['transform'])};
        }

        &:hover {
            .MuiSvgIcon-root {
                transform: scale(1.3);
            }
        }
  `
);

function Block3() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        pt: 2,
        overflow: 'visible',
        textAlign: 'center'
      }}
    >
      <Box
        sx={{
          mx: 2,
          position: 'relative',
          transition: `${theme.transitions.create([
            'box-shadow',
            'transform',
            'border-radius'
          ])}`,
          transform: 'translateY(0px)',
          borderRadius: 'inherit',

          '&:hover': {
            transform: `translateY(-${theme.spacing(4)})`,
            boxShadow: `0 2rem 8rem 0 ${alpha(
              theme.colors.alpha.black[100],
              0.05
            )}, 
                0 0.6rem 1.6rem ${alpha(theme.colors.alpha.black[100], 0.15)}, 
                0 0.2rem 0.2rem ${alpha(theme.colors.alpha.black[100], 0.1)}`,

            '& .MuiBgComposed': {
              opacity: 1
            }
          }
        }}
      >
        <BgComposed
          display="flex"
          alignItems="center"
          justifyContent="center"
          className="MuiBgComposed"
        >
          <IconButtonWrapper
            sx={{
              mx: 0.5,
              background: `${theme.colors.primary.main}`,
              color: `${theme.palette.getContrastText(
                theme.colors.primary.main
              )}`,

              '&:hover': {
                background: `${theme.colors.primary.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.primary.main
                )}`
              }
            }}
          >
            <FacebookIcon fontSize="small" />
          </IconButtonWrapper>
          <IconButtonWrapper
            sx={{
              mx: 0.5,
              background: `${theme.colors.primary.main}`,
              color: `${theme.palette.getContrastText(
                theme.colors.primary.main
              )}`,

              '&:hover': {
                background: `${theme.colors.primary.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.primary.main
                )}`
              }
            }}
          >
            <TwitterIcon fontSize="small" />
          </IconButtonWrapper>
        </BgComposed>
        <CardMedia
          component="img"
          height="222"
          sx={{
            borderRadius: 'inherit',
            position: 'relative',
            zIndex: 5
          }}
          image="/static/images/placeholders/covers/1.jpg"
          alt="..."
        />
        <CardActions
          sx={{
            bottom: 'auto',
            top: `${theme.spacing(2)}`
          }}
        >
          <Label
            sx={{
              background: `${theme.palette.error.main}`,
              color: `${theme.palette.error.contrastText}`
            }}
          >
            {t('Updated')}
          </Label>
        </CardActions>
      </Box>
      <Box p={4}>
        <Avatar
          sx={{
            width: `${theme.spacing(14)}`,
            height: `${theme.spacing(14)}`,
            mt: `-${theme.spacing(10)}`,
            mx: 'auto',
            boxShadow: `0 0 0 4px ${theme.colors.alpha.white[100]}`
          }}
          src="/static/images/avatars/3.jpg"
        />
        <Typography
          sx={{
            py: 2
          }}
          variant="h3"
        >
          Emma Taylor
        </Typography>
        <Typography
          sx={{
            px: 3
          }}
          variant="subtitle2"
          textAlign="center"
        >
          {t(
            'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
          )}
          .
        </Typography>
        <Box mt={3} mx={3}>
          <Button size="large" variant="contained">
            {t('View complete profile')}
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

export default Block3;
