import {
  Button,
  Card,
  Box,
  Badge,
  CardHeader,
  CardActions,
  Tooltip,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  useTheme,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import GradeTwoToneIcon from '@mui/icons-material/GradeTwoTone';

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: ${theme.spacing(2)};
    height: ${theme.spacing(2)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
    border: ${theme.colors.alpha.white[100]} solid 2px;
`
);

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(9)};
    height: ${theme.spacing(9)};
`
);

const RatingWrapper = styled(Box)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacing(0.5)};
    margin-left: -${theme.spacing(0.5)};
    
    color: ${theme.colors.alpha.black[100]};
    
    .MuiSvgIcon-root {
      color: ${theme.colors.warning.main};      
    }
`
);

function Doctors() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <CardHeader title={t('Doctors')} />
      <Divider />
      <List>
        <ListItem
          sx={{
            py: 2.5
          }}
          alignItems="flex-start"
        >
          <ListItemAvatar>
            <Badge
              overlap="rectangular"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              badgeContent={
                <Tooltip arrow placement="top" title={t('Idle for 5 minutes')}>
                  <DotLegend
                    style={{ background: `${theme.colors.warning.main}` }}
                  />
                </Tooltip>
              }
            >
              <AvatarWrapper
                variant="rounded"
                alt="Remy Sharp"
                src="/static/images/avatars/3.jpg"
              />
            </Badge>
          </ListItemAvatar>
          <ListItemText
            sx={{
              pl: 2
            }}
            primary={
              <>
                <RatingWrapper>
                  <GradeTwoToneIcon />
                  <b>5.0</b>
                </RatingWrapper>

                <Typography variant="h4" gutterBottom>
                  James Workman
                </Typography>
              </>
            }
            secondary={t('Pediatrician')}
            secondaryTypographyProps={{ variant: 'subtitle2' }}
          />
          <Box alignSelf="center">
            <Button size="small" variant="outlined">
              {t('View Profile')}
            </Button>
          </Box>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem
          sx={{
            py: 2.5
          }}
          alignItems="flex-start"
        >
          <ListItemAvatar>
            <Badge
              overlap="rectangular"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              badgeContent={
                <DotLegend
                  style={{ background: `${theme.colors.success.main}` }}
                />
              }
            >
              <AvatarWrapper
                variant="rounded"
                alt="Remy Sharp"
                src="/static/images/avatars/4.jpg"
              />
            </Badge>
          </ListItemAvatar>
          <ListItemText
            sx={{
              pl: 2
            }}
            primary={
              <>
                <RatingWrapper>
                  <GradeTwoToneIcon />
                  <b>4.7</b>
                </RatingWrapper>

                <Typography variant="h4" gutterBottom>
                  Abram Schleifer
                </Typography>
              </>
            }
            secondary={t('Neurologist')}
            secondaryTypographyProps={{ variant: 'subtitle2' }}
          />
          <Box alignSelf="center">
            <Button size="small" variant="outlined">
              {t('View Profile')}
            </Button>
          </Box>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem
          sx={{
            py: 2.5
          }}
          alignItems="flex-start"
        >
          <ListItemAvatar>
            <AvatarWrapper
              variant="rounded"
              alt="Remy Sharp"
              src="/static/images/avatars/2.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            sx={{
              pl: 2
            }}
            primary={
              <>
                <RatingWrapper>
                  <GradeTwoToneIcon />
                  <b>4.5</b>
                </RatingWrapper>

                <Typography variant="h4" gutterBottom>
                  Livia Culhane
                </Typography>
              </>
            }
            secondary={t('Cardiologist')}
            secondaryTypographyProps={{ variant: 'subtitle2' }}
          />
          <Box alignSelf="center">
            <Button size="small" variant="outlined">
              {t('View Profile')}
            </Button>
          </Box>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem
          sx={{
            py: 2.5
          }}
          alignItems="flex-start"
        >
          <ListItemAvatar>
            <AvatarWrapper
              variant="rounded"
              alt="Remy Sharp"
              src="/static/images/avatars/4.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            sx={{
              pl: 2
            }}
            primary={
              <>
                <RatingWrapper>
                  <GradeTwoToneIcon />
                  <b>3.9</b>
                </RatingWrapper>

                <Typography variant="h4" gutterBottom>
                  Andy Smith
                </Typography>
              </>
            }
            secondary={t('Ophthalmologist')}
            secondaryTypographyProps={{ variant: 'subtitle2' }}
          />
          <Box alignSelf="center">
            <Button size="small" variant="outlined">
              {t('View Profile')}
            </Button>
          </Box>
        </ListItem>
      </List>
      <Divider />
      <CardActions
        sx={{
          justifyContent: 'center',
          py: 2
        }}
      >
        <Button
          variant="contained"
          size="small"
          endIcon={<ArrowForwardTwoToneIcon fontSize="small" />}
        >
          {t('View all doctors')}
        </Button>
      </CardActions>
    </Card>
  );
}

export default Doctors;
