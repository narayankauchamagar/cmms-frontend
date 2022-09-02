import {
  CardHeader,
  Divider,
  Card,
  LinearProgress,
  List,
  ListItem,
  Box,
  Typography,
  styled
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import { DE, US, ES, FR, CN } from 'country-flag-icons/react/3x2';

const LinearProgressWrapper = styled(LinearProgress)(
  ({ theme }) => `
        flex-grow: 1;
        margin-right: ${theme.spacing(1)};
`
);

const ListItemWrapper = styled(ListItem)(
  () => `
        border-radius: 0;
`
);

function SessionsByCountry() {
  const { t }: { t: any } = useTranslation();

  return (
    <Card>
      <CardHeader title={t('Sessions by Country')} />
      <Divider />
      <List
        disablePadding
        component="nav"
        sx={{
          svg: {
            width: 26,
            mr: 1
          }
        }}
      >
        <ListItemWrapper
          sx={{
            py: 3.15
          }}
        >
          <US title="USA" />
          <Typography
            variant="h5"
            color="text.primary"
            noWrap
            sx={{
              minWidth: 80
            }}
          >
            USA
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            sx={{
              ml: 1,
              flexGrow: 1
            }}
          >
            <LinearProgressWrapper
              value={57}
              color="primary"
              variant="determinate"
            />
            <Typography variant="h4" color="text.primary">
              57%
            </Typography>
          </Box>
        </ListItemWrapper>
        <Divider />
        <ListItemWrapper
          sx={{
            py: 3.15
          }}
        >
          <DE title="Germany" />
          <Typography
            variant="h5"
            color="text.primary"
            noWrap
            sx={{
              minWidth: 80
            }}
          >
            Germany
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            sx={{
              ml: 1,
              flexGrow: 1
            }}
          >
            <LinearProgressWrapper
              value={34}
              color="primary"
              variant="determinate"
            />
            <Typography variant="h4" color="text.primary">
              34%
            </Typography>
          </Box>
        </ListItemWrapper>
        <Divider />
        <ListItemWrapper
          sx={{
            py: 3.15
          }}
        >
          <FR title="France" />
          <Typography
            variant="h5"
            color="text.primary"
            noWrap
            sx={{
              minWidth: 80
            }}
          >
            France
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            sx={{
              ml: 1,
              flexGrow: 1
            }}
          >
            <LinearProgressWrapper
              value={21}
              color="primary"
              variant="determinate"
            />
            <Typography variant="h4" color="text.primary">
              21%
            </Typography>
          </Box>
        </ListItemWrapper>
        <Divider />
        <ListItemWrapper
          sx={{
            py: 3.15
          }}
        >
          <ES title="Spain" />
          <Typography
            variant="h5"
            color="text.primary"
            noWrap
            sx={{
              minWidth: 80
            }}
          >
            Spain
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            sx={{
              ml: 1,
              flexGrow: 1
            }}
          >
            <LinearProgressWrapper
              value={13}
              color="primary"
              variant="determinate"
            />
            <Typography variant="h4" color="text.primary">
              13%
            </Typography>
          </Box>
        </ListItemWrapper>
        <Divider />
        <ListItemWrapper
          sx={{
            py: 3.15
          }}
        >
          <CN title="China" />
          <Typography
            variant="h5"
            color="text.primary"
            noWrap
            sx={{
              minWidth: 80
            }}
          >
            China
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            sx={{
              ml: 1,
              flexGrow: 1
            }}
          >
            <LinearProgressWrapper
              value={71}
              color="primary"
              variant="determinate"
            />
            <Typography variant="h4" color="text.primary">
              71%
            </Typography>
          </Box>
        </ListItemWrapper>
        <Divider />
      </List>
    </Card>
  );
}

export default SessionsByCountry;
