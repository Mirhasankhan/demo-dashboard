import { Bell, ChevronDown, ChevronUp, Search } from "lucide-react";
import { Input } from "../ui/input";
import Image from "next/image";
import UserDetails from "./UserDetails";
import { useState } from "react";
import DashboardSearch from "./DashboardSearch";
import DashboardNotifications from "./DashboardNotifications";

const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  return (
    <div className="flex justify-between w-full md:px-8 px-4 items-center">
      <h1 className="font-semibold hidden md:block">Welcome Back User</h1>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Input
          className="bg-gray-200 hidden md:block"
          type="email"
          id="email"
          placeholder="Search here...."
        />
      </div>
      <div className="flex items-center gap-2">
       <div className="text-2xl">
       <Search
          onClick={() => setSearchOpen(!searchOpen)}
          className="md:hidden"
        />
       </div>
        <div className="bg-yellow-100 p-1 rounded-sm text-yellow-500 cursor-pointer">
          <Bell onClick={() => setNotificationsOpen(!notificationsOpen)} />
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex relative items-center gap-2 border p-0.5 rounded-md cursor-pointer"
        >
          <Image
            className="rounded-lg"
            src="https://media.istockphoto.com/id/2017256409/photo/young-asian-man-on-the-metro.webp?a=1&b=1&s=612x612&w=0&k=20&c=BPUvlXun78PFL49ZqJwdhQsgAa_OhTh9Qpq-jvgdJmg="
            height={60}
            width={60}
            alt="Profile Picture"
          />
          <div className="text-sm hidden md:block">
            <h1 className="font-semibold">User Name</h1>
            <p>Admin</p>
          </div>
          {isOpen && <ChevronUp />}
          {!isOpen && <ChevronDown />}
        </div>
      </div>
      <div className="absolute top-20 right-4">
        <UserDetails isOpen={isOpen}></UserDetails>
      </div>
      <div className="absolute top-20 right-4 md:hidden">
        {!isOpen && <DashboardSearch searchOpen={searchOpen}></DashboardSearch>}
      </div>
      <div className="absolute top-20 right-4">
        {!isOpen && !searchOpen && (
          <DashboardNotifications notificationsOpen={notificationsOpen} />
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
