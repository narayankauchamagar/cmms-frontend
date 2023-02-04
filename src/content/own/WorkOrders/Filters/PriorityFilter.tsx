import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { enumerate } from '../../../../utils/displayers';
import { Button, Checkbox, ListItemText, Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SearchCriteria } from '../../../../models/owns/page';
import { pushOrRemove } from '../../../../utils/overall';
import SignalCellularAltTwoToneIcon from '@mui/icons-material/SignalCellularAltTwoTone';

interface OwnProps {
  criteria: SearchCriteria;
  onChange: (criteria: SearchCriteria) => void;
}
function PriorityFilter({ criteria, onChange }: OwnProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const navigate = useNavigate();
  const { t }: { t: any } = useTranslation();

  const priorities = ['NONE', 'LOW', 'MEDIUM', 'HIGH'];
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        onClick={handleOpenMenu}
        sx={{
          '& .MuiButton-startIcon': { margin: '0px' },
          minWidth: 0
        }}
        variant={'outlined'}
        startIcon={<SignalCellularAltTwoToneIcon />}
      >
        {enumerate(
          criteria.filterFields
            .find(({ field }) => field === 'priority')
            .values.map((priority) => t(priority))
        )}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        {priorities.map((priority, index) => (
          <MenuItem key={index}>
            <Checkbox
              onChange={(event) => {
                const newCriteria = { ...criteria };
                const filterFieldIndex = newCriteria.filterFields.findIndex(
                  (filterField) => filterField.field === 'priority'
                );
                newCriteria.filterFields[filterFieldIndex] = {
                  ...newCriteria.filterFields[filterFieldIndex],
                  values: pushOrRemove(
                    newCriteria.filterFields[filterFieldIndex].values,
                    event.target.checked,
                    priority
                  )
                };
                onChange(newCriteria);
              }}
              checked={criteria.filterFields.some(
                (filterField) =>
                  filterField.field === 'priority' &&
                  filterField.values.includes(priority)
              )}
            />
            <ListItemText primary={t(priority)} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
export default PriorityFilter;
