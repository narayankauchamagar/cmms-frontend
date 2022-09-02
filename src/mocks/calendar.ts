import { setHours, setMinutes, subDays, addDays } from 'date-fns';
import _ from 'lodash';
import { mock } from 'src/utils/axios';
import type { Event } from 'src/models/calendar';
import randomId from 'src/utils/randomId';

let events: Event[] = [
  {
    id: '1',
    allDay: false,
    color: '#57CA22',
    description: '',
    end: setHours(setMinutes(subDays(new Date(), 1), 14), 6),
    start: setHours(setMinutes(subDays(new Date(), 1), 8), 6),
    title: 'Investors Meeting'
  },
  {
    id: '2',
    allDay: false,
    color: '#FF1943',
    description: '',
    end: setHours(setMinutes(addDays(new Date(), 2), 5), 4),
    start: setHours(setMinutes(addDays(new Date(), 2), 7), 3),
    title: 'UX Design Gathering'
  },
  {
    id: '3',
    allDay: false,
    color: '#1975FF',
    description: '',
    end: setHours(setMinutes(subDays(new Date(), 3), 3), 1),
    start: setHours(setMinutes(subDays(new Date(), 4), 3), 2),
    title: 'Set up a board meeting'
  },
  {
    id: '4',
    allDay: false,
    color: '#1975FF',
    description: '',
    end: setHours(setMinutes(addDays(new Date(), 5), 1), 4),
    start: setHours(setMinutes(addDays(new Date(), 5), 1), 4),
    title: 'Call all developers'
  }
];

mock.onGet('/api/calendar/meetings').reply(200, { events });

mock.onPost('/api/calendar/meetings/create').reply((request) => {
  try {
    const { allDay, description, end, start, title } = JSON.parse(request.data);
    const event = {
      id: randomId(),
      allDay,
      description,
      end,
      start,
      title
    };

    events = [...events, event];

    return [200, { event }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Encountered a server error' }];
  }
});

mock.onPost('/api/calendar/meetings/update').reply((request) => {
  try {
    const { eventId, update } = JSON.parse(request.data);
    let event = null;

    events = _.map(events, (_event) => {
      if (_event.id === eventId) {
        _.assign(_event, { ...update });
        event = _event;
      }

      return _event;
    });

    return [200, { event }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Encountered a server error' }];
  }
});

mock.onPost('/api/calendar/meetings/delete').reply((request) => {
  try {
    const { eventId } = JSON.parse(request.data);

    events = _.reject(events, { id: eventId });

    return [200, { eventId }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Encountered a server error' }];
  }
});
