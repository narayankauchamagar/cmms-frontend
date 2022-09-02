import {
  Box,
  Card,
  Typography,
  alpha,
  Badge,
  Button,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Checkbox,
  TableContainer,
  styled,
  useTheme
} from '@mui/material';
import Scrollbar from 'src/components/Scrollbar';
import Text from 'src/components/Text';

import { useTranslation } from 'react-i18next';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import Label from 'src/components/Label';

const BoxComposed = styled(Box)(
  () => `
    position: relative;
  `
);

const BoxComposedContent = styled(Box)(
  ({ theme }) => `
    position: relative;
    z-index: 7;

    .MuiTypography-root {
        color: ${theme.palette.primary.contrastText};

        & + .MuiTypography-root {
            color: ${alpha(theme.palette.primary.contrastText, 0.7)};
        }
    }
    
  `
);

const BoxComposedImage = styled(Box)(
  () => `
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    filter: grayscale(80%);
    background-size: cover;
    height: 100%;
    width: 100%;
    border-radius: inherit;
  `
);

const BoxComposedBg = styled(Box)(
  () => `
    position: absolute;
    left: 0;
    top: 0;
    z-index: 6;
    height: 100%;
    width: 100%;
    border-radius: inherit;
  `
);

function Block2() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        p: 2
      }}
    >
      <BoxComposed
        sx={{
          borderRadius: `${theme.general.borderRadius}`,
          background: `${theme.colors.gradients.black2}`
        }}
      >
        <BoxComposedBg
          sx={{
            opacity: 0.1,
            background: `${theme.colors.gradients.black1}`
          }}
        />
        <BoxComposedImage
          sx={{
            opacity: 0.2,
            backgroundImage: 'url("/static/images/placeholders/covers/5.jpg")'
          }}
        />
        <BoxComposedContent py={3}>
          <Typography
            textAlign="center"
            sx={{
              pb: 1
            }}
            variant="h3"
          >
            {t('Recent Orders')}
          </Typography>
          <Typography textAlign="center" fontWeight="normal" variant="h4">
            {t('Check latest status updates')}
          </Typography>
        </BoxComposedContent>
      </BoxComposed>
      <Box
        py={2}
        sx={{
          height: 493
        }}
      >
        <Scrollbar>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow hover>
                  <TableCell padding="checkbox">
                    <Checkbox
                      sx={{
                        padding: 0.5
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      pl: 0
                    }}
                  >
                    <Box pb={0.5} display="flex" alignItems="center">
                      <Text color="success">
                        <ArrowUpwardTwoToneIcon fontSize="small" />
                      </Text>
                      <Typography
                        sx={{
                          pl: 0.5
                        }}
                        variant="h4"
                        noWrap
                      >
                        Macbook Laptop
                      </Typography>
                    </Box>
                    <Label color="warning">{t('Pending')}</Label>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h4">$6,384</Typography>
                    <Text color="error">{t('Increased')}</Text>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell padding="checkbox">
                    <Checkbox
                      sx={{
                        padding: 0.5
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      pl: 0
                    }}
                  >
                    <Box pb={0.5} display="flex" alignItems="center">
                      <Text color="error">
                        <ArrowDownwardTwoToneIcon fontSize="small" />
                      </Text>
                      <Typography
                        sx={{
                          pl: 0.5
                        }}
                        variant="h4"
                        noWrap
                      >
                        iPhone 13 PRO
                      </Typography>
                    </Box>
                    <Label color="success">{t('Completed')}</Label>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h4">$1,594</Typography>
                    <Text color="primary">{t('Regular')}</Text>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell padding="checkbox">
                    <Checkbox
                      sx={{
                        padding: 0.5
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      pl: 0
                    }}
                  >
                    <Box pb={0.5} display="flex" alignItems="center">
                      <Text color="success">
                        <ArrowUpwardTwoToneIcon fontSize="small" />
                      </Text>
                      <Typography
                        sx={{
                          pl: 0.5
                        }}
                        variant="h4"
                        noWrap
                      >
                        Desktop PC
                      </Typography>
                    </Box>
                    <Label color="success">{t('Completed')}</Label>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h4">$3,594</Typography>
                    <Text color="primary">{t('Regular')}</Text>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell padding="checkbox">
                    <Checkbox
                      sx={{
                        padding: 0.5
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      pl: 0
                    }}
                  >
                    <Box pb={0.5} display="flex" alignItems="center">
                      <Text color="success">
                        <ArrowUpwardTwoToneIcon fontSize="small" />
                      </Text>
                      <Typography
                        sx={{
                          pl: 0.5
                        }}
                        variant="h4"
                        noWrap
                      >
                        Macbook Laptop
                      </Typography>
                    </Box>
                    <Label color="warning">{t('Pending')}</Label>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h4">$6,384</Typography>
                    <Text color="error">{t('Increased')}</Text>
                  </TableCell>
                </TableRow>

                <TableRow hover>
                  <TableCell padding="checkbox">
                    <Checkbox
                      sx={{
                        padding: 0.5
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      pl: 0
                    }}
                  >
                    <Box pb={0.5} display="flex" alignItems="center">
                      <Text color="success">
                        <ArrowUpwardTwoToneIcon fontSize="small" />
                      </Text>
                      <Typography
                        sx={{
                          pl: 0.5
                        }}
                        variant="h4"
                        noWrap
                      >
                        Macbook Laptop
                      </Typography>
                    </Box>
                    <Label color="warning">{t('Pending')}</Label>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h4">$6,384</Typography>
                    <Text color="error">{t('Increased')}</Text>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell padding="checkbox">
                    <Checkbox
                      sx={{
                        padding: 0.5
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      pl: 0
                    }}
                  >
                    <Box pb={0.5} display="flex" alignItems="center">
                      <Text color="error">
                        <ArrowDownwardTwoToneIcon fontSize="small" />
                      </Text>
                      <Typography
                        sx={{
                          pl: 0.5
                        }}
                        variant="h4"
                        noWrap
                      >
                        iPhone 13 PRO
                      </Typography>
                    </Box>
                    <Label color="success">{t('Completed')}</Label>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h4">$1,594</Typography>
                    <Text color="primary">{t('Regular')}</Text>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell padding="checkbox">
                    <Checkbox
                      sx={{
                        padding: 0.5
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      pl: 0
                    }}
                  >
                    <Box pb={0.5} display="flex" alignItems="center">
                      <Text color="success">
                        <ArrowUpwardTwoToneIcon fontSize="small" />
                      </Text>
                      <Typography
                        sx={{
                          pl: 0.5
                        }}
                        variant="h4"
                        noWrap
                      >
                        Desktop PC
                      </Typography>
                    </Box>
                    <Label color="success">{t('Completed')}</Label>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h4">$3,594</Typography>
                    <Text color="primary">{t('Regular')}</Text>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell padding="checkbox">
                    <Checkbox
                      sx={{
                        padding: 0.5
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      pl: 0
                    }}
                  >
                    <Box pb={0.5} display="flex" alignItems="center">
                      <Text color="success">
                        <ArrowUpwardTwoToneIcon fontSize="small" />
                      </Text>
                      <Typography
                        sx={{
                          pl: 0.5
                        }}
                        variant="h4"
                        noWrap
                      >
                        Macbook Laptop
                      </Typography>
                    </Box>
                    <Label color="warning">{t('Pending')}</Label>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h4">$6,384</Typography>
                    <Text color="error">{t('Increased')}</Text>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell padding="checkbox">
                    <Checkbox
                      sx={{
                        padding: 0.5
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      pl: 0
                    }}
                  >
                    <Box pb={0.5} display="flex" alignItems="center">
                      <Text color="error">
                        <ArrowDownwardTwoToneIcon fontSize="small" />
                      </Text>
                      <Typography
                        sx={{
                          pl: 0.5
                        }}
                        variant="h4"
                        noWrap
                      >
                        iPhone 13 PRO
                      </Typography>
                    </Box>
                    <Label color="success">{t('Completed')}</Label>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h4">$1,594</Typography>
                    <Text color="primary">{t('Regular')}</Text>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell padding="checkbox">
                    <Checkbox
                      sx={{
                        padding: 0.5
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      pl: 0
                    }}
                  >
                    <Box pb={0.5} display="flex" alignItems="center">
                      <Text color="success">
                        <ArrowUpwardTwoToneIcon fontSize="small" />
                      </Text>
                      <Typography
                        sx={{
                          pl: 0.5
                        }}
                        variant="h4"
                        noWrap
                      >
                        Desktop PC
                      </Typography>
                    </Box>
                    <Label color="success">{t('Completed')}</Label>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h4">$3,594</Typography>
                    <Text color="primary">{t('Regular')}</Text>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>
      </Box>
      <Box
        sx={{
          textAlign: 'center'
        }}
      >
        <Badge color="success" variant="dot">
          <Button
            sx={{
              px: 4
            }}
            variant="contained"
          >
            {t('View all')}
          </Button>
        </Badge>
      </Box>
    </Card>
  );
}

export default Block2;
