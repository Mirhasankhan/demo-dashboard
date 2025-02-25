"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import dayjs from "dayjs";

const PhoneNumberInput = () => {
  const [phone, setPhone] = useState("");

  const now = dayjs();
  console.log("Current Date and Time:", now.format("DD-MM-YYYY HH:mm:ss"));
  
  const futureDate = now.add(7, "day");
  console.log("Date after 7 days:", futureDate.format("YYYY-MM-DD"));
  if (futureDate.diff(now, "day") === 7) {
    console.log("Yes, it's exactly 7 days.");
} else {
    console.log("No, it isn't.");
}

  const pastTime = now.subtract(3, "hour");
  console.log("Time 3 hours ago:", pastTime.format("HH:mm:ss"));

  return (
    <div className="flex flex-col items-center">
      <label className="mb-2 font-semibold">Enter Your Phone Number</label>
      <PhoneInput
        country={"us"} // Default country
        value={phone}
        onChange={(value) => setPhone(value)}
        inputClass="!w-72 !h-10 !text-lg" // Tailwind styles
      />
      <p className="mt-2 text-sm text-gray-600">Your number: {phone}</p>
    </div>
  );
};

export default PhoneNumberInput;
