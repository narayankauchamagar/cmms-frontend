import {
  Divider,
  Box,
  Card,
  Typography,
  alpha,
  Link,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  TableContainer,
  IconButton,
  styled,
  useTheme
} from '@mui/material';
import Text from 'src/components/Text';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
  SparklinesSpots
} from 'react-sparklines';

import { useTranslation } from 'react-i18next';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';

const TableWrapper = styled(Table)(
  ({ theme }) => `

    thead tr th {
        border: 0;
    }

    tbody tr td {
        position: relative;
        border: 0;

        & > div {
            position: relative;
            z-index: 5;
        }

        &::before {
            position: absolute;
            left: 0;
            top: 0;
            transition: ${theme.transitions.create(['all'])};
            height: 100%;
            width: 100%;
            content: "";
            background: ${theme.colors.alpha.white[100]};
            border-top: 1px solid ${theme.colors.alpha.black[10]};
            border-bottom: 1px solid ${theme.colors.alpha.black[10]};
            pointer-events: none;
            z-index: 4;
        }

        &:first-of-type:before {
            border-top-left-radius: ${theme.general.borderRadius};
            border-bottom-left-radius: ${theme.general.borderRadius};
            border-left: 1px solid ${theme.colors.alpha.black[10]};
        }
        

        &:last-child:before {
            border-top-right-radius: ${theme.general.borderRadius};
            border-bottom-right-radius: ${theme.general.borderRadius};
            border-right: 1px solid ${theme.colors.alpha.black[10]};
        }
    }

    tbody tr:hover td::before {
        background: ${alpha(theme.colors.primary.main, 0.02)};
        border-color: ${alpha(theme.colors.alpha.black[100], 0.25)} !important;
    }

  `
);

const TableRowDivider = styled(TableRow)(
  ({ theme }) => `
    height: ${theme.spacing(2)};
  `
);

const LabelWarning = styled(Box)(
  ({ theme }) => `
    display: inline-block;
    background: ${theme.palette.warning.main};
    color: ${theme.palette.warning.contrastText};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(10)};
    font-weight: bold;
    line-height: 23px;
    height: 22px;
    padding: ${theme.spacing(0, 2)};
    border-radius: ${theme.general.borderRadius};
  `
);

const LabelError = styled(Box)(
  ({ theme }) => `
    display: inline-block;
    background: ${theme.palette.error.main};
    color: ${theme.palette.error.contrastText};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(10)};
    font-weight: bold;
    line-height: 23px;
    height: 22px;
    padding: ${theme.spacing(0, 2)};
    border-radius: ${theme.general.borderRadius};
  `
);

const LabelSuccess = styled(Box)(
  ({ theme }) => `
    display: inline-block;
    background: ${theme.palette.success.main};
    color: ${theme.palette.success.contrastText};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(10)};
    font-weight: bold;
    line-height: 23px;
    height: 22px;
    padding: ${theme.spacing(0, 2)};
    border-radius: ${theme.general.borderRadius};
  `
);

const TableHeadWrapper = styled(TableHead)(
  ({ theme }) => `
      .MuiTableCell-root {
          text-transform: none;
          font-weight: normal;
          color: ${theme.colors.alpha.black[100]};
          font-size: ${theme.typography.pxToRem(16)};
          padding: ${theme.spacing(2)};
      }

      .MuiTableRow-root {
          background: transparent;
      }
  `
);

