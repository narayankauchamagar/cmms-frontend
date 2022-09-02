import {
  Box,
  Card,
  Typography,
  Divider,
  Stack,
  IconButton,
  Avatar,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import Label from 'src/components/Label';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(1.5)};
    top: ${theme.spacing(1.5)};
    z-index: 7;
  `
);

function Block9() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        position: 'relative',
        textAlign: 'center',
        pt: 4,
        pb: 3,
        px: 3
      }}
    >
      <CardActions>
        <IconButton color="primary">
          <MoreHorizTwoToneIcon />
        </IconButton>
      </CardActions>
      <Avatar
        sx={{
          mx: 'auto',
          mb: 1.5,
          width: 114,
          height: 114,
          border: `${theme.colors.alpha.white[100]} solid 4px`,
          boxShadow: `0 0 0 3px ${theme.colors.error.main}`
        }}
        src="/static/images/avatars/2.jpg"
      />
      <Typography gutterBottom variant="h3">
        Marion Devine
      </Typography>

      <Box py={2}>
        <Label color="info">Web developer</Label>
        <Box component="span" px={1}>
          <Label color="warning">Javascript</Label>
        </Box>
        <Label color="error">Angular</Label>
      </Box>
      <Typography
        sx={{
          px: { xs: 4, md: 8 }
        }}
        variant="subtitle2"
      >
        {t(
          'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
        )}
        .
      </Typography>
      <Divider
        sx={{
          mt: 3
        }}
      />
      <Stack
        sx={{
          mt: 2.5,
          textAlign: 'center'
        }}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <Box>
          <Typography gutterBottom variant="h4">
            86%
          </Typography>
          <Typography variant="subtitle2">{t('Profile completion')}</Typography>
        </Box>
        <Box>
          <Typography gutterBottom variant="h4">
            $19,495
          </Typography>
          <Typography variant="subtitle2">{t('Lifetime earnings')}</Typography>
        </Box>
        <Box>
          <Typography gutterBottom variant="h4">
            174
          </Typography>
          <Typography variant="subtitle2">{t('Projects completed')}</Typography>
        </Box>
      </Stack>
    </Card>
  );
}

export default Block9;
