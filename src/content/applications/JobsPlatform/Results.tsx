import { FC, useState, useRef, ChangeEvent } from 'react';
import type { Job } from 'src/models/job';
import PropTypes from 'prop-types';
import {
  Grid,
  Chip,
  Typography,
  Card,
  Box,
  IconButton,
  Avatar,
  Button,
  MenuItem,
  Menu,
  useTheme,
  Divider,
  lighten,
  styled,
  TablePagination
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import ThumbDownTwoToneIcon from '@mui/icons-material/ThumbDownTwoTone';
interface ResultsProps {
  jobs: Job[];
}

const applyPagination = (jobs: Job[], page: number, limit: number): Job[] => {
  return jobs.slice(page * limit, page * limit + limit);
};

const Results: FC<ResultsProps> = ({ jobs, ...rest }) => {
  const theme = useTheme();
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const { t }: { t: any } = useTranslation();

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const paginatedJobs = applyPagination(jobs, page, limit);

  const actionRef = useRef<any>(null);
  const [openSort, setOpenMenuSort] = useState<boolean>(false);
  const [sort, setSort] = useState<string>('Sort by...');

  const sorts = [
    {
      value: '1',
      text: t('Most recent')
    },
    {
      value: '2',
      text: t('Company name')
    },
    {
      value: '3',
      text: t('Location')
    },
    {
      value: '4',
      text: t('Salary range')
    }
  ];

  const AvatarWrapper = styled(Avatar)(
    ({ theme }) => `
        height: ${theme.spacing(12)};
        width: ${theme.spacing(12)};
`
  );

  const ChipWrapper = styled(Chip)(
    ({ theme }) => `
        background: ${theme.colors.alpha.black[10]};
        margin: ${theme.spacing(0.5)};
        padding: ${theme.spacing(1)};
        height: 28px;
        line-height: 28px;
        font-weight: bold;
`
  );

  const IconButtonSuccess = styled(IconButton)(
    ({ theme }) => `
        background: ${theme.colors.success.lighter};
        color: ${theme.colors.success.main};
        width: ${theme.spacing(10)};
        height: ${theme.spacing(10)};
        margin: ${theme.spacing(1.5)};

        &:hover {
            background: ${lighten(theme.colors.success.lighter, 0.4)};
        }
`
  );

  const IconButtonError = styled(IconButton)(
    ({ theme }) => `
        background: ${theme.colors.error.lighter};
        color: ${theme.colors.error.main};
        width: ${theme.spacing(10)};
        height: ${theme.spacing(10)};
        margin: ${theme.spacing(1.5)};

        &:hover {
            background: ${lighten(theme.colors.error.lighter, 0.4)};
        }
`
  );

  return (
    <>
      <Box
        mb={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography component="span" variant="subtitle1">
            {t('Showing')}
          </Typography>{' '}
          <b>{limit}</b> {t('of')} <b>{paginatedJobs.length}</b>{' '}
          <b>{t('total job positions')}</b>
        </Box>
        <Button
          size="small"
          variant="outlined"
          ref={actionRef}
          onClick={() => setOpenMenuSort(true)}
          endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
        >
          {sort}
        </Button>
        <Menu
          disableScrollLock
          anchorEl={actionRef.current}
          onClose={() => setOpenMenuSort(false)}
          open={openSort}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          {sorts.map((_sort) => (
            <MenuItem
              key={_sort.value}
              onClick={() => {
                setSort(_sort.text);
                setOpenMenuSort(false);
              }}
            >
              {_sort.text}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              flexDirection: 'column',
              p: 3
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: `${theme.typography.pxToRem(23)}`
              }}
            >
              {t('Are these jobs right for you?')}
            </Typography>
            <Box py={2}>
              <IconButtonSuccess>
                <ThumbUpTwoToneIcon fontSize="large" />
              </IconButtonSuccess>
              <IconButtonError>
                <ThumbDownTwoToneIcon fontSize="large" />
              </IconButtonError>
            </Box>
            <Typography
              variant="h4"
              fontWeight="normal"
              color="text.secondary"
              sx={{
                px: 2,
                lineHeight: 1.5
              }}
            >
              {t("We'll use your feedback to improve future recommendations")}
            </Typography>
          </Card>
        </Grid>
        {paginatedJobs.map((job) => {
          return (
            <Grid key={job.id} item xs={12} md={6}>
              <Card>
                <Box
                  p={3}
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="space-between"
                >
                  <AvatarWrapper src={job.company_logo} variant="rounded" />
                  <IconButton color="primary">
                    <MoreVertTwoToneIcon />
                  </IconButton>
                </Box>
                <Box px={3}>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 1
                    }}
                  >
                    {job.title}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {job.company_name}
                  </Typography>
                  <Typography variant="subtitle1">{job.location}</Typography>
                </Box>
                <Box px={2} py={1}>
                  {job.tags.map((value) => {
                    return (
                      <ChipWrapper
                        key={value}
                        color="secondary"
                        label={value}
                      />
                    );
                  })}
                </Box>

                <Divider />
                <Box px={3} py={2}>
                  <Grid container spacing={3}>
                    <Grid item md={6}>
                      <Button size="small" fullWidth variant="contained">
                        {t('Apply Now')}
                      </Button>
                    </Grid>
                    <Grid item md={6}>
                      <Button size="small" fullWidth variant="outlined">
                        {t('View details')}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <Card
            sx={{
              p: 2
            }}
          >
            <TablePagination
              component="div"
              count={jobs.length}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleLimitChange}
              page={page}
              rowsPerPage={limit}
              rowsPerPageOptions={[5, 10, 15]}
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

Results.propTypes = {
  jobs: PropTypes.array.isRequired
};

Results.defaultProps = {
  jobs: []
};

export default Results;
