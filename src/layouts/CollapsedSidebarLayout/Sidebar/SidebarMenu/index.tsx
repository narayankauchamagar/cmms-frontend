import { Box, List, Divider, styled } from '@mui/material';
import { useLocation, matchPath } from 'react-router-dom';
import SidebarMenuItem from './item';
import menuItems, { MenuItem } from './items';
import { v4 as uuidv4 } from 'uuid';
import { Fragment } from 'react';

const DividerWrapper = styled(Divider)(
  ({ theme }) => `
  background: ${theme.sidebar.menuItemIconColor};
  margin-left: ${theme.spacing(3)};
  margin-right: ${theme.spacing(3)};
  opacity: .25;
`
);

const MenuWrapper = styled(Box)(
  ({ theme }) => `

  &:last-of-type + .MuiDivider-root {
      height: 0;
  }

  .MuiList-root {
    padding: ${theme.spacing(1, 0)};

    .MuiDivider-root {
      background: ${theme.sidebar.menuItemIconColor};
      margin-left: ${theme.spacing(3)};
      margin-right: ${theme.spacing(3)};
    }

    & > .MuiList-root {
      padding: 0;
    }
  }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {
      padding: 0;
      
      .MuiList-root .MuiList-root .MuiListItem-root .MuiIconButton-root {
        font-weight: normal !important;
      }

      .MuiListItem-root {
        padding: 1px 0;
        justify-content: center;
    
        .MuiIconButton-root {
          display: flex;
          color: ${theme.sidebar.menuItemColor};
          background-color: ${theme.sidebar.menuItemBg};
          width: ${theme.spacing(6)};
          height: ${theme.spacing(6)};
          transition: ${theme.transitions.create(['all'])};
          justify-content: center;
          font-size: ${theme.typography.pxToRem(13)};
          padding: 0;
          position: relative;

          .name-wrapper {
            display: none;
          }

          .MuiBadge-root {
            position: absolute;
            right: 10px;
            top: 11px;

            .MuiBadge-standard {
              background: ${theme.colors.primary.main};
              font-size: ${theme.typography.pxToRem(10)};
              font-weight: bold;
              text-transform: uppercase;
              color: ${theme.palette.primary.contrastText};
            }
          }
  
          .MuiSvgIcon-root {
            transition: ${theme.transitions.create(['color'])};
            font-size: ${theme.typography.pxToRem(28)};
            color: ${theme.sidebar.menuItemIconColor};
          }

          &.active,
          &:hover {
            background-color: ${theme.sidebar.menuItemBgActive};
            color: ${theme.sidebar.menuItemColorActive};

            .MuiSvgIcon-root {
                color: ${theme.sidebar.menuItemIconColorActive};
            }
          }
        }
      }
    }
`
);

const renderSidebarMenuItems = ({
  items,
  path
}: {
  items: MenuItem[];
  path: string;
}): JSX.Element => (
  <SubMenuWrapper>
    <List component="div">
      {items.reduce((ev, item) => reduceChildRoutes({ ev, item, path }), [])}
    </List>
  </SubMenuWrapper>
);

const reduceChildRoutes = ({
  ev,
  path,
  item
}: {
  ev: JSX.Element[];
  path: string;
  item: MenuItem;
}): Array<JSX.Element> => {
  const key = uuidv4();

  const exactMatch = item.link
    ? !!matchPath(
        {
          path: item.link,
          end: true
        },
        path
      )
    : false;

  if (item.items) {
    const partialMatch = item.link
      ? !!matchPath(
          {
            path: item.link,
            end: false
          },
          path
        )
      : false;

    ev.push(
      <SidebarMenuItem
        key={key}
        active={partialMatch}
        open={partialMatch}
        name={item.name}
        icon={item.icon}
        link={item.link}
        badge={item.badge}
      >
        {renderSidebarMenuItems({
          path,
          items: item.items
        })}
      </SidebarMenuItem>
    );
  } else {
    ev.push(
      <SidebarMenuItem
        key={key}
        active={exactMatch}
        name={item.name}
        link={item.link}
        badge={item.badge}
        icon={item.icon}
      />
    );
  }

  return ev;
};

function SidebarMenu() {
  const location = useLocation();

  return (
    <>
      {menuItems.map((section) => (
        <Fragment key={uuidv4()}>
          <MenuWrapper>
            <List component="div">
              {renderSidebarMenuItems({
                items: section.items,
                path: location.pathname
              })}
            </List>
          </MenuWrapper>
          <DividerWrapper />
        </Fragment>
      ))}
    </>
  );
}

export default SidebarMenu;
