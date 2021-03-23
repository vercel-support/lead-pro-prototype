import { Box, Avatar, Attribute, Label } from "components";
import { fetchLeads, fetchTeam } from "services/api";
import React from "react";
import {
  DropdownMenu,
  Dropdown,
  DropdownMenuItem,
  Menu,
  MenuList,
} from "components/molecules";
import { ILead } from "interfaces/lead.interface";
import {
  HiBell,
  HiOutlineAnnotation,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineOfficeBuilding,
  HiOutlinePhone,
  HiOutlineTag,
  HiOutlineUser,
} from "react-icons/hi";
import { LeadSection } from "./LeadSection";
import { Cell } from "./LeadCell";
import { Office } from "./Office";

export const LeadPersonSection = () => {
  return (
    <LeadSection title="Contact">
      <Attribute icon={HiOutlineUser} label="Name" value="Sebastien Powell" />
      <Attribute icon={HiOutlinePhone} label="Phone" value="079 22 999 559" />
      <Attribute icon={HiOutlineMail} label="Email" value="sebastienpowell@gmail.com" />
      <Attribute icon={HiOutlineLocationMarker}  label="Address" value="15 Marlborough Court, IG9 5BN" />
    </LeadSection>
  );
};
