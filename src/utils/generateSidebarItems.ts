import { SidbarItem, TRoles } from "@/types/common";
import { userRoles } from "./roles";
import { MdDashboard } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { GoPackage } from "react-icons/go";
import { CiCirclePlus } from "react-icons/ci";
import { LuTableProperties } from "react-icons/lu";
import { FcSalesPerformance } from "react-icons/fc";
import { UserRound,BadgeDollarSign,LandPlot,Eye } from 'lucide-react';



export const sidebarItems = (role: TRoles): SidbarItem[] => {
  const roleMenus: SidbarItem[] = [];

  switch (role) {
    case userRoles.ADMIN:
      roleMenus.push({
        title: "Dashboard",
        path: `/${role}`,
        icon: MdDashboard,
      })
        roleMenus.push({
          title: "Manage Rents",
          path: `/manage-rents`,
          icon: LandPlot,
        })
        roleMenus.push({
          title: "Manage Rents",
          path: `/manage-rents`,
          icon: LandPlot,
          children: [
            {
              title: "View Rents",
              path: `/manage-rents/view`,
              icon: Eye
            },
            {
              title: "Add Rent",
              path: `/manage-rents/add`,
              icon: Eye
            },
          ],
        });
        roleMenus.push({
          title: "Manage Rents",
          path: `/manage-rent`,
          icon: LandPlot,
          children: [
            {
              title: "View Rents",
              path: `/manage-rents/view`,
              icon: Eye
            },
            {
              title: "Add Rent",
              path: `/manage-rents/add`,
              icon: Eye
            },
          ],
        });
        roleMenus.push({
          title: "Manage Sales",
          path: `/manage-sales`,
          icon: BadgeDollarSign,
        });
        roleMenus.push({
          title: "Profile",
          path: `/manage-profile`,
          icon: UserRound,
        });
      break;

    case userRoles.SELLER:
      roleMenus.push({
        title: "Dashboard",
        path: `/${role}`,
        icon: MdDashboard,
      })
        roleMenus.push({
          title: "Create Listing",
          path: `/${role}/create-listing`,
          icon: CiCirclePlus,
        })
        roleMenus.push({
          title: "Manage Properties",
          path: `/${role}/manage-property`,
          icon: LuTableProperties,
        });
      roleMenus.push({
        title: "Manage Sales",
        path: `/${role}/manage-sales`,
        icon: FcSalesPerformance,
      });
      roleMenus.push({
        title: "My Profile",
        path: `/${role}/manage-profile`,
        icon: CiUser,
      });
      break;
    case userRoles.BUYER:
      roleMenus.push({
        title: "Dashboard",
        path: `/${role}`,
        icon: MdDashboard,
      })
        roleMenus.push({
          title: "My Proposals",
          path: `/${role}/my-buys`,
          icon: GoPackage,
        })
        roleMenus.push({
          title: "My Profile",
          path: `/${role}/manage-profile`,
          icon: CiUser,
        });
      break;
    default:
      break;
  }
  return [...roleMenus];
};