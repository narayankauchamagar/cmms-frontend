import {
  Box,
  Card,
  Typography,
  alpha,
  TableHead,
  Button,
  Link,
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

const BoxComposed = styled(Box)(
  () => `
    position: relative;
  `
);

const BoxComposedContent = styled(Box)(
  ({ theme }) => `
    position: relative;
    z-index: 7;

    .MuiTypography-root {
        color: ${theme.palette.primary.contrastText};

        & + .MuiTypography-root {
            color: ${alpha(theme.palette.primary.contrastText, 0.7)};
        }
    }
    
  `
);

const BoxComposedImage = styled(Box)(
  () => `
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    filter: grayscale(80%);
    background-size: cover;
    height: 100%;
    width: 100%;
    border-radius: inherit;
  `
);

const BoxComposedBg = styled(Box)(
  () => `
    position: absolute;
    left: 0;
    top: 0;
    z-index: 6;
    height: 100%;
    width: 100%;
    border-radius: inherit;
  `
);

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    bottom: ${theme.spacing(2)};
    z-index: 7;
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
    border-radius: ${theme.general.borderRadiusSm};
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
    border-radius: ${theme.general.borderRadiusSm};
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
    border-radius: ${theme.general.borderRadiusSm};
  `
);

const TableHeadWrapper = styled(TableHead)(
  ({ theme }) => `
      .MuiTableCell-root {
          text-transform: none;
          font-weight: normal;
          font-size: ${theme.typography.pxToRem(16)};
          padding-top: 0;
          padding-bottom: ${theme.spacing(1)};
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

function Block7() {
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
      <BoxComposed
        sx={{
          background: `${theme.colors.gradients.blue1}`
        }}
      >
        <CardActions>
          <LabelSuccess>{t('New')}</LabelSuccess>
        </CardActions>
        <BoxComposedBg
          sx={{
            opacity: 0.1,
            background: `${theme.colors.gradients.blue3}`
          }}
        />
        <BoxComposedImage
          sx={{
            opacity: 0.3,
            backgroundImage: 'url("/static/images/placeholders/covers/1.jpg")'
          }}
        />
        <BoxComposedContent
          sx={{
            textAlign: 'center'
          }}
          py={6}
        >
          <Typography
            sx={{
              px: { xs: 4, md: 12 },
              pb: 1.5,
              lineHeight: 1.5
            }}
            variant="h2"
          >
            {t('The Ultimate UI Design System at your fingertips!')}
          </Typography>
          <Typography
            sx={{
              mb: 2.5,
              px: { xs: 4, md: 8 },
              lineHeight: 1.6
            }}
            fontWeight="normal"
            variant="h4"
          >
            {t(
              'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
            )}
            .
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="error"
            sx={{
              fontSize: `${theme.typography.pxToRem(12)}`,
              textTransform: 'uppercase',
              boxShadow: `${theme.colors.shadows.error}`
            }}
          >
            {t('Contact us')}
          </Button>
        </BoxComposedContent>
      </BoxComposed>
      <Box p={2}>
        <TableContainer>
          <TableWrapper>
            <TableHeadWrapper>
              <TableRow>
                <TableCell>{t('Employee')}</TableCell>
                <TableCell align="center">{t('Status')}</TableCell>
                <TableCell align="right">{t('Actions')}</TableCell>
              </TableRow>
            </TableHeadWrapper>
            <TableBody>
              <TableRow hover>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      sx={{
                        width: 50,
                        height: 50,
                        boxShadow: `0 .113rem .5rem ${theme.colors.alpha.black[10]}, 0 .126rem .225rem ${theme.colors.alpha.black[30]}`
                      }}
                      src="/static/images/avatars/1.jpg"
                    />
                    <Box ml={1.5}>
                      <Link
                        href="#"
                        color="text.primary"
                        underline="none"
                        sx={{
                          transition: `${theme.transitions.create(['color'])}`,

                          '&:hover': {
                            color: `${theme.colors.primary.main}`
                          }
                        }}
                        variant="h5"
                      >
                        Shanelle Wynn
                      </Link>
                      <Typography variant="subtitle2">
                        UI Engineer, Apple Inc.
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <LabelWarning>{t('Pending')}</LabelWarning>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="text"
                    size="small"
                    color="primary"
                    sx={{
                      backgroundColor: `${theme.colors.primary.lighter}`,
                      fontWeight: 'normal',
                      '&:hover': {
                        backgroundColor: `${theme.colors.primary.main}`,
                        color: `${theme.palette.getContrastText(
                          theme.colors.primary.main
                        )}`
                      }
                    }}
                  >
                    {t('Chat')}
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      sx={{
                        width: 50,
                        height: 50,
                        boxShadow: `0 .113rem .5rem ${theme.colors.alpha.black[10]}, 0 .126rem .225rem ${theme.colors.alpha.black[30]}`
                      }}
                      src="/static/images/avatars/2.jpg"
                    />
                    <Box ml={1.5}>
                      <Link
                        href="#"
                        color="text.primary"
                        underline="none"
                        sx={{
                          transition: `${theme.transitions.create(['color'])}`,

                          '&:hover': {
                            color: `${theme.colors.primary.main}`
                          }
                        }}
                        variant="h5"
                      >
                        Beck Simpson
                      </Link>
                      <Typography variant="subtitle2">
                        Frontend Developer
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <LabelSuccess>{t('Completed')}</LabelSuccess>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="text"
                    size="small"
                    color="primary"
                    sx={{
                      backgroundColor: `${theme.colors.primary.lighter}`,
                      fontWeight: 'normal',
                      '&:hover': {
                        backgroundColor: `${theme.colors.primary.main}`,
                        color: `${theme.palette.getContrastText(
                          theme.colors.primary.main
                        )}`
                      }
                    }}
                  >
                    {t('Chat')}
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      sx={{
                        width: 50,
                        height: 50,
                        boxShadow: `0 .113rem .5rem ${theme.colors.alpha.black[10]}, 0 .126rem .225rem ${theme.colors.alpha.black[30]}`
                      }}
                      src="/static/images/avatars/2.jpg"
                    />
                    <Box ml={1.5}>
                      <Link
                        href="#"
                        color="text.primary"
                        underline="none"
                        sx={{
                          transition: `${theme.transitions.create(['color'])}`,

                          '&:hover': {
                            color: `${theme.colors.primary.main}`
                          }
                        }}
                        variant="h5"
                      >
                        Regan Norris
                      </Link>
                      <Typography variant="subtitle2">
                        Senior Project Manager
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <LabelError>{t('Declined')}</LabelError>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="text"
                    size="small"
                    color="primary"
                    sx={{
                      backgroundColor: `${theme.colors.primary.lighter}`,
                      fontWeight: 'normal',
                      '&:hover': {
                        backgroundColor: `${theme.colors.primary.main}`,
                        color: `${theme.palette.getContrastText(
                          theme.colors.primary.main
                        )}`
                      }
                    }}
                  >
                    {t('Chat')}
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </TableWrapper>
        </TableContainer>
      </Box>
    </Card>
  );
}

export default Block7;
