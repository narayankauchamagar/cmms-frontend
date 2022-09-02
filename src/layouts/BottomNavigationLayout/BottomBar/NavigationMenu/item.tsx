import { FC, ReactNode, useState, useContext, MouseEvent } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { SidebarContext } from 'src/contexts/SidebarContext';

import PropTypes from 'prop-types';
import {
  IconButton,
  Box,
  Tooltip,
  Badge,
  Popover,
  ListItem,
  styled,
  TooltipProps,
  tooltipClasses
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import Scrollbar from 'src/components/Scrollbar';

const IndicatorWrapper = styled(Box)(
  ({ theme }) => `
  position: absolute;
  left: 50%;
  margin-left: -9px;
  top: -${theme.spacing(0.3)};
  width: 18px;
  height: 18px;

  .MuiSvgIcon-root {
    width: 100%;
    height: auto;
  }
`
);

const PopoverWrapper = styled(Popover)(
  ({ theme }) => `
  .MuiList-root {
    min-width: 240px;
    padding: ${theme.spacing(2)} !important;

    .MuiListItem-root {
      padding: 2px 0 !important;

      .MuiIconButton-root {
        width: 100% !important;
        height: auto !important;
        justify-content: flex-start !important;
        font-weight: bold !important;
        background: transparent !important;
        color: ${theme.colors.alpha.black[70]} !important;
        padding: ${theme.spacing(1, 2)} !important;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(2)};
          top: 19px;

          .MuiBadge-badge {
            background: ${theme.colors.primary.main};
            color: ${theme.palette.primary.contrastText};
          }
        }

        .name-wrapper {
          display: block !important;
        }

        &.active,
        &:hover {
          background: ${theme.colors.alpha.black[10]} !important;
          color: ${theme.colors.alpha.black[100]} !important;
        }
      }
    }  
  }
`
);

interface NavigationMenuItemProps {
  children?: ReactNode;
  link?: string;
  icon?: any;
  badge?: string;
  open?: boolean;
  active?: boolean;
  name: string;
}

const TooltipWrapper = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.colors.alpha.black[100],
    color: theme.palette.getContrastText(theme.colors.alpha.black[100]),
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 'bold',
    borderRadius: theme.general.borderRadiusSm,
    boxShadow:
      '0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)'
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.colors.alpha.black[100]
  }
}));

const NavigationMenuItem: FC<NavigationMenuItemProps> = ({
  children,
  link,
  icon: Icon,
  badge,
  open: openParent,
  active,
  name,
  ...rest
}) => {
  const { t }: { t: any } = useTranslation();
  const { closeSidebar } = useContext(SidebarContext);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  if (children) {
    return (
      <ListItem component="div" className="Mui-children" key={name} {...rest}>
        <TooltipWrapper
          title={t(name)}
          disableInteractive
          placement="top"
          arrow
        >
          <IconButton
            disableRipple
            className={clsx({ active: open })}
            onClick={handleClick}
          >
            {Icon && <Icon />}
            {badge === '' ? (
              <Badge color="primary" variant="dot" />
            ) : (
              <Badge badgeContent={badge} />
            )}

            <IndicatorWrapper>
              {open ? (
                <KeyboardArrowDownTwoToneIcon />
              ) : (
                <KeyboardArrowUpTwoToneIcon />
              )}
            </IndicatorWrapper>
          </IconButton>
        </TooltipWrapper>
        <PopoverWrapper
          classes={{ root: 'child-popover' }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          anchorEl={anchorEl}
          onClose={handleClose}
          onClick={handleClose}
          open={open}
        >
          <Box
            sx={{
              width: 260,
              height: 290
            }}
          >
            <Scrollbar>{children}</Scrollbar>
          </Box>
        </PopoverWrapper>
      </ListItem>
    );
  }

  return (
    <ListItem component="div" key={name} {...rest}>
      <IconButton
        disableRipple
        component={RouterLink}
        onClick={closeSidebar}
        to={link}
      >
        {Icon && <Icon />}
        <span className="name-wrapper">{name}</span>
        {badge === '' ? (
          <Badge color="primary" variant="dot" />
        ) : (
          <Badge badgeContent={badge} />
        )}
      </IconButton>
    </ListItem>
  );
};

NavigationMenuItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  link: PropTypes.string,
  icon: PropTypes.elementType,
  badge: PropTypes.string,
  open: PropTypes.bool,
  name: PropTypes.string.isRequired
};

NavigationMenuItem.defaultProps = {
  open: false,
  active: false
};

export default NavigationMenuItem;
