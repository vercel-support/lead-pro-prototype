import { Box, HStack, Input, Button, Menu, MenuList } from "components";
import React, { useState, useContext } from "react";
import { LeadsTableContext } from "components/organisms/LeadsTable";
import { LeadsFilter } from "components/organisms/LeadsFilter";
import {
  HiViewBoards,
  HiMail,
  HiViewList,
  HiViewGrid,
  HiScale,
  HiSelector,
  HiChevronRight,
  HiSearch,
  HiFilter,
  HiUser,
  HiOfficeBuilding,
  HiTag,
} from "react-icons/hi";
import _ from "underscore";
import { InputGroup, InputLeftElement } from "@chakra-ui/input";
import { MenuButton } from "@chakra-ui/menu";
import { Center } from "@chakra-ui/layout";
import { DropdownMenuItem } from "components/molecules";

// const Views = [
//   {
//     name: "Kanban",
//     color: "blue",
//     icon: <HiViewBoards />,
//   },
//   {
//     name: "List",
//     color: "blue",
//     icon: <HiViewGrid />,
//   },
//   {
//     name: "Table",
//     color: "blue",
//     icon: <HiViewList />,
//   },
// ];

const DropdownButton = ({ icon, children }) => {
  return (
    <Box
      display="flex"
      rounded="md"
      whiteSpace="nowrap"
      px={2}
      lineHeight="none"
      h={8}
      fontWeight="medium"
      cursor="pointer"
      color="gray.400"
      fontSize="sm"
      alignItems="center"
      _hover={{
        borderColor: "gray.300",
        bg: "gray.50",
      }}
    >
      {icon && (
        <Box
          mr={2}
          w={5}
          h={5}
          bg="gray.50"
          color="gray.300"
          rounded="md"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {React.createElement(icon)}
        </Box>
      )}
      {children}
    </Box>
  );
};

const LeadsActions = () => {
  return (
    <HStack>
      <Box
        whiteSpace="nowrap"
        fontSize="sm"
        opacity={0.5}
        display="flex"
        height="full"
        alignItems="center"
        fontWeight="normal"
      >
        Filter by
      </Box>
      <Menu>
        <MenuButton>
        <DropdownButton icon={HiUser}>Responsible</DropdownButton>
        </MenuButton>
        <MenuList>
          <LeadsFilter />
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton>
          <DropdownButton icon={HiOfficeBuilding}>Offices</DropdownButton>
        </MenuButton>
        <MenuList>
          <DropdownMenuItem>Archived</DropdownMenuItem>
          <DropdownMenuItem>Spam</DropdownMenuItem>
        </MenuList>
      </Menu>

      <Box mr={2} display="flex" alignItems="center">
        <Menu>
          <MenuButton>
          <DropdownButton icon={HiTag}>Types</DropdownButton>
          </MenuButton>
          <MenuList>
            <LeadsFilter />
          </MenuList>
        </Menu>
      </Box>
    </HStack>
  );
};

const LeadsSearch = () => {
  return (
    <>
      <InputGroup size="sm">
        <InputLeftElement size="sm" opacity={0.3}>
          <HiSearch />
        </InputLeftElement>
        <Input
          placeholder="Search leads"
          size="sm"
          variant="filled"
          rounded="md"
          bg="gray.50"
          _hover={{
            bg: "white",
          }}
        />
      </InputGroup>
    </>
  );
};

export const LeadsToolbar = () => {
  const { handleSetView, handleSetSection } = useContext(LeadsTableContext);
  return (
    <Box
      px={6}
      h={12}
      display="flex"
      alignItems="center"
      // shadow="sm"
      position="relative"
      zIndex={2}
      borderBottom="1px solid"
      borderTop="1px solid"
      borderColor="gray.100"
    >
      <LeadsActions />
      <LeadsSearch />
      <Box>
        <DropdownButton>Bulk</DropdownButton>
      </Box>
    </Box>
  );
};
