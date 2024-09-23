import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarAddModal } from '../assets/hooks/Modals.jsx';

function Calendar() {
  const [selectedDate, setSelectedDate] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('0'); // Default to "All" option

  useEffect(() => {
    // After component mounts, inject the dropdown into the custom button
    injectDropdownIntoCustomButton();
  }, []);

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const injectDropdownIntoCustomButton = () => {
    const filterButtonContainer = document.querySelector('.fc-filterDropdown-button');
    if (filterButtonContainer) {
      const selector = document.createElement('select');
      selector.id = 'selector';
      selector.innerHTML = `
        <option value="0">All</option>
        <option value="1">CARAVAN</option>
        <option value="2">BSP</option>
        <option value="3">REMINDER</option>
      `;
      filterButtonContainer.innerHTML = '';
      filterButtonContainer.appendChild(selector);

      selector.addEventListener('change', function () {
        setCurrentFilter(this.value);
        console.log('Selected Filter:', this.value);
      });
    }
  };

  return (
    <div className="calendar">
      <FullCalendar
        plugins={[dayGridPlugin, listPlugin, interactionPlugin]}
        selectable={true}
        customButtons={{
          filterDropdown: {
          },
        }}
        headerToolbar={{
          left: 'prev,next,filterDropdown',
          center: 'title',
          right: 'dayGridMonth,listMonth',
        }}
        dateClick={handleDateClick}
        initialView="dayGridMonth"
      />

      {showModal && (
        <CalendarAddModal selectedDate={selectedDate} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Calendar;
