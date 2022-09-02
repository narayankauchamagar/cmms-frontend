import {
  Box,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  styled
} from '@mui/material';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { NavLink, useLocation } from 'react-router-dom';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

const ListWrapper = styled(Box)(
  ({ theme }) => `
        .MuiTouchRipple-root {
            display: none;
        }
        
        .MuiListItem-root {
            transition: ${theme.transitions.create(['color', 'fill'])};
            
            &.MuiListItem-indicators {
                padding: ${theme.spacing(1, 2)};
            
                .MuiListItemText-root {
                    .MuiTypography-root {
                        &:before {
                            height: 4px;
                            width: 22px;
                            opacity: 0;
                            visibility: hidden;
                            display: block;
                            position: absolute;
                            bottom: -10px;
                            transition: all .2s;
                            border-radius: ${theme.general.borderRadiusLg};
                            content: "";
                            background: ${theme.colors.primary.main};
                        }
                    }
                }

                &.active,
                &:active,
                &:hover {
                
                    background: transparent;
                
                    .MuiListItemText-root {
                        .MuiTypography-root {
                            &:before {
                                opacity: 1;
                                visibility: visible;
                                bottom: 0px;
                            }
                        }
                    }
                }
            }
        }
`
);

function HeaderMenu() {
  const { t }: { t: any } = useTranslation();
  const location = useLocation();

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <ListWrapper>
        <List disablePadding component={Box} display="flex">
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to={`/${location.pathname.split('/')[1]}/management/users`}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={t('Users')}
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to={`/${location.pathname.split('/')[1]}/dashboards/banking`}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={t('Banking')}
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            ref={ref}
            onClick={handleOpen}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={
                <Box display="flex" alignItems="center">
                  {t('Help')}
                  <Box display="flex" alignItems="center" pl={0.3}>
                    <ExpandMoreTwoToneIcon fontSize="small" />
                  </Box>
                </Box>
              }
            />
          </ListItem>
        </List>
      </ListWrapper>
      <Menu
        disableScrollLock
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
      >
        <MenuItem component={NavLink} to="/overview">
          {t('Features tour')}
        </MenuItem>
        <MenuItem component={NavLink} to="/docs/introduction">
          {t('Getting started guide')}
        </MenuItem>
        <MenuItem component={NavLink} to="/docs/contact-support">
          {t('Contact support')}
        </MenuItem>
      </Menu>
    </>
  );
}

export default HeaderMenu;
