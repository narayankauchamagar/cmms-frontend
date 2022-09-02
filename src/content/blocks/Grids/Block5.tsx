import {
  Box,
  Divider,
  Avatar,
  CardHeader,
  Card,
  Typography,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import Text from 'src/components/Text';
import { Link as RouterLink } from 'react-router-dom';

function Block5() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        disableTypography
        sx={{
          p: 3
        }}
        title={
          <>
            <Typography
              component="div"
              sx={{
                fontSize: `${theme.typography.pxToRem(17)}`
              }}
              textAlign="center"
              gutterBottom
              variant="h3"
            >
              {t('Revenue progress')}
            </Typography>
          </>
        }
        subheader={
          <>
            <Typography
              component="div"
              textAlign="center"
              fontWeight="normal"
              color="text.secondary"
              variant="h5"
            >
              {t('Our company revenues, split by progress.')}
            </Typography>
          </>
        }
      />
      <Box
        pb={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Box
          px={4}
          py={3}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            component={RouterLink}
            to="#"
            sx={{
              width: 84,
              height: 84
            }}
            alt="Remy Sharp"
            src="/static/images/avatars/3.jpg"
          />
          <Typography
            sx={{
              pt: 1
            }}
            gutterBottom
            variant="h4"
          >
            Remy Sharp
          </Typography>
          <Box display="flex" alignItems="center">
            <Box display="flex" alignItems="center">
              <Text color="warning">
                <StarTwoToneIcon fontSize="small" />
              </Text>
              <Typography
                sx={{
                  pl: 0.2
                }}
                component="span"
                variant="h5"
              >
                4.8
              </Typography>
            </Box>
            <Typography
              sx={{
                pl: 0.5
              }}
              component="span"
              variant="subtitle2"
            >
              | <b>34</b> {t('jobs')}
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{
            mx: 2
          }}
          orientation="vertical"
          flexItem
        />
        <Box
          px={4}
          py={3}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            component={RouterLink}
            to="#"
            sx={{
              width: 84,
              height: 84
            }}
            alt="Agnes Walker"
            src="/static/images/avatars/2.jpg"
          />
          <Typography
            sx={{
              pt: 1
            }}
            gutterBottom
            variant="h4"
          >
            Agnes Walker
          </Typography>
          <Box display="flex" alignItems="center">
            <Box display="flex" alignItems="center">
              <Text color="warning">
                <StarTwoToneIcon fontSize="small" />
              </Text>
              <Typography
                sx={{
                  pl: 0.2
                }}
                component="span"
                variant="h5"
              >
                5.0
              </Typography>
            </Box>
            <Typography
              sx={{
                pl: 0.5
              }}
              component="span"
              variant="subtitle2"
            >
              | <b>74</b> {t('jobs')}
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{
            mx: 2
          }}
          orientation="vertical"
          flexItem
        />
        <Box
          px={4}
          py={3}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            component={RouterLink}
            to="#"
            sx={{
              width: 84,
              height: 84
            }}
            alt="Anabel Mayo"
            src="/static/images/avatars/1.jpg"
          />
          <Typography
            sx={{
              pt: 1
            }}
            gutterBottom
            variant="h4"
          >
            Anabel Mayo
          </Typography>
          <Box display="flex" alignItems="center">
            <Box display="flex" alignItems="center">
              <Text color="warning">
                <StarTwoToneIcon fontSize="small" />
              </Text>
              <Typography
                sx={{
                  pl: 0.2
                }}
                component="span"
                variant="h5"
              >
                2.9
              </Typography>
            </Box>
            <Typography
              sx={{
                pl: 0.5
              }}
              component="span"
              variant="subtitle2"
            >
              | <b>52</b> {t('jobs')}
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{
            mx: 2
          }}
          orientation="vertical"
          flexItem
        />
        <Box
          px={4}
          py={3}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            component={RouterLink}
            to="#"
            sx={{
              width: 84,
              height: 84
            }}
            alt="Travis Howard"
            src="/static/images/avatars/4.jpg"
          />
          <Typography
            sx={{
              pt: 1
            }}
            gutterBottom
            variant="h4"
          >
            Travis Howard
          </Typography>
          <Box display="flex" alignItems="center">
            <Box display="flex" alignItems="center">
              <Text color="warning">
                <StarTwoToneIcon fontSize="small" />
              </Text>
              <Typography
                sx={{
                  pl: 0.2
                }}
                component="span"
                variant="h5"
              >
                3.5
              </Typography>
            </Box>
            <Typography
              sx={{
                pl: 0.5
              }}
              component="span"
              variant="subtitle2"
            >
              | <b>82</b> {t('jobs')}
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{
            mx: 2
          }}
          orientation="vertical"
          flexItem
        />
        <Box
          px={4}
          py={3}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            component={RouterLink}
            to="#"
            sx={{
              width: 84,
              height: 84
            }}
            alt="Monique Hanna"
            src="/static/images/avatars/5.jpg"
          />
          <Typography
            sx={{
              pt: 1
            }}
            gutterBottom
            variant="h4"
          >
            Monique Hanna
          </Typography>
          <Box display="flex" alignItems="center">
            <Box display="flex" alignItems="center">
              <Text color="warning">
                <StarTwoToneIcon fontSize="small" />
              </Text>
              <Typography
                sx={{
                  pl: 0.2
                }}
                component="span"
                variant="h5"
              >
                4.9
              </Typography>
            </Box>
            <Typography
              sx={{
                pl: 0.5
              }}
              component="span"
              variant="subtitle2"
            >
              | <b>29</b> {t('jobs')}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default Block5;
