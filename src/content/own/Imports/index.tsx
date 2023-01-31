import { t } from 'i18next';
import { Helmet } from 'react-helmet-async';
import useAuth from 'src/hooks/useAuth';
import { useTranslation } from 'react-i18next';
import { PermissionEntity } from 'src/models/owns/role';
import {
  Grid,
  Card,
  Typography,
  Select,
  MenuItem,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import PermissionErrorMessage from '../components/PermissionErrorMessage';
import { useContext, useEffect, useState } from 'react';
import FileUpload from '../components/FileUpload';
import { TitleContext } from 'src/contexts/TitleContext';

interface OwnProps {}

const Import = ({}: OwnProps) => {
  const { hasViewPermission } = useAuth();
  const { t }: { t: any } = useTranslation();
  const [entity, setEntity] = useState<string>('work-orders');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { setTitle } = useContext(TitleContext);
  const steps = [
    t('upload'),
    t('set_header'),
    t('match_columns'),
    t('review'),
    t('done')
  ];
  const [activeStep, setActiveStep] = useState<number>(0);
  const options = [
    { label: t('work_orders'), value: 'work-orders' },
    { label: t('assets'), value: 'assets' },
    { label: t('locations'), value: 'locations' },
    { label: t('parts'), value: 'parts' },
    { label: t('meters'), value: 'meters' }
  ];
  useEffect(() => {
    setTitle(t('import'));
  }, []);
  const onStartProcess = () => {
    setOpenModal(true);
  };
  const renderModal = () => (
    <Dialog
      fullWidth
      maxWidth="md"
      open={openModal}
      onClose={() => setOpenModal(false)}
    >
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('import')}
        </Typography>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          p: 3
        }}
      >
        <Box>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep == 0 ? (
            <FileUpload
              multiple={false}
              title={t('upload')}
              type={'file'}
              description={t('upload')}
              onDrop={(files: any) => {
                setActiveStep(1);
              }}
            />
          ) : null}
        </Box>
      </DialogContent>
    </Dialog>
  );
  if (hasViewPermission(PermissionEntity.SETTINGS))
    return (
      <>
        <Helmet>
          <title>{t('import')}</title>
        </Helmet>
        <Grid
          container
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
          padding={4}
        >
          <Grid item xs={12}>
            <Card
              sx={{
                p: 2
              }}
            >
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="h4">{t('import_data')}</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Select
                    value={entity}
                    onChange={(event) => {
                      setEntity(event.target.value);
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>

                  <Button
                    sx={{ mt: 1 }}
                    variant="contained"
                    size="medium"
                    onClick={onStartProcess}
                  >
                    {t('start_import_process')}
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        {renderModal()}
      </>
    );
  else return <PermissionErrorMessage message={'no_access_page'} />;
};

export default Import;
