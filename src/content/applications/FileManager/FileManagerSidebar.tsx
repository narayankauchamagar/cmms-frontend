import {
  Box,
  Typography,
  Divider,
  Avatar,
  List,
  ListItemAvatar,
  ListItem,
  ListItemText,
  Alert,
  Button,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Gauge from 'src/components/Gauge';
import { buildStyles } from 'react-circular-progressbar';
import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone';
import ImageTwoToneIcon from '@mui/icons-material/ImageTwoTone';
import VideocamTwoToneIcon from '@mui/icons-material/VideocamTwoTone';
import TextSnippetTwoToneIcon from '@mui/icons-material/TextSnippetTwoTone';
import { useDropzone } from 'react-dropzone';
import CloudUploadTwoToneIcon from '@mui/icons-material/CloudUploadTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone';

const WarningTwoToneIconWrapper = styled(WarningTwoToneIcon)(
  ({ theme }) => `
    color: ${theme.colors.warning.main};
`
);

const ButtonContrast = styled(Button)(
  ({ theme }) => `
    background: ${theme.colors.alpha.trueWhite[10]};
    color: ${theme.colors.alpha.trueWhite[100]};

    &:hover {
      background: ${theme.colors.alpha.trueWhite[30]};
    }
`
);

const BoxUploadWrapper = styled(Box)(
  ({ theme }) => `
    border-radius: ${theme.general.borderRadius};
    padding: ${theme.spacing(2)};
    margin-top: ${theme.spacing(2)};
    background: ${theme.colors.alpha.trueWhite[10]};
    border: 1px dashed ${theme.colors.alpha.trueWhite[30]};
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: ${theme.transitions.create(['border', 'background'])};

    &:hover {
      background: ${theme.colors.alpha.trueWhite[5]};
      border-color: ${theme.colors.alpha.trueWhite[70]};
    }
`
);

const UploadBox = styled(Box)(
  ({ theme }) => `
    border-radius: ${theme.general.borderRadius};
    padding: ${theme.spacing(2)};
    background: ${theme.colors.alpha.trueWhite[10]};
`
);

const TypographyPrimary = styled(Typography)(
  ({ theme }) => `
    color: ${theme.colors.alpha.trueWhite[100]};
  `
);

const TypographySecondary = styled(Typography)(
  ({ theme }) => `
    color: ${theme.colors.alpha.trueWhite[70]};
  `
);

const DividerContrast = styled(Divider)(
  ({ theme }) => `
    background: ${theme.colors.alpha.trueWhite[10]};
  `
);

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    background: ${theme.colors.alpha.trueWhite[10]};
    width: ${theme.spacing(7)};
    height: ${theme.spacing(7)};
`
);

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
    background: ${theme.colors.success.light};
    width: ${theme.spacing(7)};
    height: ${theme.spacing(7)};
`
);

const AvatarDanger = styled(Avatar)(
  ({ theme }) => `
    background: ${theme.colors.error.light};
    width: ${theme.spacing(7)};
    height: ${theme.spacing(7)};
`
);

const BoxUpgrade = styled(Box)(
  ({ theme }) => `
    background: ${theme.colors.gradients.purple1};
    position: relative;
    border-radius: ${theme.general.borderRadius};
    
    img {
      position: absolute;
      top: 0;
      right: 0;
    }
`
);

