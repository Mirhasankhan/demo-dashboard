"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  console.log( `Selected: ${selectedDate?.toLocaleString()}`)

  return (
    <div className="flex flex-col items-center space-y-3 p-4">
      <label className="font-semibold">Select Date & Time:</label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mm aa"
        className="p-2 border rounded-md"
      />
      {selectedDate && (
        <p className="mt-2">
          Selected: {selectedDate.toLocaleString()}
        </p>
      )}
    </div>
  );
};

export default DateTimePicker;
