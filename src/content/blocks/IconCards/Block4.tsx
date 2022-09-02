import {
  Grid,
  Box,
  CardActionArea,
  Card,
  Avatar,
  Typography,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import Text from 'src/components/Text';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import Label from 'src/components/Label';

const CardActionAreaWrapper = styled(CardActionArea)(
  ({ theme }) => `
    padding: ${theme.spacing(2.5)};
    display: flex;
    align-items: center;
    justify-content: space-between;

    .MuiTouchRipple-root {
        opacity: .15;
    }

    &:hover {
        .MuiCardActionArea-focusHighlight {
            opacity: .02;
        }
    }
  `
);

function Block4() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardActionAreaWrapper>
            <Box display="flex" alignItems="center">
              <Avatar
                sx={{
                  width: 64,
                  height: 64,
                  background: `${theme.colors.success.main}`,
                  color: `${theme.palette.success.contrastText}`
                }}
              >
                <PersonTwoToneIcon />
              </Avatar>
              <Box ml={1.5}>
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  sx={{
                    fontSize: `${theme.typography.pxToRem(16)}`
                  }}
                >
                  {t('Project management')}
                </Typography>
                <Typography
                  sx={{
                    fontSize: `${theme.typography.pxToRem(14)}`
                  }}
                >
                  <Text color="success">+5,46%</Text>
                </Typography>
              </Box>
            </Box>
            <Typography
              component="span"
              color="text.secondary"
              sx={{
                opacity: 0.7,
                display: 'flex'
              }}
            >
              <ArrowForwardTwoToneIcon />
            </Typography>
          </CardActionAreaWrapper>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardActionAreaWrapper>
            <Box display="flex" alignItems="center">
              <Avatar
                sx={{
                  width: 64,
                  height: 64,
                  background: `${theme.colors.warning.main}`,
                  color: `${theme.palette.warning.contrastText}`
                }}
              >
                <SubscriptionsTwoToneIcon />
              </Avatar>
              <Box ml={1.5}>
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  sx={{
                    fontSize: `${theme.typography.pxToRem(16)}`
                  }}
                >
                  {t('Analytics statistics')}
                </Typography>
                <Typography
                  sx={{
                    fontSize: `${theme.typography.pxToRem(14)}`
                  }}
                >
                  <Text color="warning">487 {t('new users')}</Text>
                </Typography>
              </Box>
            </Box>
            <Typography
              component="span"
              color="text.secondary"
              sx={{
                opacity: 0.7,
                display: 'flex'
              }}
            >
              <ArrowForwardTwoToneIcon />
            </Typography>
          </CardActionAreaWrapper>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardActionAreaWrapper>
            <Box display="flex" alignItems="center">
              <Avatar
                sx={{
                  width: 64,
                  height: 64,
                  background: `${theme.colors.primary.lighter}`,
                  color: `${theme.colors.primary.main}`
                }}
              >
                <SubscriptionsTwoToneIcon />
              </Avatar>
              <Box ml={1.5}>
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  sx={{
                    fontSize: `${theme.typography.pxToRem(16)}`
                  }}
                >
                  {t('Tasks overview')}
                </Typography>
                <Typography
                  sx={{
                    fontSize: `${theme.typography.pxToRem(14)}`
                  }}
                >
                  <Label color="error">
                    <Box
                      component="span"
                      sx={{
                        fontSize: `${theme.typography.pxToRem(11)}`,
                        textTransform: 'uppercase',
                        fontWeight: 'bold'
                      }}
                    >
                      23 {t('tasks')}
                    </Box>
                  </Label>
                  <Box component="span" pl={1.5}>
                    <Text color="error"> {t('due today')}</Text>
                  </Box>
                </Typography>
              </Box>
            </Box>
            <Typography
              component="span"
              color="text.secondary"
              sx={{
                opacity: 0.7,
                display: 'flex'
              }}
            >
              <ArrowForwardTwoToneIcon />
            </Typography>
          </CardActionAreaWrapper>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block4;
