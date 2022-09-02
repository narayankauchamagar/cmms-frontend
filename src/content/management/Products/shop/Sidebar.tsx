import { useState } from 'react';

import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Card,
  ListItemIcon,
  Slider,
  Checkbox,
  Rating,
  List,
  ListItemButton,
  ListItemText,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionSummaryWrapper = styled(AccordionSummary)(
  () => `
      &.Mui-expanded {
        min-height: 48px;
      }

      .MuiAccordionSummary-content.Mui-expanded {
        margin: 12px 0;
      }
  `
);

const ListItemWrapper = styled(ListItemButton)(
  () => `
      &.MuiButtonBase-root {
        border-radius: 0;
      }
  `
);

function Sidebar() {
  const { t }: { t: any } = useTranslation();

  const categories = [
    {
      id: 1,
      name: 'Toys & Hobbies',
      value: 'toys_hobbies'
    },
    {
      id: 2,
      name: 'Office Supplies',
      value: 'office_supplies'
    },
    {
      id: 3,
      name: 'Electronics',
      value: 'electronics'
    },
    {
      id: 4,
      name: 'Video Games',
      value: 'video_games'
    }
  ];

  const rating = [
    {
      id: 1,
      rating: 5
    },
    {
      id: 2,
      rating: 4
    },
    {
      id: 3,
      rating: 3
    },
    {
      id: 4,
      rating: 2
    },
    {
      id: 5,
      rating: 1
    }
  ];

  const [checked2, setChecked2] = useState([0]);

  const handleToggle2 = (value: number) => () => {
    const currentIndex = checked2.indexOf(value);
    const newChecked = [...checked2];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked2(newChecked);
  };

  const [checked3, setChecked3] = useState([0]);

  const handleToggle3 = (value: number) => () => {
    const currentIndex = checked3.indexOf(value);
    const newChecked = [...checked3];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked3(newChecked);
  };

  const [value, setValue] = useState<number[]>([200, 800]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Card>
      <Accordion defaultExpanded>
        <AccordionSummaryWrapper expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">{t('Price Range')}</Typography>
        </AccordionSummaryWrapper>
        <AccordionDetails
          sx={{
            pt: 5
          }}
        >
          <Slider
            value={value}
            step={50}
            min={100}
            max={2000}
            onChange={handleChange}
            valueLabelDisplay="on"
            valueLabelFormat={(value) => <div>${value}</div>}
          />
        </AccordionDetails>
      </Accordion>
      <Divider />
      <Accordion defaultExpanded>
        <AccordionSummaryWrapper expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">{t('Categories')}</Typography>
        </AccordionSummaryWrapper>
        <AccordionDetails
          sx={{
            p: 0
          }}
        >
          <List component="div">
            {categories.map((value) => {
              return (
                <ListItemWrapper
                  sx={{
                    py: 0,
                    px: 2
                  }}
                  key={value.id}
                  onClick={handleToggle2(value.id)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 32
                    }}
                  >
                    <Checkbox
                      edge="start"
                      checked={checked2.indexOf(value.id) !== -1}
                      tabIndex={-1}
                      disableRipple
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={value.name}
                    primaryTypographyProps={{ variant: 'body1' }}
                  />
                </ListItemWrapper>
              );
            })}
          </List>
        </AccordionDetails>
      </Accordion>
      <Divider />
      <Accordion defaultExpanded>
        <AccordionSummaryWrapper expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">{t('Rating')}</Typography>
        </AccordionSummaryWrapper>
        <AccordionDetails
          sx={{
            p: 0
          }}
        >
          <List component="div">
            {rating.map((value) => {
              return (
                <ListItemWrapper
                  key={value.id}
                  onClick={handleToggle3(value.id)}
                >
                  <Rating value={value.rating} precision={1} readOnly />
                </ListItemWrapper>
              );
            })}
          </List>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}

export default Sidebar;
