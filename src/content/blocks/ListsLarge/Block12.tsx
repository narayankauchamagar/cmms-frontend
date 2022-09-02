import { Box, Card, Typography, Stack, Divider, Grid } from '@mui/material';

import { useTranslation } from 'react-i18next';
import Text from 'src/components/Text';

function Block12() {
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              divider={<Divider orientation="vertical" flexItem />}
              justifyContent="center"
              alignItems="center"
              spacing={0}
            >
              <Box
                sx={{
                  width: '100%'
                }}
                p={3}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Typography gutterBottom variant="h4">
                    {t('Reports')}
                  </Typography>
                  <Typography variant="subtitle2">
                    {t('Monthly sales reports')}
                  </Typography>
                </Box>
                <Text color="error">
                  <Typography variant="h4">2,586</Typography>
                </Text>
              </Box>
              <Box
                sx={{
                  width: '100%'
                }}
                p={3}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Typography gutterBottom variant="h4">
                    {t('Stats')}
                  </Typography>
                  <Typography variant="subtitle2">
                    {t('Last month targets')}
                  </Typography>
                </Box>
                <Text color="warning">
                  <Typography variant="h4">$1,23M</Typography>
                </Text>
              </Box>
              <Box
                sx={{
                  width: '100%'
                }}
                p={3}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Typography gutterBottom variant="h4">
                    {t('Reports')}
                  </Typography>
                  <Typography variant="subtitle2">
                    {t('Monthly sales reports')}
                  </Typography>
                </Box>
                <Text color="error">
                  <Typography variant="h4">2,586</Typography>
                </Text>
              </Box>
            </Stack>
            <Divider />
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              divider={<Divider orientation="vertical" flexItem />}
              justifyContent="center"
              alignItems="center"
              spacing={0}
            >
              <Box
                sx={{
                  width: '100%'
                }}
                p={3}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Typography gutterBottom variant="h4">
                    {t('Users')}
                  </Typography>
                  <Typography variant="subtitle2">
                    {t('Visitors last week')}
                  </Typography>
                </Box>
                <Text color="success">
                  <Typography variant="h4">67,684</Typography>
                </Text>
              </Box>
              <Box
                sx={{
                  width: '100%'
                }}
                p={3}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Typography gutterBottom variant="h4">
                    {t('Payments')}
                  </Typography>
                  <Typography variant="subtitle2">
                    {t("Week's expenses")}
                  </Typography>
                </Box>
                <Text color="error">
                  <Typography variant="h4">-$123,305</Typography>
                </Text>
              </Box>
              <Box
                sx={{
                  width: '100%'
                }}
                p={3}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Typography gutterBottom variant="h4">
                    {t('Users')}
                  </Typography>
                  <Typography variant="subtitle2">
                    {t('Visitors last week')}
                  </Typography>
                </Box>
                <Text color="success">
                  <Typography variant="h4">67,684</Typography>
                </Text>
              </Box>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              divider={<Divider orientation="vertical" flexItem />}
              justifyContent="center"
              alignItems="center"
              spacing={0}
            >
              <Box
                sx={{
                  width: '100%'
                }}
                p={3}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Typography gutterBottom variant="h4">
                    {t('Sales')}
                  </Typography>
                  <Typography variant="subtitle2">
                    {t('Total average weekly report')}
                  </Typography>
                </Box>
                <Text color="primary">
                  <Typography variant="h4">64.543</Typography>
                </Text>
              </Box>
              <Box
                sx={{
                  width: '100%'
                }}
                p={3}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Typography gutterBottom variant="h4">
                    {t('Orders')}
                  </Typography>
                  <Typography variant="subtitle2">
                    {t('Total products ordered')}
                  </Typography>
                </Box>
                <Text color="info">
                  <Typography variant="h4">745</Typography>
                </Text>
              </Box>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Block12;
