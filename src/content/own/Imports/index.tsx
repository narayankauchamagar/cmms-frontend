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
  StepLabel,
  DialogActions,
  Stack
} from '@mui/material';
import PermissionErrorMessage from '../components/PermissionErrorMessage';
import { useContext, useEffect, useState } from 'react';
import FileUpload from '../components/FileUpload';
import { TitleContext } from 'src/contexts/TitleContext';
import { read, utils } from 'xlsx';
import Spreadsheet from 'react-spreadsheet';
import { SpreadsheetData, arrayToAoA } from 'src/utils/overall';

interface OwnProps {}
interface HeaderKey {
  label: string;
  keyName: string;
}
type EntityType = 'work-orders' | 'locations' | 'assets' | 'parts' | 'meters';

const Import = ({}: OwnProps) => {
  const { hasViewPermission } = useAuth();
  const { t }: { t: any } = useTranslation();
  const [entity, setEntity] = useState<EntityType>('work-orders');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { setTitle } = useContext(TitleContext);
  const [userHeaders, setUserHeaders] = useState<string[]>([]);
  const headerKeysConfig: { [key: string]: HeaderKey[] } = {
    'work-orders': [{ label: t('Work Order ID'), keyName: 'id' }]
  };
  const [headersMatching, setHeadersMatching] = useState<
    { headerKey: HeaderKey; userHeader: string }[]
  >([]);
  const [spreadSheetsConfig, setSpreadSheetsConfig] = useState<{
    [key: string]: any[][];
  }>({});
  const steps = [t('upload'), t('match_columns'), t('review'), t('done')];
  const [activeStep, setActiveStep] = useState<number>(0);
  const options: { label: string; value: EntityType }[] = [
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

  const getMatchingLabel = (userHeader: string) => {
    return headersMatching.find(
      (headerMatching) => headerMatching.userHeader === userHeader
    )?.headerKey?.label;
  };

  const SingleHeader = ({ userHeader }: { userHeader: string }) => {
    const onChange = (event) => {
      let result = [...headersMatching];
      const newHeaderKey = headerKeysConfig[entity].find(
        (headerKey) => headerKey.keyName === event.target.value
      );
      const inheadersMatching = headersMatching.find(
        (headerMatching) => headerMatching.userHeader === userHeader
      );
      if (inheadersMatching) {
        inheadersMatching.headerKey = newHeaderKey;
      } else {
        result.push({ headerKey: newHeaderKey, userHeader });
      }
      setHeadersMatching(result);
    };
    return (
      <Grid item xs={12}>
        <Card sx={{ display: 'flex', flexDirection: 'row', p: 2 }}>
          <Box>
            <Stack direction="row" spacing={1}>
              <Box>
                <Typography>{userHeader}</Typography>
              </Box>
              <Select
                value={
                  headersMatching.find(
                    (headerMatching) => headerMatching.userHeader === userHeader
                  )?.headerKey.keyName ?? ''
                }
                onChange={onChange}
              >
                <MenuItem disabled value={''}>
                  <em>{t('select')}</em>
                </MenuItem>
                {headerKeysConfig[entity].map((header) => (
                  <MenuItem key={header.keyName} value={header.keyName}>
                    {header.label}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
            <Spreadsheet data={spreadSheetsConfig[userHeader][0]} />;
          </Box>
          <Box>
            <Typography>
              {getMatchingLabel(userHeader)
                ? t(`Matched To ${getMatchingLabel(userHeader)}`)
                : t('no_match_yet')}
            </Typography>
          </Box>
        </Card>
      </Grid>
    );
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
              type={'spreadsheet'}
              description={t('upload')}
              onDrop={(files: any) => {
                var reader = new FileReader();
                reader.onload = function (e) {
                  const data = e.target.result;
                  const file = read(data, { type: 'binary' });
                  const sheet = file.Sheets[file.SheetNames[0]];
                  const localJsonArray: { [key: string]: string }[] =
                    utils.sheet_to_json(sheet);
                  if (localJsonArray.length > 1) {
                    let fullKeys = [];
                    localJsonArray.forEach((json) => {
                      const keys = Object.keys(json);
                      keys.forEach((key) => {
                        if (!fullKeys.includes(key)) {
                          fullKeys.push(key);
                        }
                      });
                    });
                    setUserHeaders(fullKeys);
                    const localObjectOfArrayOfArrays = arrayToAoA(
                      utils.sheet_to_json(sheet, { header: 1 })
                    );
                    setSpreadSheetsConfig(localObjectOfArrayOfArrays);
                    setActiveStep(1);
                  } else {
                    //TODO
                  }
                  /* DO SOMETHING WITH workbook HERE */
                };
                reader.readAsBinaryString(files[0]);
              }}
            />
          ) : activeStep === 1 ? (
            <Box>
              <Grid container spacing={1}>
                {userHeaders.map((userHeader, index) => (
                  <SingleHeader key={index} userHeader={userHeader} />
                ))}
              </Grid>
            </Box>
          ) : null}
        </Box>
      </DialogContent>
      <DialogActions>
        {activeStep > 0 && (
          <Button
            variant="outlined"
            onClick={() => setActiveStep((step) => step - 1)}
          >
            {t('go_back')}
          </Button>
        )}
        {activeStep === steps.length - 1 && (
          <Button variant="contained">{t('finish')}</Button>
        )}
      </DialogActions>
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
                      setEntity(event.target.value as EntityType);
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
