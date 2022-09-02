import type { FC } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import type { Tag } from 'src/models/mailbox';
import Label from 'src/components/Label';

import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone';
import OutboxTwoToneIcon from '@mui/icons-material/OutboxTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import DraftsTwoToneIcon from '@mui/icons-material/DraftsTwoTone';
import AutoDeleteTwoToneIcon from '@mui/icons-material/AutoDeleteTwoTone';
import LocalOfferTwoToneIcon from '@mui/icons-material/LocalOfferTwoTone';

interface MailboxSidebarItemProps {
  tag: Tag;
}

const categoryTagIcons = {
  inbox: InboxTwoToneIcon,
  outbox: OutboxTwoToneIcon,
  favourites: FavoriteTwoToneIcon,
  drafts: DraftsTwoToneIcon,
  deleted: AutoDeleteTwoToneIcon
};

const getTagIcon = (tag: any) => {
  if (tag.type === 'category_tag') {
    return categoryTagIcons[tag.id];
  }

  return LocalOfferTwoToneIcon;
};

const getColor = (tag: any): string => {
  if (tag.type === 'label_tag') {
    return tag.color;
  }

  return null;
};

const MailboxSidebarItem: FC<MailboxSidebarItemProps> = ({ tag, ...rest }) => {
  const location = useLocation();
  const constructUrl = '/' + location.pathname.split('/')[1];

  const getTo = (tag: any): string => {
    if (tag.type === 'category_tag') {
      return `${constructUrl}/applications/mailbox/${tag.id}`;
    }

    if (tag.type === 'label_tag') {
      return `${constructUrl}/applications/mailbox/tag/${tag.name}`;
    }

    return constructUrl;
  };

  const TagIcon = getTagIcon(tag);
  const route = getTo(tag);
  const color = getColor(tag);
  const showNewMails = Boolean(tag.newMails && tag.newMails > 0);
  const tagType = Boolean(tag.type && tag.type === 'label_tag');

  return (
    <ListItemButton
      sx={{
        my: '2px'
      }}
      component={RouterLink}
      to={route}
      selected={location.pathname === route}
      {...rest}
    >
      <ListItemIcon>
        <TagIcon
          color="inherit"
          sx={{
            color: color
          }}
        />
      </ListItemIcon>

      <ListItemText
        primary={tag.name}
        primaryTypographyProps={{ fontWeight: tagType ? null : 'bold' }}
      />
      {showNewMails && <Label color="primary">{tag.newMails}</Label>}
    </ListItemButton>
  );
};

MailboxSidebarItem.propTypes = {
  // @ts-ignore
  tag: PropTypes.object.isRequired
};

export default MailboxSidebarItem;
