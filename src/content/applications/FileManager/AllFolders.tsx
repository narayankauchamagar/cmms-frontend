import {
  Card,
  Box,
  Typography,
  Grid,
  Pagination,
  Avatar,
  CardActionArea,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import Text from 'src/components/Text';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
      background: ${theme.colors.primary.lighter};
      color: ${theme.colors.primary.main};
      width: ${theme.spacing(6)};
      height: ${theme.spacing(6)};
`
);

const CardActionAreaWrapper = styled(CardActionArea)(
  ({ theme }) => `
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      overflow: hidden;

      .MuiTouchRipple-root {
        opacity: .3;
      }

      img {
        height: auto;
        width: 100%;
      }

      .MuiCardActionArea-focusHighlight {
        background: ${theme.colors.warning.main};
      }

      &:hover {
        .MuiCardActionArea-focusHighlight {
          opacity: .05;
        }
      }
`
);

function AllFolders() {
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3
        }}
      >
        <Typography variant="h3">{t('All Folders')}</Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardActionAreaWrapper
              sx={{
                p: 2
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex" alignItems="center">
                  <AvatarPrimary
                    sx={{
                      mr: 2
                    }}
                  >
                    <FolderOpenTwoToneIcon />
                  </AvatarPrimary>
                  <Box>
                    <Typography
                      variant="h4"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      Documents for Clients
                    </Typography>
                    <Typography variant="subtitle1">
                      <Text color="black">
                        <b>15</b>
                      </Text>{' '}
                      {t('files')}
                    </Typography>
                  </Box>
                </Box>
                <ChevronRightTwoToneIcon fontSize="large" />
              </Box>
            </CardActionAreaWrapper>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardActionAreaWrapper
              sx={{
                p: 2
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex" alignItems="center">
                  <AvatarPrimary
                    sx={{
                      mr: 2
                    }}
                  >
                    <FolderOpenTwoToneIcon />
                  </AvatarPrimary>
                  <Box>
                    <Typography
                      variant="h4"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      Old Various Documents
                    </Typography>
                    <Typography variant="subtitle1">
                      <Text color="black">
                        <b>236</b>
                      </Text>{' '}
                      {t('files')}
                    </Typography>
                  </Box>
                </Box>
                <ChevronRightTwoToneIcon fontSize="large" />
              </Box>
            </CardActionAreaWrapper>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardActionAreaWrapper
              sx={{
                p: 2
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex" alignItems="center">
                  <AvatarPrimary
                    sx={{
                      mr: 2
                    }}
                  >
                    <FolderOpenTwoToneIcon />
                  </AvatarPrimary>
                  <Box>
                    <Typography
                      variant="h4"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      Holiday Pictures
                    </Typography>
                    <Typography variant="subtitle1">
                      <Text color="black">
                        <b>354</b>
                      </Text>{' '}
                      {t('files')}
                    </Typography>
                  </Box>
                </Box>
                <ChevronRightTwoToneIcon fontSize="large" />
              </Box>
            </CardActionAreaWrapper>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardActionAreaWrapper
              sx={{
                p: 2
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex" alignItems="center">
                  <AvatarPrimary
                    sx={{
                      mr: 2
                    }}
                  >
                    <FolderOpenTwoToneIcon />
                  </AvatarPrimary>
                  <Box>
                    <Typography
                      variant="h4"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      2010 Invoices Archive
                    </Typography>
                    <Typography variant="subtitle1">
                      <Text color="black">
                        <b>6</b>
                      </Text>{' '}
                      {t('files')}
                    </Typography>
                  </Box>
                </Box>
                <ChevronRightTwoToneIcon fontSize="large" />
              </Box>
            </CardActionAreaWrapper>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Box p={2} mb={2} display="flex" justifyContent="center">
            <Pagination count={6} color="primary" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default AllFolders;
