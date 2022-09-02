import {
  Box,
  CardHeader,
  Card,
  ListItemText,
  Typography,
  Avatar,
  List,
  Divider,
  ListItem,
  Link,
  IconButton,
  alpha,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import Scrollbar from 'src/components/Scrollbar';
import { formatDistance, subMinutes } from 'date-fns';

const CardContentWrapper = styled(Box)(
  ({ theme }) => `
    background: ${theme.colors.alpha.white[100]};
    border-radius: ${theme.general.borderRadius};
  `
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(10)};
    font-weight: bold;
    text-transform: uppercase;
    border-radius: ${theme.general.borderRadiusSm};
    padding: ${theme.spacing(0.9, 1.5, 0.7)};
    line-height: 1;
  `
);

const ListWrapper = styled(List)(
  () => `
    .MuiDivider-root:last-of-type {
        display: none;
    }
  `
);

function Block1() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      variant="outlined"
      sx={{
        background: `${alpha(theme.colors.alpha.black[100], 0.03)}`
      }}
    >
      <CardHeader
        sx={{
          p: 3
        }}
        disableTypography
        action={
          <IconButton size="small" color="secondary">
            <MoreVertTwoToneIcon />
          </IconButton>
        }
        title={<Typography variant="h4">{t('Open tickets')}</Typography>}
      />
      <CardContentWrapper
        sx={{
          mx: 3,
          mb: 3,
          height: 344
        }}
      >
        <Scrollbar>
          <ListWrapper disablePadding>
            <ListItem
              sx={{
                p: 2
              }}
            >
              <ListItemText
                primary={
                  <Link href="#" color="text.primary" variant="h4">
                    Wrong product price
                  </Link>
                }
                secondary={
                  <>
                    <Box mt={0.7} display="flex" alignItems="center">
                      <Avatar
                        sx={{
                          mr: 1,
                          width: 28,
                          height: 28
                        }}
                        src="/static/images/avatars/1.jpg"
                      />
                      <Link
                        sx={{
                          fontSize: `${theme.typography.pxToRem(13)}`
                        }}
                        href="#"
                        variant="h6"
                      >
                        Charlton Oconnell
                      </Link>
                      <Typography
                        sx={{
                          fontSize: `${theme.typography.pxToRem(12)}`,
                          pl: 1
                        }}
                        variant="subtitle2"
                      >
                        {t('opened')}{' '}
                        {formatDistance(
                          subMinutes(new Date(), 43),
                          new Date(),
                          {
                            addSuffix: true
                          }
                        )}
                      </Typography>
                    </Box>
                  </>
                }
              />
              <Box alignSelf="flex-start">
                <LabelWrapper
                  sx={{
                    background: `${theme.colors.error.main}`,
                    color: `${theme.palette.getContrastText(
                      theme.colors.error.dark
                    )}`
                  }}
                >
                  {t('Rejected')}
                </LabelWrapper>
              </Box>
            </ListItem>
            <Divider />
            <ListItem
              sx={{
                p: 2
              }}
            >
              <ListItemText
                primary={
                  <Link href="#" color="text.primary" variant="h4">
                    Active IE9 issues
                  </Link>
                }
                secondary={
                  <>
                    <Box mt={0.7} display="flex" alignItems="center">
                      <Avatar
                        sx={{
                          mr: 1,
                          width: 28,
                          height: 28
                        }}
                        src="/static/images/avatars/2.jpg"
                      />
                      <Link
                        sx={{
                          fontSize: `${theme.typography.pxToRem(13)}`
                        }}
                        href="#"
                        variant="h6"
                      >
                        Charlton Oconnell
                      </Link>
                      <Typography
                        sx={{
                          fontSize: `${theme.typography.pxToRem(12)}`,
                          pl: 1
                        }}
                        variant="subtitle2"
                      >
                        {t('opened')}{' '}
                        {formatDistance(
                          subMinutes(new Date(), 76),
                          new Date(),
                          {
                            addSuffix: true
                          }
                        )}
                      </Typography>
                    </Box>
                  </>
                }
              />
              <Box alignSelf="flex-start">
                <LabelWrapper
                  sx={{
                    background: `${theme.colors.success.main}`,
                    color: `${theme.palette.getContrastText(
                      theme.colors.success.dark
                    )}`
                  }}
                >
                  {t('Completed')}
                </LabelWrapper>
              </Box>
            </ListItem>
            <Divider />
            <ListItem
              sx={{
                p: 2
              }}
            >
              <ListItemText
                primary={
                  <Link href="#" color="text.primary" variant="h4">
                    My account doesn't work
                  </Link>
                }
                secondary={
                  <>
                    <Box mt={0.7} display="flex" alignItems="center">
                      <Avatar
                        sx={{
                          mr: 1,
                          width: 28,
                          height: 28
                        }}
                        src="/static/images/avatars/3.jpg"
                      />
                      <Link
                        sx={{
                          fontSize: `${theme.typography.pxToRem(13)}`
                        }}
                        href="#"
                        variant="h6"
                      >
                        Isha Rollins
                      </Link>
                      <Typography
                        sx={{
                          fontSize: `${theme.typography.pxToRem(12)}`,
                          pl: 1
                        }}
                        variant="subtitle2"
                      >
                        {t('opened')}{' '}
                        {formatDistance(
                          subMinutes(new Date(), 90),
                          new Date(),
                          {
                            addSuffix: true
                          }
                        )}
                      </Typography>
                    </Box>
                  </>
                }
              />
              <Box alignSelf="flex-start">
                <LabelWrapper
                  sx={{
                    background: `${theme.colors.warning.main}`,
                    color: `${theme.palette.getContrastText(
                      theme.colors.warning.dark
                    )}`
                  }}
                >
                  {t('On hold')}
                </LabelWrapper>
              </Box>
            </ListItem>
            <Divider />
            <ListItem
              sx={{
                p: 2
              }}
            >
              <ListItemText
                primary={
                  <Link href="#" color="text.primary" variant="h4">
                    Unpaid invoice status
                  </Link>
                }
                secondary={
                  <>
                    <Box mt={0.7} display="flex" alignItems="center">
                      <Avatar
                        sx={{
                          mr: 1,
                          width: 28,
                          height: 28
                        }}
                        src="/static/images/avatars/4.jpg"
                      />
                      <Link
                        sx={{
                          fontSize: `${theme.typography.pxToRem(13)}`
                        }}
                        href="#"
                        variant="h6"
                      >
                        Liana Dixon
                      </Link>
                      <Typography
                        sx={{
                          fontSize: `${theme.typography.pxToRem(12)}`,
                          pl: 1
                        }}
                        variant="subtitle2"
                      >
                        {t('opened')}{' '}
                        {formatDistance(
                          subMinutes(new Date(), 47),
                          new Date(),
                          {
                            addSuffix: true
                          }
                        )}
                      </Typography>
                    </Box>
                  </>
                }
              />
              <Box alignSelf="flex-start">
                <LabelWrapper
                  sx={{
                    background: `${theme.colors.info.main}`,
                    color: `${theme.palette.getContrastText(
                      theme.colors.info.dark
                    )}`
                  }}
                >
                  {t('Pending')}
                </LabelWrapper>
              </Box>
            </ListItem>
            <Divider />
            <ListItem
              sx={{
                p: 2
              }}
            >
              <ListItemText
                primary={
                  <Link href="#" color="text.primary" variant="h4">
                    Mobile app problems
                  </Link>
                }
                secondary={
                  <>
                    <Box mt={0.7} display="flex" alignItems="center">
                      <Avatar
                        sx={{
                          mr: 1,
                          width: 28,
                          height: 28
                        }}
                        src="/static/images/avatars/5.jpg"
                      />
                      <Link
                        sx={{
                          fontSize: `${theme.typography.pxToRem(13)}`
                        }}
                        href="#"
                        variant="h6"
                      >
                        Kush Malone
                      </Link>
                      <Typography
                        sx={{
                          fontSize: `${theme.typography.pxToRem(12)}`,
                          pl: 1
                        }}
                        variant="subtitle2"
                      >
                        {t('opened')}{' '}
                        {formatDistance(
                          subMinutes(new Date(), 47),
                          new Date(),
                          {
                            addSuffix: true
                          }
                        )}
                      </Typography>
                    </Box>
                  </>
                }
              />
              <Box alignSelf="flex-start">
                <LabelWrapper
                  sx={{
                    background: `${theme.colors.error.main}`,
                    color: `${theme.palette.getContrastText(
                      theme.colors.error.dark
                    )}`
                  }}
                >
                  {t('Failed')}
                </LabelWrapper>
              </Box>
            </ListItem>
            <Divider />
          </ListWrapper>
        </Scrollbar>
      </CardContentWrapper>
    </Card>
  );
}

export default Block1;
