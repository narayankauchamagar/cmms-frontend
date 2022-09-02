import { MouseEvent, useState } from 'react';
import {
  Card,
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Grid,
  CardActions,
  CardActionArea,
  Divider,
  IconButton,
  Link,
  Table,
  Avatar,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
  Drawer,
  styled,
  useTheme,
  TableContainer
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { formatDistance, subDays } from 'date-fns';

import SidebarDrawer from './SidebarDrawer';

import ViewWeekTwoToneIcon from '@mui/icons-material/ViewWeekTwoTone';
import TableRowsTwoToneIcon from '@mui/icons-material/TableRowsTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import TextSnippetTwoToneIcon from '@mui/icons-material/TextSnippetTwoTone';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfTwoTone';
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveTwoTone';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

const CardActionAreaWrapper = styled(CardActionArea)(
  ({ theme }) => `
      height: ${theme.spacing(18)};
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      overflow: hidden;

      .MuiSvgIcon-root {
        opacity: .5;
      }

      .MuiTouchRipple-root {
        opacity: .3;
      }

      img {
        height: auto;
        width: 100%;
      }

      .MuiCardActionArea-focusHighlight {
        background: ${theme.colors.warning.main};
      }

      &:hover {
        .MuiCardActionArea-focusHighlight {
          opacity: .05;
        }
      }
`
);

function QuickAccess() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const [tabs, setTab] = useState<string | null>('grid_view');

  const handleViewOrientation = (
    _event: MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    setTab(newValue);
  };

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
        <Typography variant="h3">{t('Quick Access')}</Typography>
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
              <Card>
                <CardActionAreaWrapper onClick={handleDrawerToggle}>
                  <Typography
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: `${theme.typography.pxToRem(55)}`
                    }}
                    color="text.secondary"
                  >
                    <TextSnippetTwoToneIcon fontSize="inherit" />
                  </Typography>
                </CardActionAreaWrapper>
                <Divider />
                <CardActions
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 2
                  }}
                >
                  <Box>
                    <Box display="flex" alignItems="center" pb={0.5}>
                      <TextSnippetTwoToneIcon />
                      <Typography
                        sx={{
                          pl: 1
                        }}
                        fontWeight="bold"
                        variant="h6"
                      >
                        FileTransfer.txt
                      </Typography>
                    </Box>
                    <Typography component="span" variant="subtitle1">
                      {t('Edited')}{' '}
                      {formatDistance(subDays(new Date(), 3), new Date(), {
                        addSuffix: true
                      })}{' '}
                      {t('by')}{' '}
                    </Typography>
                    <Link href="#">Kate</Link>
                  </Box>
                  <IconButton size="small" color="primary">
                    <MoreHorizTwoToneIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardActionAreaWrapper onClick={handleDrawerToggle}>
                  <img
                    src="/static/images/placeholders/fitness/4.jpg"
                    alt="..."
                  />
                </CardActionAreaWrapper>
                <Divider />
                <CardActions
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 2
                  }}
                >
                  <Box>
                    <Box display="flex" alignItems="center" pb={0.5}>
                      <TextSnippetTwoToneIcon />
                      <Typography
                        sx={{
                          pl: 1
                        }}
                        fontWeight="bold"
                        variant="h6"
                      >
                        2021Screenshot.jpg
                      </Typography>
                    </Box>
                    <Typography component="span" variant="subtitle1">
                      {t('Edited')}{' '}
                      {formatDistance(subDays(new Date(), 4), new Date(), {
                        addSuffix: true
                      })}{' '}
                      {t('by')}{' '}
                    </Typography>
                    <Link href="#">John</Link>
                  </Box>
                  <IconButton size="small" color="primary">
                    <MoreHorizTwoToneIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardActionAreaWrapper onClick={handleDrawerToggle}>
                  <Typography
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: `${theme.typography.pxToRem(55)}`
                    }}
                    color="text.secondary"
                  >
                    <PictureAsPdfTwoToneIcon fontSize="inherit" />
                  </Typography>
                </CardActionAreaWrapper>
                <Divider />
                <CardActions
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 2
                  }}
                >
                  <Box>
                    <Box display="flex" alignItems="center" pb={0.5}>
                      <PictureAsPdfTwoToneIcon />
                      <Typography
                        sx={{
                          pl: 1
                        }}
                        fontWeight="bold"
                        variant="h6"
                      >
                        PresentationDeck.pdf
                      </Typography>
                    </Box>
                    <Typography component="span" variant="subtitle1">
                      {t('Never opened')}
                    </Typography>
                  </Box>
                  <IconButton size="small" color="primary">
                    <MoreHorizTwoToneIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardActionAreaWrapper onClick={handleDrawerToggle}>
                  <Typography
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: `${theme.typography.pxToRem(55)}`
                    }}
                    color="text.secondary"
                  >
                    <ArchiveTwoToneIcon fontSize="inherit" />
                  </Typography>
                </CardActionAreaWrapper>
                <Divider />
                <CardActions
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 2
                  }}
                >
                  <Box>
                    <Box display="flex" alignItems="center" pb={0.5}>
                      <ArchiveTwoToneIcon />
                      <Typography
                        sx={{
                          pl: 1
                        }}
                        fontWeight="bold"
                        variant="h6"
                      >
                        HolidayPictures.zip
                      </Typography>
                    </Box>
                    <Typography component="span" variant="subtitle1">
                      {t('You opened in the past year')}
                    </Typography>
                  </Box>
                  <IconButton size="small" color="primary">
                    <MoreHorizTwoToneIcon />
                  </IconButton>
                </CardActions>
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
                      <TableCell>{t('Filename')}</TableCell>
                      <TableCell>{t('Owner')}</TableCell>
                      <TableCell>{t('Date Created')}</TableCell>
                      <TableCell align="right">{t('Actions')}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow hover>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <PictureAsPdfTwoToneIcon />
                          <Typography
                            sx={{
                              pl: 1
                            }}
                            variant="h6"
                          >
                            PresentationDeck.pdf
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <Link href="#" variant="h6">
                            You
                          </Link>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6" noWrap>
                          {formatDistance(subDays(new Date(), 54), new Date(), {
                            addSuffix: true
                          })}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Tooltip title={t('View')} arrow>
                          <IconButton
                            onClick={handleDrawerToggle}
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
                          <TextSnippetTwoToneIcon />
                          <Typography
                            sx={{
                              pl: 1
                            }}
                            variant="h6"
                          >
                            2021Screenshot.jpg
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <Avatar
                            sx={{
                              mr: 1
                            }}
                            src="/static/images/avatars/3.jpg"
                          />
                          <Typography variant="h6" noWrap>
                            Kitty Herbert
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6" noWrap>
                          {formatDistance(subDays(new Date(), 15), new Date(), {
                            addSuffix: true
                          })}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Tooltip title={t('View')} arrow>
                          <IconButton
                            onClick={handleDrawerToggle}
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
                          <TextSnippetTwoToneIcon />
                          <Typography
                            sx={{
                              pl: 1
                            }}
                            variant="h6"
                          >
                            FileTransfer.txt
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <Avatar
                            sx={{
                              mr: 1
                            }}
                            src="/static/images/avatars/4.jpg"
                          />
                          <Typography variant="h6" noWrap>
                            Ash Carleton
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6" noWrap>
                          {formatDistance(subDays(new Date(), 32), new Date(), {
                            addSuffix: true
                          })}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Tooltip title={t('View')} arrow>
                          <IconButton
                            onClick={handleDrawerToggle}
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
                          <ArchiveTwoToneIcon />
                          <Typography
                            sx={{
                              pl: 1
                            }}
                            variant="h6"
                          >
                            HolidayPictures.zip
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <Link href="#" variant="h6">
                            You
                          </Link>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6" noWrap>
                          {formatDistance(subDays(new Date(), 19), new Date(), {
                            addSuffix: true
                          })}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Tooltip title={t('View')} arrow>
                          <IconButton
                            onClick={handleDrawerToggle}
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
      <Drawer
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'left' : 'right'}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        elevation={9}
      >
        {mobileOpen && <SidebarDrawer />}
      </Drawer>
    </>
  );
}

export default QuickAccess;
