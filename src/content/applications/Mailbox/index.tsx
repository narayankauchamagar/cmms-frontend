import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Grid,
  Divider,
  IconButton,
  styled,
  useTheme
} from '@mui/material';
import { useParams } from 'react-router-dom';
import Results from './Results';
import Single from './Single';
import Sidebar from './Sidebar';
import { getTags } from 'src/slices/mailbox';
import { useDispatch } from 'src/store';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { openSidebar } from 'src/slices/mailbox';

const MainContentWrapper = styled(Box)(
  ({ theme }) => `
  flex-grow: 1;
  min-height: 100%;
  background: ${theme.colors.alpha.white[100]};
`
);

const IconButtonToggle = styled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(6)};
  height: ${theme.spacing(6)};
`
);

function ApplicationsMailbox() {
  const dispatch = useDispatch();
  const { mailboxCategory } = useParams();
  const theme = useTheme();

  const pageRef = useRef<HTMLDivElement | null>(null);

  const handleDrawerToggle = () => {
    dispatch(openSidebar());
  };

  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Mailbox - Applications</title>
      </Helmet>
      <Box
        className="Mui-FixedWrapper"
        sx={{
          minHeight: `calc(100vh - ${theme.header.height} )`
        }}
        display="flex"
      >
        <Sidebar containerRef={pageRef} />
        <MainContentWrapper>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
            <Grid
              item
              xs={12}
              sx={{
                display: { lg: 'none', xs: 'inline-block' }
              }}
            >
              <Box
                display="flex"
                p={1}
                alignItems="center"
                justifyContent="space-between"
              >
                <IconButtonToggle
                  color="primary"
                  onClick={handleDrawerToggle}
                  size="small"
                >
                  <MenuTwoToneIcon />
                </IconButtonToggle>
              </Box>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Box className="Mui-FixedWrapperContent">
                {mailboxCategory ? <Single /> : <Results />}
              </Box>
            </Grid>
          </Grid>
        </MainContentWrapper>
      </Box>
    </>
  );
}

export default ApplicationsMailbox;
