import {
  Grid,
  Box,
  Divider,
  CardActionArea,
  Card,
  Typography,
  alpha,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';

const DividerPrimary = styled(Divider)(
  ({ theme }) => `
      width: 50px;
      background: ${theme.colors.primary.main};
      height: 6px;
      border-radius: 50px;
  `
);

const DividerWarning = styled(Divider)(
  ({ theme }) => `
      width: 50px;
      background: ${theme.colors.warning.main};
      height: 6px;
      border-radius: 50px;
  `
);

const DividerSuccess = styled(Divider)(
  ({ theme }) => `
      width: 50px;
      background: ${theme.colors.success.main};
      height: 6px;
      border-radius: 50px;
  `
);

const DividerError = styled(Divider)(
  ({ theme }) => `
      width: 50px;
      background: ${theme.colors.error.main};
      height: 6px;
      border-radius: 50px;
  `
);

const CardWrapper = styled(Card)(
  ({ theme }) => `
    transition: ${theme.transitions.create(['transform', 'box-shadow'])};
    transform: scale(1);
    position: relative;
    z-index: 5;

    &:hover {
        z-index: 6;
        box-shadow: 
            0 0.56875rem 3.3rem ${alpha(theme.colors.alpha.black[100], 0.05)},
            0 0.9975rem 2.4rem ${alpha(theme.colors.alpha.black[100], 0.07)},
            0 0.35rem 1rem ${alpha(theme.colors.alpha.black[100], 0.1)},
            0 0.225rem 0.8rem ${alpha(theme.colors.alpha.black[100], 0.15)};
        transform: scale(1.01);
    }
  `
);

const CardActionAreaWrapper = styled(CardActionArea)(
  () => `

        .MuiTouchRipple-root {
          opacity: .2;
        }
  
        .MuiCardActionArea-focusHighlight {
          background: transparent;
        }
  
        &:hover {
          .MuiCardActionArea-focusHighlight {
            opacity: 0;
          }
        }
  `
);

function Block5() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={3}>
        <CardWrapper>
          <CardActionAreaWrapper
            sx={{
              p: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: `${theme.typography.pxToRem(40)}`
                }}
              >
                31
              </Typography>
              <DividerPrimary
                sx={{
                  my: 2
                }}
              />
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  fontSize: `${theme.typography.pxToRem(14)}`,
                  textTransform: 'uppercase'
                }}
              >
                {t('Completed tasks')}
              </Typography>
            </Box>
            <ChevronRightTwoToneIcon fontSize="large" />
          </CardActionAreaWrapper>
        </CardWrapper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CardWrapper>
          <CardActionAreaWrapper
            sx={{
              p: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: `${theme.typography.pxToRem(40)}`
                }}
              >
                18
              </Typography>
              <DividerError
                sx={{
                  my: 2
                }}
              />
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  fontSize: `${theme.typography.pxToRem(14)}`,
                  textTransform: 'uppercase'
                }}
              >
                {t('Requests sent')}
              </Typography>
            </Box>
            <ChevronRightTwoToneIcon fontSize="large" />
          </CardActionAreaWrapper>
        </CardWrapper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            p: 3,
            textAlign: 'center'
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: `${theme.typography.pxToRem(40)}`
            }}
          >
            29
          </Typography>
          <DividerSuccess
            sx={{
              mx: 'auto',
              my: 2
            }}
          />
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              fontSize: `${theme.typography.pxToRem(14)}`,
              textTransform: 'uppercase'
            }}
          >
            {t('Bugfixes')}
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            p: 3,
            textAlign: 'center'
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: `${theme.typography.pxToRem(40)}`
            }}
          >
            764
          </Typography>
          <DividerWarning
            sx={{
              mx: 'auto',
              my: 2
            }}
          />
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              fontSize: `${theme.typography.pxToRem(14)}`,
              textTransform: 'uppercase'
            }}
          >
            {t('Tickets')}
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block5;
