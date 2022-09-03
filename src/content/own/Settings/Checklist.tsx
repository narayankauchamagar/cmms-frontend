import {
  Box,
  CardHeader,
  Typography,
  IconButton,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Tooltip,
  styled
} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useTranslation } from 'react-i18next';
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';

const TimelineWrapper = styled(Timeline)(
  ({ theme }) => `
    margin-left: ${theme.spacing(2)};

    .MuiTimelineDot-root {
      left: -${theme.spacing(2)};
      margin-top: 0;
      top: ${theme.spacing(0.5)};
    }
    
    .MuiTimelineContent-root {
      padding-left: ${theme.spacing(4)};
    }
    
    .MuiFormControlLabel-root {
      margin-left: -${theme.spacing(0.7)};
    }
    
    .MuiFormControlLabel-label {
      color: ${theme.colors.alpha.black[50]};
    }
`
);

const CheckboxWrapper = styled(Checkbox)(
  ({ theme }) => `
    padding: ${theme.spacing(0.5)};
`
);

function Checklist() {
  const { t }: { t: any } = useTranslation();

  return (
    <Box>
      <CardHeader
        sx={{
          px: 0,
          pt: 0
        }}
        action={
          <Tooltip arrow title={t('Refresh list')}>
            <IconButton size="small" color="primary">
              <RefreshTwoToneIcon />
            </IconButton>
          </Tooltip>
        }
        title={t('Checklist')}
      />
      <TimelineWrapper>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <AssignmentTwoToneIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h4"
              sx={{
                pb: 2
              }}
            >
              {t('Tasks Quick List')}
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<CheckboxWrapper color="primary" name="checkedC" />}
                label={t('Prepare website launch')}
              />
              <FormControlLabel
                control={<CheckboxWrapper color="primary" name="checkedC" />}
                label={t('Build React Native application')}
              />
              <FormControlLabel
                control={<CheckboxWrapper color="primary" name="checkedC" />}
                label={t('Fix remaining bugs for first 4 pages')}
              />
            </FormGroup>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <AccountTreeTwoToneIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h4"
              sx={{
                pb: 2
              }}
            >
              {t('Project Management')}
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<CheckboxWrapper color="primary" name="checkedC" />}
                label={t('Complete sales pitch')}
              />
              <FormControlLabel
                control={<CheckboxWrapper color="primary" name="checkedC" />}
                label={t('Improve SEO visibility')}
              />
            </FormGroup>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <BusinessCenterTwoToneIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h4"
              sx={{
                pb: 2
              }}
            >
              {t('Business & Marketing')}
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<CheckboxWrapper color="primary" name="checkedC" />}
                label={t('Create marketing campaign')}
              />
              <FormControlLabel
                control={<CheckboxWrapper color="primary" name="checkedC" />}
                label={t('Sign business contract with partners')}
              />
            </FormGroup>
          </TimelineContent>
        </TimelineItem>
      </TimelineWrapper>
    </Box>
  );
}

export default Checklist;
