import {
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography
} from '@mui/material';
import PartQuantity from '../../../models/owns/partQuantity';
import { useTranslation } from 'react-i18next';
import useAuth from '../../../hooks/useAuth';

interface PartQuantityListProps {
  partQuantities: PartQuantity[];
  onChange: (value: string, partQuantity: PartQuantity) => void;
}
export default function PartQuantitiesList({
  partQuantities,
  onChange
}: PartQuantityListProps) {
  const { t }: { t: any } = useTranslation();
  const { companySettings } = useAuth();
  const { generalPreferences } = companySettings;

  return (
    <List>
      {partQuantities.map((partQuantity, index) => (
        <ListItem
          key={partQuantity.part.id}
          secondaryAction={
            <Box display="flex" flexDirection="row" alignItems="center">
              <TextField
                label={t('Quantity')}
                variant="outlined"
                sx={{ mr: 1 }}
                type="number"
                inputProps={{
                  min: '0'
                }}
                size="small"
                onChange={(event) => onChange(event.target.value, partQuantity)}
                defaultValue={partQuantity.quantity}
              />
              <Typography variant="h6">
                {' * '}
                {`${partQuantity.part.cost} ${generalPreferences.currency.code}`}
              </Typography>
            </Box>
          }
        >
          <ListItemText
            primary={
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={`/app/inventory/parts/${partQuantity.part.id}`}
                key={partQuantity.part.id}
                variant="h6"
              >
                {partQuantity.part.name}
              </Link>
            }
            secondary={partQuantity.part.description}
          />
        </ListItem>
      ))}
      <ListItem
        secondaryAction={
          <Typography variant="h6" fontWeight="bold">
            {partQuantities.reduce(
              (acc, partQuantity) =>
                acc + partQuantity.part.cost * partQuantity.quantity,
              0
            )}{' '}
            {generalPreferences.currency.code}
          </Typography>
        }
      >
        <ListItemText
          primary={
            <Typography variant="h6" fontWeight="bold">
              {t('Total')}
            </Typography>
          }
        />
      </ListItem>
    </List>
  );
}