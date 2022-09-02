import { Fragment } from 'react';

import {
  Button,
  Box,
  CardHeader,
  Avatar,
  Card,
  Link,
  ListItemAvatar,
  ListItemText,
  Divider,
  List,
  ListItem,
  Typography,
  IconButton,
  alpha,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import Scrollbar from 'src/components/Scrollbar';
import Label from 'src/components/Label';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

const CardWrapper = styled(Card)(
  ({ theme }) => `
      background: ${alpha(theme.colors.alpha.black[10], 0.05)};
      border-radius: 0;
  `
);

const LinkHover = styled('a')(
  ({ theme }) => `
    transition: ${theme.transitions.create([
      'transform',
      'opacity',
      'box-shadow'
    ])};
    transform: translateY(0px);
    display: block;
    opacity: 1;

    &:hover {
        opacity: .9;
        transform: translateY(-4px);
    }
  `
);

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

function Block6() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const items = [
    {
      id: 1,
      title: 'Amazon Dot Echo 3',
      image: '/static/images/placeholders/products/1.png',
      price: '79'
    },
    {
      id: 2,
      title: 'Autodesk 3D Printer PRO',
      image: '/static/images/placeholders/products/2.png',
      price: '399'
    },
    {
      id: 3,
      title: 'Apple iPhone 12 PRO',
      image: '/static/images/placeholders/products/3.png',
      price: '749'
    },
    {
      id: 4,
      title: 'GoPro Action Camera 3',
      image: '/static/images/placeholders/products/4.png',
      price: '289'
    },
    {
      id: 5,
      title: 'Apple Watch 42mm Gen. 4',
      image: '/static/images/placeholders/products/5.png',
      price: '199'
    }
  ];

  return (
    <Card>
      <CardHeader
        sx={{
          p: 2
        }}
        disableTypography
        action={
          <IconButton size="small" color="secondary">
            <MoreVertTwoToneIcon />
          </IconButton>
        }
        title={
          <>
            <Typography
              sx={{
                fontSize: `${theme.typography.pxToRem(17)}`
              }}
              gutterBottom
              variant="h3"
              textAlign="center"
            >
              {t('Shopping Cart')}
            </Typography>
          </>
        }
        subheader={
          <>
            <Typography variant="subtitle2" textAlign="center">
              {t('Checkout is almost done')}
            </Typography>
          </>
        }
      />
      <Divider />
      <Box
        sx={{
          height: 303
        }}
      >
        <Scrollbar>
          <ListWrapper disablePadding>
            {items.map((item) => (
              <Fragment key={item.id}>
                <ListItem
                  sx={{
                    display: { xs: 'block', md: 'flex' },
                    py: 1.5,
                    px: 2
                  }}
                >
                  <ListItemAvatar
                    sx={{
                      mr: 2,
                      mb: { xs: 2, md: 0 }
                    }}
                  >
                    <LinkHover href="#">
                      <Avatar
                        variant="rounded"
                        sx={{
                          width: 100,
                          height: 'auto'
                        }}
                        alt={item.title}
                        src={item.image}
                      />
                    </LinkHover>
                  </ListItemAvatar>
                  <ListItemText
                    disableTypography
                    primary={
                      <Link
                        sx={{
                          display: 'block',
                          mb: 1
                        }}
                        noWrap
                        color="text.primary"
                        variant="h4"
                        href="#"
                      >
                        {item.title}
                      </Link>
                    }
                    secondary={
                      <>
                        <Label color="primary">${item.price}</Label>
                      </>
                    }
                  />
                  <Box
                    component="span"
                    sx={{
                      display: { xs: 'none', md: 'inline-block' }
                    }}
                  >
                    <Box ml={3} textAlign="right">
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
                        size="small"
                      >
                        <AddTwoToneIcon fontSize="small" />
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
                        size="small"
                      >
                        <ClearTwoToneIcon fontSize="small" />
                      </IconButtonWrapper>
                    </Box>
                  </Box>
                </ListItem>
                <Divider />
              </Fragment>
            ))}
          </ListWrapper>
        </Scrollbar>
      </Box>
      <Divider />
      <CardWrapper
        elevation={0}
        sx={{
          textAlign: 'right',
          p: 2
        }}
      >
        <Typography variant="caption" fontWeight="bold">
          {t('Total')}
          <Typography
            sx={{
              pl: 1
            }}
            component="span"
            variant="h4"
            color="text.primary"
          >
            <b>$12,685</b>
          </Typography>
        </Typography>
      </CardWrapper>
      <Divider />

      <Box
        p={2}
        sx={{
          textAlign: 'center'
        }}
      >
        <Button
          variant="contained"
          fullWidth
          sx={{
            py: 2,
            fontSize: `${theme.typography.pxToRem(12)}`,
            textTransform: 'uppercase'
          }}
        >
          {t('Proceed to checkout')}
        </Button>
      </Box>
    </Card>
  );
}

export default Block6;
