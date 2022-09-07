import { ChangeEvent, ReactNode, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  styled,
  Tab,
  Tabs
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Subscription() {
  const { t }: { t: any } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>{t('Plan')}</title>
      </Helmet>
      <Card
        variant="outlined"
        sx={{
          mx: 4
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={0}
        ></Grid>
      </Card>
    </>
  );
}

export default Subscription;
