import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MultipleTabsLayout from '../components/MultipleTabsLayout';
import { TitleContext } from '../../../contexts/TitleContext';
import { useLocation } from 'react-router-dom';
import People from './People';
import Teams from './Teams';

interface PropsType {}

const PeopleAndTeams = ({}: PropsType) => {
  const { t }: { t: any } = useTranslation();

  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const { setTitle } = useContext(TitleContext);
  const location = useLocation();

  const handleOpenAddModal = () => setOpenAddModal(true);
  const handleCloseAddModal = () => setOpenAddModal(false);

  useEffect(() => {
    setTitle(t('People & Teams'));
  }, []);

  let regex = /(\/app\/people-teams)\/?$/;
  const tabIndex = regex.test(location.pathname) ? 0 : 1;

  const tabs = [
    { value: '', label: t('People') },
    { value: 'teams', label: t('Teams') }
  ];

  return (
    <MultipleTabsLayout
      basePath="/app/people-teams"
      tabs={tabs}
      tabIndex={tabIndex}
      title={'People & Teams'}
      action={handleOpenAddModal}
      actionTitle={t(`${tabs[tabIndex].label}`)}
    >
      {tabIndex === 0 ? (
        <People
          openModal={openAddModal}
          handleCloseModal={handleCloseAddModal}
        />
      ) : (
        <Teams
          openModal={openAddModal}
          handleCloseModal={handleCloseAddModal}
        />
      )}
    </MultipleTabsLayout>
  );
};

export default PeopleAndTeams;
