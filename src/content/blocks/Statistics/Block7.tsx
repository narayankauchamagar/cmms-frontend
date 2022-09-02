import {
  Grid,
  Box,
  Card,
  Typography,
  Avatar,
  CardActionArea,
  alpha,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import CompareArrowsTwoToneIcon from '@mui/icons-material/CompareArrowsTwoTone';
import AddAlertTwoToneIcon from '@mui/icons-material/AddAlertTwoTone';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';

const CardBorderBottom = styled(Card)(
  () => `
    border-bottom: transparent 5px solid;
  `
);

const CardActionAreaWrapper = styled(CardActionArea)(
  ({ theme }) => `

        .MuiTouchRipple-root {
          opacity: .2;
        }
  
        .MuiCardActionArea-focusHighlight {
          background: ${theme.colors.primary.main};
        }
  
        &:hover {
          .MuiCardActionArea-focusHighlight {
            opacity: .03;
          }
        }
  `
);

function Block7() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardActionAreaWrapper
            sx={{
              p: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box display="flex">
              <Avatar
                sx={{
                  width: `${theme.spacing(5.5)}`,
                  height: `${theme.spacing(5.5)}`,
                  background: `${theme.colors.error.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.error.dark
                  )}`
                }}
              >
                <AccountBoxTwoToneIcon />
              </Avatar>
              <Box ml={2}>
                <Typography gutterBottom component="div" variant="caption">
                  {t('User Accounts')}
                </Typography>
                <Typography variant="h2">21,164</Typography>
                <Box ml={-0.5} mt={1.5} display="flex" alignItems="center">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      pr: 0.5,
                      color: `${theme.colors.success.main}`
                    }}
                  >
                    <ArrowUpwardTwoToneIcon
                      fontSize="small"
                      sx={{
                        mr: 0.2
                      }}
                    />
                    <span>65.44%</span>
                  </Typography>
                  <Typography variant="subtitle2" noWrap>
                    {t('increase this quarter')}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <ChevronRightTwoToneIcon />
          </CardActionAreaWrapper>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            background: `${theme.colors.gradients.blue4}`
          }}
        >
          <CardActionAreaWrapper
            sx={{
              p: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              '.MuiCardActionArea-focusHighlight': {
                background: `${theme.colors.alpha.trueWhite[100]}`
              }
            }}
          >
            <Box display="flex">
              <Avatar
                sx={{
                  width: `${theme.spacing(5.5)}`,
                  height: `${theme.spacing(5.5)}`,
                  background: `${theme.colors.success.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.success.dark
                  )}`
                }}
              >
                <CompareArrowsTwoToneIcon />
              </Avatar>
              <Box ml={2}>
                <Typography
                  sx={{
                    color: `${theme.colors.alpha.trueWhite[70]}`
                  }}
                  gutterBottom
                  component="div"
                  variant="caption"
                >
                  {t('Total Sales')}
                </Typography>
                <Typography
                  sx={{
                    color: `${theme.colors.alpha.trueWhite[100]}`
                  }}
                  variant="h2"
                >
                  $68,483
                </Typography>
                <Box ml={-0.5} mt={1.5} display="flex" alignItems="center">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      pr: 0.5,
                      color: `${theme.colors.success.main}`
                    }}
                  >
                    <ArrowUpwardTwoToneIcon
                      fontSize="small"
                      sx={{
                        mr: 0.2
                      }}
                    />
                    <span>54.28%</span>
                  </Typography>
                  <Typography
                    sx={{
                      color: `${theme.colors.alpha.trueWhite[70]}`
                    }}
                    variant="subtitle2"
                    noWrap
                  >
                    {t('increase this month')}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <ChevronRightTwoToneIcon
              sx={{
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            />
          </CardActionAreaWrapper>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <CardBorderBottom
          sx={{
            borderBottomColor: `${theme.colors.success.main}`,
            boxShadow: `
                    0 0.47rem 2.2rem ${alpha(theme.colors.success.main, 0.04)}, 
                    0 0.94rem 1.4rem ${alpha(theme.colors.success.main, 0.04)}, 
                    0 0.25rem 0.54rem ${alpha(
                      theme.colors.success.main,
                      0.06
                    )}, 
                    0 0.13rem 0.19rem ${alpha(theme.colors.success.main, 0.04)}`
          }}
        >
          <CardActionAreaWrapper
            sx={{
              p: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box display="flex">
              <Avatar
                variant="rounded"
                sx={{
                  width: `${theme.spacing(5.5)}`,
                  height: `${theme.spacing(5.5)}`,
                  background: `${theme.colors.primary.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.primary.dark
                  )}`
                }}
              >
                <AddAlertTwoToneIcon />
              </Avatar>
              <Box ml={2}>
                <Typography gutterBottom component="div" variant="caption">
                  {t('Orders')}
                </Typography>
                <Typography variant="h2">23,854</Typography>
                <Box ml={-0.5} mt={1.5} display="flex" alignItems="center">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      pr: 0.5,
                      color: `${theme.colors.error.main}`
                    }}
                  >
                    <ArrowDownwardTwoToneIcon
                      fontSize="small"
                      sx={{
                        mr: 0.2
                      }}
                    />
                    <span>5.25%</span>
                  </Typography>
                  <Typography variant="subtitle2" noWrap>
                    {t('decrease this month')}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <ChevronRightTwoToneIcon />
          </CardActionAreaWrapper>
        </CardBorderBottom>
      </Grid>
    </Grid>
  );
}

export default Block7;
