import { MouseEvent, useState } from 'react';
import {
  Card,
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Grid,
  AvatarGroup,
  IconButton,
  Link,
  Table,
  Avatar,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
  TableContainer,
  styled,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { formatDistance, subDays, subMonths } from 'date-fns';

import { Link as RouterLink } from 'react-router-dom';

import ViewWeekTwoToneIcon from '@mui/icons-material/ViewWeekTwoTone';
import TableRowsTwoToneIcon from '@mui/icons-material/TableRowsTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import Text from 'src/components/Text';

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
      background: ${theme.colors.primary.lighter};
      color: ${theme.colors.primary.main};
`
);

function TeamFolders() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const [tabs, setTab] = useState<string | null>('grid_view');

  const handleViewOrientation = (
    _event: MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    setTab(newValue);
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3
        }}
      >
        <Typography variant="h3">{t('Team Folders')}</Typography>
        <ToggleButtonGroup
          value={tabs}
          exclusive
          onChange={handleViewOrientation}
        >
          <ToggleButton disableRipple value="grid_view">
            <ViewWeekTwoToneIcon />
          </ToggleButton>
          <ToggleButton disableRipple value="table_view">
            <TableRowsTwoToneIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Grid container spacing={3}>
        {tabs === 'grid_view' && (
          <>
            <Grid item xs={12} sm={6}>
              <Card
                sx={{
                  p: 2
                }}
              >
                <Box
                  mb={2}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box display="flex" alignItems="center">
                    <AvatarPrimary
                      sx={{
                        mr: 1
                      }}
                    >
                      <FolderOpenTwoToneIcon />
                    </AvatarPrimary>
                    <AvatarGroup max={3}>
                      <Tooltip arrow title="Remy Sharp">
                        <Avatar
                          component={RouterLink}
                          sx={{
                            width: 32,
                            height: 32
                          }}
                          to="#"
                          alt="Remy Sharp"
                          src="/static/images/avatars/1.jpg"
                        />
                      </Tooltip>
                      <Tooltip arrow title="Travis Howard">
                        <Avatar
                          component={RouterLink}
                          sx={{
                            width: 32,
                            height: 32
                          }}
                          to="#"
                          alt="Travis Howard"
                          src="/static/images/avatars/2.jpg"
                        />
                      </Tooltip>
                      <Tooltip arrow title="Cindy Baker">
                        <Avatar
                          component={RouterLink}
                          sx={{
                            width: 32,
                            height: 32
                          }}
                          to="#"
                          alt="Cindy Baker"
                          src="/static/images/avatars/3.jpg"
                        />
                      </Tooltip>
                      <Tooltip arrow title="Agnes Walker">
                        <Avatar
                          component={RouterLink}
                          sx={{
                            width: 32,
                            height: 32
                          }}
                          to="#"
                          alt="Agnes Walker"
                          src="/static/images/avatars/4.jpg"
                        />
                      </Tooltip>
                    </AvatarGroup>
                  </Box>
                  <IconButton size="small" color="primary">
                    <MoreVertTwoToneIcon />
                  </IconButton>
                </Box>

                <Link href="#" variant="h3" color="text.primary">
                  Documents for Clients
                </Link>

                <Box
                  mt={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1">
                    <Text color="black">
                      <b>15</b>
                    </Text>{' '}
                    {t('files')}
                  </Typography>
                  <Box textAlign="right">
                    <Typography lineHeight={1} variant="subtitle1">
                      {t('Created')}
                    </Typography>
                    <Typography
                      fontWeight="bold"
                      color="text.primary"
                      variant="subtitle1"
                    >
                      {formatDistance(subDays(new Date(), 21), new Date(), {
                        addSuffix: true
                      })}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card
                sx={{
                  p: 2
                }}
              >
                <Box
                  mb={2}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box display="flex" alignItems="center">
                    <AvatarPrimary
                      sx={{
                        mr: 1
                      }}
                    >
                      <FolderOpenTwoToneIcon />
                    </AvatarPrimary>
                    <AvatarGroup max={3}>
                      <Tooltip arrow title="Travis Howard">
                        <Avatar
                          component={RouterLink}
                          sx={{
                            width: 32,
                            height: 32
                          }}
                          to="#"
                          alt="Travis Howard"
                          src="/static/images/avatars/2.jpg"
                        />
                      </Tooltip>
                      <Tooltip arrow title="Trevor Henderson">
                        <Avatar
                          component={RouterLink}
                          sx={{
                            width: 32,
                            height: 32
                          }}
                          to="#"
                          alt="Trevor Henderson"
                          src="/static/images/avatars/5.jpg"
                        />
                      </Tooltip>
                    </AvatarGroup>
                  </Box>
                  <IconButton size="small" color="primary">
                    <MoreVertTwoToneIcon />
                  </IconButton>
                </Box>

                <Link href="#" variant="h3" color="text.primary">
                  2010 Invoices Archive
                </Link>

                <Box
                  mt={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle1">
                    <Text color="black">
                      <b>6</b>
                    </Text>{' '}
                    {t('files')}
                  </Typography>
                  <Box textAlign="right">
                    <Typography lineHeight={1} variant="subtitle1">
                      {t('Created')}
                    </Typography>
                    <Typography
                      fontWeight="bold"
                      color="text.primary"
                      variant="subtitle1"
                    >
                      {formatDistance(subMonths(new Date(), 37), new Date(), {
                        addSuffix: true
                      })}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </>
        )}

        {tabs === 'table_view' && (
          <Grid item xs={12}>
            <Card>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>{t('Name')}</TableCell>
                      <TableCell>{t('Files')}</TableCell>
                      <TableCell>{t('Members')}</TableCell>
                      <TableCell>{t('Created')}</TableCell>
                      <TableCell align="right">{t('Actions')}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow hover>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <FolderOpenTwoToneIcon />
                          <Typography
                            sx={{
                              pl: 1
                            }}
                            variant="h6"
                            noWrap
                          >
                            Documents for Clients
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <Typography fontWeight="bold" variant="h6">
                            15
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box display="flex">
                          <AvatarGroup max={3}>
                            <Tooltip arrow title="Remy Sharp">
                              <Avatar
                                component={RouterLink}
                                sx={{
                                  width: 32,
                                  height: 32
                                }}
                                to="#"
                                alt="Remy Sharp"
                                src="/static/images/avatars/1.jpg"
                              />
                            </Tooltip>
                            <Tooltip arrow title="Travis Howard">
                              <Avatar
                                component={RouterLink}
                                sx={{
                                  width: 32,
                                  height: 32
                                }}
                                to="#"
                                alt="Travis Howard"
                                src="/static/images/avatars/2.jpg"
                              />
                            </Tooltip>
                            <Tooltip arrow title="Cindy Baker">
                              <Avatar
                                component={RouterLink}
                                sx={{
                                  width: 32,
                                  height: 32
                                }}
                                to="#"
                                alt="Cindy Baker"
                                src="/static/images/avatars/3.jpg"
                              />
                            </Tooltip>
                            <Tooltip arrow title="Agnes Walker">
                              <Avatar
                                component={RouterLink}
                                sx={{
                                  width: 32,
                                  height: 32
                                }}
                                to="#"
                                alt="Agnes Walker"
                                src="/static/images/avatars/4.jpg"
                              />
                            </Tooltip>
                          </AvatarGroup>
                        </Box>
                      </TableCell>
                      <TableCell>
                        {formatDistance(subDays(new Date(), 21), new Date(), {
                          addSuffix: true
                        })}
                      </TableCell>
                      <TableCell align="right">
                        <Tooltip title={t('View')} arrow>
                          <IconButton
                            sx={{
                              '&:hover': {
                                background: theme.colors.primary.lighter
                              },
                              color: theme.palette.primary.main
                            }}
                            color="inherit"
                            size="small"
                          >
                            <LaunchTwoToneIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title={t('Delete')} arrow>
                          <IconButton
                            sx={{
                              '&:hover': {
                                background: theme.colors.error.lighter
                              },
                              color: theme.palette.error.main
                            }}
                            color="inherit"
                            size="small"
                          >
                            <DeleteTwoToneIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <FolderOpenTwoToneIcon />
                          <Typography
                            sx={{
                              pl: 1
                            }}
                            variant="h6"
                            noWrap
                          >
                            2010 Invoices Archive
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <Typography fontWeight="bold" variant="h6">
                            6
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box display="flex">
                          <AvatarGroup max={3}>
                            <Tooltip arrow title="Travis Howard">
                              <Avatar
                                component={RouterLink}
                                sx={{
                                  width: 32,
                                  height: 32
                                }}
                                to="#"
                                alt="Travis Howard"
                                src="/static/images/avatars/2.jpg"
                              />
                            </Tooltip>
                            <Tooltip arrow title="Trevor Henderson">
                              <Avatar
                                component={RouterLink}
                                sx={{
                                  width: 32,
                                  height: 32
                                }}
                                to="#"
                                alt="Trevor Henderson"
                                src="/static/images/avatars/5.jpg"
                              />
                            </Tooltip>
                          </AvatarGroup>
                        </Box>
                      </TableCell>
                      <TableCell>
                        {formatDistance(subMonths(new Date(), 37), new Date(), {
                          addSuffix: true
                        })}{' '}
                      </TableCell>
                      <TableCell align="right">
                        <Tooltip title={t('View')} arrow>
                          <IconButton
                            sx={{
                              '&:hover': {
                                background: theme.colors.primary.lighter
                              },
                              color: theme.palette.primary.main
                            }}
                            color="inherit"
                            size="small"
                          >
                            <LaunchTwoToneIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title={t('Delete')} arrow>
                          <IconButton
                            sx={{
                              '&:hover': {
                                background: theme.colors.error.lighter
                              },
                              color: theme.palette.error.main
                            }}
                            color="inherit"
                            size="small"
                          >
                            <DeleteTwoToneIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Grid>
        )}

        {!tabs && (
          <Grid item xs={12}>
            <Card
              sx={{
                textAlign: 'center',
                p: 3
              }}
            >
              <Typography
                align="center"
                variant="h4"
                fontWeight="normal"
                color="text.secondary"
                sx={{
                  my: 5
                }}
                gutterBottom
              >
                {t(
                  'This is a default view used when none of the options are selected'
                )}
              </Typography>
            </Card>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default TeamFolders;
