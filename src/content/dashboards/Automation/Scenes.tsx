import {
  Box,
  Typography,
  Stack,
  Card,
  IconButton,
  Tooltip,
  styled
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import MusicNoteTwoToneIcon from '@mui/icons-material/MusicNoteTwoTone';
import DirectionsWalkTwoToneIcon from '@mui/icons-material/DirectionsWalkTwoTone';
import NightlightTwoToneIcon from '@mui/icons-material/NightlightTwoTone';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

const IconWrapper = styled(IconButton)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.black[5]};
      color: ${theme.palette.primary.main};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      border-radius: 50px;
      box-shadow: 0px 1px 4px ${
        theme.colors.alpha.black[30]
      }, 0px 3px 12px 2px ${theme.colors.alpha.black[10]};
      display: flex;
      align-items: center;
      justify-content: center;
      margin: ${theme.spacing(1.5, 2, 2.5)};
      position: relative;
      transition: ${theme.transitions.create(['all'])};


      &::after {
        position: absolute;
        content: '';
        border-radius: inherit;
        border: ${theme.colors.alpha.black[10]} solid 1px;
        width: ${theme.spacing(11)};
        height: ${theme.spacing(11)};
        left: -${theme.spacing(1.5)};
        top: -${theme.spacing(1.5)};
        transition: ${theme.transitions.create(['border-color'])};
      }

      & + .MuiTypography-root {
        transition: ${theme.transitions.create(['color'])};
      }

      &:hover {
        background-color: ${theme.colors.primary.main};
        color: ${theme.palette.primary.contrastText};
        box-shadow: ${theme.colors.shadows.primary};

        & + .MuiTypography-root {
          color: ${theme.colors.alpha.black[100]};
        }

        &::after {
          border-color: ${theme.colors.primary.light};
        }
      }
`
);

function Scenes() {
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <Box
        mb={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h3">{t('Scenes')}</Typography>
        <Tooltip placement="top" title={t('Add new scene')} arrow>
          <IconButton size="large" color="primary">
            <AddTwoToneIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Card
        sx={{
          p: 2
        }}
      >
        <Stack spacing={3} direction="row" justifyContent="space-evenly">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <IconWrapper>
              <MusicNoteTwoToneIcon fontSize="large" />
            </IconWrapper>
            <Typography
              variant="h5"
              textAlign="center"
              lineHeight="1.3"
              color="text.secondary"
            >
              {t('Start music')}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <IconWrapper>
              <NightlightTwoToneIcon fontSize="large" />
            </IconWrapper>
            <Typography
              variant="h5"
              textAlign="center"
              lineHeight="1.3"
              color="text.secondary"
            >
              {t('Going to sleep')}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <IconWrapper>
              <DirectionsWalkTwoToneIcon fontSize="large" />
            </IconWrapper>
            <Typography
              variant="h5"
              textAlign="center"
              lineHeight="1.3"
              color="text.secondary"
            >
              {t('Arriving home')}
            </Typography>
          </Box>
        </Stack>
      </Card>
    </>
  );
}

export default Scenes;
