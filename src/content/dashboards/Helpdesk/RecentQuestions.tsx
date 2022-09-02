import {
  Button,
  Card,
  Box,
  CardHeader,
  CardActions,
  Typography,
  Link,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Pagination,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { formatDistance, subHours, subMinutes } from 'date-fns';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
`
);

const BoxWrapper = styled(Box)(
  ({ theme }) => `
    border-radius: ${theme.general.borderRadius};
    background: ${theme.colors.alpha.black[10]};
`
);

const ButtonWrapper = styled(Button)(
  ({ theme }) => `
    color: ${theme.colors.primary.main};
    background: ${theme.colors.alpha.white[70]};
    font-weight: normal;
    
    &:hover {
      color: ${theme.colors.alpha.black[100]};
      background: ${theme.colors.alpha.white[100]};
    }
`
);

const DividerWrapper = styled(Divider)(
  ({ theme }) => `
    background: ${theme.colors.alpha.black[10]};
`
);

function RecentQuestions() {
  const { t }: { t: any } = useTranslation();

  return (
    <Card>
      <CardHeader title={t('Recent Questions')} />
      <Divider />
      <List disablePadding>
        <ListItem
          alignItems="flex-start"
          sx={{
            display: { xs: 'block', sm: 'flex' },
            py: 3
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2
            }}
          >
            <AvatarWrapper
              sx={{
                mb: { xs: 2, sm: 0 }
              }}
              variant="rounded"
              src="/static/images/avatars/2.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <>
                <Typography
                  variant="subtitle2"
                  sx={{
                    pb: 1
                  }}
                >
                  <b>Joe</b> {t('asked this question')}{' '}
                  <b>
                    {formatDistance(subHours(new Date(), 6), new Date(), {
                      addSuffix: true
                    })}
                  </b>
                  , {t('in')} <Link href="#">{t('Product Support')}</Link>
                </Typography>
                Can I use this template in React apps?
              </>
            }
            primaryTypographyProps={{
              variant: 'h3',
              sx: {
                pb: 2
              }
            }}
            secondary={
              <>
                <div>
                  Nor again is there anyone who loves or pursues or desires to
                  obtain pain of itself, because it is pain, but because
                  occasionally circumstances occur in which toil and pain can
                  procure him some great pleasure.
                </div>
                <BoxWrapper
                  display="flex"
                  alignItems="stretch"
                  justifyContent="space-between"
                  mt={2}
                  p={1}
                >
                  <Box display="flex" alignItems="center">
                    <ButtonWrapper
                      size="small"
                      color="secondary"
                      variant="text"
                    >
                      <b>14</b>&nbsp;{t('replies')}
                    </ButtonWrapper>
                    <DividerWrapper
                      sx={{
                        mx: 2
                      }}
                      orientation="vertical"
                      flexItem
                    />
                    <Typography variant="body2" color="text.primary">
                      <b>420</b> {t('views')}
                    </Typography>
                  </Box>
                  <Button size="small" color="primary" variant="contained">
                    {t('Answer')}
                  </Button>
                </BoxWrapper>
              </>
            }
            secondaryTypographyProps={{
              variant: 'body1',
              color: 'textPrimary'
            }}
          />
        </ListItem>
        <Divider component="li" />
        <ListItem
          alignItems="flex-start"
          sx={{
            display: { xs: 'block', sm: 'flex' },
            py: 3
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2
            }}
          >
            <AvatarWrapper
              sx={{
                mb: { xs: 2, sm: 0 }
              }}
              variant="rounded"
              src="/static/images/avatars/4.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <>
                <Typography
                  variant="subtitle2"
                  sx={{
                    pb: 1
                  }}
                >
                  <b>Horia</b> {t('asked this question')}{' '}
                  <b>
                    {formatDistance(subMinutes(new Date(), 32), new Date(), {
                      addSuffix: true
                    })}
                  </b>
                  , {t('in')} <Link href="#">{t('Troubleshooting')}</Link>
                </Typography>
                How should I proceed with integration?
              </>
            }
            primaryTypographyProps={{
              variant: 'h3',
              sx: {
                pb: 2
              }
            }}
            secondary={
              <>
                <div>
                  A long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </div>
                <BoxWrapper
                  display="flex"
                  alignItems="stretch"
                  justifyContent="space-between"
                  mt={2}
                  p={1}
                >
                  <Box display="flex" alignItems="center">
                    <ButtonWrapper
                      size="small"
                      color="secondary"
                      variant="text"
                    >
                      <b>3</b>&nbsp;{t('replies')}
                    </ButtonWrapper>
                    <DividerWrapper
                      sx={{
                        mx: 2
                      }}
                      orientation="vertical"
                      flexItem
                    />
                    <Typography variant="body2" color="text.primary">
                      <b>323</b> {t('views')}
                    </Typography>
                  </Box>
                  <Button size="small" color="primary" variant="contained">
                    {t('Answer')}
                  </Button>
                </BoxWrapper>
              </>
            }
            secondaryTypographyProps={{
              variant: 'body1',
              color: 'textPrimary'
            }}
          />
        </ListItem>
      </List>
      <Divider />
      <CardActions
        disableSpacing
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Pagination
          variant="outlined"
          showFirstButton
          showLastButton
          shape="rounded"
          count={11}
          defaultPage={6}
          siblingCount={0}
          boundaryCount={2}
          color="primary"
        />
      </CardActions>
    </Card>
  );
}

export default RecentQuestions;