function FileManagerSidebar() {
  const { t }: { t: any } = useTranslation();

  const data = {
    percentage: 68.45
  };

  const {
    acceptedFiles,
    isDragActive,
    isDragAccept,
    isDragReject,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg']
    }
  });

  const files = acceptedFiles.map((file, index) => (
    <ListItem disableGutters component="div" key={index}>
      <ListItemText primary={file.name} />
      <b>{file.size} bytes</b>
      <DividerContrast />
    </ListItem>
  ));

  return (
    <Box>
      <Box
        sx={{
          p: { xs: 2, lg: 4 }
        }}
      >
        <Box mb={3} display="flex" alignItems="center">
          <TypographyPrimary variant="h3">{t('Storage')}</TypographyPrimary>
        </Box>
        <Box display="flex">
          <Gauge
            circleRatio={0.65}
            styles={buildStyles({ rotation: 1 / 2 + 1 / 5.7 })}
            value={data.percentage}
            strokeWidth={10}
            text={`${data.percentage}%`}
            color="trueWhite"
            size="large"
          />

          <Box pl={2} pt={2}>
            <WarningTwoToneIconWrapper />
            <TypographyPrimary variant="subtitle2" gutterBottom>
              {t('Storage almost up')}!
            </TypographyPrimary>
            <TypographyPrimary variant="h4">
              <b>27GB</b>
              {t(' of ')}
              <b>49GB</b> {t('used')}
            </TypographyPrimary>
          </Box>
        </Box>

        <Button variant="contained" size="small">
          {t('Increase storage')}
        </Button>

        <DividerContrast
          sx={{
            my: 3
          }}
        />

        <List component="div">
          <ListItem component="div" disableGutters>
            <ListItemAvatar>
              <AvatarWrapper variant="rounded">
                <ImageTwoToneIcon fontSize="large" />
              </AvatarWrapper>
            </ListItemAvatar>
            <ListItemText
              sx={{
                pl: 2
              }}
              primary={
                <TypographyPrimary variant="h4" gutterBottom>
                  {t('Images')}
                </TypographyPrimary>
              }
              secondary={
                <TypographySecondary variant="subtitle2" gutterBottom>
                  2.584 {t('files')}
                </TypographySecondary>
              }
            />
            <Box alignSelf="center">
              <TypographyPrimary variant="h4">15.23 GB</TypographyPrimary>
            </Box>
          </ListItem>
          <DividerContrast variant="inset" />
          <ListItem component="div" disableGutters>
            <ListItemAvatar>
              <AvatarWrapper variant="rounded">
                <VideocamTwoToneIcon fontSize="large" />
              </AvatarWrapper>
            </ListItemAvatar>
            <ListItemText
              sx={{
                pl: 2
              }}
              primary={
                <TypographyPrimary variant="h4" gutterBottom>
                  {t('Videos')}
                </TypographyPrimary>
              }
              secondary={
                <TypographySecondary variant="subtitle2" gutterBottom>
                  376 {t('files')}
                </TypographySecondary>
              }
            />
            <Box alignSelf="center">
              <TypographyPrimary variant="h4">6.71 GB</TypographyPrimary>
            </Box>
          </ListItem>
          <DividerContrast variant="inset" />
          <ListItem component="div" disableGutters>
            <ListItemAvatar>
              <AvatarWrapper variant="rounded">
                <TextSnippetTwoToneIcon fontSize="large" />
              </AvatarWrapper>
            </ListItemAvatar>
            <ListItemText
              sx={{
                pl: 2
              }}
              primary={
                <TypographyPrimary variant="h4" gutterBottom>
                  {t('Documents')}
                </TypographyPrimary>
              }
              secondary={
                <TypographySecondary variant="subtitle2" gutterBottom>
                  14.748 {t('files')}
                </TypographySecondary>
              }
            />
            <Box alignSelf="center">
              <TypographyPrimary variant="h4">9.46 GB</TypographyPrimary>
            </Box>
          </ListItem>
        </List>

        <DividerContrast
          sx={{
            my: 3
          }}
        />

        <UploadBox>
          <TypographyPrimary variant="h4" gutterBottom>
            {t('Quick Upload')}
          </TypographyPrimary>
          <TypographySecondary variant="body1">
            {t('Need a quick upload widgets? Search no more and use this one.')}
          </TypographySecondary>

          <BoxUploadWrapper {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragAccept && (
              <>
                <AvatarSuccess variant="rounded">
                  <CheckTwoToneIcon />
                </AvatarSuccess>
                <TypographyPrimary
                  sx={{
                    mt: 2
                  }}
                >
                  {t('Drop the files to start uploading')}
                </TypographyPrimary>
              </>
            )}
            {isDragReject && (
              <>
                <AvatarDanger variant="rounded">
                  <CloseTwoToneIcon />
                </AvatarDanger>
                <TypographyPrimary
                  sx={{
                    mt: 2
                  }}
                >
                  {t('You cannot upload these file types')}
                </TypographyPrimary>
              </>
            )}
            {!isDragActive && (
              <>
                <AvatarWrapper variant="rounded">
                  <CloudUploadTwoToneIcon />
                </AvatarWrapper>
                <TypographyPrimary
                  sx={{
                    mt: 2
                  }}
                >
                  {t('Drag & drop files here')}
                </TypographyPrimary>
              </>
            )}
          </BoxUploadWrapper>
          {files.length > 0 && (
            <>
              <Alert
                sx={{
                  py: 0,
                  mt: 2
                }}
                severity="success"
              >
                {t('You have uploaded')} <b>{files.length}</b> {t('files')}!
              </Alert>
              <DividerContrast
                sx={{
                  mt: 2
                }}
              />
              <List disablePadding component="div">
                {files}
              </List>
            </>
          )}
        </UploadBox>

        <BoxUpgrade
          sx={{
            p: 3,
            mt: 4
          }}
        >
          <Box pr={17}>
            <TypographyPrimary
              variant="h2"
              sx={{
                pb: 1
              }}
            >
              {t('Get more space now')}!
            </TypographyPrimary>
            <TypographySecondary
              variant="subtitle2"
              sx={{
                pb: 3,
                pr: 2
              }}
            >
              {t('Upgrade to an Enterprise account')}
            </TypographySecondary>
          </Box>
          <ButtonContrast startIcon={<SpeedTwoToneIcon />} variant="contained">
            {t('Increase storage')}
          </ButtonContrast>
          <img
            src="/static/images/placeholders/illustrations/2.png"
            alt="..."
          />
        </BoxUpgrade>
      </Box>
    </Box>
  );
}

export default FileManagerSidebar;
