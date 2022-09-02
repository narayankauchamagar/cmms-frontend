import {
  IconButton,
  Card,
  CardHeader,
  Typography,
  Box,
  Avatar,
  Grid,
  useTheme
} from '@mui/material';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';

function SecondaryAccounts() {
  const data = {
    logo1: '/static/images/placeholders/logo/deutschebank.svg',
    logo2: '/static/images/placeholders/logo/wellsfargo.svg'
  };

  const theme = useTheme();

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={3}
    >
      <Grid item sm={6} md={12} xs={12}>
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <CardHeader
            sx={{
              alignItems: 'flex-start'
            }}
            action={
              <Avatar
                sx={{
                  width: theme.spacing(6),
                  height: theme.spacing(6)
                }}
                variant="square"
                alt="Deutsche Bank"
                src={data.logo1}
              />
            }
            title="Deutsche Bank"
          />
          <Box
            sx={{
              px: 2,
              pb: 2
            }}
          >
            <Box
              sx={{
                pb: 2
              }}
            >
              <Typography variant="body2" color="text.secondary" gutterBottom>
                ACC: <b>6855 37495</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                BSB: <b>346 773</b>
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h3" component="div">
                $22,674.32
              </Typography>
              <IconButton size="small" color="primary">
                <MoreVertTwoToneIcon />
              </IconButton>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item sm={6} md={12} xs={12}>
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <CardHeader
            sx={{
              alignItems: 'flex-start'
            }}
            action={
              <Avatar
                sx={{
                  width: theme.spacing(6),
                  height: theme.spacing(6)
                }}
                variant="square"
                alt="Wells Fargo"
                src={data.logo2}
              />
            }
            title="Wells Fargo"
          />
          <Box
            sx={{
              px: 2,
              pb: 2
            }}
          >
            <Box
              sx={{
                pb: 2
              }}
            >
              <Typography variant="body2" color="text.secondary" gutterBottom>
                ACC: <b>645 45456</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                BSB: <b>845 284</b>
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h3" component="div">
                $$,854.00
              </Typography>
              <IconButton size="small" color="primary">
                <MoreVertTwoToneIcon />
              </IconButton>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default SecondaryAccounts;
