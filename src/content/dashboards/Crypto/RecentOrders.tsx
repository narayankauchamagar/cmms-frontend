import { useState, useEffect, useCallback } from 'react';

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
