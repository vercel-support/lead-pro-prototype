import { HiOutlineUser, HiOutlineTag, HiOutlineCalendar } from "react-icons/hi";
import { PersonColumn } from "./PersonColumn";
import { StatusColumn } from "./StatusColumn";
import { ResponsibleColumn } from "./ResponsibleColumn";
import { DateColumn } from "./DateColumn";
import {TypeColumn} from "./TypeColumn";

export const columns = [
  {
    name: "Name",
    width: 200,
    icon: HiOutlineUser,
    component: PersonColumn,
  },
  {
    name: "Type",
    width: 100,
    icon: HiOutlineUser,
    component: TypeColumn,
  },
  {
    name: "Status",
    width: 140,
    icon: HiOutlineTag,
    component: StatusColumn,
  },
  {
    name: "Responsible",
    width: 140,
    icon: HiOutlineUser,
    component: ResponsibleColumn,
  },
  {
    name: "Next action date",
    width: 200,
    icon: HiOutlineCalendar,
    component: DateColumn,
  },
];
