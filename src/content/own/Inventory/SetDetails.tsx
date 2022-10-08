import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import SetType from '../../../models/owns/setType';
import HandymanTwoToneIcon from '@mui/icons-material/HandymanTwoTone';
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';

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
        <Box display="flex" flexDirection="row">
          <HandymanTwoToneIcon />
          <Typography sx={{ mb: 1, ml: 1 }} variant="h4">
            {`${set.parts.length} Parts`}
          </Typography>
        </Box>
        <List sx={{ width: '100%' }}>
          {set.parts.map((part) => (
            <ListItemButton key={part.id} divider>
              <ListItem secondaryAction={<Typography>{part.cost}</Typography>}>
                <ListItemText
                  primary={part.name}
                  secondary={part.description}
                />
              </ListItem>
            </ListItemButton>
          ))}
        </List>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box display="flex" flexDirection="row">
            <AttachMoneyTwoToneIcon />
            <Typography sx={{ mb: 1, ml: 1 }} variant="h4">
              Total Cost
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ pr: 2 }}>
            {set.parts.reduce((acc, part) => acc + part.cost, 0)}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
