import { useRef, useState } from 'react';
import {
  Button,
  Card,
  Box,
  CardContent,
  Menu,
  MenuItem,
  Grid,
  Typography,
  Avatar,
  CardActionArea,
  Tooltip,
  InputAdornment,
  TextField,
  CardActions,
  Divider,
  useTheme,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Label from 'src/components/Label';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import Text from 'src/components/Text';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';

const TextfieldWrapper = styled(Box)(
  ({ theme }) => `
    .MuiOutlinedInput-root {
      background: ${theme.colors.alpha.white[100]};
    }
`
);

const CardIndicatorWrapper = styled(Card)(
  () => `
    position: relative;
    
    .MuiCard-indicator {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: 5px;
    }
`
);

const CardActionsWrapper = styled(CardActions)(
  ({ theme }) => `
    background: ${theme.colors.alpha.black[5]};
    padding: ${theme.spacing(2)} ${theme.spacing(2)};
`
);

const IconWrapper = styled(Box)(
  ({ theme }) => `
    display: flex;
    margin-right: ${theme.spacing(0.5)};
`
);

const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

const CardAddAction = styled(Card)(
  ({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        transition: ${theme.transitions.create(['all'])};
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[70]};
        }
`
);

function DatacenterClusters() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const clusters = [
    {
      value: '1',
      badge: '15',
      text: t('All clusters')
    },
    {
      value: '2',
      badge: '25',
      text: t('Oracle')
    },
    {
      value: '3',
      badge: '35',
      text: t('IBM')
    },
    {
      value: '4',
      badge: '45',
      text: t('Microsoft')
    }
  ];
  const sorts = [
    {
      value: '1',
      text: t('Sort by name')
    },
    {
      value: '2',
      text: t('Sort by name')
    },
    {
      value: '3',
      text: t('Sort by status')
    },
    {
      value: '4',
      text: t('Sort by hosts')
    }
  ];

  const actionRef = useRef<any>(null);
  const actionRef1 = useRef<any>(null);
  const [openCluster, setOpenMenuCluster] = useState<boolean>(false);
  const [cluster, setCluster] = useState<string>(clusters[0].text);
  const [openSort, setOpenMenuSort] = useState<boolean>(false);
  const [sort, setSort] = useState<string>('Sort by...');

  return (
    <>
      <Typography
        variant="h3"
        sx={{
          pb: 3
        }}
      >
        {t('Datacenter Clusters')}
      </Typography>
      <Box
        display={{ xs: 'block', md: 'flex' }}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3
        }}
      >
        <Box display="flex" alignItems="center">
          <Button
            sx={{
              mr: 1
            }}
            variant="contained"
            color="secondary"
            ref={actionRef}
            onClick={() => setOpenMenuCluster(true)}
            endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
          >
            {cluster}
          </Button>
          <Menu
            disableScrollLock
            anchorEl={actionRef.current}
            onClose={() => setOpenMenuCluster(false)}
            open={openCluster}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
          >
            {clusters.map((_cluster) => (
              <MenuItem
                key={_cluster.value}
                onClick={() => {
                  setCluster(_cluster.text);
                  setOpenMenuCluster(false);
                }}
              >
                {_cluster.text}
                <Box
                  sx={{
                    ml: 1
                  }}
                >
                  <Label color="success">{_cluster.badge}</Label>
                </Box>
              </MenuItem>
            ))}
          </Menu>
          <TextfieldWrapper>
            <TextField
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                )
              }}
              placeholder={t('Search...')}
            />
          </TextfieldWrapper>
        </Box>
        <Box
          sx={{
            pt: { xs: 2, md: 0 }
          }}
        >
          <Button
            variant="outlined"
            ref={actionRef1}
            onClick={() => setOpenMenuSort(true)}
            endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
          >
            {sort}
          </Button>
          <Menu
            disableScrollLock
            anchorEl={actionRef1.current}
            onClose={() => setOpenMenuSort(false)}
            open={openSort}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            {sorts.map((_sort) => (
              <MenuItem
                key={_sort.value}
                onClick={() => {
                  setSort(_sort.text);
                  setOpenMenuSort(false);
                }}
              >
                {_sort.text}
              </MenuItem>
            ))}
          </Menu>
          <Button
            sx={{
              ml: 1
            }}
            variant="contained"
            startIcon={<AddCircleTwoToneIcon />}
          >
            {t('Create new cluster')}
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={5} lg={4}>
          <CardIndicatorWrapper>
            <Box
              className="MuiCard-indicator"
              sx={{
                background: `${theme.colors.info.main}`
              }}
            />
            <CardContent
              sx={{
                pb: 4,
                pt: 7,
                px: 3,
                textAlign: 'center'
              }}
            >
              <img
                style={{ height: '30px' }}
                src="/static/images/placeholders/logo/netflix-logo.jpg"
                alt="..."
              />
              <Typography
                variant="h3"
                sx={{
                  pt: 2,
                  px: 3
                }}
                gutterBottom
              >
                Mainframe Analytics Cluster for Visitors and Page Views
              </Typography>
              <Typography variant="subtitle2">
                {t('Maintained for')} Netflix Inc.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  mt: 3
                }}
              >
                {t('View details')}
              </Button>
            </CardContent>
            <Divider />
            <CardActionsWrapper
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Typography variant="subtitle1">
                <Text color="black">
                  <b>7</b>
                </Text>{' '}
                {t('hosts')}
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
                variant="subtitle1"
              >
                <IconWrapper
                  sx={{
                    color: `${theme.colors.success.main}`
                  }}
                >
                  <CheckTwoToneIcon />
                </IconWrapper>
                <Text color="success">{t('available')}</Text>
              </Typography>
            </CardActionsWrapper>
          </CardIndicatorWrapper>
        </Grid>
        <Grid item xs={12} sm={6} md={5} lg={4}>
          <CardIndicatorWrapper>
            <Box
              className="MuiCard-indicator"
              sx={{
                background: `${theme.colors.success.main}`
              }}
            />
            <CardContent
              sx={{
                pb: 4,
                pt: 7,
                px: 3,
                textAlign: 'center'
              }}
            >
              <img
                style={{ height: '30px' }}
                src="/static/images/placeholders/logo/google-logo.jpg"
                alt="..."
              />
              <Typography
                variant="h3"
                sx={{
                  pt: 2,
                  px: 3
                }}
                gutterBottom
              >
                Main Website Sales Monitoring Cluster Database
              </Typography>
              <Typography variant="subtitle2">
                {t('Maintained for')} Google Corp.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  mt: 3
                }}
              >
                {t('View details')}
              </Button>
            </CardContent>
            <Divider />
            <CardActionsWrapper
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Typography variant="subtitle1">
                <Text color="black">
                  <b>15</b>
                </Text>{' '}
                {t('hosts')}
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
                variant="subtitle1"
              >
                <IconWrapper
                  sx={{
                    color: `${theme.colors.warning.main}`
                  }}
                >
                  <RefreshTwoToneIcon />
                </IconWrapper>
                <Text color="warning">{t('provisioning')}</Text>
              </Typography>
            </CardActionsWrapper>
          </CardIndicatorWrapper>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={4}>
          <Tooltip arrow title={t('Click to add a new cluster')}>
            <CardAddAction>
              <CardActionArea
                sx={{
                  px: 1
                }}
              >
                <CardContent>
                  <AvatarAddWrapper>
                    <AddTwoToneIcon fontSize="large" />
                  </AvatarAddWrapper>
                </CardContent>
              </CardActionArea>
            </CardAddAction>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
}

export default DatacenterClusters;
