import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Divider, Pagination, Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'src/store';
import { getMails } from 'src/slices/mailbox';
import ResultsActionBar from './ResultsActionBar';
import ResultsItem from './ResultsItem';
import { useTranslation } from 'react-i18next';

function MailboxResults() {
  const params = useParams();
  const dispatch = useDispatch();
  const { mails } = useSelector((state) => state.mailbox);
  const [selectedMails, setSelectedMails] = useState<string[]>([]);
  const { t }: { t: any } = useTranslation();

  const handleSelectAllMails = (): void => {
    setSelectedMails(
      mails.allIds.map((mailboxCategory: any) => mailboxCategory)
    );
  };

  const handleDeselectAllMails = (): void => {
    setSelectedMails([]);
  };

  const handleSelectOneMail = (mailboxCategory: string): void => {
    setSelectedMails((prevSelectedMails) => {
      if (!prevSelectedMails.includes(mailboxCategory)) {
        return [...prevSelectedMails, mailboxCategory];
      }

      return prevSelectedMails;
    });
  };

  const handleDeselectOneMail = (mailboxCategory: string): void => {
    setSelectedMails((prevSelectedMails) =>
      prevSelectedMails.filter((id) => id !== mailboxCategory)
    );
  };

  useEffect(() => {
    dispatch(getMails(params));
  }, [dispatch, params]);

  return (
    <Box>
      <ResultsActionBar
        onDeselectAll={handleDeselectAllMails}
        onSelectAll={handleSelectAllMails}
        selectedMails={selectedMails.length}
        mails={mails.allIds.length}
      />
      <Divider />

      {mails.allIds.length === 0 && (
        <Typography
          sx={{
            py: 5
          }}
          variant="h3"
          fontWeight="normal"
          color="text.secondary"
          align="center"
        >
          {t('There are no messages in this category')}
        </Typography>
      )}

      {mails.allIds.map((mailboxCategory: string) => (
        <ResultsItem
          mailbox={mails.byId[mailboxCategory]}
          key={mailboxCategory}
          onDeselect={() => handleDeselectOneMail(mailboxCategory)}
          onSelect={() => handleSelectOneMail(mailboxCategory)}
          selected={selectedMails.includes(mailboxCategory)}
        />
      ))}
      {mails.allIds.length !== 0 && (
        <Box p={3} display="flex" justifyContent="center">
          <Pagination
            shape="rounded"
            size="large"
            count={3}
            variant="outlined"
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
}

export default MailboxResults;
