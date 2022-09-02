import { mock } from 'src/utils/axios';
import type { Invoice } from 'src/models/invoice';
import { subHours } from 'date-fns';

let invoices: Invoice[] = [
  {
    id: '1',
    number: 'INV 5262',
    issuedDate: subHours(new Date(), 18).getTime(),
    dueDate: subHours(new Date(), 15).getTime(),
    clientName: 'Nlounge',
    clientAvatar: '/static/images/avatars/1.jpg',
    amount: 1497,
    currency: '$',
    status: 'progress'
  },
  {
    id: '2',
    number: 'INV 6739',
    issuedDate: subHours(new Date(), 21).getTime(),
    dueDate: subHours(new Date(), 18).getTime(),
    clientName: 'Thoughtmix',
    clientAvatar: '/static/images/avatars/2.jpg',
    amount: 5689,
    currency: '$',
    status: 'draft'
  },
  {
    id: '3',
    number: 'INV 7849',
    issuedDate: subHours(new Date(), 44).getTime(),
    dueDate: subHours(new Date(), 21).getTime(),
    clientName: 'Oyoba',
    clientAvatar: '/static/images/avatars/3.jpg',
    amount: 611,
    currency: '$',
    status: 'progress'
  },
  {
    id: '4',
    number: 'INV 6839',
    issuedDate: subHours(new Date(), 36).getTime(),
    dueDate: subHours(new Date(), 24).getTime(),
    clientName: 'Twimm',
    clientAvatar: '/static/images/avatars/4.jpg',
    amount: 8792,
    currency: '$',
    status: 'completed'
  },
  {
    id: '5',
    number: 'INV 7684',
    issuedDate: subHours(new Date(), 44).getTime(),
    dueDate: subHours(new Date(), 27).getTime(),
    clientName: 'Meembee',
    clientAvatar: '/static/images/avatars/5.jpg',
    amount: 3947,
    currency: '$',
    status: 'progress'
  },
  {
    id: '6',
    number: 'INV 7837',
    issuedDate: subHours(new Date(), 65).getTime(),
    dueDate: subHours(new Date(), 32).getTime(),
    clientName: 'Trudoo',
    clientAvatar: '/static/images/avatars/1.jpg',
    amount: 5133,
    currency: '$',
    status: 'completed'
  },
  {
    id: '7',
    number: 'INV 6831',
    issuedDate: subHours(new Date(), 44).getTime(),
    dueDate: subHours(new Date(), 35).getTime(),
    clientName: 'Buzzdog',
    clientAvatar: '/static/images/avatars/2.jpg',
    amount: 7255,
    currency: '$',
    status: 'draft'
  },
  {
    id: '8',
    number: 'INV 8936',
    issuedDate: subHours(new Date(), 43).getTime(),
    dueDate: subHours(new Date(), 41).getTime(),
    clientName: 'Realcube',
    clientAvatar: '/static/images/avatars/3.jpg',
    amount: 6091,
    currency: '$',
    status: 'pending'
  },
  {
    id: '9',
    number: 'INV 9683',
    issuedDate: subHours(new Date(), 76).getTime(),
    dueDate: subHours(new Date(), 51).getTime(),
    clientName: 'Zoomzone',
    clientAvatar: '/static/images/avatars/4.jpg',
    amount: 7087,
    currency: '$',
    status: 'draft'
  },
  {
    id: '10',
    number: 'INV 3798',
    issuedDate: subHours(new Date(), 87).getTime(),
    dueDate: subHours(new Date(), 65).getTime(),
    clientName: 'Eabox',
    clientAvatar: '/static/images/avatars/5.jpg',
    amount: 3999,
    currency: '$',
    status: 'draft'
  },
  {
    id: '11',
    number: 'INV 8982',
    issuedDate: subHours(new Date(), 78).getTime(),
    dueDate: subHours(new Date(), 76).getTime(),
    clientName: 'Ozu',
    clientAvatar: '/static/images/avatars/1.jpg',
    amount: 5867,
    currency: '$',
    status: 'progress'
  },
  {
    id: '12',
    number: 'INV 7891',
    issuedDate: subHours(new Date(), 91).getTime(),
    dueDate: subHours(new Date(), 87).getTime(),
    clientName: 'Fivespan',
    clientAvatar: '/static/images/avatars/2.jpg',
    amount: 6337,
    currency: '$',
    status: 'completed'
  },
  {
    id: '13',
    number: 'INV 7982',
    issuedDate: subHours(new Date(), 102).getTime(),
    dueDate: subHours(new Date(), 91).getTime(),
    clientName: 'Twitternation',
    clientAvatar: '/static/images/avatars/3.jpg',
    amount: 6712,
    currency: '$',
    status: 'progress'
  },
  {
    id: '14',
    number: 'INV 7092',
    issuedDate: subHours(new Date(), 122).getTime(),
    dueDate: subHours(new Date(), 94).getTime(),
    clientName: 'Rhyzio',
    clientAvatar: '/static/images/avatars/4.jpg',
    amount: 6004,
    currency: '$',
    status: 'pending'
  },
  {
    id: '15',
    number: 'INV 5923',
    issuedDate: subHours(new Date(), 196).getTime(),
    dueDate: subHours(new Date(), 99).getTime(),
    clientName: 'Trudeo',
    clientAvatar: '/static/images/avatars/5.jpg',
    amount: 5188,
    currency: '$',
    status: 'draft'
  }
];

mock.onGet('/api/invoices').reply(() => {
  return [200, { invoices }];
});

mock.onGet('/api/invoice').reply((config) => {
  const { invoiceId } = config.params;
  const invoice = invoices.find((_invoice) => _invoice.id === invoiceId);

  return [200, { invoice }];
});
