import React, { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarAddModal, CalendarEditModal } from '../assets/hooks/Modals.jsx';

function Calendar() {
  const [selectedDate, setSelectedDate] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="calendar">
      <FullCalendar
        plugins={[dayGridPlugin, listPlugin, interactionPlugin]}
        selectable={true}
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

      {showModal && (
        <CalendarAddModal selectedDate={selectedDate} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Calendar;