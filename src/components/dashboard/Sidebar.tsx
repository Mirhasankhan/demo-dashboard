"use client";

import { TRoles } from "@/types/common";
import { sidebarItems } from "@/utils/generateSidebarItems";
// import { JWTDecode } from "@/utils/jwt";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const pathName = usePathname();
  //   const user = JWTDecode();
  //   const role = user?.role;

  return (
    <div className="h-screen">
      {sidebarItems("admin" as TRoles).map((item, index) => (
        <Link key={index} href={`/dashboard/${item.path}`}>
          <div
            className={`${
              pathName === `/dashboard${item.path}`
                ? "bg-[#06a788] font-medium text-white"
                : ""
            } hover:bg-[#06a788] hover:text-white my-4 ${!isOpen && "justify-center md:justify-start"} p-3 mx-3 rounded-md flex items-center`}
          >
            {item.icon && <p className=" text-xl">{<item.icon />}</p>}
            {isOpen && <h1 className="pl-1 md:hidden">{item.title}</h1>}
            <h1 className="pl-1 hidden md:block">{item.title}</h1>
          </div>
        </Link>
      ))}
    
    </div>
  );
};

export default Sidebar;
