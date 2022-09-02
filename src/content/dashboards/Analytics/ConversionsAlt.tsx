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
import LocalConvenienceStoreTwoToneIcon from '@mui/icons-material/LocalConvenienceStoreTwoTone';

const AvatarWarning = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.warning.main};
      color:  ${theme.palette.primary.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.warning};
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

function ConversionsAlt() {
  const { t }: { t: any } = useTranslation();

  return (
    <Card>
      <CardContentWrapper>
        <Typography variant="overline" color="text.primary">
          {t('Conversion')}
        </Typography>

        <ListItem
          disableGutters
          sx={{
            my: 1
          }}
          component="div"
        >
          <ListItemAvatar>
            <AvatarWarning variant="rounded">
              <LocalConvenienceStoreTwoToneIcon fontSize="large" />
            </AvatarWarning>
          </ListItemAvatar>

          <ListItemText
            primary="55.2%"
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
                  {t('See products')}
                </Link>
                <Box
                  component="span"
                  sx={{
                    pl: 0.5
                  }}
                >
                  {t('with the best conversion rates.')}
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

export default ConversionsAlt;
