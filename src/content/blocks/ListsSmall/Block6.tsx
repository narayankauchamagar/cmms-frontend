import {
  Box,
  CardHeader,
  Card,
  List,
  ListItemAvatar,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  useTheme,
  styled,
  Tooltip,
  IconButton,
  alpha
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const DotLegend = styled('span')(
  ({ theme }) => `
      border-radius: 22px;
      width: ${theme.spacing(1.8)};
      height: ${theme.spacing(1.8)};
      display: inline-block;
      margin-right: ${theme.spacing(0.8)};
      border: ${theme.colors.alpha.white[100]} solid 2px;
  `
);

const ListItemWrapper = styled(ListItem)(
  ({ theme }) => `
      position: relative;
      transition: ${theme.transitions.create(['background'])};

      .MuiActionButtons {
            background: ${alpha(theme.colors.alpha.white[100], 0.95)};
            border-radius: ${theme.general.borderRadius};
            opacity: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            visibility: hidden;
            top: 50%;
            margin-top: -${theme.spacing(3.5)};
            position: absolute;
            right: ${theme.spacing(1.5)};
            padding: ${theme.spacing(0.5, 1)};
            transition: ${theme.transitions.create(['visibility', 'opacity'])};

            .MuiIconButton-root {
                border-radius: 100px;
                width: ${theme.spacing(5)};
                height: ${theme.spacing(5)};
                margin: ${theme.spacing(0.5)};
            }
      }

      &:hover {
          background: ${alpha(theme.colors.secondary.main, 0.15)};

          .MuiActionButtons {
            visibility: visible;
            opacity: 1;
      }   
      }
  `
);

function Block6() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card variant="outlined">
      <CardHeader
        sx={{
          p: 2,
          background: `${theme.colors.alpha.black[5]}`
        }}
        disableTypography
        title={
          <Typography
            variant="h4"
            sx={{
              fontSize: `${theme.typography.pxToRem(16)}`
            }}
          >
            {t('Pricing Plans')}
          </Typography>
        }
      />
      <Divider />
      <List disablePadding>
        <ListItemWrapper
          sx={{
            alignItems: 'flex-start',
            p: 3.15
          }}
        >
          <Box className="MuiActionButtons">
            <Tooltip
              arrow
              placement="top"
              title={t('Purchase a single license')}
            >
              <IconButton color="primary">
                <ShoppingCartTwoToneIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="top" title={t('Remove existing license')}>
              <IconButton color="error">
                <CloseTwoToneIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
          <ListItemAvatar
            sx={{
              minWidth: 0
            }}
          >
            <DotLegend
              style={{
                background: `${theme.colors.success.main}`
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography lineHeight={1} gutterBottom variant="h4">
                {t('Basic')}
              </Typography>
            }
            secondary={
              <>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  noWrap
                  variant="subtitle2"
                >
                  <PersonOutlineTwoToneIcon
                    sx={{
                      mr: 0.5
                    }}
                    fontSize="small"
                  />
                  <b>3487</b>
                  <Box pl={0.5} component="span">
                    {t('subscribers')}
                  </Box>
                </Typography>
              </>
            }
          />
          <Box
            sx={{
              textAlign: 'right'
            }}
            alignSelf="center"
          >
            <Typography variant="h5">$176.45</Typography>
            <Typography variant="subtitle2">{t('per month')}</Typography>
          </Box>
        </ListItemWrapper>
        <Divider />
        <ListItemWrapper
          sx={{
            alignItems: 'flex-start',
            p: 3.15
          }}
        >
          <Box className="MuiActionButtons">
            <Tooltip
              arrow
              placement="top"
              title={t('Purchase a single license')}
            >
              <IconButton color="primary">
                <ShoppingCartTwoToneIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="top" title={t('Remove existing license')}>
              <IconButton color="error">
                <CloseTwoToneIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
          <ListItemAvatar
            sx={{
              minWidth: 0
            }}
          >
            <DotLegend
              style={{
                background: `${theme.colors.warning.main}`
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography lineHeight={1} gutterBottom variant="h4">
                {t('Premium')}
              </Typography>
            }
            secondary={
              <>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  noWrap
                  variant="subtitle2"
                >
                  <PersonOutlineTwoToneIcon
                    sx={{
                      mr: 0.5
                    }}
                    fontSize="small"
                  />
                  <b>985</b>
                  <Box pl={0.5} component="span">
                    {t('subscribers')}
                  </Box>
                </Typography>
              </>
            }
          />
          <Box
            sx={{
              textAlign: 'right'
            }}
            alignSelf="center"
          >
            <Typography variant="h5">$567.99</Typography>
            <Typography variant="subtitle2">{t('per month')}</Typography>
          </Box>
        </ListItemWrapper>
        <Divider />
        <ListItemWrapper
          sx={{
            alignItems: 'flex-start',
            p: 3.15
          }}
        >
          <Box className="MuiActionButtons">
            <Tooltip
              arrow
              placement="top"
              title={t('Purchase a single license')}
            >
              <IconButton color="primary">
                <ShoppingCartTwoToneIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="top" title={t('Remove existing license')}>
              <IconButton color="error">
                <CloseTwoToneIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
          <ListItemAvatar
            sx={{
              minWidth: 0
            }}
          >
            <DotLegend
              style={{
                background: `${theme.colors.primary.main}`
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography lineHeight={1} gutterBottom variant="h4">
                {t('Ultra')}
              </Typography>
            }
            secondary={
              <>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  noWrap
                  variant="subtitle2"
                >
                  <PersonOutlineTwoToneIcon
                    sx={{
                      mr: 0.5
                    }}
                    fontSize="small"
                  />
                  <b>89</b>
                  <Box pl={0.5} component="span">
                    {t('subscribers')}
                  </Box>
                </Typography>
              </>
            }
          />
          <Box
            sx={{
              textAlign: 'right'
            }}
            alignSelf="center"
          >
            <Typography variant="h5">$893.00</Typography>
            <Typography variant="subtitle2">{t('per month')}</Typography>
          </Box>
        </ListItemWrapper>
      </List>
    </Card>
  );
}

export default Block6;
