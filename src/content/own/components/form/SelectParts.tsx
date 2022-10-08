import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Tab,
  Tabs,
  Typography,
  useTheme
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { parts } from 'src/models/owns/part';
import { sets } from '../../../../models/owns/setType';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

interface SelectPartsProps {
  open: boolean;
  onClose: () => void;
}

export default function SelectParts({ open, onClose }: SelectPartsProps) {
  const { t }: { t: any } = useTranslation();
  const [currentTab, setCurrentTab] = useState<string>('parts');
  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };
  const tabs = [
    { value: 'parts', label: t('Parts') },
    { value: 'sets', label: t('Sets of Parts') }
  ];
  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose}>
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Select Parts')}
        </Typography>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          p: 3
        }}
      >
        <Tabs
          sx={{ mb: 2 }}
          onChange={handleTabsChange}
          value={currentTab}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
        >
          {tabs.map((tab) => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
        {currentTab === 'parts' && (
          <FormGroup>
            {parts.map((part) => (
              <FormControlLabel
                key={part.id}
                control={<Checkbox />}
                label={part.name}
              />
            ))}
          </FormGroup>
        )}
        {currentTab === 'sets' && (
          <FormGroup>
            {sets.map((set) => (
              <FormControlLabel
                key={set.id}
                control={
                  <Box display="flex" flexDirection="row" alignItems="center">
                    <Checkbox />
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreTwoToneIcon />}
                        aria-controls="panel1a-content"
                      >
                        {set.name}
                      </AccordionSummary>
                      <AccordionDetails>
                        {set.parts.map((part) => (
                          <Typography key={part.id}>{part.name}</Typography>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                }
                label=""
              />
            ))}
          </FormGroup>
        )}
      </DialogContent>
    </Dialog>
  );
}
