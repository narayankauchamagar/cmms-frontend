import { useState, ChangeEvent, MouseEvent } from 'react';

import {
  Divider,
  Box,
  Card,
  Typography,
  InputAdornment,
  alpha,
  Link,
  Avatar,
  TextField,
  Tooltip,
  IconButton,
  TablePagination,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  TableContainer,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

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

const LabelSuccess = styled(Box)(
  ({ theme }) => `
    display: inline-block;
    background: ${theme.colors.success.lighter};
    color: ${theme.colors.success.main};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(11)};
    font-weight: bold;
    padding: ${theme.spacing(1, 2)};
    border-radius: ${theme.general.borderRadiusSm};
  `
);

const LabelError = styled(Box)(
  ({ theme }) => `
    display: inline-block;
    background: ${theme.colors.error.lighter};
    color: ${theme.colors.error.main};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(11)};
    font-weight: bold;
    padding: ${theme.spacing(1, 2)};
    border-radius: ${theme.general.borderRadiusSm};
  `
);

const LabelWarning = styled(Box)(
  ({ theme }) => `
    display: inline-block;
    background: ${theme.colors.warning.lighter};
    color: ${theme.colors.warning.main};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(11)};
    font-weight: bold;
    padding: ${theme.spacing(1, 2)};
    border-radius: ${theme.general.borderRadiusSm};
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

const SearchInputWrapper = styled(TextField)(
  ({ theme }) => `
    background: ${theme.colors.alpha.white[100]};
    border-radius: ${theme.general.borderRadius};

    .MuiInputBase-input {
        font-size: ${theme.typography.pxToRem(16)};
    }
  `
);

function Block6() {
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

  return (
    <Card variant="outlined">
      <Box
        p={3}
        sx={{
          background: `${theme.colors.alpha.black[5]}`
        }}
      >
        <SearchInputWrapper
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchTwoToneIcon />
              </InputAdornment>
            )
          }}
          placeholder={t('Search orders...')}
          fullWidth
        />
      </Box>
      <Divider />
      <Box px={3} pb={3}>
        <TableContainer>
          <TableWrapper>
            <TableHeadWrapper>
              <TableRow>
                <TableCell>{t('Order')}</TableCell>
                <TableCell align="left">{t('Client')}</TableCell>
                <TableCell align="left">{t('Product')}</TableCell>
                <TableCell align="center">{t('Status')}</TableCell>
                <TableCell align="center">{t('Total')}</TableCell>
                <TableCell align="right">{t('Actions')}</TableCell>
              </TableRow>
            </TableHeadWrapper>
            <TableBody>
              <TableRow hover>
                <TableCell>
                  <Box>
                    <Typography variant="h4">#589</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      sx={{
                        fontSize: `${theme.typography.pxToRem(15)}`,
                        background: `${theme.colors.alpha.black[10]}`,
                        color: `${theme.colors.alpha.black[70]}`,
                        width: 50,
                        height: 50
                      }}
                    >
                      SW
                    </Avatar>
                    <Box pl={1}>
                      <Link
                        href="#"
                        color="text.primary"
                        underline="none"
                        noWrap
                        variant="h5"
                        sx={{
                          '&:hover': {
                            color: `${theme.colors.primary.main}`
                          }
                        }}
                      >
                        Shanelle Wynn
                      </Link>
                      <Typography variant="subtitle2" noWrap>
                        {t('Customer since')} 2019
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      variant="square"
                      sx={{
                        height: 'auto',
                        width: 80
                      }}
                      src="/static/images/placeholders/products/1.png"
                    />
                    <Box pl={1}>
                      <Link
                        href="#"
                        color="text.primary"
                        underline="none"
                        noWrap
                        variant="h5"
                        sx={{
                          '&:hover': {
                            color: `${theme.colors.primary.main}`
                          }
                        }}
                      >
                        Apple Macbook PRO 16
                      </Link>
                      <Typography variant="subtitle2" noWrap>
                        {t('In stock')}: <b>985</b>
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <div>
                    <LabelSuccess>{t('Completed')}</LabelSuccess>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <div>
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
                  </div>
                </TableCell>
                <TableCell
                  sx={{
                    whiteSpace: 'nowrap'
                  }}
                  align="right"
                >
                  <Box>
                    <Tooltip title={t('View')} arrow>
                      <IconButtonWrapper
                        sx={{
                          backgroundColor: `${theme.colors.primary.lighter}`,
                          color: `${theme.colors.primary.main}`,
                          transition: `${theme.transitions.create(['all'])}`,

                          '&:hover': {
                            backgroundColor: `${theme.colors.primary.main}`,
                            color: `${theme.palette.getContrastText(
                              theme.colors.primary.main
                            )}`
                          }
                        }}
                      >
                        <LaunchTwoToneIcon fontSize="small" />
                      </IconButtonWrapper>
                    </Tooltip>
                    <Tooltip title={t('Delete')} arrow>
                      <IconButtonWrapper
                        sx={{
                          ml: 1,
                          backgroundColor: `${theme.colors.error.lighter}`,
                          color: `${theme.colors.error.main}`,
                          transition: `${theme.transitions.create(['all'])}`,

                          '&:hover': {
                            backgroundColor: `${theme.colors.error.main}`,
                            color: `${theme.palette.getContrastText(
                              theme.colors.error.main
                            )}`
                          }
                        }}
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButtonWrapper>
                    </Tooltip>
                  </Box>
                </TableCell>
              </TableRow>
              <TableRowDivider />
              <TableRow hover>
                <TableCell>
                  <Box>
                    <Typography variant="h4">#590</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      sx={{
                        fontSize: `${theme.typography.pxToRem(15)}`,
                        background: `${theme.colors.alpha.black[10]}`,
                        color: `${theme.colors.alpha.black[70]}`,
                        width: 50,
                        height: 50
                      }}
                    >
                      BC
                    </Avatar>
                    <Box pl={1}>
                      <Link
                        href="#"
                        color="text.primary"
                        underline="none"
                        noWrap
                        variant="h5"
                        sx={{
                          '&:hover': {
                            color: `${theme.colors.primary.main}`
                          }
                        }}
                      >
                        Brax Childs
                      </Link>
                      <Typography variant="subtitle2" noWrap>
                        {t('Customer since')} 2020
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      variant="square"
                      sx={{
                        height: 'auto',
                        width: 80
                      }}
                      src="/static/images/placeholders/products/2.png"
                    />
                    <Box pl={1}>
                      <Link
                        href="#"
                        color="text.primary"
                        underline="none"
                        noWrap
                        variant="h5"
                        sx={{
                          '&:hover': {
                            color: `${theme.colors.primary.main}`
                          }
                        }}
                      >
                        iPhone 13 PRO Max
                      </Link>
                      <Typography variant="subtitle2" noWrap>
                        {t('In stock')}: <b>65</b>
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <div>
                    <LabelWarning>{t('Pending')}</LabelWarning>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <div>
                    <Typography
                      sx={{
                        pr: 0.5
                      }}
                      component="span"
                      variant="h4"
                      color="text.primary"
                    >
                      $3,457
                    </Typography>
                  </div>
                </TableCell>
                <TableCell align="right">
                  <Box>
                    <Tooltip title={t('View')} arrow>
                      <IconButtonWrapper
                        sx={{
                          backgroundColor: `${theme.colors.primary.lighter}`,
                          color: `${theme.colors.primary.main}`,
                          transition: `${theme.transitions.create(['all'])}`,

                          '&:hover': {
                            backgroundColor: `${theme.colors.primary.main}`,
                            color: `${theme.palette.getContrastText(
                              theme.colors.primary.main
                            )}`
                          }
                        }}
                      >
                        <LaunchTwoToneIcon fontSize="small" />
                      </IconButtonWrapper>
                    </Tooltip>
                    <Tooltip title={t('Delete')} arrow>
                      <IconButtonWrapper
                        sx={{
                          ml: 1,
                          backgroundColor: `${theme.colors.error.lighter}`,
                          color: `${theme.colors.error.main}`,
                          transition: `${theme.transitions.create(['all'])}`,

                          '&:hover': {
                            backgroundColor: `${theme.colors.error.main}`,
                            color: `${theme.palette.getContrastText(
                              theme.colors.error.main
                            )}`
                          }
                        }}
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButtonWrapper>
                    </Tooltip>
                  </Box>
                </TableCell>
              </TableRow>
              <TableRowDivider />
              <TableRow hover>
                <TableCell>
                  <Box>
                    <Typography variant="h4">#591</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      sx={{
                        fontSize: `${theme.typography.pxToRem(15)}`,
                        background: `${theme.colors.alpha.black[10]}`,
                        color: `${theme.colors.alpha.black[70]}`,
                        width: 50,
                        height: 50
                      }}
                    >
                      AW
                    </Avatar>
                    <Box pl={1}>
                      <Link
                        href="#"
                        color="text.primary"
                        underline="none"
                        noWrap
                        variant="h5"
                        sx={{
                          '&:hover': {
                            color: `${theme.colors.primary.main}`
                          }
                        }}
                      >
                        Amin Waller
                      </Link>
                      <Typography variant="subtitle2" noWrap>
                        {t('Customer since')} 2017
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      variant="square"
                      sx={{
                        height: 'auto',
                        width: 80
                      }}
                      src="/static/images/placeholders/products/3.png"
                    />
                    <Box pl={1}>
                      <Link
                        href="#"
                        color="text.primary"
                        underline="none"
                        noWrap
                        variant="h5"
                        sx={{
                          '&:hover': {
                            color: `${theme.colors.primary.main}`
                          }
                        }}
                      >
                        Apple TV Gen. 5
                      </Link>
                      <Typography variant="subtitle2" noWrap>
                        {t('In stock')}: <b>3</b>
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <div>
                    <LabelError>{t('Failed')}</LabelError>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <div>
                    <Typography
                      sx={{
                        pr: 0.5
                      }}
                      component="span"
                      variant="h4"
                      color="text.primary"
                    >
                      $7,584
                    </Typography>
                  </div>
                </TableCell>
                <TableCell align="right">
                  <Box>
                    <Tooltip title={t('View')} arrow>
                      <IconButtonWrapper
                        sx={{
                          backgroundColor: `${theme.colors.primary.lighter}`,
                          color: `${theme.colors.primary.main}`,
                          transition: `${theme.transitions.create(['all'])}`,

                          '&:hover': {
                            backgroundColor: `${theme.colors.primary.main}`,
                            color: `${theme.palette.getContrastText(
                              theme.colors.primary.main
                            )}`
                          }
                        }}
                      >
                        <LaunchTwoToneIcon fontSize="small" />
                      </IconButtonWrapper>
                    </Tooltip>
                    <Tooltip title={t('Delete')} arrow>
                      <IconButtonWrapper
                        sx={{
                          ml: 1,
                          backgroundColor: `${theme.colors.error.lighter}`,
                          color: `${theme.colors.error.main}`,
                          transition: `${theme.transitions.create(['all'])}`,

                          '&:hover': {
                            backgroundColor: `${theme.colors.error.main}`,
                            color: `${theme.palette.getContrastText(
                              theme.colors.error.main
                            )}`
                          }
                        }}
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButtonWrapper>
                    </Tooltip>
                  </Box>
                </TableCell>
              </TableRow>
              <TableRowDivider />
            </TableBody>
          </TableWrapper>
        </TableContainer>
        <Box pt={1} display="flex" justifyContent="flex-end">
          <TablePagination
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Box>
    </Card>
  );
}

export default Block6;
