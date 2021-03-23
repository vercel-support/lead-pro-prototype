import {
  Box,

} from "components";
import { fetchLeads, fetchTeam } from "services/api";
import React, { Children, useState } from "react";

import {
  HStack,
} from "components/molecules";
import { ILead } from "interfaces/lead.interface";
import {

    HiOutlineArchive,
  HiOutlineTrash,
  HiDotsVertical,
  HiDotsHorizontal
} from "react-icons/hi";

export const HeaderActions = ({ children }) => {
  return <HStack spacing={1}>{children}</HStack>;
};

export const HeaderAction = ({ children }) => {
  return (
    <Box
      w={7}
      h={7}
      display="flex"
      color="gray.400"
      alignItems="center"
      cursor="pointer"
      rounded="md"
      fontSize="lg"
      justifyContent="center"
      _hover={{
        bg: "gray.100",
        color: "gray.700"
      }}
    >
      {children}
    </Box>
  );
};

export const LeadHeaderButtons = () => {
  return (
    <Box
      px={5}
      bg="gray.50"
      minHeight="49px"
      display="flex"
      alignItems="center"
      
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      <Box ml={-2}>
        <HeaderActions>
          <HeaderAction>
            <HiOutlineTrash />
          </HeaderAction>
          <HeaderAction>
            <HiOutlineArchive />
          </HeaderAction>
          <HeaderAction>
            <HiDotsHorizontal/>
          </HeaderAction>
        </HeaderActions>
      </Box>
    </Box>
  );
};
