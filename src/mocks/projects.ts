import { mock } from 'src/utils/axios';
import type { Project } from 'src/models/project';
import { subDays } from 'date-fns';

let projects: Project[] = [
  {
    id: '1',
    name: 'Cebus apella',
    screenshot: '/static/images/placeholders/fitness/1.jpg',
    description: 'Proin interdum mauris non ligula pellentesque ultrices.',
    tags: ['Software'],
    startDate: subDays(new Date(), 1).getTime(),
    dueDate: subDays(new Date(), 3).getTime(),
    memberIds: [
      {
        id: '1',
        name: 'Lauree MacFadzean',
        avatar: '/static/images/avatars/1.jpg'
      },
      {
        id: '2',
        name: 'Darice Malyon',
        avatar: '/static/images/avatars/2.jpg'
      },
      {
        id: '3',
        name: 'Dwain Culpan',
        avatar: '/static/images/avatars/3.jpg'
      },
      {
        id: '4',
        name: 'Carleton Henric',
        avatar: '/static/images/avatars/4.jpg'
      },
      {
        id: '5',
        name: 'Dillie Considine',
        avatar: '/static/images/avatars/5.jpg'
      }
    ],
    progress: 56,
    status: 'completed'
  },
  {
    id: '2',
    name: 'Macropus agilis',
    screenshot: '/static/images/placeholders/fitness/2.jpg',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    tags: ['Backend'],
    startDate: subDays(new Date(), 2).getTime(),
    dueDate: subDays(new Date(), 5).getTime(),
    memberIds: [
      {
        id: '1',
        name: 'Lauree MacFadzean',
        avatar: '/static/images/avatars/1.jpg'
      },
      {
        id: '3',
        name: 'Dwain Culpan',
        avatar: '/static/images/avatars/3.jpg'
      }
    ],
    progress: 45,
    status: 'not_started'
  },
  {
    id: '3',
    name: 'Phalacrocorax carbo',
    screenshot: '/static/images/placeholders/fitness/3.jpg',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    tags: ['Development', 'Software'],
    startDate: subDays(new Date(), 3).getTime(),
    dueDate: subDays(new Date(), 4).getTime(),
    memberIds: [
      {
        id: '1',
        name: 'Lauree MacFadzean',
        avatar: '/static/images/avatars/1.jpg'
      },
      {
        id: '5',
        name: 'Dillie Considine',
        avatar: '/static/images/avatars/5.jpg'
      }
    ],
    progress: 35,
    status: 'completed'
  },
  {
    id: '4',
    name: 'Felis libyca',
    screenshot: '/static/images/placeholders/fitness/4.jpg',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    tags: ['Design Project'],
    startDate: subDays(new Date(), 4).getTime(),
    dueDate: subDays(new Date(), 8).getTime(),
    memberIds: [
      {
        id: '2',
        name: 'Darice Malyon',
        avatar: '/static/images/avatars/2.jpg'
      },
      {
        id: '4',
        name: 'Carleton Henric',
        avatar: '/static/images/avatars/4.jpg'
      },
      {
        id: '3',
        name: 'Dwain Culpan',
        avatar: '/static/images/avatars/3.jpg'
      }
    ],
    progress: 76,
    status: 'in_progress'
  },
  {
    id: '5',
    name: 'Nucifraga columbiana',
    screenshot: '/static/images/placeholders/fitness/1.jpg',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    tags: ['UX', 'Marketing Research'],
    startDate: subDays(new Date(), 5).getTime(),
    dueDate: subDays(new Date(), 15).getTime(),
    memberIds: [
      {
        id: '1',
        name: 'Lauree MacFadzean',
        avatar: '/static/images/avatars/1.jpg'
      },
      {
        id: '2',
        name: 'Darice Malyon',
        avatar: '/static/images/avatars/2.jpg'
      }
    ],
    progress: 15,
    status: 'in_progress'
  },
  {
    id: '6',
    name: 'Drymarchon corias couperi',
    screenshot: '/static/images/placeholders/fitness/2.jpg',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    tags: ['Frontend', 'Marketing'],
    startDate: subDays(new Date(), 6).getTime(),
    dueDate: subDays(new Date(), 12).getTime(),
    memberIds: [
      {
        id: '1',
        name: 'Lauree MacFadzean',
        avatar: '/static/images/avatars/1.jpg'
      },
      {
        id: '2',
        name: 'Darice Malyon',
        avatar: '/static/images/avatars/2.jpg'
      },
      {
        id: '3',
        name: 'Dwain Culpan',
        avatar: '/static/images/avatars/3.jpg'
      },
      {
        id: '4',
        name: 'Carleton Henric',
        avatar: '/static/images/avatars/4.jpg'
      },
      {
        id: '5',
        name: 'Dillie Considine',
        avatar: '/static/images/avatars/5.jpg'
      }
    ],
    progress: 98,
    status: 'in_progress'
  },
  {
    id: '7',
    name: 'Gazella granti',
    screenshot: '/static/images/placeholders/fitness/3.jpg',
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    tags: ['UX', 'React', 'Software'],
    startDate: subDays(new Date(), 7).getTime(),
    dueDate: subDays(new Date(), 22).getTime(),
    memberIds: [
      {
        id: '1',
        name: 'Lauree MacFadzean',
        avatar: '/static/images/avatars/1.jpg'
      },
      {
        id: '3',
        name: 'Dwain Culpan',
        avatar: '/static/images/avatars/3.jpg'
      },
      {
        id: '2',
        name: 'Darice Malyon',
        avatar: '/static/images/avatars/2.jpg'
      },
      {
        id: '5',
        name: 'Dillie Considine',
        avatar: '/static/images/avatars/5.jpg'
      }
    ],
    progress: 76,
    status: 'in_progress'
  },
  {
    id: '8',
    name: 'Ovis orientalis',
    screenshot: '/static/images/placeholders/fitness/4.jpg',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    tags: ['Angular', 'UI', 'Frontend'],
    startDate: subDays(new Date(), 8).getTime(),
    dueDate: subDays(new Date(), 65).getTime(),
    memberIds: [
      {
        id: '3',
        name: 'Dwain Culpan',
        avatar: '/static/images/avatars/3.jpg'
      },
      {
        id: '4',
        name: 'Carleton Henric',
        avatar: '/static/images/avatars/4.jpg'
      }
    ],
    progress: 38,
    status: 'not_started'
  },
  {
    id: '9',
    name: 'Pseudocheirus peregrinus',
    screenshot: '/static/images/placeholders/fitness/1.jpg',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    tags: ['Design'],
    startDate: subDays(new Date(), 9).getTime(),
    dueDate: subDays(new Date(), 43).getTime(),
    memberIds: [
      {
        id: '1',
        name: 'Lauree MacFadzean',
        avatar: '/static/images/avatars/1.jpg'
      },
      {
        id: '2',
        name: 'Darice Malyon',
        avatar: '/static/images/avatars/2.jpg'
      },
      {
        id: '5',
        name: 'Dillie Considine',
        avatar: '/static/images/avatars/5.jpg'
      }
    ],
    progress: 93,
    status: 'completed'
  },
  {
    id: '10',
    name: 'Tiliqua scincoides',
    screenshot: '/static/images/placeholders/fitness/2.jpg',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    tags: ['Frontend', 'Software'],
    startDate: subDays(new Date(), 10).getTime(),
    dueDate: subDays(new Date(), 23).getTime(),
    memberIds: [
      {
        id: '4',
        name: 'Carleton Henric',
        avatar: '/static/images/avatars/4.jpg'
      }
    ],
    progress: 66,
    status: 'not_started'
  },
  {
    id: '11',
    name: 'Chelodina longicollis',
    screenshot: '/static/images/placeholders/fitness/3.jpg',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    tags: ['Design', 'Backend'],
    startDate: subDays(new Date(), 11).getTime(),
    dueDate: subDays(new Date(), 47).getTime(),
    memberIds: [
      {
        id: '1',
        name: 'Lauree MacFadzean',
        avatar: '/static/images/avatars/1.jpg'
      },
      {
        id: '2',
        name: 'Darice Malyon',
        avatar: '/static/images/avatars/2.jpg'
      },
      {
        id: '5',
        name: 'Dillie Considine',
        avatar: '/static/images/avatars/5.jpg'
      }
    ],
    progress: 54,
    status: 'in_progress'
  },
  {
    id: '12',
    name: 'Otocyon megalotis',
    screenshot: '/static/images/placeholders/fitness/4.jpg',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    tags: ['Frontend'],
    startDate: subDays(new Date(), 12).getTime(),
    dueDate: subDays(new Date(), 16).getTime(),
    memberIds: [
      {
        id: '1',
        name: 'Lauree MacFadzean',
        avatar: '/static/images/avatars/1.jpg'
      },
      {
        id: '2',
        name: 'Darice Malyon',
        avatar: '/static/images/avatars/2.jpg'
      },
      {
        id: '3',
        name: 'Dwain Culpan',
        avatar: '/static/images/avatars/3.jpg'
      },
      {
        id: '4',
        name: 'Carleton Henric',
        avatar: '/static/images/avatars/4.jpg'
      },
      {
        id: '5',
        name: 'Dillie Considine',
        avatar: '/static/images/avatars/5.jpg'
      }
    ],
    progress: 26,
    status: 'not_started'
  },
  {
    id: '13',
    name: 'Equus burchelli',
    screenshot: '/static/images/placeholders/fitness/1.jpg',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    tags: ['Development'],
    startDate: subDays(new Date(), 13).getTime(),
    dueDate: subDays(new Date(), 21).getTime(),
    memberIds: [
      {
        id: '2',
        name: 'Darice Malyon',
        avatar: '/static/images/avatars/2.jpg'
      },
      {
        id: '3',
        name: 'Dwain Culpan',
        avatar: '/static/images/avatars/3.jpg'
      },
      {
        id: '4',
        name: 'Carleton Henric',
        avatar: '/static/images/avatars/4.jpg'
      }
    ],
    progress: 87,
    status: 'not_started'
  },
  {
    id: '14',
    name: 'Bison bison',
    screenshot: '/static/images/placeholders/fitness/2.jpg',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    tags: ['Frontend'],
    startDate: subDays(new Date(), 14).getTime(),
    dueDate: subDays(new Date(), 17).getTime(),
    memberIds: [
      {
        id: '1',
        name: 'Lauree MacFadzean',
        avatar: '/static/images/avatars/1.jpg'
      },
      {
        id: '5',
        name: 'Dillie Considine',
        avatar: '/static/images/avatars/5.jpg'
      }
    ],
    progress: 18,
    status: 'not_started'
  },
  {
    id: '15',
    name: 'Alcelaphus buselaphus caama',
    screenshot: '/static/images/placeholders/fitness/3.jpg',
    description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    tags: ['Development'],
    startDate: subDays(new Date(), 15).getTime(),
    dueDate: subDays(new Date(), 71).getTime(),
    memberIds: [
      {
        id: '1',
        name: 'Lauree MacFadzean',
        avatar: '/static/images/avatars/1.jpg'
      },
      {
        id: '4',
        name: 'Carleton Henric',
        avatar: '/static/images/avatars/4.jpg'
      },
      {
        id: '5',
        name: 'Dillie Considine',
        avatar: '/static/images/avatars/5.jpg'
      }
    ],
    progress: 69,
    status: 'completed'
  },
  {
    id: '16',
    name: 'Butorides striatus',
    screenshot: '/static/images/placeholders/fitness/4.jpg',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    tags: ['Design'],
    startDate: subDays(new Date(), 16).getTime(),
    dueDate: subDays(new Date(), 24).getTime(),
    memberIds: [
      {
        id: '1',
        name: 'Lauree MacFadzean',
        avatar: '/static/images/avatars/1.jpg'
      },
      {
        id: '2',
        name: 'Darice Malyon',
        avatar: '/static/images/avatars/2.jpg'
      },
      {
        id: '4',
        name: 'Carleton Henric',
        avatar: '/static/images/avatars/4.jpg'
      }
    ],
    progress: 30,
    status: 'completed'
  },
  {
    id: '17',
    name: 'Haematopus ater',
    screenshot: '/static/images/placeholders/fitness/1.jpg',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    tags: ['Backend'],
    startDate: subDays(new Date(), 17).getTime(),
    dueDate: subDays(new Date(), 27).getTime(),
    memberIds: [
      {
        id: '1',
        name: 'Lauree MacFadzean',
        avatar: '/static/images/avatars/1.jpg'
      },
      {
        id: '2',
        name: 'Darice Malyon',
        avatar: '/static/images/avatars/2.jpg'
      },
      {
        id: '3',
        name: 'Dwain Culpan',
        avatar: '/static/images/avatars/3.jpg'
      },
      {
        id: '4',
        name: 'Carleton Henric',
        avatar: '/static/images/avatars/4.jpg'
      },
      {
        id: '5',
        name: 'Dillie Considine',
        avatar: '/static/images/avatars/5.jpg'
      }
    ],
    progress: 52,
    status: 'in_progress'
  },
  {
    id: '18',
    name: 'Aonyx capensis',
    screenshot: '/static/images/placeholders/fitness/2.jpg',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    tags: ['Backend'],
    startDate: subDays(new Date(), 18).getTime(),
    dueDate: subDays(new Date(), 37).getTime(),
    memberIds: [
      {
        id: '1',
        name: 'Lauree MacFadzean',
        avatar: '/static/images/avatars/1.jpg'
      },
      {
        id: '2',
        name: 'Darice Malyon',
        avatar: '/static/images/avatars/2.jpg'
      },
      {
        id: '5',
        name: 'Dillie Considine',
        avatar: '/static/images/avatars/5.jpg'
      }
    ],
    progress: 82,
    status: 'not_started'
  },
  {
    id: '19',
    name: 'Ceratotherium simum',
    screenshot: '/static/images/placeholders/fitness/3.jpg',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    tags: ['Development'],
    startDate: subDays(new Date(), 19).getTime(),
    dueDate: subDays(new Date(), 31).getTime(),
    memberIds: [
      {
        id: '1',
        name: 'Lauree MacFadzean',
        avatar: '/static/images/avatars/1.jpg'
      },
      {
        id: '2',
        name: 'Darice Malyon',
        avatar: '/static/images/avatars/2.jpg'
      },
      {
        id: '3',
        name: 'Dwain Culpan',
        avatar: '/static/images/avatars/3.jpg'
      }
    ],
    progress: 19,
    status: 'not_started'
  },
  {
    id: '20',
    name: 'Porphyrio porphyrio',
    screenshot: '/static/images/placeholders/fitness/4.jpg',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    tags: ['Development'],
    startDate: subDays(new Date(), 20).getTime(),
    dueDate: subDays(new Date(), 29).getTime(),
    memberIds: [
      {
        id: '1',
        name: 'Lauree MacFadzean',
        avatar: '/static/images/avatars/1.jpg'
      },
      {
        id: '4',
        name: 'Carleton Henric',
        avatar: '/static/images/avatars/4.jpg'
      },
      {
        id: '5',
        name: 'Dillie Considine',
        avatar: '/static/images/avatars/5.jpg'
      }
    ],
    progress: 92,
    status: 'not_started'
  }
];

mock.onGet('/api/projects').reply(() => {
  return [200, { projects }];
});
