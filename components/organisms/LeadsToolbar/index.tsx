import { Box, HStack, Input, Button } from "components";
import React, { useState, useContext } from "react";
import { LeadsTableContext } from "components/organisms/LeadsTable";

import {
  DropdownMenu,
  Dropdown,
  DropdownMenuItem,
  DropdownMenuDivider,
  DropdownMenuHeading,
  Page,
} from "components/molecules";
import {
  HiViewBoards,
  HiMail,
  HiViewList,
  HiViewGrid,
  HiScale,
  HiSelector,
} from "react-icons/hi";

import _ from "underscore";

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

const TableButton = ({ icon, children }: {icon?: any, children?: any}) => {
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
      
        {/* <Box mr={3}>
          <Dropdown>
            <TableButton icon={HiScale}>View</TableButton>
            <DropdownMenu width={200}>
              <DropdownMenuHeading>Layout</DropdownMenuHeading>
              {Views.map((view) => {
                return (
                  <DropdownMenuItem
                    icon={<ViewIcon icon={view.icon} />}
                    onClick={() => handleSetView(view.name)}
                  >
                    {view.name}
                  </DropdownMenuItem>
                );
              })}
              <DropdownMenuDivider />
              <DropdownMenuHeading>Section by</DropdownMenuHeading>
              <DropdownMenuItem onClick={() => handleSetSection("none")}>Default (none)</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSetSection("createdAt")}>Due date</DropdownMenuItem>
            </DropdownMenu>
          </Dropdown>
        </Box> */}
        <Box flex={1} mr={3}>
        <Input placeholder="Search leads" />
        </Box>
      
      <Box ml="auto">
        <HStack>
          <TableButton>Export</TableButton>
          <Box>
            <Button variant="primary">Add lead</Button>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};
