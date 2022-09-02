import { subHours, subDays } from 'date-fns';
import { mock } from 'src/utils/axios';
import type { Mail, Tag } from 'src/models/mailbox';

const tags: Tag[] = [
  {
    id: 'inbox',
    type: 'category_tag',
    name: 'Inbox',
    newMails: 7
  },
  {
    id: 'outbox',
    type: 'category_tag',
    name: 'Outbox',
    newMails: 1
  },
  {
    id: 'favourites',
    type: 'category_tag',
    name: 'Favourites',
    newMails: 0
  },
  {
    id: 'drafts',
    type: 'category_tag',
    name: 'Drafts',
    newMails: 0
  },
  {
    id: 'deleted',
    type: 'category_tag',
    name: 'Deleted',
    newMails: 1
  },
  {
    id: '1',
    type: 'label_tag',
    name: 'Important',
    newMails: 4,
    color: '#57CA22'
  },
  {
    id: '2',
    type: 'label_tag',
    name: 'Work',
    newMails: 3,
    color: '#FFA319'
  },
  {
    id: '3',
    type: 'label_tag',
    name: 'Tasks',
    newMails: 3,
    color: '#33C2FF'
  },
  {
    id: '4',
    type: 'label_tag',
    name: 'Business',
    newMails: 2,
    color: '#FF1943'
  }
];

