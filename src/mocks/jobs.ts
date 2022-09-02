import { subDays } from 'date-fns';
import { mock } from 'src/utils/axios';
import { Job } from 'src/models/job';

mock.onGet('/api/jobs').reply(() => {
  const jobs: Job[] = [
    {
      id: '1',
      company_logo: '/static/images/placeholders/logo/adobe.jpg',
      company_name: 'Adobe',
      title: 'Marketing Consultant',
      tags: ['Software', 'Min. 1 Year'],
      location: 'Bucharest, Romania',
      salaryRange: '700_1200',
      postedDate: subDays(new Date(), 5).getTime(),
      employment: 'full_time',
      seniority: 'mid'
    },
    {
      id: '2',
      company_logo: '/static/images/placeholders/logo/autodesk.jpg',
      company_name: 'Autodesk',
      title: 'Junior Software Developer',
      tags: ['Developer', 'Other tag'],
      location: 'Madrid, Spain',
      salaryRange: '700_1200',
      postedDate: subDays(new Date(), 6).getTime(),
      employment: 'full_time',
      seniority: 'mid'
    },
    {
      id: '3',
      company_logo: '/static/images/placeholders/logo/hp.jpg',
      company_name: 'Hewlett Packard',
      title: 'Systems Programmer',
      tags: ['Full Time', 'Junior'],
      location: 'Berlin, Germany',
      salaryRange: '700_1200',
      postedDate: subDays(new Date(), 5).getTime(),
      employment: 'full_time',
      seniority: 'mid'
    },
    {
      id: '4',
      company_logo: '/static/images/placeholders/logo/uipath.jpg',
      company_name: 'UiPatch',
      title: 'Senior Project Manager',
      tags: ['Design', 'Part Time'],
      location: 'Paris, France',
      salaryRange: '700_1200',
      postedDate: subDays(new Date(), 4).getTime(),
      employment: 'full_time',
      seniority: 'mid'
    },
    {
      id: '5',
      company_logo: '/static/images/placeholders/logo/ea.jpg',
      company_name: 'Electronic Arts',
      title: 'Head of App Development',
      tags: ['Internship', 'Games', 'Middle Level'],
      location: 'Bucharest, Romania',
      salaryRange: '700_1200',
      postedDate: subDays(new Date(), 3).getTime(),
      employment: 'full_time',
      seniority: 'mid'
    },
    {
      id: '6',
      company_logo: '/static/images/placeholders/logo/ing.jpg',
      company_name: 'ING Bank',
      title: 'UX Designer',
      tags: ['Marketing', 'React'],
      location: 'San Francisco, USA',
      salaryRange: '700_1200',
      postedDate: subDays(new Date(), 7).getTime(),
      employment: 'full_time',
      seniority: 'mid'
    },
    {
      id: '7',
      company_logo: '/static/images/placeholders/logo/ibm.jpg',
      company_name: 'IBM',
      title: 'Senior UI Developer (Angular)',
      tags: ['User Interface', 'Dashboards'],
      location: 'Bucharest, Romania',
      salaryRange: '700_1200',
      postedDate: subDays(new Date(), 5).getTime(),
      employment: 'full_time',
      seniority: 'mid'
    },
    {
      id: '8',
      company_logo: '/static/images/placeholders/logo/oracle.jpg',
      company_name: 'Oracle',
      title: 'Senior Frontend Developer',
      tags: ['Freelance', '2 Years Exp.'],
      location: 'London, UK',
      salaryRange: '700_1200',
      postedDate: subDays(new Date(), 9).getTime(),
      employment: 'full_time',
      seniority: 'mid'
    },
    {
      id: '9',
      company_logo: '/static/images/placeholders/logo/orange.jpg',
      company_name: 'Orange',
      title: 'Senior JavaScript Developer',
      tags: ['Technology', 'Fintech'],
      location: 'San Francisco, USA',
      salaryRange: '700_1200',
      postedDate: subDays(new Date(), 3).getTime(),
      employment: 'full_time',
      seniority: 'mid'
    },
    {
      id: '10',
      company_logo: '/static/images/placeholders/logo/adobe.jpg',
      company_name: 'Adobe',
      title: 'Senior Open Source Web Developer',
      tags: ['Management', 'Github'],
      location: 'Paris, France',
      salaryRange: '700_1200',
      postedDate: subDays(new Date(), 6).getTime(),
      employment: 'full_time',
      seniority: 'mid'
    },
    {
      id: '11',
      company_logo: '/static/images/placeholders/logo/autodesk.jpg',
      company_name: 'Autodesk',
      title: 'ReactJS Developer',
      tags: ['Remote', '$3000 - $5000'],
      location: 'Bucharest, Romania',
      salaryRange: '700_1200',
      postedDate: subDays(new Date(), 8).getTime(),
      employment: 'full_time',
      seniority: 'mid'
    },
    {
      id: '12',
      company_logo: '/static/images/placeholders/logo/uipath.jpg',
      company_name: 'UiPath',
      title: 'ReactJS Developer',
      tags: ['React', 'Frontend'],
      location: 'Bucharest, Romania',
      salaryRange: '700_1200',
      postedDate: subDays(new Date(), 4).getTime(),
      employment: 'full_time',
      seniority: 'mid'
    }
  ];

  return [200, { jobs }];
});
