import { Box, Avatar, Stack } from "components";
import React, { useState } from "react";
import _ from "underscore";
import { leadStatuses } from "constants/leadStatuses";
import { ILead } from "interfaces/lead.interface";
import { LeadsSection } from "components/organisms/LeadsSection";
import {
  Dropdown,
  DropdownMenu,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMenuDivider,
  HStack,
} from "components/molecules";
import { HiArchive, HiClock, HiSun, HiTrash } from "react-icons/hi";

const SnoozeDropdown = ({ children }) => {
  return (
    <Dropdown display="inline-block">
      {children}
      <DropdownMenu width={200} position="right">
        <DropdownMenuHeader>
          Snooze lead
        </DropdownMenuHeader>
        <DropdownMenuDivider/>
        <DropdownMenuItem icon={<HiSun />}>Later today</DropdownMenuItem>
        <DropdownMenuItem icon={<HiSun />}>This evening</DropdownMenuItem>
        <DropdownMenuItem icon={<HiSun />}>Tomorrow</DropdownMenuItem>
        <DropdownMenuItem icon={<HiSun />}>Next week</DropdownMenuItem>
        <DropdownMenuItem icon={<HiSun />}>
          Specific date and time
        </DropdownMenuItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const ListViewItemIcon = ({ children }) => {
  return <Box opacity={0.5} _hover={{
    opacity: 1
  }}>{children}</Box>;
};

const ListViewItemIconContainer = ({ children }) => {
  return (
    <Box
      w={7}
      h={7}
      display="flex"
      alignItems="center"
      justifyContent="center"
      // rounded="md"
      // _hover={{
      //   bg: "gray.100",
      // }}
    >
      {children}
    </Box>
  );
};

export const ListViewItem = ({
  lead,
  isSelected,
}: {
  lead: ILead;
  isSelected: boolean;
}) => {
  const { person } = lead;

  const { fullName } = person;

  return (
    <Box
      display="flex"
      borderBottom="1px solid"
      px={8}
      role="group"
      bg="white"
      alignItems="center"
      cursor="pointer"
      borderColor="gray.100"
      py={4}
    >
      <Box flex={1}>
        <Box flex={1}>
          <Box mb={2} lineHeight="none" fontSize="sm" fontWeight="semibold">
            {fullName}
          </Box>
          <HStack>
            <Box color="blue.500" fontWeight="medium" fontSize="sm" lineHeight="none">
              Vendor
            </Box>
            <Box
              opacity={0.5}
              fontSize="sm"
              fontWeight="normal"
              lineHeight="none"
            >
              25 Torridge Road
            </Box>
          </HStack>
        </Box>
      </Box>
      <Box
        opacity={0}
        _groupHover={{
          opacity: 1,
        }}
      >
        <HStack spacing={1}>
          <ListViewItemIconContainer>
            <ListViewItemIcon>
              <HiArchive />
            </ListViewItemIcon>
          </ListViewItemIconContainer>
          <SnoozeDropdown>
            <ListViewItemIconContainer>
              <ListViewItemIcon>
                <HiClock />
              </ListViewItemIcon>
            </ListViewItemIconContainer>
          </SnoozeDropdown>
          <ListViewItemIconContainer>
            <ListViewItemIcon>
              <HiTrash />
            </ListViewItemIcon>
          </ListViewItemIconContainer>
          <ListViewItemIconContainer>
            <Avatar color="blue" initials="S" size="xxs" />
          </ListViewItemIconContainer>
        </HStack>
      </Box>
    </Box>
  );
};

export const LeadsListView = ({ leads }) => {
  return <LeadsSection leads={leads} component={ListViewItem} />;
};
