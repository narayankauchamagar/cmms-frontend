import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  Select,
  Tab,
  Tabs,
  TextField,
  Tooltip,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import SettingsLayout from '../SettingsLayout';
import wait from '../../../../utils/wait';
import { ChangeEvent, useState } from 'react';
import HelpOutlineTwoToneIcon from '@mui/icons-material/HelpOutlineTwoTone';


function DashboardTasks() {
  const { t }: { t: any } = useTranslation();
  const [currentTab, setCurrentTab] = useState<string>('create');

  const tabs = [
    { value: 'create', label: t('Creating a Work Order') },
    { value: 'complete', label: t('Completing a Work Order') },
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  const onSubmit = async (
    _values,
    { resetForm, setErrors, setStatus, setSubmitting }
  ) => {
    try {
      await wait(1000);
      resetForm();
      setStatus({ success: true });
      setSubmitting(false);
    } catch (err) {
      console.error(err);
      setStatus({ success: false });
      setErrors({ submit: err.message });
      setSubmitting(false);
    }
  };
  return (
    <SettingsLayout tabIndex={1}>
      <Grid item xs={12}>
        <Box p={4}>

          <Box>
            <Tabs
              onChange={handleTabsChange}
              value={currentTab}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </Tabs>
            <Divider sx={{mt:1}}/>
            <Box p={3}>
              {currentTab === 'create' && (
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      name="regular_price"
                      variant="outlined"
                      label={t('Regular price')}
                      placeholder={t('Regular price here ...')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      name="sale_price"
                      variant="outlined"
                      label={t('Sale price')}
                      placeholder={t('Sale price here ...')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel htmlFor="tax_status">{t('Tax Status')}</InputLabel>
                      <Select
                        native
                        label={t('Tax Status')}
                        inputProps={{
                          name: 'tax_status'
                        }}
                      >
                        <option aria-label="None" value="" />
                        <option value={1}>{t('Taxable')}</option>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel htmlFor="tax_class">{t('Tax Class')}</InputLabel>
                      <Select
                        native
                        label={t('Tax Class')}
                        inputProps={{
                          name: 'tax_status'
                        }}
                      >
                        <option aria-label="None" value="" />
                        <option value={1}>{t('Standard')}</option>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              )}
              {currentTab === 'complete' && (
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center">
                      <TextField
                        fullWidth
                        name="sku"
                        variant="outlined"
                        label={t('SKU')}
                        placeholder={t('Stock quantity here ...')}
                      />
                      <Tooltip
                        arrow
                        placement="top"
                        title={t(
                          'This field helps identify the current product stocks'
                        )}
                      >
                        <IconButton
                          size="small"
                          sx={{
                            ml: 1
                          }}
                          color="primary"
                        >
                          <HelpOutlineTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel htmlFor="stock_status">
                        {t('Stock Status')}
                      </InputLabel>
                      <Select
                        native
                        label={t('Stock Status')}
                        inputProps={{
                          name: 'stock_status'
                        }}
                      >
                        <option aria-label="None" value="" />
                        <option value={1}>{t('In stock')}</option>
                        <option value={1}>{t('Out of stock')}</option>
                        <option value={1}>{t('Back in stock soon')}</option>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label={t('Sold individually')}
                    />
                    <Typography variant="h6" color="text.secondary">
                      {t(
                        'Enable this to only allow one of this item to be bought in a single order'
                      )}
                    </Typography>
                  </Grid>
                </Grid>
              )}
            </Box>
          </Box>
        </Box>
      </Grid>
    </SettingsLayout>
  );
}

export default DashboardTasks;
