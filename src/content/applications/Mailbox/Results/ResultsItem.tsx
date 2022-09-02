import type { FC, ChangeEvent } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Tooltip,
  Checkbox,
  Card,
  IconButton,
  Typography,
  styled
} from '@mui/material';
import { useSelector } from 'src/store';
import type { Mail } from 'src/models/mailbox';
import LocalOfferTwoToneIcon from '@mui/icons-material/LocalOfferTwoTone';
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import MarkEmailReadTwoToneIcon from '@mui/icons-material/MarkEmailReadTwoTone';
import { useTranslation } from 'react-i18next';

interface ResultsItemProps {
  mailbox: Mail;
  onDeselect?: () => void;
  onSelect?: () => void;
  selected: boolean;
}

const IconButtonLabel = styled(Box)(
  ({ theme }) => `
    display: flex;
    border-radius: ${theme.general.borderRadius};

    &:hover {
      background: ${theme.colors.alpha.white[50]};
    }
  `
);

const MailboxItemWrapper = styled(Box)(
  ({ theme }) => `
    align-items: center;
    transition: ${theme.transitions.create(['background', 'color'])};
    position: relative;
    border-bottom: 1px solid ${theme.colors.alpha.black[10]};
    padding: 0 ${theme.spacing(1.5)};
    background: ${theme.colors.alpha.black[5]};

    .Mui-mailboxRow {
      position: absolute;
      right: ${theme.spacing(2)};
      padding: ${theme.spacing(1)};
      transition: ${theme.transitions.create(['opacity'])};
      opacity: 0;
    }

    &.Mui-unread {
      font-weight: bold;
      background: ${theme.colors.alpha.white[100]};
    }

    &:hover, 
    &.Mui-selected {
      background: ${theme.colors.primary.lighter};
    }

    &:hover {
      .Mui-mailboxRow {
        opacity: 1;
      }
    }

    a {
      min-width: 1px;
      color: ${theme.colors.alpha.black[100]};
      text-decoration: none;
      padding: ${theme.spacing(3, 1, 3, 0)};
    }
`
);

const ResultsItem: FC<ResultsItemProps> = ({
  mailbox,
  onDeselect,
  onSelect,
  selected
}) => {
  const params = useParams();
  const { tags } = useSelector((state) => state.mailbox);
  const { t }: { t: any } = useTranslation();

  const location = useLocation();

  const getTo = (params: any, mailboxCategory: string): string => {
    const { categoryTag, labelTag } = params;
    const url = '/' + location.pathname.split('/')[1] + '/applications/mailbox';

    if (categoryTag) {
      return `${url}/${categoryTag}/${mailboxCategory}`;
    }

    if (labelTag) {
      return `${url}/tag/${labelTag}/${mailboxCategory}`;
    }

    return url;
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void =>
    event.target.checked ? onSelect() : onDeselect();

  const to = getTo(params, mailbox.id);

  return (
    <MailboxItemWrapper
      sx={{
        display: { sm: 'flex' }
      }}
      className={clsx({
        'Mui-unread': !mailbox.opened,
        'Mui-selected': selected
      })}
    >
      <Box
        display="flex"
        sx={{
          mb: { xs: 2, sm: 0 }
        }}
        alignItems="center"
      >
        <Checkbox checked={selected} onChange={handleCheckboxChange} />
        <Box
          sx={{
            minWidth: 80
          }}
          display="flex"
          mr={1}
        >
          {mailbox.tagIds.length > 0 ? (
            <>
              {mailbox.tagIds.map((tagId: string) => {
                const tag = tags.find((_tag) => _tag.id === tagId);

                if (!tag) return null;

                return (
                  <Tooltip arrow placement="top" title={tag.name} key={tag.id}>
                    <IconButtonLabel
                      sx={{
                        mx: 0.5,
                        p: 0.5,
                        color: tag.color
                      }}
                    >
                      <LocalOfferTwoToneIcon color="inherit" />
                    </IconButtonLabel>
                  </Tooltip>
                );
              })}
            </>
          ) : (
            <>-</>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          alignItems: 'center',
          display: { md: 'flex' }
        }}
        component={RouterLink}
        to={to}
      >
        <Box
          sx={{
            display: { md: 'flex' }
          }}
          flex={1}
          alignItems="center"
        >
          <Box
            sx={{
              minWidth: { md: 175 }
            }}
            display="flex"
            alignItems="center"
          >
            <Avatar
              src={mailbox.from.avatar}
              sx={{
                mb: { xs: 2, md: 0 },
                mr: 1
              }}
            />
            <Box
              component="span"
              sx={{
                display: { xs: 'none', md: 'inline-block' }
              }}
            >
              <Typography
                variant="h5"
                noWrap
                fontWeight={mailbox.opened ? 'normal' : 'bold'}
              >
                {mailbox.from.name}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              variant="h5"
              fontWeight={mailbox.opened ? 'normal' : 'bold'}
            >
              {mailbox.subject}
            </Typography>
            <Typography variant="subtitle1">{mailbox.summary}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            minWidth: 100
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              textAlign: { md: 'right' }
            }}
          >
            {format(mailbox.date, 'dd MMMM')}
          </Typography>
        </Box>
      </Box>

      <Card className="Mui-mailboxRow">
        <Tooltip arrow placement="top" title={t('Archive')}>
          <IconButton
            color="primary"
            sx={{
              p: 1
            }}
          >
            <ArchiveTwoToneIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip arrow placement="top" title={t('Delete')}>
          <IconButton
            color="primary"
            sx={{
              p: 1
            }}
          >
            <DeleteTwoToneIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip arrow placement="top" title={t('Mark as read')}>
          <IconButton
            color="primary"
            sx={{
              p: 1
            }}
          >
            <MarkEmailReadTwoToneIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Card>
    </MailboxItemWrapper>
  );
};

ResultsItem.propTypes = {
  // @ts-ignore
  mailbox: PropTypes.object.isRequired,
  onDeselect: PropTypes.func,
  onSelect: PropTypes.func,
  selected: PropTypes.bool.isRequired
};

ResultsItem.defaultProps = {
  onDeselect: () => {},
  onSelect: () => {}
};

export default ResultsItem;
