import { Box, Stack, Avatar, Input } from "components";
import React, { useState } from "react";
import _ from "underscore";
import { InternalLink, Toggle } from "components/atoms";
import {
  HiOutlineArchive,
  HiOutlineClock,
  HiOutlineInbox,
} from "react-icons/hi";
import { paths } from "constants/paths";

const SidebarItem = ({ children, icon, isActive, isLast }: {children: any, icon: any, isActive?: boolean, isLast?: boolean}) => {
  return (
    <Box
      lineHeight="none"
      display="flex"
      h={14}
      px={6}
      position="relative"
      fontSize="sm"
      fontWeight="medium"
      alignItems="center"
      cursor="pointer"
      borderRight={!isLast ? "1px solid" : "none"}
      borderColor="gray.100"
      bg={isActive ? "white" : "transparent"}
    >
      {children}
      <Box ml="auto" fontSize="xs" opacity={0.5} bg="gray.50" p={1} w={8} textAlign="center" rounded="full" lineHeight="none">
        {Math.floor(Math.random() * 50) + 1}
      </Box>
      {isActive &&
      <Box position="absolute" bottom={0} left={0} bg="teal.600"  width="100%" h={1} />}
    </Box>
  );
};

export const LeadsStages = () => {
  return (
    <Box display="flex" bg="gray.50">
      <InternalLink href={paths.LEADS_INDEX + "/snoozed"} flex={1}>
        <SidebarItem icon={<HiOutlineInbox />} isActive={true}>
          Inbox
        </SidebarItem>
      </InternalLink>
      <InternalLink href={paths.LEADS_INDEX + "/snoozed"} flex={1}>
        <SidebarItem icon={<HiOutlineClock />}>Business</SidebarItem>
      </InternalLink>
      <InternalLink href={paths.LEADS_INDEX + "/snoozed"} flex={1}>
        <SidebarItem icon={<HiOutlineArchive />} isLast>No business</SidebarItem>
      </InternalLink>
    </Box>
  );
};
