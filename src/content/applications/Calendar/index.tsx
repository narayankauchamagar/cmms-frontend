import { useState, useRef, useEffect } from 'react';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import {
  Grid,
  Drawer,
  Box,
  Card,
  Divider,
  useMediaQuery,
  styled,
  useTheme
} from '@mui/material';

import type { Event, View } from 'src/models/calendar';
import { useDispatch, useSelector } from 'src/store';
import type { RootState } from 'src/store';
import {
  getEvents,
  updateEvent,
  selectEvent,
  selectRange,
  openDrawerPanel,
  closeDrawerPanel
} from 'src/slices/calendar';

import Actions from './Actions';
import EventDrawer from './EventDrawer';

const FullCalendarWrapper = styled(Box)(
  ({ theme }) => `
    padding: ${theme.spacing(3)};

    & .fc-license-message {
      display: none;
    }
    .fc {

      .fc-col-header-cell {
        padding: ${theme.spacing(1)};
        background: ${theme.colors.alpha.black[5]};
      }

      .fc-scrollgrid {
        border: 2px solid ${theme.colors.alpha.black[10]};
        border-right-width: 1px;
        border-bottom-width: 1px;
      }

      .fc-cell-shaded,
      .fc-list-day-cushion {
        background: ${theme.colors.alpha.black[5]};
      }

      .fc-list-event-graphic {
        padding-right: ${theme.spacing(1)};
      }

      .fc-theme-standard td, .fc-theme-standard th,
      .fc-col-header-cell {
        border: 1px solid ${theme.colors.alpha.black[10]};
      }

      .fc-event {
        padding: ${theme.spacing(0.1)} ${theme.spacing(0.3)};
      }

      .fc-list-day-side-text {
        font-weight: normal;
        color: ${theme.colors.alpha.black[70]};
      }

      .fc-list-event:hover td,
      td.fc-daygrid-day.fc-day-today {
        background-color: ${theme.colors.primary.lighter};
      }

      td.fc-daygrid-day:hover,
      .fc-highlight {
        background: ${theme.colors.alpha.black[10]};
      }

      .fc-daygrid-dot-event:hover, 
      .fc-daygrid-dot-event.fc-event-mirror {
        background: ${theme.colors.primary.lighter};
      }

      .fc-daygrid-day-number {
        padding: ${theme.spacing(1)};
        font-weight: bold;
      }

      .fc-list-sticky .fc-list-day > * {
        background: ${theme.colors.alpha.black[5]} !important;
      }

      .fc-cell-shaded, 
      .fc-list-day-cushion {
        background: ${theme.colors.alpha.black[10]} !important;
        color: ${theme.colors.alpha.black[70]} !important;
      }

      &.fc-theme-standard td, 
      &.fc-theme-standard th,
      &.fc-theme-standard .fc-list {
        border-color: ${theme.colors.alpha.black[30]};
      }
    }
`
);

const selectedEventSelector = (state: RootState): Event | null => {
  const { events, selectedEventId } = state.calendar;

  if (selectedEventId) {
    return events.find((_event) => _event.id === selectedEventId);
  } else {
    return null;
  }
};

function ApplicationsCalendar() {
  const theme = useTheme();

  const calendarRef = useRef<FullCalendar | null>(null);
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();
  const { events, isDrawerOpen, selectedRange } = useSelector(
    (state) => state.calendar
  );
  const selectedEvent = useSelector(selectedEventSelector);
  const [date, setDate] = useState<Date>(new Date());
  const [view, setView] = useState<View>(mobile ? 'listWeek' : 'dayGridMonth');

  const handleDateToday = (): void => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calApi = calItem.getApi();

      calApi.today();
      setDate(calApi.getDate());
    }
  };

  const changeView = (changedView: View): void => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calApi = calItem.getApi();

      calApi.changeView(changedView);
      setView(changedView);
    }
  };

  const handleDatePrev = (): void => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calApi = calItem.getApi();

      calApi.prev();
      setDate(calApi.getDate());
    }
  };

  const handleDateNext = (): void => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calApi = calItem.getApi();

      calApi.next();
      setDate(calApi.getDate());
    }
  };

  const handleAddClick = (): void => {
    dispatch(openDrawerPanel());
  };

  const handleRangeSelect = (arg: any): void => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calApi = calItem.getApi();

      calApi.unselect();
    }

    dispatch(selectRange(arg.start, arg.end));
  };

  const handleEventSelect = (arg: any): void => {
    dispatch(selectEvent(arg.event.id));
  };

  const handleEventResize = async ({ event }: any): Promise<void> => {
    try {
      await dispatch(
        updateEvent(event.id, {
          allDay: event.allDay,
          start: event.start,
          end: event.end
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleEventDrop = async ({ event }: any): Promise<void> => {
    try {
      dispatch(
        updateEvent(event.id, {
          allDay: event.allDay,
          start: event.start,
          end: event.end
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  const closeDrawer = (): void => {
    dispatch(closeDrawerPanel());
  };

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  useEffect(() => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calApi = calItem.getApi();
      const changedView = mobile ? 'listWeek' : 'dayGridMonth';

      calApi.changeView(changedView);
      setView(changedView);
    }
  }, [mobile]);

  return (
    <>
      <Helmet>
        <title>Calendar - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader handleCreateEvent={handleAddClick} />
      </PageTitleWrapper>
      <Grid
        sx={{
          px: 4
        }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item xs={12}>
          <Card>
            <Box p={3}>
              <Actions
                date={date}
                onNext={handleDateNext}
                onPrevious={handleDatePrev}
                onToday={handleDateToday}
                changeView={changeView}
                view={view}
              />
            </Box>
            <Divider />
            <FullCalendarWrapper>
              <FullCalendar
                allDayMaintainDuration
                initialDate={date}
                initialView={view}
                droppable
                editable
                eventDisplay="block"
                eventClick={handleEventSelect}
                eventDrop={handleEventDrop}
                dayMaxEventRows={4}
                eventResizableFromStart
                eventResize={handleEventResize}
                events={events}
                headerToolbar={false}
                height={660}
                ref={calendarRef}
                rerenderDelay={10}
                select={handleRangeSelect}
                selectable
                weekends
                plugins={[
                  dayGridPlugin,
                  timeGridPlugin,
                  interactionPlugin,
                  listPlugin
                ]}
              />
            </FullCalendarWrapper>
          </Card>
        </Grid>
      </Grid>
      <Footer />
      <Drawer
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'left' : 'right'}
        onClose={closeDrawer}
        open={isDrawerOpen}
        elevation={9}
      >
        {isDrawerOpen && (
          <EventDrawer
            event={selectedEvent}
            range={selectedRange}
            onAddComplete={closeDrawer}
            onCancel={closeDrawer}
            onDeleteComplete={closeDrawer}
            onEditComplete={closeDrawer}
          />
        )}
      </Drawer>
    </>
  );
}

export default ApplicationsCalendar;
