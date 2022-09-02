import {
  Typography,
  Box,
  IconButton,
  Tooltip,
  styled,
  Avatar,
  alpha,
  lighten
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';

const AvatarPageTitle = styled(Avatar)(
  ({ theme }) => `
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      color: ${theme.colors.primary.main};
      margin-right: ${theme.spacing(2)};
      background: ${
        theme.palette.mode === 'dark'
          ? theme.colors.alpha.trueWhite[10]
          : theme.colors.alpha.white[50]
      };
      box-shadow: ${
        theme.palette.mode === 'dark'
          ? '0 1px 0 ' +
            alpha(lighten(theme.colors.primary.main, 0.8), 0.2) +
            ', 0px 2px 4px -3px rgba(0, 0, 0, 0.3), 0px 5px 16px -4px rgba(0, 0, 0, .5)'
          : '0px 2px 4px -3px ' +
            alpha(theme.colors.alpha.black[100], 0.4) +
            ', 0px 5px 16px -4px ' +
            alpha(theme.colors.alpha.black[100], 0.2)
      };
`
);

function PageHeader() {
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <AvatarPageTitle variant="rounded">
            <AccountBalanceTwoToneIcon fontSize="large" />
          </AvatarPageTitle>
          <Box>
            <Typography variant="h3" component="h3" gutterBottom>
              {t('Expenses')}
            </Typography>
            <Typography variant="subtitle2">
              {t('Dashboard to show the company expenses statistics')}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Tooltip arrow title={t('View all expenses')}>
            <IconButton size="large" color="primary">
              <ArrowForwardTwoToneIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </>
  );
}

export default PageHeader;
