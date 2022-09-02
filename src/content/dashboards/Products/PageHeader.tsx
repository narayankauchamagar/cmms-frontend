import {
  Typography,
  Box,
  Stack,
  Divider,
  styled,
  Avatar,
  alpha,
  lighten,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Text from 'src/components/Text';

import TrendingDownTwoToneIcon from '@mui/icons-material/TrendingDownTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import WhatshotTwoToneIcon from '@mui/icons-material/WhatshotTwoTone';

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
  const theme = useTheme();

  return (
    <Box
      display="flex"
      alignItems={{ xs: 'stretch', md: 'center' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center">
        <AvatarPageTitle variant="rounded">
          <WhatshotTwoToneIcon fontSize="large" />
        </AvatarPageTitle>
        <Box>
          <Typography variant="h3" component="h3" gutterBottom>
            {t('Products')}
          </Typography>
          <Typography variant="subtitle2">
            {t('Manage your store overview panel with ease and style')}
          </Typography>
        </Box>
      </Box>
      <Stack
        sx={{
          mt: { xs: 3, md: 0 }
        }}
        direction="row"
        justifyContent="space-evenly"
        alignItems="stretch"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Box display="flex" alignItems="flex-start">
          <Text color="success">
            <TrendingUpTwoToneIcon fontSize="large" />
          </Text>
          <Box ml={1}>
            <Typography
              variant="h3"
              sx={{
                fontSize: `${theme.typography.pxToRem(16)}`
              }}
            >
              $14,264
            </Typography>
            <Typography noWrap variant="subtitle2">
              {t('gross income')}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="flex-start">
          <Text color="error">
            <TrendingDownTwoToneIcon fontSize="large" />
          </Text>
          <Box ml={1}>
            <Typography
              variant="h3"
              sx={{
                fontSize: `${theme.typography.pxToRem(16)}`
              }}
            >
              $6,598
            </Typography>
            <Typography noWrap variant="subtitle2">
              {t('net profit')}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default PageHeader;
