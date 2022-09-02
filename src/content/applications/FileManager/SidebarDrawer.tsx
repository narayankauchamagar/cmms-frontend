import { useState, ChangeEvent, SyntheticEvent } from 'react';
import {
  ListItemIcon,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
  Box,
  Typography,
  Divider,
  Link,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  CardContent,
  Tabs,
  Tab,
  Tooltip,
  AvatarGroup,
  Grid,
  lighten,
  ListSubheader,
  ListItemAvatar,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { formatDistance, subDays } from 'date-fns';
import { Link as RouterLink } from 'react-router-dom';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';
import TextSnippetTwoToneIcon from '@mui/icons-material/TextSnippetTwoTone';
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
import OpenInNewTwoToneIcon from '@mui/icons-material/OpenInNewTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import GradeTwoToneIcon from '@mui/icons-material/GradeTwoTone';
import ReportTwoToneIcon from '@mui/icons-material/ReportTwoTone';
import DownloadTwoToneIcon from '@mui/icons-material/DownloadTwoTone';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfTwoTone';
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveTwoTone';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import Scrollbar from 'src/components/Scrollbar';

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
    background: ${theme.colors.primary.lighter};
    color: ${theme.colors.primary.main};
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
`
);

const ListSubheaderLarge = styled(ListSubheader)(
  ({ theme }) => `
    background: ${theme.colors.alpha.white[100]};
    color: ${theme.colors.alpha.black[100]};
    font-size: ${theme.typography.pxToRem(19)};
    line-height: ${theme.spacing(6)};
`
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
    background: ${theme.colors.primary.main};
    color: ${theme.colors.alpha.trueWhite[70]};
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    margin: ${theme.spacing(1)};

    &:hover {
        background: ${lighten(theme.colors.primary.main, 0.2)};
        color: ${theme.colors.alpha.trueWhite[100]};
    }
`
);

const ListItemIconWrapper = styled(ListItemIcon)(
  ({ theme }) => `
    min-width: 36px;
    color: ${theme.colors.primary.light};
  `
);

const AccordionSummaryWrapper = styled(AccordionSummary)(
  ({ theme }) => `
    &.Mui-expanded {
      min-height: 48px;
    }

    .MuiAccordionSummary-content.Mui-expanded {
      margin: 12px 0;
    }

    .MuiSvgIcon-root {
      transition: ${theme.transitions.create(['color'])};
    }

    &.MuiButtonBase-root {

      margin-bottom: ${theme.spacing(0.5)};

      &:last-child {
        margin-bottom: 0;
      }

      &.Mui-expanded,
      &:hover {
        background: ${theme.colors.alpha.black[10]};

        .MuiSvgIcon-root {
          color: ${theme.colors.primary.main};
        }
      }
    }
`
);

const TabsContainerWrapper = styled(CardContent)(
  ({ theme }) => `
        background-color: ${theme.colors.alpha.black[5]};

        .MuiTabs-flexContainer {
            justify-content: center;
        }
  `
);

