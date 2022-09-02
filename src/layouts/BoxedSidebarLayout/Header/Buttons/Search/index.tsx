import {
  Fragment,
  forwardRef,
  Ref,
  useState,
  ReactElement,
  ChangeEvent
} from 'react';
import {
  Link,
  Box,
  Divider,
  IconButton,
  List,
  CircularProgress,
  ListItem,
  Grid,
  InputBase,
  Tooltip,
  Typography,
  Card,
  Dialog,
  alpha,
  Slide,
  styled,
  useTheme
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { useTranslation } from 'react-i18next';
import ContactSupportTwoToneIcon from '@mui/icons-material/ContactSupportTwoTone';
import Scrollbar from 'src/components/Scrollbar';
import RestoreTwoToneIcon from '@mui/icons-material/RestoreTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import AppSettingsAltTwoToneIcon from '@mui/icons-material/AppSettingsAltTwoTone';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';

const wait = (time: number): Promise<void> =>
  new Promise((res) => setTimeout(res, time));

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const DialogWrapper = styled(Dialog)(
  () => `
    .MuiDialog-container {
        height: auto;
    }
    
    .MuiDialog-paperScrollPaper {
        max-height: calc(100vh - 64px)
    }
`
);

const SearchInputWrapper = styled(InputBase)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(18)};
    padding: ${theme.spacing(2)};
    width: 100%;
`
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
        width: ${theme.spacing(6)};
        height: ${theme.spacing(6)};
`
);

const ListButton = styled(Box)(
  ({ theme }) => `
      background-color: transparent;
      color:  ${theme.colors.alpha.black[100]};
      transition: ${theme.transitions.create(['all'])};
      border: ${theme.colors.alpha.black[10]} solid 1px;
      border-radius: ${theme.general.borderRadius};
      padding: ${theme.spacing(1)};
      margin: ${theme.spacing(1, 0)};
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > div > .MuiSvgIcon-root {
        color:  ${theme.colors.alpha.black[50]};
        transition: ${theme.transitions.create(['all'])};
      }

      &:hover {
        background-color: ${alpha(theme.colors.primary.main, 0.08)};
        color:  ${theme.colors.primary.main};
        border-color: ${alpha(theme.colors.primary.main, 0.3)};

        & > div > .MuiSvgIcon-root {
          color:  ${theme.colors.primary.main};
        }
      }
`
);

const searchTerms = {
  Dashboards: [
    {
      title: 'Automation UI'
    },
    {
      title: 'Banking Performance'
    },
    {
      title: 'Fitness Statistics'
    }
  ],
  Applications: [
    {
      title: 'Events Manager'
    },
    {
      title: 'Messenging Platform'
    }
  ],
  Management: [
    {
      title: 'Products Admin'
    },
    {
      title: 'Customers Database'
    },
    {
      title: 'Learning Center'
    },
    {
      title: 'Invoices Archive'
    }
  ]
};

