import { FC, useState } from 'react';
import PropTypes from 'prop-types';
import type { Invoice } from 'src/models/invoice';
import {
  Box,
  Typography,
  Card,
  Grid,
  Divider,
  Container,
  Tooltip,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  TableContainer,
  styled
} from '@mui/material';
import { format } from 'date-fns';
import numeral from 'numeral';
import useAuth from 'src/hooks/useAuth';
import Logo from 'src/components/LogoSign';
import { useTranslation } from 'react-i18next';
import DownloadTwoToneIcon from '@mui/icons-material/DownloadTwoTone';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfTwoTone';

const BoxWrapper = styled(Box)(
  ({ theme }) => `
  border-radius: ${theme.general.borderRadius};
  background: ${theme.colors.alpha.black[5]};
`
);

const TableWrapper = styled(Box)(
  ({ theme }) => `
  border: 1px solid ${theme.colors.alpha.black[10]};
  border-bottom: 0;
  margin: ${theme.spacing(4)} 0;
`
);

const LogoWrapper = styled(Box)(
  () => `
    width: '52px'
`
);

interface InvoiceBodyProps {
  invoice: Invoice;
}

interface Item {
  id: number;
  name: string;
  quantity: number;
  price: number;
  currency: string;
}

const InvoiceBody: FC<InvoiceBodyProps> = ({ invoice }) => {
  const { t }: { t: any } = useTranslation();
  const { user } = useAuth();

  const itemsList: Item[] = [
    {
      id: 1,
      name: 'Design services for March',
      quantity: 1,
      price: 8945,
      currency: '$'
    },
    {
      id: 2,
      name: 'Website migration services',
      quantity: 3,
      price: 2367,
      currency: '$'
    }
  ];

  const [items] = useState<Item[]>(itemsList);

  return (
    <Container maxWidth="lg">
      <Card
        sx={{
          p: 3,
          mb: 3
        }}
      >
        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h1" gutterBottom>
              {t('Invoice')}
            </Typography>
            <Typography variant="h3" color="text.secondary">
              #{invoice.number}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
            <Typography
              sx={{
                py: 2
              }}
              variant="h4"
            >
              {user.name}
            </Typography>
            <Typography variant="h5" fontWeight="normal">
              83 Laurel Lane
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight="normal">
              Fort Walton Beach, FL 32547
            </Typography>
            <Typography variant="h5" fontWeight="normal">
              New York, USA
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{
            my: 4
          }}
        />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" gutterBottom>
              {t('Invoice for')}:
            </Typography>
            <Typography
              sx={{
                pb: 2
              }}
              variant="h5"
            >
              {invoice.clientName}
            </Typography>
            <Typography variant="h5" fontWeight="normal">
              519 Bay Meadows Ave.
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight="normal">
              Scotch Plains, NJ 07076
            </Typography>
            <Typography variant="h5" fontWeight="normal">
              New York, USA
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid
              container
              spacing={4}
              justifyContent={{ xs: 'flex-start', sm: 'flex-end' }}
            >
              <Grid item>
                <Typography variant="subtitle2" gutterBottom>
                  {t('Issued on')}:
                </Typography>
                <Typography
                  sx={{
                    pb: 2
                  }}
                  variant="h5"
                >
                  {format(invoice.issuedDate, 'dd MMMM yyyy')}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" gutterBottom>
                  {t('Due on')}:
                </Typography>
                <Typography
                  sx={{
                    pb: 2
                  }}
                  variant="h5"
                >
                  {format(invoice.dueDate, 'dd MMMM yyyy')}
                </Typography>
              </Grid>
            </Grid>
            <BoxWrapper textAlign="right" mt={1} p={3}>
              <Typography component="span" variant="h4" fontWeight="normal">
                {t('Balance due')}:{' '}
              </Typography>
              <Typography component="span" variant="h4">
                {numeral(invoice.amount).format(`${invoice.currency}0,0.00`)}
              </Typography>
            </BoxWrapper>
          </Grid>
        </Grid>

        <TableWrapper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>{t('Item')}</TableCell>
                  <TableCell>{t('Qty')}</TableCell>
                  <TableCell>{t('Price')}</TableCell>
                  <TableCell>{t('Total')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item: Item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Typography noWrap>{item.name}</Typography>
                    </TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>
                      {numeral(item.price).format(`${item.currency}0,0.00`)}
                    </TableCell>
                    <TableCell>
                      {numeral(item.price).format(`${item.currency}0,0.00`)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={0} />
                  <TableCell colSpan={4} align="right">
                    <Typography
                      gutterBottom
                      variant="caption"
                      color="text.secondary"
                      fontWeight="bold"
                    >
                      {t('Total')}:
                    </Typography>
                    <Typography variant="h3" fontWeight="bold">
                      {numeral(9458).format(`$0,0.00`)}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </TableWrapper>
        <Typography variant="subtitle2" gutterBottom>
          {t('Additional informations')}
        </Typography>
        <Typography variant="body2">
          These projects were completed between January and February of 2021.
        </Typography>
        <Tooltip
          placement="top"
          arrow
          title="This functionality will be added in a future release!"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={4}
          >
            <Button
              disabled
              variant="contained"
              sx={{
                mx: 2
              }}
              startIcon={<DownloadTwoToneIcon />}
            >
              {t('Download PDF')}
            </Button>
            <Button
              disabled
              variant="outlined"
              sx={{
                mx: 2
              }}
              startIcon={<PictureAsPdfTwoToneIcon />}
            >
              {t('Preview PDF')}
            </Button>
          </Box>
        </Tooltip>
      </Card>
    </Container>
  );
};

InvoiceBody.propTypes = {
  // @ts-ignore
  invoice: PropTypes.object.isRequired
};

export default InvoiceBody;
