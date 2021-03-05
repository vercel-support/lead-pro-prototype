import { Box, Stack, Avatar, Input } from "components";
import React, { useState } from "react";
import _ from "underscore";
import {
  BiCalendar,
  BiConversation,
  BiEnvelope,
  BiExtension,
  BiNotepad,
  BiTab,
  BiTrash,
  BiUser,
} from "react-icons/bi";
import { ILead } from "interfaces/lead.interface";
import { InternalLink, Toggle } from "components/atoms";
import { LeadTypes } from "constants/leadTypes";
import { fetchTeam, fetchOffices } from "services/api";
import {
  HiOutlineArchive,
  HiOutlineClock,
  HiOutlineInbox,
  HiOutlineTrash,
} from "react-icons/hi";
import { paths } from "constants/paths";

const SidebarSectionHeading = ({ children }) => {
  return (
    <Box opacity={0.5} mb={2} px={2} fontSize="sm">
      {children}
    </Box>
  );
};

const SidebarItem = ({ children, icon }) => {
  return (
    <Box
      lineHeight="none"
      rounded="md"
      _hover={{ bg: "white" }}
      display="flex"
      px={2}
      h={7}
      fontSize="sm"
      fontWeight="normal"
      alignItems="center"
      cursor="pointer"
    >
      {icon && <Box mr={2} w={5} h={5} display="flex" alignItems="center" justifyContent="center" fontSize="md">{icon}</Box>}
      {children}
      <Box ml="auto" fontSize="xs" opacity={0.50}>{Math.floor(Math.random() * 50) + 1}</Box>
    </Box>
  );
};

const ColorTag = ({color}) => {
  return (
    <Box w={2} h={2} bg={`${color}.500`} rounded="full"/>
  )
}

export const Sidebar = () => {
  const team = fetchTeam();
  const offices = fetchOffices();

  return (
    <Box
      minW={240}
      maxW={240}
      h="full"
      bg="gray.50"
      borderRight="1px solid"
      borderColor="gray.100"
      px={1}
      py={5}
    >
      <Stack>
        <Box>
          <Stack spacing={1}>
            <InternalLink href={paths.LEADS_INDEX + "/snoozed"}>
            <SidebarItem icon={<HiOutlineInbox />}>Inbox</SidebarItem>
            </InternalLink>
            <InternalLink href={paths.LEADS_INDEX + "/snoozed"}>
            <SidebarItem icon={<HiOutlineClock />}>Snoozed</SidebarItem>
            </InternalLink>
            <InternalLink href={paths.LEADS_INDEX + "/snoozed"}>
            <SidebarItem icon={<HiOutlineArchive />}>Archived</SidebarItem>
            </InternalLink>
          </Stack>
        </Box>
        <Box>
          <SidebarSectionHeading>Assigned to</SidebarSectionHeading>
          
            <SidebarItem icon={<Avatar color="green" size="xxxs" initials="S"/>}>Me</SidebarItem>
            <Input placeholder="Search users" />
            {/* {team.map((item) => {
              const {color} = item;
              return <SidebarItem icon={<Avatar color={color} size="xxxs" initials={item.name.charAt(0)}/>}>{item.name}</SidebarItem>;
            })}
           */}
        </Box>
        <Box>
          <SidebarSectionHeading>Lead types</SidebarSectionHeading>
          <Stack spacing={1}>
            {LeadTypes.map((type) => {
              const { name, color } = type;
              return (
                <SidebarItem icon={<ColorTag color={type.color}/>}>

                  {name}
                </SidebarItem>
              );
            })}
          </Stack>
        </Box>
        

        <Box>
          <SidebarSectionHeading>Offices</SidebarSectionHeading>
          <Stack spacing={1}>
            {offices.map((office) => {
              return <SidebarItem icon={<ColorTag color={office.color}/>}>{office.name}</SidebarItem>;
            })}
          </Stack>
        </Box>

        
      </Stack>
    </Box>
  );
};