function HeaderSearch() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const [searchValue, setSearchValue] = useState<string>('');
  const [searchLoading, setSearchLoading] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<boolean>(false);

  const submitSearch = async (event): Promise<void> => {
    event.preventDefault();
    setSearchResults(false);
    setSearchLoading(true);
    await wait(1500);
    setSearchLoading(false);
    setSearchResults(true);
  };

  const handleSearchChange = async (event: ChangeEvent<{ value: unknown }>) => {
    event.preventDefault();

    if (event.target.value) {
      setSearchResults(false);
      setSearchValue(event.target.value as string);
      setSearchLoading(true);
      await wait(1500);
      setSearchLoading(false);
      setSearchResults(true);
    } else {
      setSearchValue('');
      setSearchResults(false);
    }
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip arrow title={t('Search')}>
        <IconButtonWrapper color="secondary" onClick={handleClickOpen}>
          <SearchTwoToneIcon />
        </IconButtonWrapper>
      </Tooltip>

      <DialogWrapper
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth="sm"
        fullWidth
        scroll="paper"
        onClose={handleClose}
      >
        <Box>
          <form onSubmit={submitSearch}>
            <Box display="flex" alignItems="center">
              <Box flexGrow={1} display="flex" alignItems="center">
                <SearchTwoToneIcon
                  sx={{
                    ml: 2,
                    color: theme.colors.secondary.main
                  }}
                />
                <SearchInputWrapper
                  value={searchValue}
                  onChange={handleSearchChange}
                  autoFocus
                  placeholder={t('Search terms here...')}
                  fullWidth
                />
              </Box>
              <Card
                sx={{
                  ml: 'auto',
                  mr: 2,
                  py: 0.5,
                  px: 1,
                  background: theme.colors.alpha.black[10]
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight="bold"
                >
                  esc
                </Typography>
              </Card>
            </Box>
          </form>
        </Box>
        <Divider />
        {!searchLoading && (
          <>
            {!searchResults && (
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  background: theme.colors.info.lighter,
                  color: theme.colors.info.main,
                  borderRadius: theme.general.borderRadius,
                  fontSize: theme.typography.pxToRem(13),
                  display: 'flex',
                  alignItems: 'center',
                  p: 1,
                  mx: 2,
                  my: 2
                }}
              >
                <ContactSupportTwoToneIcon
                  sx={{
                    mr: 0.8,
                    fontSize: theme.typography.pxToRem(18)
                  }}
                />
                {t('Start typing to see the search results...')}
              </Typography>
            )}
          </>
        )}
        {searchLoading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              my: 5
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            {searchResults ? (
              <Box
                sx={{
                  height: 450
                }}
              >
                <Scrollbar>
                  {Object.keys(searchTerms).map((type, index) => (
                    <Box px={2} py={1} key={index}>
                      <Typography
                        sx={{
                          py: 1
                        }}
                        variant="h5"
                      >
                        {type}
                      </Typography>
                      {searchTerms[type].map((result) => (
                        <Fragment key={result.title}>
                          <ListButton>
                            <Box display="flex" alignItems="flex-start">
                              <RestoreTwoToneIcon
                                sx={{
                                  mr: 1
                                }}
                                fontSize="small"
                              />
                              <Typography>{result.title}</Typography>
                            </Box>
                            <KeyboardArrowRightTwoToneIcon fontSize="small" />
                          </ListButton>
                        </Fragment>
                      ))}
                    </Box>
                  ))}
                </Scrollbar>
              </Box>
            ) : (
              <Box
                sx={{
                  height: 450
                }}
              >
                <Scrollbar>
                  <Box pb={2} px={2}>
                    <Typography
                      sx={{
                        pb: 0.5
                      }}
                      variant="h5"
                    >
                      {t('Recent searches')}
                    </Typography>
                    <ListButton>
                      <Box display="flex" alignItems="center">
                        <RestoreTwoToneIcon
                          sx={{
                            mr: 1
                          }}
                          fontSize="small"
                        />
                        <Typography>Analytics dashboard</Typography>
                      </Box>
                      <Box>
                        <Tooltip
                          placement="top"
                          arrow
                          title={t('Save this search')}
                        >
                          <IconButton size="small" color="primary">
                            <StarTwoToneIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip
                          placement="top"
                          arrow
                          title={t('Remove this search from history')}
                        >
                          <IconButton size="small" color="error">
                            <CloseTwoToneIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </ListButton>
                    <ListButton>
                      <Box display="flex" alignItems="center">
                        <RestoreTwoToneIcon
                          sx={{
                            mr: 1
                          }}
                          fontSize="small"
                        />
                        <Typography>Top navigation layout</Typography>
                      </Box>
                      <Box>
                        <Tooltip
                          placement="top"
                          arrow
                          title={t('Save this search')}
                        >
                          <IconButton size="small" color="primary">
                            <StarTwoToneIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip
                          placement="top"
                          arrow
                          title={t('Remove this search from history')}
                        >
                          <IconButton size="small" color="error">
                            <CloseTwoToneIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </ListButton>
                    <Typography
                      sx={{
                        pt: 2,
                        pb: 0.5
                      }}
                      variant="h5"
                    >
                      {t('Saved searches')}
                    </Typography>
                    <ListButton>
                      <Box display="flex" alignItems="center">
                        <StarTwoToneIcon
                          sx={{
                            mr: 1
                          }}
                          fontSize="small"
                        />
                        <Typography>Hospital overview page</Typography>
                      </Box>
                      <Box>
                        <Tooltip
                          placement="top"
                          arrow
                          title={t('Remove this search from favourites')}
                        >
                          <IconButton size="small" color="error">
                            <CloseTwoToneIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </ListButton>
                    <Divider
                      sx={{
                        my: 4
                      }}
                    />
                    <Typography variant="h5">
                      {t('Popular searches')}
                    </Typography>
                    <Box p={4}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <Box
                            display="flex"
                            mb={1}
                            fontSize={13}
                            alignItems="center"
                          >
                            <DashboardTwoToneIcon
                              sx={{
                                color: theme.colors.primary.main,
                                fontSize: theme.typography.pxToRem(18),
                                mr: 1
                              }}
                            />
                            <b>{t('Dashboards')}</b>
                          </Box>
                          <List disablePadding>
                            <ListItem
                              sx={{
                                pl: 3,
                                py: 0.4
                              }}
                              disableGutters
                            >
                              <Link href="#" color="primary" fontSize={13}>
                                {t('Tasks for today')}
                              </Link>
                            </ListItem>
                            <ListItem
                              sx={{
                                pl: 3,
                                py: 0.4
                              }}
                              disableGutters
                            >
                              <Link href="#" color="primary" fontSize={13}>
                                {t('Statistics dashboard')}
                              </Link>
                            </ListItem>
                            <ListItem
                              sx={{
                                pl: 3,
                                py: 0.4
                              }}
                              disableGutters
                            >
                              <Link href="#" color="primary" fontSize={13}>
                                {t('Monitoring admin')}
                              </Link>
                            </ListItem>
                            <ListItem
                              sx={{
                                pl: 3,
                                py: 0.4
                              }}
                              disableGutters
                            >
                              <Link href="#" color="primary" fontSize={13}>
                                {t('Banking interface')}
                              </Link>
                            </ListItem>
                          </List>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Box
                            display="flex"
                            mb={1}
                            fontSize={13}
                            alignItems="center"
                          >
                            <AppSettingsAltTwoToneIcon
                              sx={{
                                color: theme.colors.primary.main,
                                fontSize: theme.typography.pxToRem(18),
                                mr: 1
                              }}
                            />
                            <b>{t('Management')}</b>
                          </Box>
                          <List disablePadding>
                            <ListItem
                              sx={{
                                pl: 3,
                                py: 0.4
                              }}
                              disableGutters
                            >
                              <Link href="#" color="primary" fontSize={13}>
                                {t('Calendar')}
                              </Link>
                            </ListItem>
                            <ListItem
                              sx={{
                                pl: 3,
                                py: 0.4
                              }}
                              disableGutters
                            >
                              <Link href="#" color="primary" fontSize={13}>
                                {t('File manager')}
                              </Link>
                            </ListItem>
                            <ListItem
                              sx={{
                                pl: 3,
                                py: 0.4
                              }}
                              disableGutters
                            >
                              <Link href="#" color="primary" fontSize={13}>
                                {t('Products list')}
                              </Link>
                            </ListItem>
                            <ListItem
                              sx={{
                                pl: 3,
                                py: 0.4
                              }}
                              disableGutters
                            >
                              <Link href="#" color="primary" fontSize={13}>
                                {t('Recent orders')}
                              </Link>
                            </ListItem>
                          </List>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Scrollbar>
              </Box>
            )}
          </>
        )}
      </DialogWrapper>
    </>
  );
}

export default HeaderSearch;
