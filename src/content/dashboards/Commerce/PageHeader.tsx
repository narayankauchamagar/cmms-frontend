import { useRef, useState } from 'react';
import useAuth from 'src/hooks/useAuth';
import { useTranslation } from 'react-i18next';
import { Typography, Grid, Button, Menu, MenuItem } from '@mui/material';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

function PageHeader() {
  const { t }: { t: any } = useTranslation();
  const { user } = useAuth();

  const periods = [
    {
      value: 'this_week',
      text: t('This week')
    },
    {
      value: 'last_month',
      text: t('Last month')
    },
    {
      value: 'last_year',
      text: t('Last year')
    }
  ];

  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>(periods[0].text);

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {t('Welcome')}, {user.name}!
        </Typography>
        <Typography variant="subtitle2">
          {t('Check the latest stats is your commerce dashboard overview.')}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          ref={actionRef1}
          onClick={() => setOpenMenuPeriod(true)}
          endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
        >
          {period}
        </Button>
        <Menu
          disableScrollLock
          anchorEl={actionRef1.current}
          onClose={() => setOpenMenuPeriod(false)}
          open={openPeriod}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          {periods.map((_period) => (
            <MenuItem
              key={_period.value}
              onClick={() => {
                setPeriod(_period.text);
                setOpenMenuPeriod(false);
              }}
            >
              {_period.text}
            </MenuItem>
          ))}
        </Menu>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
