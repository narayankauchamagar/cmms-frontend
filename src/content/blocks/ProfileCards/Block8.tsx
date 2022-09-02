import {
  Box,
  Card,
  Typography,
  alpha,
  TableHead,
  CardMedia,
  Tooltip,
  IconButton,
  lighten,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Table,
  TableContainer,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import TrendingDownTwoToneIcon from '@mui/icons-material/TrendingDownTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import TrendingFlatTwoToneIcon from '@mui/icons-material/TrendingFlatTwoTone';
import Text from 'src/components/Text';
import { format, subDays } from 'date-fns';

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    top: ${theme.spacing(2)};
    z-index: 7;
  `
);

const LabelInfo = styled(Box)(
  ({ theme }) => `
    display: inline-block;
    background: ${theme.palette.info.main};
    color: ${theme.palette.info.contrastText};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(10)};
    font-weight: bold;
    line-height: 23px;
    height: 22px;
    padding: ${theme.spacing(0, 2)};
    border-radius: ${theme.general.borderRadiusSm};
  `
);

const TableHeadWrapper = styled(TableHead)(
  ({ theme }) => `
      .MuiTableCell-root {
          text-transform: none;
          font-size: ${theme.typography.pxToRem(15)};
          padding-top: 0;
          padding-bottom: ${theme.spacing(1)};
          color: ${theme.colors.alpha.black[100]};
      }

      .MuiTableRow-root {
          background: transparent;
      }
  `
);

const TableWrapper = styled(Table)(
  () => `
    .MuiTableCell-root {
        border-bottom: 0;
    }
  `
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
    transition: ${theme.transitions.create(['transform', 'background'])};
    transform: scale(1);
    transform-origin: center;

    &:hover {
        transform: scale(1.1);
    }
  `
);

const DotLegend = styled('span')(
  ({ theme }) => `
      border-radius: 22px;
      width: 10px;
      height: 10px;
      display: inline-block;
      margin-right: ${theme.spacing(0.5)};
  `
);

function Block8() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        '&:hover': {
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
          height="257"
          image="/static/images/placeholders/covers/5.jpg"
          alt="..."
        />
        <CardActions>
          <LabelInfo
            sx={{
              borderRadius: 50
            }}
          >
            {t('Live transations')}
          </LabelInfo>
        </CardActions>
      </Box>
      <Box p={2}>
        <TableContainer>
          <TableWrapper>
            <TableHeadWrapper>
              <TableRow>
                <TableCell>{t('Order')}</TableCell>
                <TableCell align="right">{t('Status')}</TableCell>
                <TableCell align="right">{t('Actions')}</TableCell>
              </TableRow>
            </TableHeadWrapper>
            <TableBody>
              <TableRow hover>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      sx={{
                        background: `${lighten(theme.colors.error.main, 0.8)}`,
                        color: `${theme.colors.error.main}`,
                        width: 40,
                        height: 40
                      }}
                    >
                      <TrendingUpTwoToneIcon fontSize="small" />
                    </Avatar>
                    <Box ml={1.5}>
                      <Typography color="text.primary" variant="h5" noWrap>
                        Paypal Withdraw
                      </Typography>
                      <Typography variant="subtitle1" noWrap>
                        {format(subDays(new Date(), 1), 'MMMM dd yyyy')}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h5">39FJDSHE84H</Typography>
                  <Box
                    mt={0.5}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                  >
                    <DotLegend
                      style={{
                        background: `${theme.colors.error.main}`
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: `${theme.typography.pxToRem(12)}`,
                        lineHeight: 1
                      }}
                      variant="body1"
                    >
                      <Text color="error">{t('Deposit')}</Text>
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Tooltip
                    arrow
                    placement="top"
                    title={t('Cancel this transaction')}
                  >
                    <IconButtonWrapper size="small" color="error">
                      <CloseTwoToneIcon />
                    </IconButtonWrapper>
                  </Tooltip>
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      sx={{
                        background: `${lighten(theme.colors.info.main, 0.8)}`,
                        color: `${theme.colors.info.main}`,
                        width: 40,
                        height: 40
                      }}
                    >
                      <TrendingDownTwoToneIcon fontSize="small" />
                    </Avatar>
                    <Box ml={1.5}>
                      <Typography color="text.primary" variant="h5" noWrap>
                        Incoming funds
                      </Typography>
                      <Typography variant="subtitle1" noWrap>
                        {format(subDays(new Date(), 2), 'MMMM dd yyyy')}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h5">76GHJD54HB</Typography>
                  <Box
                    mt={0.5}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                  >
                    <DotLegend
                      style={{
                        background: `${theme.colors.info.main}`
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: `${theme.typography.pxToRem(12)}`,
                        lineHeight: 1
                      }}
                      variant="body1"
                    >
                      <Text color="info">{t('Processing')}</Text>
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Tooltip
                    arrow
                    placement="top"
                    title={t('Cancel this transaction')}
                  >
                    <IconButtonWrapper size="small" color="error">
                      <CloseTwoToneIcon />
                    </IconButtonWrapper>
                  </Tooltip>
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      sx={{
                        background: `${lighten(
                          theme.colors.warning.main,
                          0.8
                        )}`,
                        color: `${theme.colors.warning.main}`,
                        width: 40,
                        height: 40
                      }}
                    >
                      <TrendingFlatTwoToneIcon fontSize="small" />
                    </Avatar>
                    <Box ml={1.5}>
                      <Typography color="text.primary" variant="h5" noWrap>
                        Held funds
                      </Typography>
                      <Typography variant="subtitle1" noWrap>
                        {format(subDays(new Date(), 3), 'MMMM dd yyyy')}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h5">54GDSA98HT</Typography>
                  <Box
                    mt={0.5}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                  >
                    <DotLegend
                      style={{
                        background: `${theme.colors.warning.main}`
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: `${theme.typography.pxToRem(12)}`,
                        lineHeight: 1
                      }}
                      variant="body1"
                    >
                      <Text color="warning">{t('Pending')}</Text>
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Tooltip
                    arrow
                    placement="top"
                    title={t('Cancel this transaction')}
                  >
                    <IconButtonWrapper size="small" color="error">
                      <CloseTwoToneIcon />
                    </IconButtonWrapper>
                  </Tooltip>
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      sx={{
                        background: `${lighten(
                          theme.colors.success.main,
                          0.8
                        )}`,
                        color: `${theme.colors.success.main}`,
                        width: 40,
                        height: 40
                      }}
                    >
                      <TrendingUpTwoToneIcon fontSize="small" />
                    </Avatar>
                    <Box ml={1.5}>
                      <Typography color="text.primary" variant="h5" noWrap>
                        Fiat deposit
                      </Typography>
                      <Typography variant="subtitle1" noWrap>
                        {format(subDays(new Date(), 4), 'MMMM dd yyyy')}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h5">54XHGSA34GJ</Typography>
                  <Box
                    mt={0.5}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                  >
                    <DotLegend
                      style={{
                        background: `${theme.colors.success.main}`
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: `${theme.typography.pxToRem(12)}`,
                        lineHeight: 1
                      }}
                      variant="body1"
                    >
                      <Text color="success">{t('Withdrawal')}</Text>
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Tooltip
                    arrow
                    placement="top"
                    title={t('Cancel this transaction')}
                  >
                    <IconButtonWrapper size="small" color="error">
                      <CloseTwoToneIcon />
                    </IconButtonWrapper>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableBody>
          </TableWrapper>
        </TableContainer>
      </Box>
    </Card>
  );
}

export default Block8;
