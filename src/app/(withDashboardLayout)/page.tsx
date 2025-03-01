"use client";

import Show from "@/components/dashboard/Show";
import UploadFile from "@/components/dashboard/UploadClou";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const BookingCalendar = () => {
  const [unavailableDates, setUnavailableDates] = useState<Date[]>([]);

  // Fetch bookings (replace with actual API call)
  useEffect(() => {
    const fetchBookings = async () => {
      // Mock data - Replace with API fetch call
      const bookings = [
        {
          checkIn: "2025-06-10T14:00:00.000+00:00",
          checkOut: "2025-06-15T10:00:00.000+00:00",
        },
        {
          checkIn: "2025-03-10T14:00:00.000+00:00",
          checkOut: "2025-03-12T10:00:00.000+00:00",
        },
        {
          checkIn: "2025-12-20T14:00:00.000+00:00",
          checkOut: "2025-12-21T10:00:00.000+00:00",
        },
      ];

      // Convert booking ranges to disabled dates
      const disabledDates: Date[] = [];
      bookings.forEach(({ checkIn, checkOut }) => {
        const startDate = new Date(checkIn);
        const endDate = new Date(checkOut);

        while (startDate <= endDate) {
          disabledDates.push(new Date(startDate));
          startDate.setDate(startDate.getDate() + 1);
        }
      });

      setUnavailableDates(disabledDates);
    };

    fetchBookings();
  }, []);

  // Function to disable booked dates
  const tileDisabled = ({ date }: { date: Date }) => {
    return unavailableDates.some(
      (unavailableDate) =>
        unavailableDate.toDateString() === date.toDateString()
    );
  };

  return (
    <div>
      <h2>Select a Date</h2>
      <Calendar tileDisabled={tileDisabled} />
      {/* <div className="px-48">
     <CarouselDemo items={carouselItems}></CarouselDemo>
     </div> */}
      {/* <ReusableForm onSubmit={onSubmit} options={options}></ReusableForm> */}
      {/* <FileUploadForm></FileUploadForm> */}
<UploadFile></UploadFile>
    </div>
  );
};

export default BookingCalendar;
