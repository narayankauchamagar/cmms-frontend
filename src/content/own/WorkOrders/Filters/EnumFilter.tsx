import * as React from 'react';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { enumerate } from '../../../../utils/displayers';
import { Button, Checkbox, ListItemText, Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SearchCriteria } from '../../../../models/owns/page';
import { pushOrRemove } from '../../../../utils/overall';

interface OwnProps {
  criteria: SearchCriteria;
  onChange: (criteria: SearchCriteria) => void;
  completeOptions: string[];
  fieldName: string;
  icon: ReactNode;
}
function EnumFilter({
  criteria,
  onChange,
  completeOptions,
  fieldName,
  icon
}: OwnProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const navigate = useNavigate();
  const { t }: { t: any } = useTranslation();

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
        startIcon={icon}
      >
        {enumerate(
          criteria.filterFields
            .find(({ field }) => field === fieldName)
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
        {completeOptions.map((option, index) => (
          <MenuItem key={index}>
            <Checkbox
              onChange={(event) => {
                const newCriteria = { ...criteria };
                const filterFieldIndex = newCriteria.filterFields.findIndex(
                  (filterField) => filterField.field === fieldName
                );
                newCriteria.filterFields[filterFieldIndex] = {
                  ...newCriteria.filterFields[filterFieldIndex],
                  values: pushOrRemove(
                    newCriteria.filterFields[filterFieldIndex].values,
                    event.target.checked,
                    option
                  )
                };
                onChange(newCriteria);
              }}
              checked={criteria.filterFields.some(
                (filterField) =>
                  filterField.field === fieldName &&
                  filterField.values.includes(option)
              )}
            />
            <ListItemText primary={t(option)} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
export default EnumFilter;
