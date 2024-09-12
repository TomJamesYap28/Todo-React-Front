import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import { CalendarAddModal, CalendarEditModal } from '../assets/hooks/Modals.jsx';

function Calendar({ isAdmin }) {
  return (
    <div className="calendar">
      <FullCalendar
        plugins={[dayGridPlugin, listPlugin]}
        selectable={isAdmin}
        customButtons={{
            filterDropdown: {
                text: 'Filter',
                click: function () {
                },
            },
        }}
        headerToolbar={{
            left: 'prev,next filterDropdown',
            center: 'title',
            right: 'dayGridMonth,listMonth',
        }}
        dateClick={handleDateClick}
        events={fetchEvents}
        eventDidMount={handleEventMount}
      />

      <CalendarAddModal selectedDate={selectedDate} />
      <CalendarEditModal editEventData={editEventData} />
    </div>
  );
}

export default Calendar;