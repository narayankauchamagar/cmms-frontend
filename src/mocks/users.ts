import { mock } from 'src/utils/axios';
import type { User } from 'src/models/user';

let users: User[] = [
  {
    id: '1',
    name: 'Rafael Kunde',
    avatar: '/static/images/avatars/1.jpg',
    email: 'Monte.Auer31@yahoo.com',
    jobtitle: 'Product Infrastructure Associate',
    username: 'Delphia22',
    location: 'Gislasonchester',
    role: 'admin',
    coverImg: '/static/images/placeholders/covers/1.jpg',
    followers: '667',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem quam pede lobortis ligula, sit amet eleifend.',
    posts: '8'
  },
  {
    id: '2',
    name: 'Madeline Pagac',
    avatar: '/static/images/avatars/2.jpg',
    email: 'Francis64@gmail.com',
    jobtitle: 'Internal Configuration Planner',
    username: 'Odessa_Goodwin38',
    location: 'Flaviomouth',
    role: 'subscriber',
    coverImg: '/static/images/placeholders/covers/2.jpg',
    followers: '375',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    posts: '11'
  },
  {
    id: '3',
    name: 'Okey Turner V',
    avatar: '/static/images/avatars/3.jpg',
    email: 'Alexys.Frami91@hotmail.com',
    jobtitle: 'Regional Division Analyst',
    username: 'Ross_Reichert',
    location: 'Derekmouth',
    role: 'customer',
    coverImg: '/static/images/placeholders/covers/3.jpg',
    followers: '6333',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    posts: '23'
  },
  {
    id: '4',
    name: 'Modesta Sauer',
    avatar: '/static/images/avatars/4.jpg',
    email: 'Susan_Wolff@hotmail.com',
    jobtitle: 'Lead Communications Consultant',
    username: 'Sincere46',
    location: 'Josieview',
    role: 'admin',
    coverImg: '/static/images/placeholders/covers/4.jpg',
    followers: '1876',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    posts: '362'
  },
  {
    id: '5',
    name: 'Oma Bogisich',
    avatar: '/static/images/avatars/5.jpg',
    email: 'Demetris88@hotmail.com',
    jobtitle: 'Customer Implementation Strategist',
    username: 'Prince.Bergnaum',
    location: 'East Alexander',
    role: 'customer',
    coverImg: '/static/images/placeholders/covers/5.jpg',
    followers: '6513',
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    posts: '94'
  },
  {
    id: '6',
    name: 'Wade Heathcote',
    avatar: '/static/images/avatars/1.jpg',
    email: 'Elissa.Ortiz50@hotmail.com',
    jobtitle: 'Regional Markets Assistant',
    username: 'Camylle.Nicolas33',
    location: 'Gaetanoside',
    role: 'subscriber',
    coverImg: '/static/images/placeholders/covers/6.jpg',
    followers: '492',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    posts: '38'
  },
  {
    id: '7',
    name: 'Dan Stroman',
    avatar: '/static/images/avatars/2.jpg',
    email: 'Amaya53@yahoo.com',
    jobtitle: 'Internal Configuration Facilitator',
    username: 'Alfonzo.Ruecker96',
    location: 'Reginaldbury',
    role: 'admin',
    coverImg: '/static/images/placeholders/covers/1.jpg',
    followers: '3848',
    description: 'Vivamus tortor. Duis mattis egestas metus.',
    posts: '4'
  },
  {
    id: '8',
    name: 'Delta Wiza',
    avatar: '/static/images/avatars/3.jpg',
    email: 'Amari.Gaylord42@hotmail.com',
    jobtitle: 'International Division Specialist',
    username: 'Mozelle_Bernier',
    location: 'East Bill',
    role: 'subscriber',
    coverImg: '/static/images/placeholders/covers/2.jpg',
    followers: '730',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    posts: '457'
  },
  {
    id: '9',
    name: 'Edwina Collins',
    avatar: '/static/images/avatars/4.jpg',
    email: 'Shaina.Beahan@yahoo.com',
    jobtitle: 'Investor Quality Executive',
    username: 'Wendy_Weissnat',
    location: 'Zboncakchester',
    role: 'customer',
    coverImg: '/static/images/placeholders/covers/3.jpg',
    followers: '6673',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id.',
    posts: '237'
  },
  {
    id: '10',
    name: 'Ms. Antoinette Dicki',
    avatar: '/static/images/avatars/5.jpg',
    email: 'Yadira68@gmail.com',
    jobtitle: 'Direct Integration Facilitator',
    username: 'Jayde_Grant28',
    location: 'Murphyberg',
    role: 'admin',
    coverImg: '/static/images/placeholders/covers/4.jpg',
    followers: '980',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    posts: '84'
  },
  {
    id: '11',
    name: 'Ewald Spinka',
    avatar: '/static/images/avatars/1.jpg',
    email: 'Alexandro_Marquardt@yahoo.com',
    jobtitle: 'Lead Assurance Consultant',
    username: 'Guiseppe.Kemmer23',
    location: 'Grantmouth',
    role: 'customer',
    coverImg: '/static/images/placeholders/covers/5.jpg',
    followers: '294',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    posts: '55'
  },
  {
    id: '12',
    name: 'Tatyana Hudson DVM',
    avatar: '/static/images/avatars/2.jpg',
    email: 'Mckayla12@yahoo.com',
    jobtitle: 'National Brand Representative',
    username: 'Ransom.Welch55',
    location: 'Port Royce',
    role: 'subscriber',
    coverImg: '/static/images/placeholders/covers/6.jpg',
    followers: '672',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    posts: '23'
  },
  {
    id: '13',
    name: 'Gregorio Muller',
    avatar: '/static/images/avatars/3.jpg',
    email: 'Katheryn.Casper89@yahoo.com',
    jobtitle: 'Investor Division Planner',
    username: 'Jairo_Cartwright58',
    location: 'South Creola',
    role: 'customer',
    coverImg: '/static/images/placeholders/covers/1.jpg',
    followers: '893',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    posts: '465'
  },
  {
    id: '14',
    name: 'Elnora Harris',
    avatar: '/static/images/avatars/4.jpg',
    email: 'Alysha27@yahoo.com',
    jobtitle: 'Human Assurance Administrator',
    username: 'Jacinto75',
    location: 'Mayerburgh',
    role: 'admin',
    coverImg: '/static/images/placeholders/covers/2.jpg',
    followers: '995',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    posts: '65'
  },
  {
    id: '15',
    name: 'Micheal Jones',
    avatar: '/static/images/avatars/5.jpg',
    email: 'Scot.Koch@gmail.com',
    jobtitle: 'National Applications Engineer',
    username: 'Chloe8',
    location: 'Metamouth',
    role: 'subscriber',
    coverImg: '/static/images/placeholders/covers/3.jpg',
    followers: '215',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    posts: '9'
  },
  {
    id: '16',
    name: 'Michel Considine',
    avatar: '/static/images/avatars/1.jpg',
    email: 'Cameron.Kuphal50@hotmail.com',
    jobtitle: 'Internal Communications Analyst',
    username: 'Quincy_Weimann67',
    location: 'Jayneberg',
    role: 'customer',
    coverImg: '/static/images/placeholders/covers/4.jpg',
    followers: '1348',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    posts: '22'
  },
  {
    id: '17',
    name: 'Shayne Cormier',
    avatar: '/static/images/avatars/2.jpg',
    email: 'Buddy96@gmail.com',
    jobtitle: 'National Accounts Analyst',
    username: 'Estevan.McGlynn',
    location: 'Lakinburgh',
    role: 'customer',
    coverImg: '/static/images/placeholders/covers/5.jpg',
    followers: '9711',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    posts: '5'
  },
  {
    id: '18',
    name: 'Doug Goldner',
    avatar: '/static/images/avatars/3.jpg',
    email: 'Tommie.Predovic6@gmail.com',
    jobtitle: 'Human Functionality Orchestrator',
    username: 'Veda.Wolff',
    location: 'West Carmellamouth',
    role: 'subscriber',
    coverImg: '/static/images/placeholders/covers/6.jpg',
    followers: '773',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    posts: '3'
  },
  {
    id: '19',
    name: 'Wilhelm Littel',
    avatar: '/static/images/avatars/4.jpg',
    email: 'Reymundo_Gleichner@hotmail.com',
    jobtitle: 'Customer Assurance Administrator',
    username: 'Estell_Blick',
    location: 'West Ernestview',
    role: 'admin',
    coverImg: '/static/images/placeholders/covers/1.jpg',
    followers: '650',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    posts: '34'
  },
  {
    id: '20',
    name: 'Alba Daugherty',
    avatar: '/static/images/avatars/5.jpg',
    email: 'Queen73@yahoo.com',
    jobtitle: 'Customer Accounts Director',
    username: 'Ezequiel36',
    location: 'Wizaville',
    role: 'customer',
    coverImg: '/static/images/placeholders/covers/2.jpg',
    followers: '627',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    posts: '54'
  }
];

mock.onGet('/api/users').reply(() => {
  return [200, { users }];
});

mock.onGet('/api/user').reply((config) => {
  const { userId } = config.params;
  const user = users.find((_user) => _user.id === userId);

  return [200, { user }];
});
