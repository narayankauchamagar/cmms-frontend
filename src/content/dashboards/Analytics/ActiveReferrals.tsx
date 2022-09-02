import {
  Link,
  CardContent,
  Avatar,
  Box,
  Typography,
  ListItemAvatar,
  Card,
  ListItemText,
  ListItem,
  styled
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.primary.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.success};
`
);

const CardContentWrapper = styled(CardContent)(
  ({ theme }) => `
     padding: ${theme.spacing(2.5, 3, 3)};
  
     &:last-child {
     padding-bottom: 0;
     }
`
);

function ActiveReferrals() {
  const { t }: { t: any } = useTranslation();

  return (
    <Card>
      <CardContentWrapper>
        <Typography variant="overline" color="text.primary">
          {t('Active Referrals')}
        </Typography>

        <ListItem
          disableGutters
          sx={{
            my: 1
          }}
          component="div"
        >
          <ListItemAvatar>
            <AvatarSuccess variant="rounded">
              <AssessmentTwoToneIcon fontSize="large" />
            </AvatarSuccess>
          </ListItemAvatar>

          <ListItemText
            primary="275"
            primaryTypographyProps={{
              variant: 'h1',
              sx: {
                ml: 2
              },
              noWrap: true
            }}
          />
        </ListItem>
        <ListItem
          disableGutters
          sx={{
            mt: 0.5,
            mb: 1.5
          }}
          component="div"
        >
          <ListItemText
            primary={
              <>
                <Link fontWeight="bold" href="#">
                  {t('See referring domains')}
                </Link>
                <Box
                  component="span"
                  sx={{
                    pl: 0.5
                  }}
                >
                  {t('which sent most traffic')}.
                </Box>
              </>
            }
            primaryTypographyProps={{ variant: 'body2', noWrap: true }}
          />
        </ListItem>
      </CardContentWrapper>
    </Card>
  );
}

export default ActiveReferrals;
