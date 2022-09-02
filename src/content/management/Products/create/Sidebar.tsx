import { ChangeEvent, useState } from 'react';

import {
  ListItemText,
  Avatar,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  Switch,
  Chip,
  Divider,
  Grid,
  ListItem,
  List,
  CardHeader,
  Alert,
  Card,
  styled,
  useTheme
} from '@mui/material';
import { useDropzone } from 'react-dropzone';

import { useTranslation } from 'react-i18next';
import CloudUploadTwoToneIcon from '@mui/icons-material/CloudUploadTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

const BoxUploadWrapper = styled(Box)(
  ({ theme }) => `
    border-radius: ${theme.general.borderRadius};
    padding: ${theme.spacing(2)};
    background: ${theme.colors.alpha.black[5]};
    border: 1px dashed ${theme.colors.alpha.black[30]};
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: ${theme.transitions.create(['border', 'background'])};

    &:hover {
      background: ${theme.colors.alpha.white[50]};
      border-color: ${theme.colors.primary.main};
    }
`
);

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    background: transparent;
    color: ${theme.colors.primary.main};
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

interface ProductTags {
  key: number;
  label: string;
}

function Sidebar() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

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
      <Divider />
    </ListItem>
  ));

  const [checked, setChecked] = useState([true, false]);

  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const [productTags, setProductTags] = useState<ProductTags[]>([
    { key: 0, label: 'new' },
    { key: 1, label: 'fresh' },
    { key: 2, label: 'electronics' },
    { key: 3, label: 'computer' },
    { key: 4, label: 'software' }
  ]);

  const handleDelete = (productTagToDelete: ProductTags) => () => {
    setProductTags((productTags) =>
      productTags.filter(
        (productTag) => productTag.key !== productTagToDelete.key
      )
    );
  };

  const children = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        ml: 3
      }}
    >
      <FormControlLabel
        label="Appliances"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Outdoor equipment"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );

  return (
    <Box>
      <Card
        sx={{
          m: 3
        }}
      >
        <CardHeader
          action={
            <Button
              size="small"
              variant="outlined"
              startIcon={<EditTwoToneIcon />}
            >
              {t('Edit')}
            </Button>
          }
          title={t('Publish')}
        />
        <Divider />
        <Box p={2}>
          <FormControlLabel
            control={<Switch color="primary" defaultChecked />}
            label={t('Virtual Product')}
          />
        </Box>
        <Divider />
        <List
          dense
          sx={{
            p: 2
          }}
        >
          <ListItem disableGutters>
            <ListItemText
              sx={{
                width: 110,
                flex: 'initial'
              }}
              primary={t('Status')}
            />
            <b>Draft</b>
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              sx={{
                width: 110,
                flex: 'initial'
              }}
              primary={t('Visibility')}
            />
            <b>Visible</b>
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              sx={{
                width: 110,
                flex: 'initial'
              }}
              primary={
                <>
                  <Typography
                    variant="body1"
                    sx={{
                      pt: 0.5,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <DotLegend
                      style={{ background: theme.colors.success.main }}
                    />
                    {t('SEO Score')}
                  </Typography>
                </>
              }
            />
            <b>{t('Good')}</b>
          </ListItem>
        </List>
        <Divider />
        <Box p={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button fullWidth variant="outlined" size="small">
                {t('Preview')}
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="outlined"
                size="small"
                color="secondary"
              >
                {t('Save draft')}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained">
                {t('Publish now')}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
      <Card
        sx={{
          m: 3
        }}
      >
        <CardHeader
          action={
            <Button size="small" variant="outlined">
              {t('Add category')}
            </Button>
          }
          title={t('Categories')}
        />
        <Divider />
        <Box p={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
              />
            }
            label="Electronics"
          />
          {children}

          <FormControlLabel control={<Checkbox />} label="Digital products" />
          <FormControlLabel
            control={<Checkbox />}
            label="Software memberships"
          />
        </Box>
      </Card>
      <Card
        sx={{
          m: 3
        }}
      >
        <CardHeader title={t('Product Images')} />
        <Divider />
        <Box p={2}>
          <BoxUploadWrapper {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragAccept && (
              <>
                <AvatarSuccess variant="rounded">
                  <CheckTwoToneIcon />
                </AvatarSuccess>
                <Typography
                  sx={{
                    mt: 2
                  }}
                >
                  {t('Drop the files to start uploading')}
                </Typography>
              </>
            )}
            {isDragReject && (
              <>
                <AvatarDanger variant="rounded">
                  <CloseTwoToneIcon />
                </AvatarDanger>
                <Typography
                  sx={{
                    mt: 2
                  }}
                >
                  {t('You cannot upload these file types')}
                </Typography>
              </>
            )}
            {!isDragActive && (
              <>
                <AvatarWrapper variant="rounded">
                  <CloudUploadTwoToneIcon />
                </AvatarWrapper>
                <Typography
                  sx={{
                    mt: 2
                  }}
                >
                  {t('Drag & drop files here')}
                </Typography>
              </>
            )}
          </BoxUploadWrapper>
        </Box>

        {files.length > 0 && (
          <>
            <Divider />
            <Box p={2}>
              <Alert
                sx={{
                  py: 0
                }}
                severity="success"
              >
                {t('You have uploaded')} <b>{files.length}</b> {t('files')}!
              </Alert>
              <List
                disablePadding
                sx={{
                  mt: 2
                }}
                component="div"
              >
                {files}
              </List>
            </Box>
          </>
        )}
      </Card>
      <Card
        sx={{
          m: 3
        }}
      >
        <CardHeader title={t('Product Tags')} />
        <Divider />
        <Box p={2}>
          {productTags.map((data) => {
            return (
              <Chip
                sx={{
                  m: 1
                }}
                key={data.key}
                variant="outlined"
                label={data.label}
                onDelete={handleDelete(data)}
              />
            );
          })}
          {productTags.length === 0 && (
            <Typography
              sx={{
                py: 2
              }}
              variant="subtitle2"
              textAlign="center"
            >
              {t('There are no product tags')}
            </Typography>
          )}
        </Box>
      </Card>
    </Box>
  );
}

export default Sidebar;
