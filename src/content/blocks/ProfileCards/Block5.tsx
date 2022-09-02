import {
  Grid,
  Box,
  Avatar,
  Card,
  Typography,
  IconButton,
  Tooltip,
  Divider,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import PersonSearchTwoToneIcon from '@mui/icons-material/PersonSearchTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';

const CardBorderTop = styled(Card)(
  () => `
        border-top: transparent 5px solid;
  `
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
        transform: translateY(0px);
        transition: ${theme.transitions.create(['color', 'transform'])};

        .MuiSvgIcon-root {
            transform: scale(1);
            transition: ${theme.transitions.create(['transform'])};
        }

        &:hover {
            transform: translateY(-2px);
    
            .MuiSvgIcon-root {
                transform: scale(1.3);
            }
        }
  `
);

function Block5() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            p: 3,
            textAlign: 'center'
          }}
        >
          <Avatar
            sx={{
              width: 90,
              height: 90,
              mb: 2,
              mx: 'auto',
              border: `${theme.colors.alpha.white[100]} solid 3px`,
              boxShadow: `0 0 0 3px ${theme.colors.primary.main}`
            }}
            src="/static/images/avatars/2.jpg"
          />
          <Typography gutterBottom variant="h3">
            Lexie Livingston
          </Typography>
          <Typography variant="subtitle2">Lead React Developer</Typography>
          <Divider
            sx={{
              my: 2
            }}
          />
          <Box display="flex" justifyContent="center">
            <Tooltip arrow placement="top" title={t('View details')}>
              <IconButton
                sx={{
                  borderRadius: 50
                }}
                size="large"
              >
                <VisibilityTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(18)}`
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="top" title={t('Add to favourites')}>
              <IconButton
                size="large"
                sx={{
                  borderRadius: 50,
                  mx: 1
                }}
              >
                <FavoriteTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(18)}`
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="top" title={t('View user profile')}>
              <IconButton
                sx={{
                  borderRadius: 50
                }}
                size="large"
              >
                <PersonSearchTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(18)}`
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <CardBorderTop
          sx={{
            p: 3,
            textAlign: 'center',
            borderTopColor: `${theme.colors.error.main}`
          }}
        >
          <Avatar
            sx={{
              width: 86,
              height: 86,
              mb: 2,
              mx: 'auto',
              border: `${theme.colors.alpha.white[100]} solid 3px`,
              boxShadow: `0 0 0 3px ${theme.colors.warning.main}`
            }}
            src="/static/images/avatars/1.jpg"
          />
          <Typography gutterBottom variant="h3">
            Cinar Aguilar
          </Typography>
          <Typography variant="subtitle2">Junior Project Manager</Typography>
          <Divider
            sx={{
              my: 2
            }}
          />
          <Box display="flex" justifyContent="center">
            <Tooltip arrow placement="top" title={t('View details')}>
              <IconButtonWrapper
                sx={{
                  boxShadow: `${theme.colors.shadows.primary}`,
                  background: `${theme.colors.primary.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.primary.main
                  )}`,

                  '&:hover': {
                    background: `${theme.colors.primary.main}`,
                    color: `${theme.palette.getContrastText(
                      theme.colors.primary.main
                    )}`
                  },
                  borderRadius: 50
                }}
                size="large"
              >
                <VisibilityTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(18)}`
                  }}
                />
              </IconButtonWrapper>
            </Tooltip>
            <Tooltip arrow placement="top" title={t('Add to favourites')}>
              <IconButtonWrapper
                size="large"
                sx={{
                  boxShadow: `${theme.colors.shadows.primary}`,
                  background: `${theme.colors.primary.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.primary.main
                  )}`,

                  '&:hover': {
                    background: `${theme.colors.primary.main}`,
                    color: `${theme.palette.getContrastText(
                      theme.colors.primary.main
                    )}`
                  },
                  borderRadius: 50,
                  mx: 1
                }}
              >
                <FavoriteTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(18)}`
                  }}
                />
              </IconButtonWrapper>
            </Tooltip>
            <Tooltip arrow placement="top" title={t('View user profile')}>
              <IconButtonWrapper
                sx={{
                  boxShadow: `${theme.colors.shadows.primary}`,
                  background: `${theme.colors.primary.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.primary.main
                  )}`,

                  '&:hover': {
                    background: `${theme.colors.primary.main}`,
                    color: `${theme.palette.getContrastText(
                      theme.colors.primary.main
                    )}`
                  },
                  borderRadius: 50
                }}
                size="large"
              >
                <PersonSearchTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(18)}`
                  }}
                />
              </IconButtonWrapper>
            </Tooltip>
          </Box>
        </CardBorderTop>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            background: `${theme.colors.gradients.blue1}`,
            p: 3,
            textAlign: 'center'
          }}
        >
          <Avatar
            sx={{
              width: 90,
              height: 90,
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
            variant="h3"
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
          <Divider
            sx={{
              background: `${theme.colors.alpha.trueWhite[10]}`,
              my: 2
            }}
          />
          <Box display="flex" justifyContent="center">
            <Tooltip arrow placement="top" title={t('View details')}>
              <IconButton
                sx={{
                  color: `${theme.colors.alpha.trueWhite[100]}`,
                  '&:hover': {
                    background: `${theme.colors.alpha.trueWhite[10]}`
                  },
                  borderRadius: 50
                }}
                size="large"
              >
                <VisibilityTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(18)}`
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="top" title={t('Add to favourites')}>
              <IconButton
                size="large"
                sx={{
                  color: `${theme.colors.alpha.trueWhite[100]}`,
                  '&:hover': {
                    background: `${theme.colors.alpha.trueWhite[10]}`
                  },
                  borderRadius: 50,
                  mx: 1
                }}
              >
                <FavoriteTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(18)}`
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="top" title={t('View user profile')}>
              <IconButton
                sx={{
                  color: `${theme.colors.alpha.trueWhite[100]}`,
                  '&:hover': {
                    background: `${theme.colors.alpha.trueWhite[10]}`
                  },
                  borderRadius: 50
                }}
                size="large"
              >
                <PersonSearchTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(18)}`
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block5;
