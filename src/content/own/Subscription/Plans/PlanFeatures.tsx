import { Card, Grid, Stack, Typography, useTheme } from '@mui/material';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { splitToChunks } from '../../../../utils/arrayChunk';

interface PlanFeatureProps {
  plan: string;
}
function PlanFeatures(props: PlanFeatureProps) {
  const { plan } = props;
  const theme = useTheme();
  const features = {
    starter: [
      { name: 'Work Orders', value: true },
      { name: 'Parts management', value: false },
      { name: 'In app messaging', value: false },
      { name: 'Photo capture', value: true }
    ],
    pro: [
      { name: 'Work Orders', value: true },
      { name: 'Parts management', value: false },
      { name: 'In app messaging', value: true },
      { name: 'Photo capture', value: true }
    ],
    bus: [
      { name: 'Work Orders', value: true },
      { name: 'Parts management', value: true },
      { name: 'In app messaging', value: true },
      { name: 'Photo capture', value: true }
    ]
  };
  return (
    <Card
      sx={{
        background: `${theme.colors.gradients.blue4}`,
        color: `${theme.palette.getContrastText(theme.colors.primary.main)}`,
        display: 'flex',
        alignItems: 'flex-start',
        px: 3,
        py: 5,
        mb: 2
      }}
    >
      <Grid container>
        {splitToChunks(features[plan], 3).map((featuresColumn, index) => (
          <Grid key={index} item xs={12} md={4}>
            {featuresColumn.map((feature) => (
              <Stack
                key={feature.name}
                spacing={1}
                direction="row"
                alignItems="center"
              >
                {feature.value ? (
                  <CheckTwoToneIcon />
                ) : (
                  <CloseTwoToneIcon color="error" />
                )}
                <Typography>{feature.name}</Typography>
              </Stack>
            ))}
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}
export default PlanFeatures;
