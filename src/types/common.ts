import { userRoles } from "@/utils/roles";
import { IconType } from "react-icons";

export type TRoles = keyof typeof userRoles;

export interface SidbarItem {
    title: string;
    path: string;
    parentPath?: string;
    child?: SidbarItem[];
    icon?: IconType;
    children?:SidbarItem[];
  }