import { Typography, Card } from '@mui/material';
import { useTranslation } from 'react-i18next';

function AdditionalInfoTab() {
  const { t }: { t: any } = useTranslation();

  return (
    <Card
      sx={{
        p: 4
      }}
    >
      <Typography variant="h4" gutterBottom>
        {t('Description')}
      </Typography>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>

      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt.
      </p>

      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>

      <p>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
      </p>

      <p>
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </p>
    </Card>
  );
}

export default AdditionalInfoTab;
