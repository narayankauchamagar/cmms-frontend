import {
  Typography,
  Box,
  Avatar,
  Card,
  Grid,
  useTheme,
  styled
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import SupportTwoToneIcon from '@mui/icons-material/SupportTwoTone';
import YardTwoToneIcon from '@mui/icons-material/YardTwoTone';
import SnowmobileTwoToneIcon from '@mui/icons-material/SnowmobileTwoTone';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
      color:  ${theme.colors.alpha.trueWhite[100]};
      width: ${theme.spacing(5.5)};
      height: ${theme.spacing(5.5)};
`
);

function Block4() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            px: 3,
            pb: 6,
            pt: 3,
            background: `${theme.colors.gradients.blue4}`
          }}
        >
          <Box display="flex" alignItems="center">
            <AvatarWrapper
              sx={{
                background: `${theme.colors.gradients.blue2}`
              }}
            >
              <ReceiptTwoToneIcon fontSize="small" />
            </AvatarWrapper>
            <Typography
              sx={{
                ml: 1.5,
                fontSize: `${theme.typography.pxToRem(15)}`,
                color: `${theme.colors.alpha.trueWhite[70]}`,
                fontWeight: 'bold'
              }}
              variant="subtitle2"
              component="div"
            >
              {t('Orders')}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              ml: -2,
              pt: 2,
              pb: 1.5,
              justifyContent: 'center'
            }}
          >
            <ArrowDownwardTwoToneIcon
              sx={{
                color: `${theme.colors.error.main}`
              }}
            />
            <Typography
              sx={{
                pl: 1,
                fontSize: `${theme.typography.pxToRem(35)}`,
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
              variant="h1"
            >
              $3,594
            </Typography>
          </Box>
          <Typography
            align="center"
            variant="body2"
            sx={{
              color: `${theme.colors.alpha.trueWhite[50]}`
            }}
            component="div"
          >
            <b>+36%</b> from last month
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            px: 3,
            pb: 6,
            pt: 3,
            background: `${theme.colors.gradients.blue3}`
          }}
        >
          <Box display="flex" alignItems="center">
            <AvatarWrapper
              sx={{
                background: `${theme.colors.gradients.orange1}`
              }}
            >
              <SupportTwoToneIcon fontSize="small" />
            </AvatarWrapper>
            <Typography
              sx={{
                ml: 1.5,
                fontSize: `${theme.typography.pxToRem(15)}`,
                color: `${theme.colors.alpha.trueWhite[70]}`,
                fontWeight: 'bold'
              }}
              variant="subtitle2"
              component="div"
            >
              {t('Reports')}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              ml: -2,
              pt: 2,
              pb: 1.5,
              justifyContent: 'center'
            }}
          >
            <ArrowUpwardTwoToneIcon
              sx={{
                color: `${theme.colors.success.main}`
              }}
            />
            <Typography
              sx={{
                pl: 1,
                fontSize: `${theme.typography.pxToRem(35)}`,
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
              variant="h1"
            >
              987
            </Typography>
          </Box>
          <Typography
            align="center"
            variant="body2"
            sx={{
              color: `${theme.colors.alpha.trueWhite[50]}`
            }}
            component="div"
          >
            <b>+65%</b> from last month
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            px: 3,
            pb: 6,
            pt: 3,
            background: `${theme.colors.gradients.purple3}`
          }}
        >
          <Box display="flex" alignItems="center">
            <AvatarWrapper
              sx={{
                background: `${theme.colors.gradients.green1}`
              }}
            >
              <YardTwoToneIcon fontSize="small" />
            </AvatarWrapper>
            <Typography
              sx={{
                ml: 1.5,
                fontSize: `${theme.typography.pxToRem(15)}`,
                color: `${theme.colors.alpha.trueWhite[70]}`,
                fontWeight: 'bold'
              }}
              variant="subtitle2"
              component="div"
            >
              {t('Customers')}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              ml: -2,
              pt: 2,
              pb: 1.5,
              justifyContent: 'center'
            }}
          >
            <ArrowUpwardTwoToneIcon
              sx={{
                color: `${theme.colors.success.main}`
              }}
            />
            <Typography
              sx={{
                pl: 1,
                fontSize: `${theme.typography.pxToRem(35)}`,
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
              variant="h1"
            >
              17,865
            </Typography>
          </Box>
          <Typography
            align="center"
            variant="body2"
            sx={{
              color: `${theme.colors.alpha.trueWhite[50]}`
            }}
            component="div"
          >
            <b>+22%</b> from last month
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            px: 3,
            pb: 6,
            pt: 3,
            background: `${theme.colors.gradients.black2}`
          }}
        >
          <Box display="flex" alignItems="center">
            <AvatarWrapper
              sx={{
                background: `${theme.colors.gradients.blue1}`
              }}
            >
              <SnowmobileTwoToneIcon fontSize="small" />
            </AvatarWrapper>
            <Typography
              sx={{
                ml: 1.5,
                fontSize: `${theme.typography.pxToRem(15)}`,
                color: `${theme.colors.alpha.trueWhite[70]}`,
                fontWeight: 'bold'
              }}
              variant="subtitle2"
              component="div"
            >
              {t('Sales')}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              ml: -2,
              pt: 2,
              pb: 1.5,
              justifyContent: 'center'
            }}
          >
            <ArrowDownwardTwoToneIcon
              sx={{
                color: `${theme.colors.warning.main}`
              }}
            />
            <Typography
              sx={{
                pl: 1,
                fontSize: `${theme.typography.pxToRem(35)}`,
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
              variant="h1"
            >
              $65,489
            </Typography>
          </Box>
          <Typography
            align="center"
            variant="body2"
            sx={{
              color: `${theme.colors.alpha.trueWhite[50]}`
            }}
            component="div"
          >
            <b>-15.35%</b> from last month
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block4;