function Block2() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <Box
        px={3}
        py={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography
            gutterBottom
            sx={{
              fontSize: `${theme.typography.pxToRem(16)}`
            }}
            variant="h4"
          >
            {t('Weekly sales')}
          </Typography>
          <Typography variant="subtitle2">
            {t('Reports for what we sold this week')}
          </Typography>
        </Box>
        <IconButton color="primary">
          <MoreVertTwoToneIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box px={3} pb={3}>
        <TableContainer>
          <TableWrapper>
            <TableHeadWrapper>
              <TableRow>
                <TableCell>{t('Employee')}</TableCell>
                <TableCell align="left">{t('Income')}</TableCell>
                <TableCell align="left">{t('Expenses')}</TableCell>
                <TableCell align="center">{t('Status')}</TableCell>
                <TableCell align="center">{t('Trends')}</TableCell>
                <TableCell align="right">{t('Totals')}</TableCell>
              </TableRow>
            </TableHeadWrapper>
            <TableBody>
              <TableRow hover>
                <TableCell>
                  <Box>
                    <Link href="#" variant="h4" noWrap>
                      Inez Conley
                    </Link>
                    <Typography variant="subtitle1" noWrap>
                      Project Manager
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <div>
                    <Typography variant="h4" noWrap>
                      $754
                    </Typography>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <Typography variant="h4" noWrap>
                      <Text color="error">-$2,584</Text>
                    </Typography>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <div>
                    <LabelError>{t('Overdue')}</LabelError>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <div>
                    <Sparklines
                      margin={6}
                      data={[45, 56, 24, 56, 54, 38, 47, 38, 56, 24, 38]}
                    >
                      <SparklinesLine
                        style={{
                          stroke: theme.colors.primary.main,
                          strokeWidth: 3,
                          fill: 'none'
                        }}
                      />
                      <SparklinesSpots
                        size={4}
                        style={{
                          fill: theme.colors.alpha.white[100],
                          stroke: theme.colors.primary.main,
                          strokeWidth: 3
                        }}
                      />
                      <SparklinesReferenceLine
                        style={{
                          stroke: theme.colors.error.main
                        }}
                        type="mean"
                      />
                    </Sparklines>
                  </div>
                </TableCell>
                <TableCell align="right">
                  <div>
                    <Typography
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                      }}
                      color="text.secondary"
                    >
                      <Typography
                        sx={{
                          pr: 0.5
                        }}
                        component="span"
                        variant="h4"
                        color="text.primary"
                      >
                        $68,492
                      </Typography>
                      <ArrowUpwardTwoToneIcon
                        sx={{
                          opacity: 0.6
                        }}
                      />
                    </Typography>
                  </div>
                </TableCell>
              </TableRow>
              <TableRowDivider />
              <TableRow hover>
                <TableCell>
                  <Box>
                    <Link href="#" variant="h4" noWrap>
                      Isaiah Ruiz
                    </Link>
                    <Typography variant="subtitle1" noWrap>
                      Senior Web Developer
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <div>
                    <Typography variant="h4" noWrap>
                      $654
                    </Typography>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <Typography variant="h4" noWrap>
                      <Text color="warning">-$463</Text>
                    </Typography>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <div>
                    <LabelWarning>{t('Pending')}</LabelWarning>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <div>
                    <Sparklines
                      margin={6}
                      data={[65, 34, 65, 77, 89, 54, 35, 87, 65, 94, 59, 54]}
                    >
                      <SparklinesLine
                        style={{
                          stroke: theme.colors.primary.main,
                          strokeWidth: 3,
                          fill: 'none'
                        }}
                      />
                      <SparklinesSpots
                        size={4}
                        style={{
                          fill: theme.colors.alpha.white[100],
                          stroke: theme.colors.primary.main,
                          strokeWidth: 3
                        }}
                      />
                      <SparklinesReferenceLine
                        style={{
                          stroke: theme.colors.error.main
                        }}
                        type="mean"
                      />
                    </Sparklines>
                  </div>
                </TableCell>
                <TableCell align="right">
                  <div>
                    <Typography
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                      }}
                      color="text.secondary"
                    >
                      <Typography
                        sx={{
                          pr: 0.5
                        }}
                        component="span"
                        variant="h4"
                        color="text.primary"
                      >
                        $68,492
                      </Typography>
                      <ArrowUpwardTwoToneIcon
                        sx={{
                          opacity: 0.6
                        }}
                      />
                    </Typography>
                  </div>
                </TableCell>
              </TableRow>
              <TableRowDivider />
              <TableRow hover>
                <TableCell>
                  <Box>
                    <Link href="#" variant="h4" noWrap>
                      Beck Simpson
                    </Link>
                    <Typography variant="subtitle1" noWrap>
                      Senior Consultant
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <div>
                    <Typography variant="h4" noWrap>
                      $5,468
                    </Typography>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <Typography variant="h4" noWrap>
                      <Text color="success">+$685</Text>
                    </Typography>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <div>
                    <LabelSuccess>{t('Done')}</LabelSuccess>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <div>
                    <Sparklines
                      margin={6}
                      data={[65, 45, 37, 97, 56, 37, 47, 24, 38]}
                    >
                      <SparklinesLine
                        style={{
                          stroke: theme.colors.primary.main,
                          strokeWidth: 3,
                          fill: 'none'
                        }}
                      />
                      <SparklinesSpots
                        size={4}
                        style={{
                          fill: theme.colors.alpha.white[100],
                          stroke: theme.colors.primary.main,
                          strokeWidth: 3
                        }}
                      />
                      <SparklinesReferenceLine
                        style={{
                          stroke: theme.colors.error.main
                        }}
                        type="mean"
                      />
                    </Sparklines>
                  </div>
                </TableCell>
                <TableCell align="right">
                  <div>
                    <Typography
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                      }}
                      color="text.secondary"
                    >
                      <Typography
                        sx={{
                          pr: 0.5
                        }}
                        component="span"
                        variant="h4"
                      >
                        <Text color="error">$23,654</Text>
                      </Typography>
                      <Text flex color="error">
                        <ArrowDownwardTwoToneIcon />
                      </Text>
                    </Typography>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </TableWrapper>
        </TableContainer>
      </Box>
    </Card>
  );
}

export default Block2;
