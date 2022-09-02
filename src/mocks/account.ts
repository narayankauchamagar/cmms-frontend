import { mock } from 'src/utils/axios';
import wait from 'src/utils/wait';
import { sign, decode, JWT_SECRET, JWT_EXPIRES_IN } from 'src/utils/jwt';
import randomId from 'src/utils/randomId';

const users = [
  {
    id: '1',
    avatar: '/static/images/avatars/3.jpg',
    location: 'San Francisco, USA',
    username: 'admin',
    email: 'demo@example.com',
    name: 'Randy Smith',
    jobtitle: 'Lead Developer',
    password: 'TokyoPass1@',
    role: 'admin',
    posts: '27'
  }
];

mock.onPost('/api/account/login').reply(async (config) => {
  await wait(1000);

  try {
    const { email, password } = JSON.parse(config.data);

    const user = users.find((_user) => _user.email === email);

    if (!user || user.password !== password) {
      return [
        400,
        { message: 'Verify that your email and password are correct' }
      ];
    }

    const accessToken = sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN
    });

    return [
      200,
      {
        accessToken,
        user: {
          id: user.id,
          avatar: user.avatar,
          jobtitle: user.jobtitle,
          email: user.email,
          name: user.name,
          location: user.location,
          username: user.username,
          role: user.role,
          posts: user.posts
        }
      }
    ];
  } catch (err) {
    console.error('Error: ', err);
    return [500, { message: 'Encountered a server error' }];
  }
});

mock.onPost('/api/account/register').reply(async (config) => {
  await wait(1000);

  try {
    const { email, name, password } = JSON.parse(config.data);

    let user = users.find((_user) => _user.email === email);

    if (user) {
      return [400, { message: 'This user already exists' }];
    }

    user = {
      id: randomId(),
      avatar: null,
      jobtitle: 'Lead Developer',
      email,
      username: null,
      name,
      password,
      location: null,
      role: 'admin',
      posts: '56'
    };

    users.push(user);

    const accessToken = sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN
    });

    return [
      200,
      {
        accessToken,
        user: {
          id: user.id,
          avatar: user.avatar,
          jobtitle: user.jobtitle,
          email: user.email,
          name: user.name,
          location: user.location,
          username: user.username,
          role: user.role,
          posts: user.posts
        }
      }
    ];
  } catch (err) {
    console.error('Error: ', err);
    return [500, { message: 'Encountered a server error' }];
  }
});

mock.onGet('/api/account/personal').reply((config) => {
  try {
    const { Authorization } = config.headers;

    if (!Authorization) {
      return [401, { message: 'Auth token is missing' }];
    }

    const accessToken = (Authorization as string).split(' ')[1];
    const { userId } = decode(accessToken) as any;
    const user = users.find((_user) => _user.id === userId);

    if (!user) {
      return [401, { message: 'Invalid auth token' }];
    }

    return [
      200,
      {
        user: {
          id: user.id,
          avatar: user.avatar,
          jobtitle: user.jobtitle,
          email: user.email,
          name: user.name,
          location: user.location,
          username: user.username,
          role: user.role,
          posts: user.posts
        }
      }
    ];
  } catch (err) {
    console.error('Error: ', err);
    return [500, { message: 'Encountered a server error' }];
  }
});