function SidebarDrawer() {
  const { t }: { t: any } = useTranslation();

  const [expanded, setExpanded] = useState<string | false>('section1');

  const handleChange =
    (section: string) => (_event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? section : false);
    };

  const [currentTab, setCurrentTab] = useState<string>('details');

  const tabs = [
    { value: 'details', label: t('Details') },
    { value: 'activity', label: t('Activity') }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <Box
      sx={{
        height: '100%',
        width: { xs: 340, lg: 400 }
      }}
    >
      <Scrollbar>
        <Box
          sx={{
            textAlign: 'center'
          }}
        >
          <AvatarPrimary
            sx={{
              mx: 'auto',
              my: 3
            }}
            variant="rounded"
          >
            <TextSnippetTwoToneIcon fontSize="large" />
          </AvatarPrimary>
          <Typography variant="h3" noWrap gutterBottom>
            FileTransfer.txt
          </Typography>
          <Typography component="span" variant="subtitle2">
            {t('Edited')}{' '}
            {formatDistance(subDays(new Date(), 1), new Date(), {
              addSuffix: true
            })}{' '}
            {t('by')}{' '}
          </Typography>
          <Link href="#">Kate</Link>
        </Box>
        <Divider
          sx={{
            my: 3
          }}
        />

        <TabsContainerWrapper>
          <Tabs
            onChange={handleTabsChange}
            value={currentTab}
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
          >
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </TabsContainerWrapper>

        {currentTab === 'details' && (
          <>
            <Box mt={3} px={3}>
              <Typography variant="h3">{t('Members')}</Typography>
              <Box mt={2} display="flex">
                <AvatarGroup max={6}>
                  <Tooltip arrow title="Remy Sharp">
                    <Avatar
                      component={RouterLink}
                      to="#"
                      alt="Remy Sharp"
                      src="/static/images/avatars/1.jpg"
                    />
                  </Tooltip>
                  <Tooltip arrow title="Travis Howard">
                    <Avatar
                      component={RouterLink}
                      to="#"
                      alt="Travis Howard"
                      src="/static/images/avatars/2.jpg"
                    />
                  </Tooltip>
                  <Tooltip arrow title="Cindy Baker">
                    <Avatar
                      component={RouterLink}
                      to="#"
                      alt="Cindy Baker"
                      src="/static/images/avatars/3.jpg"
                    />
                  </Tooltip>
                  <Tooltip arrow title="Agnes Walker">
                    <Avatar
                      component={RouterLink}
                      to="#"
                      alt="Agnes Walker"
                      src="/static/images/avatars/4.jpg"
                    />
                  </Tooltip>
                </AvatarGroup>
              </Box>
            </Box>
            <Divider
              sx={{
                my: 3
              }}
            />
            <Box px={3}>
              <Typography
                variant="h3"
                sx={{
                  mb: 3
                }}
              >
                {t('Details')}
              </Typography>
              <Grid container spacing={1}>
                <Grid item sm={3}>
                  <Typography variant="subtitle2">{t('Type')}:</Typography>
                </Grid>
                <Grid item sm={9}>
                  <Typography variant="subtitle2" color="text.primary">
                    PDF File
                  </Typography>
                </Grid>
                <Grid item sm={3}>
                  <Typography variant="subtitle2">{t('Size')}:</Typography>
                </Grid>
                <Grid item sm={9}>
                  <Typography variant="subtitle2" color="text.primary">
                    186MB
                  </Typography>
                </Grid>
                <Grid item sm={3}>
                  <Typography variant="subtitle2">{t('Owner')}:</Typography>
                </Grid>
                <Grid item sm={9}>
                  <Link href="#" variant="subtitle2" color="text.primary">
                    Kate Johnson
                  </Link>
                </Grid>
                <Grid item sm={3}>
                  <Typography variant="subtitle2">{t('Modified')}:</Typography>
                </Grid>
                <Grid item sm={9}>
                  <Typography variant="subtitle2" color="text.primary">
                    PDF File
                  </Typography>
                </Grid>
                <Grid item sm={3}>
                  <Typography variant="subtitle2">{t('Opened')}:</Typography>
                </Grid>
                <Grid item sm={9}>
                  <Typography variant="subtitle2" color="text.primary">
                    PDF File
                  </Typography>
                </Grid>
                <Grid item sm={3}>
                  <Typography variant="subtitle2">{t('Created')}:</Typography>
                </Grid>
                <Grid item sm={9}>
                  <Typography variant="subtitle2" color="text.primary">
                    PDF File
                  </Typography>
                </Grid>

                <Grid
                  item
                  sm={12}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle2">
                    {t('Description')}:
                  </Typography>
                  <Button
                    startIcon={<EditTwoToneIcon />}
                    variant="text"
                    size="small"
                  >
                    {t('Edit')}
                  </Button>
                </Grid>
                <Grid item sm={12}>
                  <Typography variant="subtitle2" color="text.primary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Divider
              sx={{
                my: 3
              }}
            />
            <Box px={3}>
              <Typography
                align="center"
                variant="h3"
                sx={{
                  mb: 3
                }}
              >
                {t('Actions')}
              </Typography>
              <Box mb={3} display="flex" justifyContent="center">
                <Tooltip arrow placement="top" title={t('Open')}>
                  <IconButtonWrapper>
                    <OpenInNewTwoToneIcon />
                  </IconButtonWrapper>
                </Tooltip>
                <Tooltip arrow placement="top" title={t('Share')}>
                  <IconButtonWrapper>
                    <ShareTwoToneIcon />
                  </IconButtonWrapper>
                </Tooltip>
                <Tooltip arrow placement="top" title={t('Delete')}>
                  <IconButtonWrapper>
                    <DeleteTwoToneIcon />
                  </IconButtonWrapper>
                </Tooltip>
              </Box>
              <Accordion
                expanded={expanded === 'section1'}
                onChange={handleChange('section1')}
              >
                <AccordionSummaryWrapper expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h5">{t('More actions')}</Typography>
                </AccordionSummaryWrapper>
                <AccordionDetails
                  sx={{
                    p: 0
                  }}
                >
                  <List disablePadding component="nav">
                    <ListItem button>
                      <ListItemIconWrapper>
                        <DownloadTwoToneIcon />
                      </ListItemIconWrapper>
                      <ListItemText
                        primary={t('Download')}
                        primaryTypographyProps={{ variant: 'h5' }}
                      />
                    </ListItem>
                    <ListItem button>
                      <ListItemIconWrapper>
                        <ReportTwoToneIcon />
                      </ListItemIconWrapper>
                      <ListItemText
                        primary={t('Report abuse')}
                        primaryTypographyProps={{ variant: 'h5' }}
                      />
                    </ListItem>
                    <ListItem button>
                      <ListItemIconWrapper>
                        <ContentCopyTwoToneIcon />
                      </ListItemIconWrapper>
                      <ListItemText
                        primary={t('Make a copy')}
                        primaryTypographyProps={{ variant: 'h5' }}
                      />
                    </ListItem>
                    <ListItem button>
                      <ListItemIconWrapper>
                        <DriveFileRenameOutlineTwoToneIcon />
                      </ListItemIconWrapper>
                      <ListItemText
                        primary={t('Rename')}
                        primaryTypographyProps={{ variant: 'h5' }}
                      />
                    </ListItem>
                    <ListItem button>
                      <ListItemIconWrapper>
                        <GradeTwoToneIcon />
                      </ListItemIconWrapper>
                      <ListItemText
                        primary={t('Add to starred')}
                        primaryTypographyProps={{ variant: 'h5' }}
                      />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <Divider
                sx={{
                  my: 3
                }}
              />
            </Box>
          </>
        )}
        {currentTab === 'activity' && (
          <List disablePadding>
            <ListSubheaderLarge disableSticky color="primary">
              {t('Last Week')}
            </ListSubheaderLarge>
            <Divider />
            <ListSubheader disableSticky color="primary">
              {formatDistance(subDays(new Date(), 15), new Date(), {
                addSuffix: true
              })}
            </ListSubheader>
            <Divider />
            <ListItem
              alignItems="flex-start"
              sx={{
                py: 2
              }}
            >
              <ListItemAvatar>
                <Avatar src="/static/images/avatars/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={t('You uploaded two new files')}
                primaryTypographyProps={{
                  variant: 'subtitle2',
                  color: 'textPrimary',
                  noWrap: true,
                  fontWeight: 'bold',
                  gutterBottom: true
                }}
                secondary={
                  <>
                    <Box display="flex" alignItems="center" py={0.5}>
                      <PictureAsPdfTwoToneIcon />
                      <Typography
                        sx={{
                          pl: 1
                        }}
                        variant="body1"
                        color="text.secondary"
                      >
                        PresentationDeck.pdf
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" py={0.5}>
                      <ArchiveTwoToneIcon />
                      <Typography
                        sx={{
                          pl: 1
                        }}
                        variant="body1"
                        color="text.secondary"
                      >
                        HolidayPictures.zip
                      </Typography>
                    </Box>
                    <Divider
                      sx={{
                        my: 2
                      }}
                    />
                    <Typography
                      variant="subtitle2"
                      fontWeight="bold"
                      gutterBottom
                      noWrap
                      color="text.primary"
                    >
                      {t('You created a new folder')}
                    </Typography>
                    <Box display="flex" alignItems="center" py={0.5}>
                      <FolderOpenTwoToneIcon />
                      <Typography
                        sx={{
                          pl: 1
                        }}
                        variant="body1"
                        color="text.secondary"
                      >
                        Clients Presentations
                      </Typography>
                    </Box>
                  </>
                }
                secondaryTypographyProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                  noWrap: true
                }}
              />
            </ListItem>
            <Divider />
            <ListSubheaderLarge disableSticky color="primary">
              {t('Last Month')}
            </ListSubheaderLarge>
            <Divider />
            <ListSubheader disableSticky color="primary">
              {formatDistance(subDays(new Date(), 22), new Date(), {
                addSuffix: true
              })}
            </ListSubheader>
            <Divider />
            <ListItem
              alignItems="flex-start"
              sx={{
                py: 2
              }}
            >
              <ListItemAvatar>
                <Avatar src="/static/images/avatars/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={t('You uploaded one file')}
                primaryTypographyProps={{
                  variant: 'subtitle2',
                  color: 'textPrimary',
                  noWrap: true,
                  fontWeight: 'bold',
                  gutterBottom: true
                }}
                secondary={
                  <Box display="flex" alignItems="center" py={0.5}>
                    <ArchiveTwoToneIcon />
                    <Typography
                      sx={{
                        pl: 1
                      }}
                      variant="body1"
                      color="text.secondary"
                    >
                      InvoicesArchive.zip
                    </Typography>
                  </Box>
                }
                secondaryTypographyProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                  noWrap: true
                }}
              />
            </ListItem>
            <Divider />
          </List>
        )}
      </Scrollbar>
    </Box>
  );
}

export default SidebarDrawer;
