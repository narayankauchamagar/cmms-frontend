import {
  Button,
  Card,
  Avatar,
  CardHeader,
  Pagination,
  CardActions,
  Typography,
  Divider,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Tooltip,
  IconButton,
  useTheme,
  Box,
  TableContainer,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { format, subHours, subDays } from 'date-fns';
import Text from 'src/components/Text';

const DotSuccess = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.success.main};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

const DotWarning = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.warning.main};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

function RecentPatients() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        title={t('Recent Patients')}
        action={
          <Button
            variant="outlined"
            size="small"
            endIcon={<ArrowForwardTwoToneIcon fontSize="small" />}
          >
            {t('Detailed View')}
          </Button>
        }
      />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('Patient Name')}</TableCell>
              <TableCell>{t('Gender')}</TableCell>
              <TableCell>{t('Doctor')}</TableCell>
              <TableCell>{t('Weight')}</TableCell>
              <TableCell>{t('Department')}</TableCell>
              <TableCell align="right">{t('Actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Avatar src="/static/images/avatars/1.jpg" />
                  <Box
                    sx={{
                      ml: 1
                    }}
                  >
                    <Typography variant="h5" noWrap>
                      Marilyn Stanton
                    </Typography>
                    <Typography variant="subtitle1" noWrap>
                      {t('Admitted')}{' '}
                      {format(subHours(new Date(), 5), 'MMMM dd yyyy')}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="h5" noWrap>
                  {t('Female')}
                </Typography>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Avatar>
                    <img alt="..." src="/static/images/avatars/5.jpg" />
                  </Avatar>
                  <Box
                    sx={{
                      ml: 1
                    }}
                  >
                    <Typography variant="h5" noWrap>
                      Carter Gouse
                    </Typography>
                    <Typography
                      variant="body2"
                      noWrap
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mr: 2
                      }}
                    >
                      <DotWarning />
                      <Text color="warning">{t('On Planned Leave')}</Text>
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="h5" noWrap>
                  98kg
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5" noWrap>
                  {t('Pediatrics')}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Tooltip title={t('Edit Patient Details')} arrow>
                  <IconButton
                    sx={{
                      '&:hover': { background: theme.colors.primary.lighter },
                      color: theme.palette.primary.main
                    }}
                    color="inherit"
                    size="small"
                  >
                    <EditTwoToneIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title={t('Delete Patient Records')} arrow>
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
                <Box display="flex" alignItems="center">
                  <Avatar>NL</Avatar>
                  <Box
                    sx={{
                      ml: 1
                    }}
                  >
                    <Typography variant="h5" noWrap>
                      Nolan Lubin
                    </Typography>
                    <Typography variant="subtitle1" noWrap>
                      {t('Admitted')}{' '}
                      {format(subDays(new Date(), 12), 'MMMM dd yyyy')}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="h5" noWrap>
                  {t('Male')}
                </Typography>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Avatar>
                    <img alt="..." src="/static/images/avatars/4.jpg" />
                  </Avatar>
                  <Box
                    sx={{
                      ml: 1
                    }}
                  >
                    <Typography variant="h5" noWrap>
                      Craig Schleifer
                    </Typography>
                    <Typography
                      variant="body2"
                      noWrap
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mr: 2
                      }}
                    >
                      <DotSuccess />
                      <Text color="success">{t('On Duty')}</Text>
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="h5" noWrap>
                  86.35kg
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5" noWrap>
                  {t('Cardiology')}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Tooltip title={t('Edit Patient Details')} arrow>
                  <IconButton
                    sx={{
                      '&:hover': { background: theme.colors.primary.lighter },
                      color: theme.palette.primary.main
                    }}
                    color="inherit"
                    size="small"
                  >
                    <EditTwoToneIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title={t('Delete Patient Records')} arrow>
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
                <Box display="flex" alignItems="center">
                  <Avatar>LT</Avatar>
                  <Box
                    sx={{
                      ml: 1
                    }}
                  >
                    <Typography variant="h5" noWrap>
                      Lincoln Torff
                    </Typography>
                    <Typography variant="subtitle1" noWrap>
                      {t('Admitted')}{' '}
                      {format(subDays(new Date(), 5), 'MMMM dd yyyy')}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="h5" noWrap>
                  {t('Male')}
                </Typography>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Avatar>
                    <img alt="..." src="/static/images/avatars/3.jpg" />
                  </Avatar>
                  <Box
                    sx={{
                      ml: 1
                    }}
                  >
                    <Typography variant="h5" noWrap>
                      Gretchen Rosser
                    </Typography>
                    <Typography
                      variant="body2"
                      noWrap
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mr: 2
                      }}
                    >
                      <DotWarning />
                      <Text color="warning">{t('On Planned Leave')}</Text>
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="h5" noWrap>
                  75.50kg
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5" noWrap>
                  {t('Neurology')}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Tooltip title={t('Edit Patient Details')} arrow>
                  <IconButton
                    sx={{
                      '&:hover': { background: theme.colors.primary.lighter },
                      color: theme.palette.primary.main
                    }}
                    color="inherit"
                    size="small"
                  >
                    <EditTwoToneIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title={t('Delete Patient Records')} arrow>
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
      <CardActions
        disableSpacing
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Pagination count={6} color="primary" />
      </CardActions>
    </Card>
  );
}

export default RecentPatients;
