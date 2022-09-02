import {
  TextField,
  Autocomplete,
  Box,
  Card,
  Grid,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditorWrapper = styled(Box)(
  ({ theme }) => `

    .ql-editor {
      min-height: 100px;
    }

    .ql-snow .ql-picker {
      color: ${theme.colors.alpha.black[100]};
    }

    .ql-snow .ql-stroke {
      stroke: ${theme.colors.alpha.black[100]};
    }

    .ql-toolbar.ql-snow {
      border-top-left-radius: ${theme.general.borderRadius};
      border-top-right-radius: ${theme.general.borderRadius};
    }

    .ql-toolbar.ql-snow,
    .ql-container.ql-snow {
      border-color: ${theme.colors.alpha.black[30]};
    }

    .ql-container.ql-snow {
      border-bottom-left-radius: ${theme.general.borderRadius};
      border-bottom-right-radius: ${theme.general.borderRadius};
    }

    &:hover {
      .ql-toolbar.ql-snow,
      .ql-container.ql-snow {
        border-color: ${theme.colors.alpha.black[50]};
      }
    }
`
);

const productTags = [
  { title: 'new' },
  { title: 'fresh' },
  { title: '2021' },
  { title: 'electronics' }
];

function GeneralSection() {
  const { t }: { t: any } = useTranslation();

  return (
    <Card
      sx={{
        p: 3
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="title"
            placeholder={t('Project title here...')}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <EditorWrapper>
            <ReactQuill />
          </EditorWrapper>
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            multiple
            freeSolo
            sx={{
              m: 0
            }}
            limitTags={5}
            options={productTags}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                variant="outlined"
                placeholder={t('Select project tags...')}
              />
            )}
          />
        </Grid>
      </Grid>
    </Card>
  );
}

export default GeneralSection;
