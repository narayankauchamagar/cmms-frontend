import {
  Box,
  Typography,
  Card,
  Avatar,
  Stack,
  Tooltip,
  Divider,
  IconButton
} from '@mui/material';

import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import { useTranslation } from 'react-i18next';

function Users() {
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={1}
      >
        <Typography variant="h3">{t('Top users')}</Typography>
        <Tooltip placement="top" title={t('View all')} arrow>
          <IconButton size="large" color="primary">
            <KeyboardArrowRightTwoToneIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Card
        sx={{
          p: 2
        }}
      >
        <Stack
          spacing={3}
          direction="row"
          justifyContent="space-evenly"
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Tooltip placement="top" title={t('View profile')} arrow>
              <Avatar
                component="a"
                href="#"
                sx={{
                  mb: 1,
                  width: 62,
                  height: 62
                }}
                src="/static/images/avatars/3.jpg"
              />
            </Tooltip>
            <Typography variant="h4">Randy</Typography>
            <Typography variant="subtitle2" textAlign="center" noWrap>
              Admin
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Tooltip placement="top" title={t('View profile')} arrow>
              <Avatar
                component="a"
                href="#"
                sx={{
                  mb: 1,
                  width: 62,
                  height: 62
                }}
                src="/static/images/avatars/1.jpg"
              />
            </Tooltip>
            <Typography variant="h4">Adeline</Typography>
            <Typography variant="subtitle2" textAlign="center" noWrap>
              Admin
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Tooltip placement="top" title={t('View profile')} arrow>
              <Avatar
                component="a"
                href="#"
                sx={{
                  mb: 1,
                  width: 62,
                  height: 62
                }}
                src="/static/images/avatars/4.jpg"
              />
            </Tooltip>
            <Typography variant="h4">Benjamin</Typography>
            <Typography variant="subtitle2" textAlign="center" noWrap>
              Restricted
            </Typography>
          </Box>
        </Stack>
      </Card>
    </>
  );
}

export default Users;
