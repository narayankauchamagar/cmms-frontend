import {
  alpha,
  Box,
  Tooltip,
  Card,
  Avatar,
  CardMedia,
  Typography,
  IconButton,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

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

function Block2() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        textAlign: 'center',
        transition: `${theme.transitions.create(['box-shadow', 'transform'])}`,
        transform: 'translateY(0px)',

        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: `0 2rem 8rem 0 ${alpha(
            theme.colors.alpha.black[100],
            0.05
          )}, 
                0 0.6rem 1.6rem ${alpha(theme.colors.alpha.black[100], 0.15)}, 
                0 0.2rem 0.2rem ${alpha(theme.colors.alpha.black[100], 0.1)}`
        }
      }}
    >
      <Box
        sx={{
          position: 'relative'
        }}
      >
        <CardMedia
          component="img"
          height="230"
          image="/static/images/placeholders/covers/2.jpg"
          alt="..."
        />
        <CardActions>
          <Label>{t('New Profile')}</Label>
        </CardActions>
      </Box>
      <Box p={4}>
        <Avatar
          variant="rounded"
          sx={{
            width: `${theme.spacing(14)}`,
            height: `${theme.spacing(14)}`,
            mt: `-${theme.spacing(10)}`,
            mx: 'auto',
            boxShadow: `0 0 0 4px ${theme.colors.alpha.white[100]}`
          }}
          src="/static/images/avatars/5.jpg"
        />
        <Typography
          sx={{
            py: 2
          }}
          variant="h3"
        >
          Zara Wagstaff
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
          <Tooltip arrow placement="top" title="Facebook">
            <IconButton
              sx={{
                background: `${theme.colors.primary.lighter}`,
                width: 54,
                height: 54,
                color: `${theme.colors.primary.main}`,
                '&:hover': {
                  background: `${alpha(theme.colors.primary.main, 0.2)}`,
                  color: `${theme.colors.primary.main}`
                }
              }}
              color="primary"
              size="large"
            >
              <FacebookIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip arrow placement="top" title="Twitter">
            <IconButton
              sx={{
                mx: 1,
                background: `${theme.colors.primary.lighter}`,
                width: 54,
                height: 54,
                color: `${theme.colors.primary.main}`,
                '&:hover': {
                  background: `${alpha(theme.colors.primary.main, 0.2)}`,
                  color: `${theme.colors.primary.main}`
                }
              }}
              color="primary"
              size="large"
            >
              <TwitterIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip arrow placement="top" title="Instagram">
            <IconButton
              sx={{
                background: `${theme.colors.primary.lighter}`,
                width: 54,
                height: 54,
                color: `${theme.colors.primary.main}`,
                '&:hover': {
                  background: `${alpha(theme.colors.primary.main, 0.2)}`,
                  color: `${theme.colors.primary.main}`
                }
              }}
              color="primary"
              size="large"
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Card>
  );
}

export default Block2;
