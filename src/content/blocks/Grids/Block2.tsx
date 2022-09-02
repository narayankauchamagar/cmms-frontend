import { Box, Stack, Card, Typography, Divider } from '@mui/material';

import { useTranslation } from 'react-i18next';
import Text from 'src/components/Text';

import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';

function Block2() {
  const { t }: { t: any } = useTranslation();

  return (
    <Card>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="stretch"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={0}
      >
        <Box py={4} px={2} display="flex" alignItems="flex-start">
          <Text color="primary">
            <MonetizationOnTwoToneIcon fontSize="large" />
          </Text>
          <Box ml={1}>
            <Typography variant="h3">$14,264</Typography>
            <Typography noWrap variant="subtitle2">
              {t('total value')}
            </Typography>
          </Box>
        </Box>
        <Box py={4} px={2} display="flex" alignItems="flex-start">
          <Text color="error">
            <PersonTwoToneIcon fontSize="large" />
          </Text>
          <Box ml={1}>
            <Typography variant="h3">6,598</Typography>
            <Typography noWrap variant="subtitle2">
              {t('new members')}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Card>
  );
}

export default Block2;
