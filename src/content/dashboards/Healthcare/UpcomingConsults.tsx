import {
  Button,
  Card,
  CardHeader,
  Divider,
  Typography,
  Avatar,
  useTheme,
  Box,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';

const AvatarLabelSecondary = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.black[5]};
      color: ${theme.colors.primary.main};
      width: ${theme.spacing(5.5)};
      height: ${theme.spacing(5.5)};
`
);

function UpcomingConsults() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: '100%'
      }}
    >
      <CardHeader
        title={t('Upcoming Consults')}
        action={
          <Button variant="outlined" size="small">
            {t('View all')}
          </Button>
        }
      />
      <Divider />
      <Box py={0.5} px={2}>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent display="flex" alignItems="center">
              <AvatarLabelSecondary
                sx={{
                  mr: 3
                }}
                variant="rounded"
              >
                <CalendarTodayTwoToneIcon fontSize="small" />
              </AvatarLabelSecondary>
              <Box
                sx={{
                  mr: 3
                }}
              >
                <Typography variant="h5" noWrap>
                  09:30 AM
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                  {t('room')} 11
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Avatar
                  src="/static/images/avatars/2.jpg"
                  sx={{
                    mr: 1
                  }}
                />
                <Box>
                  <Typography variant="h5" noWrap>
                    Makenna Arcand
                  </Typography>
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {t('Doctor (Pediatrician)')}
                  </Typography>
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent display="flex" alignItems="center">
              <AvatarLabelSecondary
                sx={{
                  mr: 3
                }}
                variant="rounded"
              >
                <CalendarTodayTwoToneIcon fontSize="small" />
              </AvatarLabelSecondary>
              <Box
                sx={{
                  mr: 3
                }}
              >
                <Typography variant="h5" noWrap>
                  10:00 AM
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                  {t('room')} 15
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Avatar
                  src="/static/images/avatars/1.jpg"
                  sx={{
                    mr: 1
                  }}
                />
                <Box>
                  <Typography variant="h5" noWrap>
                    Kaiya Westervelt
                  </Typography>
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {t('Doctor (Orthopedics)')}
                  </Typography>
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent display="flex" alignItems="center">
              <AvatarLabelSecondary
                sx={{
                  mr: 3
                }}
                variant="rounded"
              >
                <CalendarTodayTwoToneIcon fontSize="small" />
              </AvatarLabelSecondary>
              <Box
                sx={{
                  mr: 3
                }}
              >
                <Typography variant="h5" noWrap>
                  11:30 AM
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                  {t('room')} 9
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Avatar
                  src="/static/images/avatars/4.jpg"
                  sx={{
                    mr: 1
                  }}
                />
                <Box>
                  <Typography variant="h5" noWrap>
                    Jakob Torff
                  </Typography>
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {t('Doctor (Cardiology)')}
                  </Typography>
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent display="flex" alignItems="center">
              <AvatarLabelSecondary
                sx={{
                  mr: 3
                }}
                variant="rounded"
              >
                <CalendarTodayTwoToneIcon fontSize="small" />
              </AvatarLabelSecondary>
              <Box
                sx={{
                  mr: 3
                }}
              >
                <Typography variant="h5" noWrap>
                  10:30 AM
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                  {t('room')} 8
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Avatar
                  sx={{
                    mr: 1,
                    background: `${theme.colors.warning.main}`,
                    color: `${theme.colors.alpha.white[100]}`
                  }}
                >
                  HB
                </Avatar>
                <Box>
                  <Typography variant="h5" noWrap>
                    Hanna Baptista
                  </Typography>
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {t('Doctor (Cardiology)')}
                  </Typography>
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Card>
  );
}

export default UpcomingConsults;
