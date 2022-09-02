import {
  CardContent,
  Box,
  Divider,
  Link,
  Card,
  Typography,
  Grid,
  Button,
  IconButton,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import Label from 'src/components/Label';

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    top: ${theme.spacing(2)};
    z-index: 7;
  `
);

const LinkHover = styled(Box)(
  ({ theme }) => `
    display: inline-block;
    transform: scale(1);
    transition: ${theme.transitions.create(['transform'])};

    &:hover {
        transform: scale(1.1);
    }
  `
);

const Dot = styled(Box)(
  ({ theme }) => `
    transform: scale(1);
    transition: ${theme.transitions.create(['transform', 'box-shadow'])};
    cursor: pointer;
    width: 20px;
    height: 20px;
    margin: ${theme.spacing(2, 0.5)};
    border: ${theme.colors.alpha.white[100]} solid 1px;
    transform-origin: center;
    border-radius: 50px;

    &.active,
    &:hover {
        transform: scale(1.3);
        box-shadow: 0 0 0 2px ${theme.colors.primary.main};
    }
  `
);

function Block3() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            position: 'relative'
          }}
        >
          <CardActions>
            <IconButton
              sx={{
                p: 1,
                borderRadius: 55
              }}
              size="small"
              color="error"
            >
              <FavoriteTwoToneIcon fontSize="small" />
            </IconButton>
          </CardActions>
          <CardContent
            sx={{
              p: 3,
              textAlign: 'center'
            }}
          >
            <LinkHover>
              <Link href="#">
                <img
                  style={{ height: 120 }}
                  src="/static/images/placeholders/products/8.png"
                  alt="..."
                />
              </Link>
            </LinkHover>
            <Typography
              sx={{
                pt: 2,
                pb: 1
              }}
              variant="h4"
            >
              Apple MacBook PRO 14"
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 2,
                px: 2,
                lineHeight: 1.5
              }}
            >
              You can build unlimited layout styles using any of the 500+
              included components and elements. This is a powerful and unique
              template for all modern web technologies.
            </Typography>
            <Label color="primary">
              <b>$1,685</b>
            </Label>
            <Divider
              sx={{
                mx: 'auto',
                mt: 2,
                width: '60%'
              }}
            />
            <Box display="flex" alignItems="center" justifyContent="center">
              <Dot
                sx={{
                  background: `${theme.colors.gradients.blue2}`
                }}
              />
              <Dot
                sx={{
                  background: `${theme.colors.gradients.purple1}`
                }}
              />
              <Dot
                sx={{
                  background: `${theme.colors.error.main}`
                }}
              />
              <Dot
                sx={{
                  background: `${theme.colors.gradients.orange2}`
                }}
              />
            </Box>
            <Divider
              sx={{
                mx: 'auto',
                mb: 2,
                width: '60%'
              }}
            />
            <Button variant="contained" color="success">
              {t('Buy now')}
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            position: 'relative'
          }}
        >
          <CardActions>
            <IconButton
              sx={{
                p: 1,
                borderRadius: 55
              }}
              size="small"
              color="error"
            >
              <FavoriteTwoToneIcon fontSize="small" />
            </IconButton>
          </CardActions>
          <CardContent
            sx={{
              p: 3,
              textAlign: 'center'
            }}
          >
            <LinkHover>
              <Link href="#">
                <img
                  style={{ height: 120 }}
                  src="/static/images/placeholders/products/3.png"
                  alt="..."
                />
              </Link>
            </LinkHover>
            <Typography
              sx={{
                pt: 2,
                pb: 1
              }}
              variant="h4"
            >
              iPhone 13 Pro
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 2,
                px: 2,
                lineHeight: 1.5
              }}
            >
              You can build unlimited layout styles using any of the 500+
              included components and elements. This is a powerful and unique
              template for all modern web technologies.
            </Typography>
            <Label color="primary">
              <b>$176</b>
            </Label>
            <Divider
              sx={{
                mx: 'auto',
                mt: 2,
                width: '60%'
              }}
            />
            <Box display="flex" alignItems="center" justifyContent="center">
              <Dot
                sx={{
                  background: `${theme.colors.gradients.black2}`
                }}
              />
              <Dot
                sx={{
                  background: `${theme.colors.success.main}`
                }}
              />
              <Dot
                sx={{
                  background: `${theme.colors.info.main}`
                }}
              />
            </Box>
            <Divider
              sx={{
                mx: 'auto',
                mb: 2,
                width: '60%'
              }}
            />
            <Button variant="contained" color="success">
              {t('Buy now')}
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            position: 'relative'
          }}
        >
          <CardActions>
            <IconButton
              sx={{
                p: 1,
                borderRadius: 55
              }}
              size="small"
              color="error"
            >
              <FavoriteTwoToneIcon fontSize="small" />
            </IconButton>
          </CardActions>
          <CardContent
            sx={{
              p: 3,
              textAlign: 'center'
            }}
          >
            <LinkHover>
              <Link href="#">
                <img
                  style={{ height: 120 }}
                  src="/static/images/placeholders/products/5.png"
                  alt="..."
                />
              </Link>
            </LinkHover>
            <Typography
              sx={{
                pt: 2,
                pb: 1
              }}
              variant="h4"
            >
              Apple Watch Series 7
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 2,
                px: 2,
                lineHeight: 1.5
              }}
            >
              You can build unlimited layout styles using any of the 500+
              included components and elements. This is a powerful and unique
              template for all modern web technologies.
            </Typography>
            <Label color="primary">
              <b>$299</b>
            </Label>
            <Divider
              sx={{
                mx: 'auto',
                mt: 2,
                width: '60%'
              }}
            />
            <Box display="flex" alignItems="center" justifyContent="center">
              <Dot
                sx={{
                  background: `${theme.colors.gradients.blue4}`
                }}
              />
              <Dot
                sx={{
                  background: `${theme.colors.gradients.purple3}`
                }}
              />
              <Dot
                sx={{
                  background: `${theme.colors.warning.main}`
                }}
              />
              <Dot
                sx={{
                  background: `${theme.colors.gradients.pink1}`
                }}
              />
            </Box>
            <Divider
              sx={{
                mx: 'auto',
                mb: 2,
                width: '60%'
              }}
            />
            <Button variant="contained" color="success">
              {t('Buy now')}
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block3;
