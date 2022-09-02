import { useState, useEffect, useCallback } from 'react';

import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import Sidebar from './Sidebar';

import {
  TextField,
  Divider,
  Card,
  Stack,
  Box,
  Autocomplete,
  Grid,
  IconButton,
  Drawer,
  styled,
  useTheme
} from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { useTranslation } from 'react-i18next';
import axios from 'src/utils/axios';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

import useRefMounted from 'src/hooks/useRefMounted';
import type { Job } from 'src/models/job';

import Results from './Results';
import Scrollbar from 'src/components/Scrollbar';

const SearchIconWrapper = styled(SearchTwoToneIcon)(
  ({ theme }) => `
        color: ${theme.colors.alpha.black[30]}
`
);

const DrawerWrapperMobile = styled(Drawer)(
  () => `
    width: 340px;
    flex-shrink: 0;

  & > .MuiPaper-root {
        width: 340px;
        z-index: 3;
  }
`
);

const IconButtonToggle = styled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(6)};
  height: ${theme.spacing(6)};
  position: absolute;
  background: ${theme.colors.alpha.white[100]};
  z-index: 5;
  top: calc(${theme.header.height} + ${theme.spacing(4)});
`
);

const jobsTags = [
  { title: 'QA Engineer' },
  { title: 'Team Lead' },
  { title: 'React Developer' },
  { title: 'Project Manager' }
];

const jobsLocations = [
  { title: 'Bucharest, Romania' },
  { title: 'San Francisco, USA' },
  { title: 'Madrid, Spain' },
  { title: 'Berlin, Germany' },
  { title: 'Paris, France' },
  { title: 'London, UK' }
];

function ApplicationsJobsPlatform() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isMountedRef = useRefMounted();
  const [jobs, setJobs] = useState<Job[]>([]);

  const getJobs = useCallback(async () => {
    try {
      const response = await axios.get<{ jobs: Job[] }>('/api/jobs');

      if (isMountedRef.current) {
        setJobs(response.data.jobs);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getJobs();
  }, [getJobs]);

  return (
    <>
      <Helmet>
        <title>Jobs Platform - Applications</title>
      </Helmet>

      <Grid
        sx={{
          px: 4
        }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item xs={12}>
          <Box mt={4}>
            <PageHeader />
          </Box>
          <IconButtonToggle
            sx={{
              display: { lg: 'none', xs: 'flex' }
            }}
            color="primary"
            onClick={handleDrawerToggle}
            size="small"
          >
            <MenuTwoToneIcon />
          </IconButtonToggle>
        </Grid>
        <Grid item xs={12}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Box display={{ xs: 'none', lg: 'flex' }} ml={2} flexShrink={1}>
              <SearchIconWrapper />
            </Box>
            <Stack
              sx={{
                p: 2,
                flex: 1
              }}
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-evenly"
              alignItems="center"
              spacing={2}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Autocomplete
                multiple
                fullWidth
                limitTags={2}
                options={jobsTags}
                // @ts-ignore
                getOptionLabel={(option) => option.title}
                defaultValue={[jobsTags[0], jobsTags[1]]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    variant="outlined"
                    label={t('Jobs Tags')}
                    placeholder={t('Select tags...')}
                  />
                )}
              />
              <Autocomplete
                fullWidth
                multiple
                limitTags={2}
                options={jobsLocations}
                // @ts-ignore
                getOptionLabel={(option) => option.title}
                defaultValue={[jobsLocations[1]]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    variant="outlined"
                    label={t('Location')}
                    placeholder={t('Select location...')}
                  />
                )}
              />
            </Stack>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          lg={3}
          sx={{
            display: { xs: 'none', lg: 'inline-block' }
          }}
        >
          <Card>
            <Sidebar />
          </Card>
        </Grid>
        <Grid item xs={12} lg={9}>
          {jobs && <Results jobs={jobs} />}
        </Grid>
      </Grid>
      <DrawerWrapperMobile
        sx={{
          display: { lg: 'none', xs: 'inline-block' }
        }}
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        <Scrollbar>
          <Sidebar />
        </Scrollbar>
      </DrawerWrapperMobile>
      <Footer />
    </>
  );
}

export default ApplicationsJobsPlatform;
