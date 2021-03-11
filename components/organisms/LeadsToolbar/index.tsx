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
} from "react-icons/hi";

import _ from "underscore";
import { InputGroup, InputLeftElement } from "@chakra-ui/input";
import { MenuButton } from "@chakra-ui/menu";
import { Center } from "@chakra-ui/layout";
import { DropdownMenuItem } from "components/molecules";

const Views = [
  {
    name: "Kanban",
    color: "blue",
    icon: <HiViewBoards />,
  },
  {
    name: "List",
    color: "blue",
    icon: <HiViewGrid />,
  },
  {
    name: "Table",
    color: "blue",
    icon: <HiViewList />,
  },
];

const TableButton = ({ icon, children }: { icon?: any; children?: any }) => {
  return (
    <Box
      bg="gray.50"
      rounded="md"
      px={2}
      h={8}
      display="inline-flex"
      alignItems="center"
      fontSize="sm"
      cursor="pointer"
      lineHeight="none"
      _hover={{ bg: "gray.100" }}
    >
      {icon && <Box mr={1}>{React.createElement(icon)}</Box>}
      {children}
      <Box ml={1}>
        <HiSelector />
      </Box>
    </Box>
  );
};

const ViewIcon = ({ icon, color }) => {
  return <Box w={3}>{icon}</Box>;
};

export const LeadsToolbar = () => {
  const { handleSetView, handleSetSection } = useContext(LeadsTableContext);
  return (
    <Box
      px={6}
      h={16}
      display="flex"
      alignItems="center"
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      <Box flex={1} mr={3} display="flex" maxW="sm">
        <Box mr={2} display="flex" alignItems="center">
          <Menu>
            <MenuButton bg="gray.50" height={9} w={9} rounded="md">
              <Center>
                <HiFilter />
              </Center>
            </MenuButton>
            <MenuList>
              <LeadsFilter />
            </MenuList>
          </Menu>
        </Box>
        <InputGroup size="sm">
          <InputLeftElement>
            <HiSearch />
          </InputLeftElement>
          <Input
            placeholder="Search leads"
            size="sm"
            variant="filled"
            rounded="md"
            height={9}
            bg="gray.50"
          />
        </InputGroup>
      </Box>

      <Box ml="auto">
        <HStack>
          {/* <Box>
            <Button variant="primary">Add lead</Button>
          </Box> */}
          <Box>
          <Menu>
          <MenuButton>
            <Box display="flex" alignItems="center">
              Show
            </Box>
          </MenuButton>
          <MenuList>
            <DropdownMenuItem>
            Archived</DropdownMenuItem>
            <DropdownMenuItem>Spam</DropdownMenuItem>
          </MenuList>
        </Menu>
          </Box>
        </HStack>
     
      </Box>
    </Box>
  );
};
