import { Container, Typography, Grid } from '@mui/material';

import { Helmet } from 'react-helmet-async';
import PageHeader from 'src/components/PageHeaderDocs';
import { Prism } from 'react-syntax-highlighter';
import a11yDark from 'react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark';

function ApiRequests() {
  const axiosImp = `import { useState, useEffect, useCallback } from 'react';

  import { Card } from '@mui/material';
  import axios from 'src/utils/axios';
  import useRefMounted from 'src/hooks/useRefMounted';
  import { CryptoOrder } from 'src/models/crypto_order';
  import RecentOrdersTable from './RecentOrdersTable';
  
  function RecentOrders() {
    const isMountedRef = useRefMounted();
    const [cryptoOrders, setCryptoOrders] = useState<CryptoOrder[]>([]);
  
    const getCryptoOrders = useCallback(async () => {
      try {
        const response = await axios.get<{ cryptoOrders: CryptoOrder[] }>(
          '/api/crypto-orders'
        );
  
        if (isMountedRef.current) {
          setCryptoOrders(response.data.cryptoOrders);
        }
      } catch (err) {
        console.error(err);
      }
    }, [isMountedRef]);
  
    useEffect(() => {
      getCryptoOrders();
    }, [getCryptoOrders]);
  
    return (
      <Card>
        <RecentOrdersTable cryptoOrders={cryptoOrders} />
      </Card>
    );
  }
  
  export default RecentOrders;
  `;

  const axiosMock = `import { mock } from 'src/utils/axios';
import { CryptoOrder } from 'src/models/crypto_order';

mock.onGet('/api/crypto-orders').reply(() => {
  const cryptoOrders: CryptoOrder[] = [
    {
      id: '1',
      orderDetails: 'Fiat Deposit',
      orderDate: new Date().getTime(),
      status: 'completed',
      orderID: 'VUVX709ET7BY',
      sourceName: 'Bank Account',
      sourceDesc: '*** 1111',
      amountCrypto: 34.4565,
      amount: 56787,
      cryptoCurrency: 'ETH',
      currency: '$'
    },
  ];

  return [200, { cryptoOrders }];
});`;

  return (
    <>
      <Helmet>
        <title>
          Server Requests - Tokyo White React Typescript Admin Dashboard
        </title>
      </Helmet>
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PageHeader heading="Server Requests" subheading="" />
          </Grid>
          <Grid item xs={12}>
            <Typography paragraph>
              Throughout Tokyo White React Typescript Admin Dashboard you will
              find a few examples of API calls, mocked using Axios.
            </Typography>
            <Typography paragraph>
              Below is a simple example of an API call implementation.
            </Typography>
            <Prism
              showLineNumbers
              wrapLines
              language="javascript"
              style={a11yDark}
            >
              {axiosImp}
            </Prism>
            <br />
            <Typography paragraph>
              Using Axios Mock Adapter you can simulate request calls. Check out
              the example below:
            </Typography>
            <Prism
              showLineNumbers
              wrapLines
              language="javascript"
              style={a11yDark}
            >
              {axiosMock}
            </Prism>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ApiRequests;