const mails: Mail[] = [
  {
    id: '1',
    category: 'inbox',
    opened: false,
    tagIds: ['1'],
    subject: 'The PIN you requested for Google My Business is on the way',
    summary: "I know we haven't spoken in a while, so I just wanted",
    content: `

    <p>Hey Michele,</p>

    <p>I know we haven't spoken in a while, so I just wanted to touch base. As always, I'm here as a resource for you, so just let me know if you have any questions about new features, best practices, or anything in between!</p>
    
    <p>As soon as you run into a question or concern, please let me know by email or you can call 00 77 44 44 44 44.</p>
    
    <p>If you're having a great experience with Google so far, would you be interested in referring us to your network?</p>
    
    <p>Kindly,</p>
    <p>Veer</p>
    `,
    to: [
      {
        name: 'Michele Rodrigues',
        email: 'michele.r@example.com',
        avatar: '/static/images/avatars/1.jpg'
      }
    ],
    from: {
      name: 'Veer Moody',
      email: 'veer@example.com',
      avatar: '/static/images/avatars/2.jpg'
    },
    date: subHours(new Date(), 20).getTime()
  },
  {
    id: '2',
    category: 'inbox',
    opened: false,
    tagIds: ['2', '3'],
    subject: 'The easier way to create great images + 30% off all products',
    summary:
      'John here with Google Inc. You’ve been using our services for awhile,',
    content: `
    <p>Hey Veer,</p>

    <p>John here with Google Inc. You’ve been using our services for awhile, so I wanted to check in to see how things are going</p>
    
    <p>So, what questions can I answer? What features can I demo? What issues can I solve?</p>
    
    <p>I'd love to hop on a quick call to see how I can help. Are you free anytime tomorrow between 10:00 - 11:30? If not then, let me know what works best for you.</p>
    
    <p>Best,</p>
    <p>John</p>
    `,
    to: [
      {
        name: 'Drew Hawes',
        email: 'drew.hawes@example.com',
        avatar: '/static/images/avatars/2.jpg'
      }
    ],
    from: {
      name: 'Kianna Keeling',
      email: 'kia@example.com',
      avatar: '/static/images/avatars/5.jpg'
    },
    date: subDays(new Date(), 1).getTime()
  },
  {
    id: '3',
    category: 'inbox',
    opened: true,
    tagIds: ['4'],
    subject: 'Powerful creator tools for independent publishing',
    summary:
      'We wanted to call your attention to our new panel we released over night',
    content: `
    <p>Hey Kianna,</p>

    <p>We wanted to call your attention to our new panel we released over night. Using this new feature, you’ll be able to view better analytics.</p>
    
    <p>If you have any questions about the best ways to use panel, please feel free to give us a call at 00 77 44 44 44 44.</p>
    
    <p>Best,</p>
    <p>Drew</p>
    `,
    to: [
      {
        name: 'Drew Hawes',
        email: 'drew.hawes@example.com',
        avatar: '/static/images/avatars/3.jpg'
      }
    ],
    from: {
      name: 'Eileen Morgan',
      email: 'eileen@morgan.com',
      avatar: '/static/images/avatars/4.jpg'
    },
    date: subDays(new Date(), 2).getTime()
  },
  {
    id: '4',
    category: 'inbox',
    opened: false,
    tagIds: ['2'],
    subject: 'Answered: your most burning questions about Software',
    summary: 'It was great meeting you the other day at Apple Conference 2022',
    content: `

    <p>Hi Drew,</p>

    <p>It was great meeting you the other day at Apple Conference 2022.</p>
    
    <p>I'd love to keep in touch and bounce some ideas around with you. Let's get coffee or lunch sometime soon. I'll follow up with you next week to see what’s possible.</p>
    
    <p>Look forward to connecting again soon.</p>
    
    <p>Cheers,</p>
    <p>Ferne</p>
    `,
    to: [
      {
        name: 'Drew Hawes',
        email: 'drew.hawes@example.com',
        avatar: '/static/images/avatars/4.jpg'
      }
    ],
    from: {
      name: 'Ferne Berry',
      email: 'ferne.s@example.com',
      avatar: '/static/images/avatars/1.jpg'
    },
    date: subDays(new Date(), 3).getTime()
  },
  {
    id: '5',
    category: 'inbox',
    opened: true,
    tagIds: ['3', '1'],
    subject: "15 things you didn't know about Web Development",
    summary:
      'It was great meeting you the other day at Goolge Corporate Event.',
    content: `
    <p>Hi Mr. Hawes,</p>

    <p>It was great meeting you the other day at Goolge Corporate Event.</p>
    
    <p>I'd love to keep in touch and bounce some ideas around with you. Let's get coffee or lunch sometime soon. I'll follow up with you next week to see what’s possible.</p>
    
    <p>Look forward to connecting again soon.</p>
    
    <p>Cheers,</p>
    <p>Ryley Hardin</p>
    `,
    to: [
      {
        name: 'Drew Hawes',
        email: 'drew.hawes@example.com',
        avatar: '/static/images/avatars/5.jpg'
      }
    ],
    from: {
      name: 'Ryley Hardin',
      email: 'ryleyhar.2@example.com',
      avatar: '/static/images/avatars/3.jpg'
    },
    date: subDays(new Date(), 4).getTime()
  },
  {
    id: '6',
    category: 'inbox',
    opened: false,
    tagIds: ['1'],
    subject: '9 Marketing lessons from Bob Ross',
    summary: 'Are you available on Monday between 9:00 AM - 10:15 AM?',
    content: `
    <p>I hope you're doing well. I was hoping we could hop on the phone soon to get a better idea of what you're interested and what I can do to help.</p>
    
    <p>Are you available on Monday between 9:00 AM - 10:15 AM? Please let me know if there's a more convenient time. Also, is 00 77 44 44 44 44 still your preferred number?</p>
    
    <p>Looking forward to connecting soon,</p>
    <p>Edison</p>
    `,
    to: [
      {
        name: 'Drew Hawes',
        email: 'drew.hawes@example.com',
        avatar: '/static/images/avatars/1.jpg'
      }
    ],
    from: {
      name: 'Edison Finnegan',
      email: 'edisonss1@example.com',
      avatar: '/static/images/avatars/2.jpg'
    },
    date: subDays(new Date(), 4).getTime()
  },
  {
    id: '7',
    category: 'inbox',
    opened: false,
    tagIds: [],
    subject:
      "If you've already tried Marketing, don't read this. It'll break your heart",
    summary: 'So tell me — what’s been going well for you and your business',
    content: `

    <p>Hello,</p>

    <p>I just wanted you to know that I genuinely enjoyed getting to meet you, albeit briefly. Instead of just sending you information on me, I’d love to know some more about you! I value each of my new relationships highly, and don’t want to send you "blanket" information.</p>
    
    <p>So tell me — what’s been going well for you and your business lately? What challenges are you encountering? I’m happy to assist in any way possible, even if it means connecting you to someone else I know who may be a better fit.</p>
    
    <p>Looking forward to connecting more in-depth.</p>
    
    <p>Cheers,</p>
    <p>Manraj Steele</p>
    `,
    to: [
      {
        name: 'Drew Hawes',
        email: 'drew.hawes@example.com',
        avatar: '/static/images/avatars/2.jpg'
      }
    ],
    from: {
      name: 'Manraj Steele',
      email: 'manraj.steele@example.com',
      avatar: '/static/images/avatars/1.jpg'
    },
    date: subDays(new Date(), 6).getTime()
  },
  {
    id: '8',
    category: 'outbox',
    opened: false,
    tagIds: ['2', '3', '1'],
    subject: 'The easier way to create great images + 30% off all products',
    summary:
      'John here with Google Inc. You’ve been using our services for awhile',
    content: `
    <p>Hey Veer,</p>

    <p>John here with Google Inc. You’ve been using our services for awhile, so I wanted to check in to see how things are going</p>
    
    <p>So, what questions can I answer? What features can I demo? What issues can I solve?</p>
    
    <p>I'd love to hop on a quick call to see how I can help. Are you free anytime tomorrow between 9:00 AM - 10:15 AM? If not then, let me know what works best for you.</p>
    
    <p>Best,</p>
    <p>John</p>
    `,
    to: [
      {
        name: 'Drew Hawes',
        email: 'drew.hawes@example.com',
        avatar: '/static/images/avatars/2.jpg'
      }
    ],
    from: {
      name: 'Kianna Keeling',
      email: 'kia@example.com',
      avatar: '/static/images/avatars/5.jpg'
    },
    date: subDays(new Date(), 7).getTime()
  },
  {
    id: '9',
    category: 'deleted',
    opened: true,
    tagIds: ['4'],
    subject: 'Powerful creator tools for independent publishing',
    summary:
      'We wanted to call your attention to our new dashboard we released',
    content: `
    <p>Hey Kianna,</p>

    <p>We wanted to call your attention to our new dashboard we released over night. Using this new feature, you’ll be able to dashboard CASE.</p>
    
    <p>If you have any questions about the best ways to use dashboard, please feel free to give us a call at 00 77 44 44 44 44.</p>
    
    <p>Best,</p>
    <p>Drew</p>
    `,
    to: [
      {
        name: 'Drew Hawes',
        email: 'drew.hawes@example.com',
        avatar: '/static/images/avatars/3.jpg'
      }
    ],
    from: {
      name: 'Eileen Morgan',
      email: 'eileen@morgan.com',
      avatar: '/static/images/avatars/4.jpg'
    },
    date: new Date().getTime()
  }
];

const filterMails = (
  mails: Mail[],
  tags: Tag[],
  categoryTag?: string,
  labelTag?: string
): Mail[] => {
  if (labelTag) {
    const tag = tags.find((_tag) => _tag.name === labelTag);

    if (!tag) {
      return [];
    }

    return mails.filter((mail) => mail.tagIds.includes(tag.id));
  }

  if (
    ['inbox', 'outbox', 'favourites', 'drafts', 'deleted'].includes(categoryTag)
  ) {
    return mails.filter((mail) => mail.category === categoryTag);
  }

  return [];
};

mock.onGet('/api/mailbox/tags').reply(200, { tags });

mock.onGet('/api/mailbox/mails').reply((config) => {
  try {
    const { categoryTag, labelTag } = config.params;
    const filteredMails = filterMails(mails, tags, categoryTag, labelTag);

    return [200, { mails: filteredMails }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Encountered a server error' }];
  }
});

mock.onGet('/api/mailbox/mail').reply((config) => {
  try {
    const { mailboxCategory } = config.params;
    const mail = mails.find((_mail) => _mail.id === mailboxCategory);

    if (!mail) {
      return [404, { message: 'The requested email is missing' }];
    }

    return [200, { mail }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Encountered a server error' }];
  }
});
