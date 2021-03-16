import { Box, Stack, Avatar, Input } from "components";
import React, { useState } from "react";
import _ from "underscore";
import { InternalLink, Toggle } from "components/atoms";
import {
  HiBan,
  HiBriefcase,
  HiCurrencyDollar,
  HiInbox,
} from "react-icons/hi";
import { paths } from "constants/paths";

const SidebarItem = ({
  children,
  icon,
  isActive,
  isLast,
}: {
  children: any;
  icon: any;
  isActive?: boolean;
  isLast?: boolean;
}) => {
  return (
    <Box
      lineHeight="none"
      display="flex"
      h="full"
      roundedTop="md"
      border="1px solid"
      borderBottom="none"
    bottom="-1px"
      px={3}
      color={isActive ? "gray.800": "gray.400" }
      position="relative"
      fontSize="sm"
      fontWeight="medium"
      alignItems="center"
      cursor="pointer"
      zIndex={10}
      // borderRight={!isLast ? "1px solid" : "none"}
      borderColor={isActive ? "gray.100" : "transparent"}
      bg={isActive ? "white" : "transparent"}
    >
      <Box
        w={6}
        h={6}
        // bg={isActive ? "teal.700" : "gray.100"}
        rounded="md"
        mr={1}
        fontSize="lg"
        color={isActive ? "teal.600" : "gray.400"}
        display="flex"
        alignItems="center"
        // shadow={isActive && "sm"}
        justifyContent="center"
      >
        {React.cloneElement(icon)}
      </Box>
      {children}

      <Box
        ml="auto"
        fontSize="xs"
        bg={isActive ? "teal.600" : "transparent"}
        color={isActive? "white" : "gray.300"}
        p={1}
        w={8}
        textAlign="center"
        rounded="full"
        lineHeight="none"
      >
        {Math.floor(Math.random() * 50) + 1}
      </Box>
      {/* {isActive && (
        <Box
          position="absolute"
          bottom={0}
          left={0}
          bg="teal.600"
          width="100%"
          h={1}
        />
      )} */}
    </Box>
  );
};

export const LeadsStages = () => {
  return (
    <Box display="flex" bg="gray.50" px={6} pt={3} height={14}>
      <InternalLink href={paths.LEADS_INDEX + "/snoozed"} flex={1}>
        <SidebarItem icon={<HiInbox />} isActive={true}>
          Inbox
        </SidebarItem>
      </InternalLink>
      <InternalLink href={paths.LEADS_INDEX + "/snoozed"} flex={1}>
        <SidebarItem icon={<HiCurrencyDollar />}>Business</SidebarItem>
      </InternalLink>
      <InternalLink href={paths.LEADS_INDEX + "/snoozed"} flex={1}>
        <SidebarItem icon={<HiBan />} isLast>
          No business
        </SidebarItem>
      </InternalLink>
    </Box>
  );
};
