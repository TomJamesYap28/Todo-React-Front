import React, { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import { CalendarAddModal, CalendarEditModal } from '../assets/hooks/Modals.jsx';

function Calendar({ isAdmin }) {
  const calendarRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [editEventData, setEditEventData] = useState(null);

  const handleDateClick = (info) => {
    if (isAdmin) {
      clearForm('taskForm');
      setSelectedDate(info.dateStr); // Set the selected date for the modal
      window.$('#addtaskModal').modal('show'); // Show the add event modal
    }
  };

  const handleEventClick = (info) => {
    if (isAdmin) {
      const event = info.event;
      setEditEventData({
        id: event.id,
        date: event.startStr,
        title: event.title,
        description: event.extendedProps.description,
      }); // Set the event data for editing
      window.$('#editTaskModal').modal('show'); // Show the edit event modal
    }
  };

  const clearForm = (formId) => {
    const form = document.getElementById(formId);
    if (form) {
      form.reset();
      const hiddenInputs = form.querySelectorAll('input[type="hidden"]');
      hiddenInputs.forEach((input) => {
        input.value = '';
      });
    }
  };

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
        // events={fetchEvents}
        // eventDidMount={handleEventMount}
      />

      <CalendarAddModal selectedDate={selectedDate} />
      <CalendarEditModal editEventData={editEventData} />
    </div>
  );
}

export default Calendar;