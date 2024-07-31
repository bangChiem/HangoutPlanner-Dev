import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';

function MultiDatePicker( {setDatePanelIsOpen, datePanelIsOpen, setSelectedDates, selectedDates} ){

  const handleDayClick = (day, { selected }) => {
    const newSelectedDates = selected
      ? selectedDates.filter(selectedDay => !selectedDay.isSameDay(day))
      : setSelectedDates(d => [...d, day]);
  };

  function toggleDatePanel(){
    datePanelIsOpen ? setDatePanelIsOpen(false) : setDatePanelIsOpen(true)
  }

  return (
    <div onClick={toggleDatePanel} className={`${datePanelIsOpen ? 'panel open' : 'panel'}`}>
      <DayPicker
        mode="multiple"
        selected={selectedDates}
        onDayClick={handleDayClick}
      />
      <div>
        <h3>Selected Dates:</h3>
        <ul>
          {selectedDates.map((date, index) => (
            <li key={index}>{date.toDateString()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultiDatePicker;

// Helper function to compare dates without time
Date.prototype.isSameDay = function (other) {
  return (
    this.getFullYear() === other.getFullYear() &&
    this.getMonth() === other.getMonth() &&
    this.getDate() === other.getDate()
  );
};
