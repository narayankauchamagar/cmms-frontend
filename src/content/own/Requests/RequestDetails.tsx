import {
  Box,
  Divider,
  Grid,
  IconButton,
  Typography,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Request from '../../../models/owns/request';

interface RequestDetailsProps {
  request: Request;
  handleOpenUpdate: () => void;
  handleOpenDelete: () => void;
}
export default function RequestDetails(props: RequestDetailsProps) {
  const { request, handleOpenUpdate, handleOpenDelete } = props;
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const renderField = (label, value) => {
    return (
      <Grid item xs={12} lg={6}>
        <Typography variant="h6" sx={{ color: theme.colors.alpha.black[70] }}>
          {label}
        </Typography>
        <Typography variant="h6">{value}</Typography>
      </Grid>
    );
  };
  const fieldsToRender = (
    request: Request
  ): { label: string; value: any }[] => [
    {
      label: t('Description'),
      value: request.description
    },
    {
      label: t('ID'),
      value: request.id
    },
    {
      label: t('Priority'),
      value: request.priority
    }
  ];
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="stretch"
      spacing={2}
      padding={4}
    >
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="h2">{request?.title}</Typography>
        </Box>
        <Box>
          <IconButton style={{ marginRight: 10 }} onClick={handleOpenUpdate}>
            <EditTwoToneIcon color="primary" />
          </IconButton>
          <IconButton onClick={handleOpenDelete}>
            <DeleteTwoToneIcon color="error" />
          </IconButton>
        </Box>
      </Grid>
      <Divider />

      <Grid item xs={12}>
        <Box>
          <Typography sx={{ mt: 2, mb: 1 }} variant="h4">
            Request details
          </Typography>
          <Grid container spacing={2}>
            {fieldsToRender(request).map((field) =>
              renderField(field.label, field.value)
            )}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
