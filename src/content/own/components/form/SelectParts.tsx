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
  Typography
} from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { parts } from 'src/models/owns/part';
import { sets } from '../../../../models/owns/setType';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

interface SelectPartsProps {
  open: boolean;
  onClose: () => void;
  onChange: (parts: { id: number; name: string }[]) => void;
  selected: number[];
}

export default function SelectParts({
  open,
  onClose,
  onChange,
  selected
}: SelectPartsProps) {
  const { t }: { t: any } = useTranslation();
  const [currentTab, setCurrentTab] = useState<string>('parts');
  const [selectedIds, setSelectedIds] = useState<number[]>(selected);
  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };
  const tabs = [
    { value: 'parts', label: t('Parts') },
    { value: 'sets', label: t('Sets of Parts') }
  ];

  useEffect(() => {
    onChange(
      selectedIds.map((id) => {
        return { id, name: parts.find((part) => part.id === id).name };
      })
    );
  }, [selectedIds]);

  const onSelect = (ids: number[]) => {
    setSelectedIds(Array.from(new Set([...selectedIds, ...ids])));
  };
  const onUnSelect = (ids: number[]) => {
    const newSelectedIds = selectedIds.filter((id) => !ids.includes(id));
    setSelectedIds(newSelectedIds);
  };
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
                onChange={(event, checked) => {
                  if (checked) {
                    onSelect([part.id]);
                  } else onUnSelect([part.id]);
                }}
                key={part.id}
                control={<Checkbox checked={selectedIds.includes(part.id)} />}
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
                    <Checkbox
                      checked={set.parts.every((part) =>
                        selectedIds.includes(part.id)
                      )}
                      onChange={(event, checked) => {
                        if (checked) {
                          onSelect(set.parts.map((part) => part.id));
                        } else onUnSelect(set.parts.map((part) => part.id));
                      }}
                    />
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
