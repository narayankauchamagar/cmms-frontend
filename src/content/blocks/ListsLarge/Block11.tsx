import { Fragment } from 'react';

import {
  Box,
  ListItemAvatar,
  ListItemText,
  Divider,
  List,
  Card,
  alpha,
  IconButton,
  Typography,
  styled,
  ListItem,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import InsertDriveFileTwoToneIcon from '@mui/icons-material/InsertDriveFileTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import Scrollbar from 'src/components/Scrollbar';

const DividerWrapper = styled(Divider)(
  ({ theme }) => `
    background: ${theme.colors.alpha.trueWhite[10]};
  `
);

const ListItemWrapper = styled(ListItem)(
  ({ theme }) => `
    padding: ${theme.spacing(1.5, 2)};
    background: ${theme.colors.alpha.trueWhite[10]};
    margin-bottom: ${theme.spacing(2)};
    border-radius: ${theme.general.borderRadiusSm};
    color: ${theme.colors.alpha.trueWhite[100]};
    box-shadow: 
        0 0.56875rem 3.3rem rgba(0,0,0, .05),
        0 0.9975rem 2.4rem rgba(0,0,0, .07),
        0 0.35rem 1rem rgba(0,0,0, .1),
        0 0.225rem 0.8rem rgba(0,0,0, .15);

    &:last-of-type {
        margin-bottom: 0;
    }
  `
);

function Block11() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const items = [
    {
      id: 1,
      name: 'feb2020_reports.xls',
      size: '386 KB'
    },
    {
      id: 2,
      name: 'feb2020_pres_8.doc',
      size: '1.34 MB'
    },
    {
      id: 3,
      name: 'PhotosArchive.zip',
      size: '34.2 GB'
    },
    {
      id: 4,
      name: 'homepage_new_12.tsx',
      size: '27 KB'
    },
    {
      id: 5,
      name: 'latest_comps_2022.sketch',
      size: '548.21 MB'
    }
  ];

  return (
    <Card
      sx={{
        background: `${theme.colors.gradients.black2}`,
        color: `${theme.colors.alpha.trueWhite[100]}`
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          background: `${theme.colors.alpha.black[5]}`
        }}
        p={2}
      >
        <Box>
          <Typography
            variant="caption"
            fontWeight="bold"
            sx={{
              color: `${theme.colors.alpha.trueWhite[70]}`,
              fontSize: `${theme.typography.pxToRem(12)}`
            }}
          >
            {t('Storage')}
          </Typography>
          <Typography variant="h4">{t('Recent Files')}</Typography>
        </Box>
        <IconButton
          size="small"
          sx={{
            alignSelf: 'center',
            fontWeight: 'normal',
            backgroundColor: `${theme.colors.alpha.trueWhite[10]}`,
            color: `${theme.colors.alpha.trueWhite[70]}`,
            transition: `${theme.transitions.create(['all'])}`,

            '&:hover': {
              backgroundColor: `${alpha(
                theme.colors.alpha.trueWhite[100],
                0.2
              )}`,
              color: `${theme.colors.alpha.trueWhite[100]}`
            }
          }}
        >
          <MoreVertTwoToneIcon />
        </IconButton>
      </Box>
      <DividerWrapper />
      <Box
        sx={{
          height: 384
        }}
      >
        <Scrollbar>
          <List
            sx={{
              p: 2
            }}
          >
            {items.map((item) => (
              <Fragment key={item.id}>
                <ListItemWrapper
                  secondaryAction={
                    <IconButton
                      size="small"
                      sx={{
                        alignSelf: 'center',
                        fontWeight: 'normal',
                        backgroundColor: `${alpha(
                          theme.colors.alpha.trueWhite[100],
                          0
                        )}`,
                        color: `${theme.colors.alpha.trueWhite[70]}`,

                        '&:hover': {
                          backgroundColor: `${alpha(
                            theme.colors.alpha.trueWhite[100],
                            0.2
                          )}`,
                          color: `${theme.colors.alpha.trueWhite[100]}`
                        }
                      }}
                    >
                      <MoreHorizTwoToneIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar
                    sx={{
                      color: `${theme.colors.alpha.trueWhite[50]}`,
                      minWidth: 0,
                      mr: 2
                    }}
                  >
                    <InsertDriveFileTwoToneIcon fontSize="large" />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{
                      flexGrow: 0,
                      maxWidth: '50%',
                      flexBasis: '50%'
                    }}
                    disableTypography
                    primary={
                      <Typography
                        noWrap
                        gutterBottom
                        sx={{
                          color: `${theme.colors.alpha.trueWhite[100]}`
                        }}
                        variant="h4"
                      >
                        {item.name}
                      </Typography>
                    }
                    secondary={
                      <>
                        <Typography
                          sx={{
                            color: `${theme.colors.alpha.trueWhite[70]}`
                          }}
                          variant="body1"
                        >
                          {item.size}
                        </Typography>
                      </>
                    }
                  />
                </ListItemWrapper>
              </Fragment>
            ))}
          </List>
        </Scrollbar>
      </Box>
    </Card>
  );
}

export default Block11;
