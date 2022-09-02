import { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import wait from 'src/utils/wait';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import {
  styled,
  Grid,
  Dialog,
  DialogTitle,
  Divider,
  Alert,
  Chip,
  DialogContent,
  Box,
  Zoom,
  ListItem,
  List,
  ListItemText,
  Typography,
  TextField,
  CircularProgress,
  Avatar,
  Autocomplete,
  Button,
  useTheme
} from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
import { useDropzone } from 'react-dropzone';
import { useSnackbar } from 'notistack';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import CloudUploadTwoToneIcon from '@mui/icons-material/CloudUploadTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';

const BoxUploadWrapper = styled(Box)(
  ({ theme }) => `
    border-radius: ${theme.general.borderRadius};
    padding: ${theme.spacing(3)};
    background: ${theme.colors.alpha.black[5]};
    border: 1px dashed ${theme.colors.alpha.black[30]};
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: ${theme.transitions.create(['border', 'background'])};

    &:hover {
      background: ${theme.colors.alpha.white[100]};
      border-color: ${theme.colors.primary.main};
    }
`
);

const EditorWrapper = styled(Box)(
  ({ theme }) => `

    .ql-editor {
      min-height: 100px;
    }

    .ql-toolbar.ql-snow {
      border-top-left-radius: ${theme.general.borderRadius};
      border-top-right-radius: ${theme.general.borderRadius};
    }

    .ql-toolbar.ql-snow,
    .ql-container.ql-snow {
      border-color: ${theme.colors.alpha.black[30]};
    }

    .ql-container.ql-snow {
      border-bottom-left-radius: ${theme.general.borderRadius};
      border-bottom-right-radius: ${theme.general.borderRadius};
    }

    &:hover {
      .ql-toolbar.ql-snow,
      .ql-container.ql-snow {
        border-color: ${theme.colors.alpha.black[50]};
      }
    }
`
);

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    background: ${theme.colors.primary.lighter};
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

const projectTags = [
  { title: 'Development' },
  { title: 'Design Project' },
  { title: 'Marketing Research' },
  { title: 'Software' }
];

function PageHeader() {
  const { t }: { t: any } = useTranslation();
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();

  const members = [
    {
      avatar: '/static/images/avatars/1.jpg',
      name: 'Maren Lipshutz'
    },
    {
      avatar: '/static/images/avatars/2.jpg',
      name: 'Zain Vetrovs'
    },
    {
      avatar: '/static/images/avatars/3.jpg',
      name: 'Hanna Siphron'
    },
    {
      avatar: '/static/images/avatars/4.jpg',
      name: 'Cristofer Aminoff'
    },
    {
      avatar: '/static/images/avatars/5.jpg',
      name: 'Maria Calzoni'
    }
  ];

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

  const [value, setValue] = useState<Date | null>(null);

  const handleCreateProjectOpen = () => {
    setOpen(true);
  };

  const handleCreateProjectClose = () => {
    setOpen(false);
  };

  const handleCreateProjectSuccess = () => {
    enqueueSnackbar(t('A new project has been created successfully'), {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });

    setOpen(false);
  };

  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h3" gutterBottom>
            {t('Projects')}
          </Typography>
          <Typography variant="subtitle2">
            {t('These are your active projects')}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            sx={{
              mt: { xs: 2, sm: 0 }
            }}
            onClick={handleCreateProjectOpen}
            variant="contained"
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            {t('Create new project')}
          </Button>
        </Grid>
      </Grid>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleCreateProjectClose}
      >
        <DialogTitle
          sx={{
            p: 3
          }}
        >
          <Typography variant="h4" gutterBottom>
            {t('Create new project')}
          </Typography>
          <Typography variant="subtitle2">
            {t('Use this dialog window to add a new project')}
          </Typography>
        </DialogTitle>
        <Formik
          initialValues={{
            title: '',
            submit: null
          }}
          validationSchema={Yup.object().shape({
            title: Yup.string()
              .max(255)
              .required(t('The title field is required'))
          })}
          onSubmit={async (
            _values,
            { resetForm, setErrors, setStatus, setSubmitting }
          ) => {
            try {
              await wait(1000);
              resetForm();
              setStatus({ success: true });
              setSubmitting(false);
              handleCreateProjectSuccess();
            } catch (err) {
              console.error(err);
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values
          }) => (
            <form onSubmit={handleSubmit}>
              <DialogContent
                dividers
                sx={{
                  p: 3
                }}
              >
                <Grid container spacing={0}>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={3}
                    justifyContent="flex-end"
                    textAlign={{ sm: 'right' }}
                  >
                    <Box
                      pr={3}
                      sx={{
                        pt: `${theme.spacing(2)}`,
                        pb: { xs: 1, md: 0 }
                      }}
                      alignSelf="center"
                    >
                      <b>{t('Project title')}:</b>
                    </Box>
                  </Grid>
                  <Grid
                    sx={{
                      mb: `${theme.spacing(3)}`
                    }}
                    item
                    xs={12}
                    sm={8}
                    md={9}
                  >
                    <TextField
                      error={Boolean(touched.title && errors.title)}
                      fullWidth
                      helperText={touched.title && errors.title}
                      name="title"
                      placeholder={t('Project title here...')}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.title}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box
                      pr={3}
                      sx={{
                        pb: { xs: 1, md: 0 }
                      }}
                    >
                      <b>{t('Description')}:</b>
                    </Box>
                  </Grid>
                  <Grid
                    sx={{
                      mb: `${theme.spacing(3)}`
                    }}
                    item
                    xs={12}
                    sm={8}
                    md={9}
                  >
                    <EditorWrapper>
                      <ReactQuill />
                    </EditorWrapper>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={3}
                    justifyContent="flex-end"
                    textAlign={{ sm: 'right' }}
                  >
                    <Box
                      pr={3}
                      sx={{
                        pt: `${theme.spacing(2)}`,
                        pb: { xs: 1, md: 0 }
                      }}
                      alignSelf="center"
                    >
                      <b>{t('Tags')}:</b>
                    </Box>
                  </Grid>
                  <Grid
                    sx={{
                      mb: `${theme.spacing(3)}`
                    }}
                    item
                    xs={12}
                    sm={8}
                    md={9}
                  >
                    <Autocomplete
                      multiple
                      sx={{
                        m: 0
                      }}
                      limitTags={2}
                      // @ts-ignore
                      getOptionLabel={(option) => option.title}
                      options={projectTags}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          variant="outlined"
                          placeholder={t('Select project tags...')}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box
                      pr={3}
                      sx={{
                        pb: { xs: 1, md: 0 }
                      }}
                    >
                      <b>{t('Upload files')}:</b>
                    </Box>
                  </Grid>
                  <Grid
                    sx={{
                      mb: `${theme.spacing(3)}`
                    }}
                    item
                    xs={12}
                    sm={8}
                    md={9}
                  >
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
                    {files.length > 0 && (
                      <>
                        <Alert
                          sx={{
                            py: 0,
                            mt: 2
                          }}
                          severity="success"
                        >
                          {t('You have uploaded')} <b>{files.length}</b>{' '}
                          {t('files')}!
                        </Alert>
                        <Divider
                          sx={{
                            mt: 2
                          }}
                        />
                        <List disablePadding component="div">
                          {files}
                        </List>
                      </>
                    )}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={3}
                    justifyContent="flex-end"
                    textAlign={{ sm: 'right' }}
                  >
                    <Box
                      pr={3}
                      sx={{
                        pt: `${theme.spacing(2)}`,
                        pb: { xs: 1, md: 0 }
                      }}
                      alignSelf="center"
                    >
                      <b>{t('Members')}:</b>
                    </Box>
                  </Grid>
                  <Grid
                    sx={{
                      mb: `${theme.spacing(3)}`
                    }}
                    item
                    xs={12}
                    sm={8}
                    md={9}
                  >
                    <Autocomplete
                      multiple
                      sx={{
                        m: 0
                      }}
                      limitTags={2}
                      // @ts-ignore
                      getOptionLabel={(option) => option.title}
                      options={members}
                      renderOption={(props, option) => (
                        <li {...props}>
                          <Avatar
                            sx={{
                              mr: 1
                            }}
                            src={option.avatar}
                          />
                          {option.name}
                        </li>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          fullWidth
                          InputLabelProps={{
                            shrink: true
                          }}
                          placeholder={t('Select project members...')}
                        />
                      )}
                      renderTags={(members, getTagProps) =>
                        members.map((ev, index: number) => (
                          <Chip
                            key={ev.name}
                            label={ev.name}
                            {...getTagProps({ index })}
                            avatar={<Avatar src={ev.avatar} />}
                          />
                        ))
                      }
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={3}
                    justifyContent="flex-end"
                    textAlign={{ sm: 'right' }}
                  >
                    <Box
                      pr={3}
                      sx={{
                        pt: `${theme.spacing(2)}`,
                        pb: { xs: 1, md: 0 }
                      }}
                      alignSelf="center"
                    >
                      <b>{t('Due Date')}:</b>
                    </Box>
                  </Grid>
                  <Grid
                    sx={{
                      mb: `${theme.spacing(3)}`
                    }}
                    item
                    xs={12}
                    sm={8}
                    md={9}
                  >
                    <DatePicker
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          placeholder={t('Select due date...')}
                          {...params}
                        />
                      )}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={3}
                    textAlign={{ sm: 'right' }}
                  />
                  <Grid
                    sx={{
                      mb: `${theme.spacing(3)}`
                    }}
                    item
                    xs={12}
                    sm={8}
                    md={9}
                  >
                    <Button
                      sx={{
                        mr: 2
                      }}
                      type="submit"
                      startIcon={
                        isSubmitting ? <CircularProgress size="1rem" /> : null
                      }
                      disabled={Boolean(errors.submit) || isSubmitting}
                      variant="contained"
                      size="large"
                    >
                      {t('Create project')}
                    </Button>
                    <Button
                      color="secondary"
                      size="large"
                      variant="outlined"
                      onClick={handleCreateProjectClose}
                    >
                      {t('Cancel')}
                    </Button>
                  </Grid>
                </Grid>
              </DialogContent>
            </form>
          )}
        </Formik>
      </Dialog>
    </>
  );
}

export default PageHeader;
