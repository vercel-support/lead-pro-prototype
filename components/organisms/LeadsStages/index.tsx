import { Box, Stack, Avatar, Input } from "components";
import React, { useState } from "react";
import _ from "underscore";
import { InternalLink, Toggle } from "components/atoms";
import {
  HiBan,
  HiBriefcase,
  HiCurrencyDollar,
  HiInbox,
  HiOutlineBan,
  HiOutlineBriefcase,
  HiOutlineCurrencyPound,
  HiOutlineInbox,
} from "react-icons/hi";
import { paths } from "constants/paths";
import { HStack } from "components/molecules";

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
      color={isActive ? "gray.800" : "gray.600"}
      position="relative"
      fontSize="sm"
      fontWeight="medium"
      alignItems="center"
      cursor="pointer"
      _hover={{
        bg: !isActive && "#f1f1f1",
      }}
      zIndex={10}
      borderColor={isActive ? "gray.100" : "transparent"}
      bg={isActive ? "white" : "transparent"}
    >
      <Box
        w={6}
        h={6}
        rounded="md"
        mr={1}
        fontSize="lg"
        color={isActive ? "teal.600" : "gray.400"}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {React.cloneElement(icon)}
      </Box>
      {children}

      <Box
        ml={3}
        fontSize="10px"
        fontWeight="semibold"
        bg={isActive ? "teal.600" : "gray.100"}
        color={isActive ? "white" : "gray.500"}
        p={1}
        pb="5px"
        w={7}
        textAlign="center"
        rounded="full"
        lineHeight="none"
      >
        {Math.floor(Math.random() * 50) + 1}
      </Box>
    </Box>
  );
};

export const LeadsStages = () => {
  return (
    <Box display="flex" bg="gray.50" px={2} pt={2} height={12}>
      <HStack spacing={1}>
        <InternalLink href={paths.LEADS_INDEX} flex={1} height="100%">
          <SidebarItem icon={<HiOutlineInbox />} isActive={true}>
            Inbox
          </SidebarItem>
        </InternalLink>
        <InternalLink href={paths.LEADS_WON_INDEX} flex={1} height="100%">
          <SidebarItem icon={<HiOutlineBriefcase />}>Business</SidebarItem>
        </InternalLink>
        <InternalLink href={paths.LEADS_LOST_INDEX} flex={1} height="100%">
          <SidebarItem icon={<HiOutlineBan />} isLast>
            No business
          </SidebarItem>
        </InternalLink>
      </HStack>
    </Box>
  );
};
