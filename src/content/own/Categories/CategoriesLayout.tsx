import { Fragment, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import MultipleTabsLayout from '../components/MultipleTabsLayout';
import {
  Box,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  styled,
  Typography,
  useTheme
} from '@mui/material';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
    transition: ${theme.transitions.create(['transform', 'background'])};
    transform: scale(1);
    transform-origin: center;

    &:hover {
        transform: scale(1.1);
    }
  `
);

const ListWrapper = styled(List)(
  () => `
      .MuiListItem-root:last-of-type + .MuiDivider-root {
          display: none;
      }
  `
);

interface CategoriesLayoutProps {
  children?: ReactNode;
  tabIndex: number;
  categories: { id: number, name: string }[];
}

function CategoriesLayout(props: CategoriesLayoutProps) {
  const { children, tabIndex, categories } = props;
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();
  const tabs = [
    { value: '', label: t('Work Orders') },
    { value: 'asset-status', label: t('Asset Status') },
    { value: 'purchase-order', label: t('Purchase Orders') },
    { value: 'meter', label: t('Meters') },
    { value: 'time', label: t('Timers') }
  ];

  return <MultipleTabsLayout basePath='/app/categories' tabs={tabs} tabIndex={tabIndex} title='Categories'>
    <Grid item xs={12}>
      <Box p={4}>
        {categories.length ?
          <ListWrapper disablePadding>
            {categories.map((item) => (
              <Fragment key={item.id}>
                <ListItem
                  sx={{
                    display: { xs: 'block', md: 'flex' },
                    py: 1.5,
                    px: 2
                  }}
                >
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        sx={{
                          display: 'block',
                          mb: 1
                        }}
                        variant='h6'
                      >
                        {item.name}
                      </Typography>
                    }
                  />
                  <Box
                    component='span'
                    sx={{
                      display: { xs: 'none', md: 'inline-block' }
                    }}
                  >
                    <Box ml={3} textAlign='right'>
                      <IconButtonWrapper
                        sx={{
                          backgroundColor: `${theme.colors.primary.main}`,
                          color: `${theme.palette.getContrastText(
                            theme.colors.primary.main
                          )}`,
                          transition: `${theme.transitions.create(['all'])}`,

                          '&:hover': {
                            backgroundColor: `${theme.colors.primary.main}`,
                            color: `${theme.palette.getContrastText(
                              theme.colors.primary.main
                            )}`
                          }
                        }}
                        size='small'
                      >
                        <EditTwoToneIcon fontSize='small' />
                      </IconButtonWrapper>
                      <IconButtonWrapper
                        sx={{
                          ml: 1,
                          backgroundColor: `${theme.colors.error.lighter}`,
                          color: `${theme.colors.error.main}`,
                          transition: `${theme.transitions.create(['all'])}`,

                          '&:hover': {
                            backgroundColor: `${theme.colors.error.main}`,
                            color: `${theme.palette.getContrastText(
                              theme.colors.error.main
                            )}`
                          }
                        }}
                        size='small'
                      >
                        <ClearTwoToneIcon fontSize='small' />
                      </IconButtonWrapper>
                    </Box>
                  </Box>
                </ListItem>
                <Divider sx={{ mt: 1 }} />
              </Fragment>
            ))}
          </ListWrapper> :
          <Box display='flex' flexDirection='column' alignItems='center'>
            <Typography variant='h4'>{t(`Looks like you don\'t have any ${tabs[tabIndex].label} Categories yet.`)}
            </Typography>
            <Typography sx={{ mt: 1 }} variant='h6'>{t('Press the "+" button to add your first category.')}</Typography>
          </Box>}
      </Box>
    </Grid>
  </MultipleTabsLayout>
    ;
}

export default CategoriesLayout;
