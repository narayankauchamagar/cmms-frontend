import {
  Card,
  CardHeader,
  Box,
  Typography,
  Divider,
  Tooltip,
  TooltipProps,
  tooltipClasses,
  useTheme,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';

const TooltipWrapper = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.colors.alpha.trueWhite[100],
    color: theme.palette.getContrastText(theme.colors.alpha.trueWhite[100]),
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 'bold',
    borderRadius: theme.general.borderRadiusSm,
    boxShadow:
      '0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)'
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.colors.alpha.trueWhite[100]
  }
}));

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

function DataCenters() {
  const { t }: { t: any } = useTranslation();
  const geoUrl =
    'https://raw.githubusercontent.com/leakyMirror/map-of-europe/master/TopoJSON/europe.topojson';
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <CardHeader title={t('Europe Data Centers')} />
      <Divider />
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-10.0, -48.5, 0],
          scale: 1350
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={theme.colors.alpha.black[100]}
                stroke={theme.colors.alpha.white[30]}
              />
            ))
          }
        </Geographies>
        <Marker coordinates={[-3.4, 52.3]}>
          <TooltipWrapper placement="top" arrow title="United Kingdom">
            <circle r={12} fill={theme.colors.error.main} />
          </TooltipWrapper>
        </Marker>
        <Marker coordinates={[3.12, 48.37]}>
          <TooltipWrapper placement="top" arrow title="France">
            <circle r={12} fill={theme.colors.success.main} />
          </TooltipWrapper>
        </Marker>
        <Marker coordinates={[10.51, 51.72]}>
          <TooltipWrapper placement="top" arrow title="Germany 1">
            <circle r={12} fill={theme.colors.error.main} />
          </TooltipWrapper>
        </Marker>
        <Marker coordinates={[9.05, 50.74]}>
          <TooltipWrapper placement="top" arrow title="Germany 2">
            <circle r={12} fill={theme.colors.success.main} />
          </TooltipWrapper>
        </Marker>
        <Marker coordinates={[18.5, 51.39]}>
          <TooltipWrapper placement="top" arrow title="Poland">
            <circle r={12} fill={theme.colors.error.main} />
          </TooltipWrapper>
        </Marker>
        <Marker coordinates={[-4.2, 39.68]}>
          <TooltipWrapper placement="top" arrow title="Spain">
            <circle r={12} fill={theme.colors.success.main} />
          </TooltipWrapper>
        </Marker>
        <Marker coordinates={[14.18, 57.83]}>
          <TooltipWrapper placement="top" arrow title="Sweden">
            <circle r={12} fill={theme.colors.error.main} />
          </TooltipWrapper>
        </Marker>
        <Marker coordinates={[27.88, 50.08]}>
          <TooltipWrapper placement="top" arrow title="Ukraine">
            <circle r={12} fill={theme.colors.success.main} />
          </TooltipWrapper>
        </Marker>
        <Marker coordinates={[24.19, 44.87]}>
          <TooltipWrapper placement="top" arrow title="Romania">
            <circle r={16} fill={theme.colors.error.main} />
          </TooltipWrapper>
        </Marker>
        <Marker coordinates={[10.15, 48.73]}>
          <TooltipWrapper placement="top" arrow title="Germany 3">
            <circle r={12} fill={theme.colors.success.main} />
          </TooltipWrapper>
        </Marker>
        <Marker coordinates={[21.89, 49.03]}>
          <TooltipWrapper placement="top" arrow title="Slovakia">
            <circle r={12} fill={theme.colors.error.main} />
          </TooltipWrapper>
        </Marker>
      </ComposableMap>
      <Box display="flex" alignItems="center" justifyContent="center" my={2}>
        <Typography
          variant="subtitle1"
          color="text.primary"
          sx={{
            mx: 1,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <DotLegend style={{ background: theme.colors.error.main }} />
          {t('Highest downtime')}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.primary"
          sx={{
            mx: 1,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <DotLegend style={{ background: theme.colors.success.main }} />
          {t('Optimal uptime')}
        </Typography>
      </Box>
    </Card>
  );
}

export default DataCenters;
