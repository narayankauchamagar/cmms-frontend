import { useRef, useState, ChangeEvent, MouseEvent } from 'react';
import {
  Button,
  Card,
  Box,
  CardHeader,
  Menu,
  MenuItem,
  Typography,
  Avatar,
  IconButton,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
  TablePagination,
  useTheme,
  Badge,
  TableContainer,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import Label from 'src/components/Label';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { formatDistance, subMinutes, subSeconds, subHours } from 'date-fns';

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
    border: ${theme.colors.alpha.white[100]} solid 2px;
`
);

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
`
);

function PendingTickets() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    _event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const periods = [
    {
      value: 'all',
      text: t('All tickets')
    },
    {
      value: 'new',
      text: t('Newest')
    },
    {
      value: 'updated',
      text: t('Recently updated')
    },
    {
      value: 'progress',
      text: t('In progress')
    },
    {
      value: 'closed',
      text: t('Closed')
    }
  ];

  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>(periods[2].text);

  return (
    <Card>
      <CardHeader
        action={
          <>
            <Button
              size="small"
              variant="outlined"
              ref={actionRef1}
              onClick={() => setOpenMenuPeriod(true)}
              endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
            >
              {period}
            </Button>
            <Menu
              disableScrollLock
              anchorEl={actionRef1.current}
              onClose={() => setOpenMenuPeriod(false)}
              open={openPeriod}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              {periods.map((_period) => (
                <MenuItem
                  key={_period.value}
                  onClick={() => {
                    setPeriod(_period.text);
                    setOpenMenuPeriod(false);
                  }}
                >
                  {_period.text}
                </MenuItem>
              ))}
            </Menu>
            <Button
              size="small"
              sx={{
                ml: 1
              }}
              variant="contained"
            >
              {t('View all')}
            </Button>
          </>
        }
        title={t('Pending Tickets')}
      />
      <Divider />
      <Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{t('Details')}</TableCell>
                <TableCell>{t('Assigned')}</TableCell>
                <TableCell align="right">{t('Status')}</TableCell>
                <TableCell align="right">{t('Actions')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover>
                <TableCell>
                  <Box
                    sx={{
                      maxWidth: 200
                    }}
                  >
                    <Typography variant="h5" noWrap>
                      {t("Why can't I connect my Stripe account? ")}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Badge
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                      }}
                      overlap="circular"
                      badgeContent={
                        <Tooltip
                          arrow
                          placement="top"
                          title={
                            t('Offline since') +
                            ' ' +
                            formatDistance(
                              subHours(new Date(), 6),
                              new Date(),
                              {
                                addSuffix: true
                              }
                            )
                          }
                        >
                          <DotLegend
                            style={{
                              background: `${theme.colors.error.main}`
                            }}
                          />
                        </Tooltip>
                      }
                    >
                      <AvatarWrapper
                        alt="Remy Sharp"
                        src="/static/images/avatars/4.jpg"
                      />
                    </Badge>
                    <Box
                      sx={{
                        ml: 1
                      }}
                    >
                      <Typography variant="h5" noWrap>
                        Cristofer Aminoff
                      </Typography>
                      <Typography variant="subtitle1" noWrap>
                        {t('Social Accounts Manager')}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Label color="success">{t('Completed')}</Label>
                </TableCell>
                <TableCell align="right">
                  <Tooltip title={t('Open Ticket')} arrow>
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
                  <Tooltip title={t('Delete Ticket')} arrow>
                    <IconButton
                      sx={{
                        '&:hover': { background: theme.colors.error.lighter },
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
                  <Box
                    sx={{
                      maxWidth: 200
                    }}
                  >
                    <Typography variant="h5" noWrap>
                      {t('Support Questions Regarding Integrations')}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Badge
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                      }}
                      overlap="circular"
                      badgeContent={
                        <Tooltip
                          arrow
                          placement="top"
                          title={
                            t('Online since') +
                            ' ' +
                            formatDistance(
                              subMinutes(new Date(), 37),
                              new Date(),
                              {
                                addSuffix: true
                              }
                            )
                          }
                        >
                          <DotLegend
                            style={{
                              background: `${theme.colors.success.main}`
                            }}
                          />
                        </Tooltip>
                      }
                    >
                      <AvatarWrapper
                        alt="Remy Sharp"
                        src="/static/images/avatars/1.jpg"
                      />
                    </Badge>
                    <Box
                      sx={{
                        ml: 1
                      }}
                    >
                      <Typography variant="h5" noWrap>
                        Marilyn Stanton
                      </Typography>
                      <Typography variant="subtitle1" noWrap>
                        {t('Web Development Support Team')}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Typography noWrap>
                    <Label color="info">{t('In Progress')}</Label>
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Tooltip title={t('Open Ticket')} arrow>
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
                  <Tooltip title={t('Delete Ticket')} arrow>
                    <IconButton
                      sx={{
                        '&:hover': { background: theme.colors.error.lighter },
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
                  <Box
                    sx={{
                      maxWidth: 200
                    }}
                  >
                    <Typography variant="h5" noWrap>
                      {t('How can I purchase this product?')}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Badge
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                      }}
                      overlap="circular"
                      badgeContent={
                        <Tooltip
                          arrow
                          placement="top"
                          title={
                            t('Idle since') +
                            ' ' +
                            formatDistance(
                              subSeconds(new Date(), 77),
                              new Date(),
                              {
                                addSuffix: true
                              }
                            )
                          }
                        >
                          <DotLegend
                            style={{
                              background: `${theme.colors.warning.main}`
                            }}
                          />
                        </Tooltip>
                      }
                    >
                      <AvatarWrapper
                        alt="Remy Sharp"
                        src="/static/images/avatars/2.jpg"
                      />
                    </Badge>
                    <Box
                      sx={{
                        ml: 1
                      }}
                    >
                      <Typography variant="h5" noWrap>
                        Hanna Siphron
                      </Typography>
                      <Typography variant="subtitle1" noWrap>
                        {t('Pre-Sales Questions')}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Label color="warning">{t('Pending')}</Label>
                </TableCell>
                <TableCell align="right">
                  <Tooltip title={t('Open Ticket')} arrow>
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
                  <Tooltip title={t('Delete Ticket')} arrow>
                    <IconButton
                      sx={{
                        '&:hover': { background: theme.colors.error.lighter },
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
      </Box>
      <Box p={2}>
        <TablePagination
          component="div"
          count={100}
          page={page}
          showFirstButton
          showLastButton
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Card>
  );
}

export default PendingTickets;
