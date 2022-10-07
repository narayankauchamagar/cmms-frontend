import { Box, Divider, Grid, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import SetType from '../../../models/owns/setType';

interface PartDetailsProps {
  set: SetType;
  handleUpdate: (id: number) => void;
}
export default function SetDetails(props: PartDetailsProps) {
  const { set, handleUpdate } = props;
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

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
          <Typography variant="h2">{set?.name}</Typography>
          <Typography variant="h6">{set?.createdAt}</Typography>
        </Box>
        <Box>
          <EditTwoToneIcon
            onClick={() => handleUpdate(set.id)}
            style={{ cursor: 'pointer', marginRight: 10 }}
            color="primary"
          />
          <DeleteTwoToneIcon style={{ cursor: 'pointer' }} color="error" />
        </Box>
      </Grid>
      <Divider />
      <Grid item xs={12}>
        <Box>
          <Typography sx={{ mb: 1 }} variant="h4">
            Set details
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
