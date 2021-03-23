import { Box, HStack, Input, Button, Menu, MenuList } from "components";
import React, { useState, useContext } from "react";
import { LeadsTableContext } from "components/organisms/LeadsTable";
import { LeadsFilter } from "components/organisms/LeadsFilter";
import {
  HiSearch,
  HiFilter,
  HiUser,
  HiOfficeBuilding,
  HiTag,
  HiOutlineUser,
  HiOutlineOfficeBuilding,
  HiOutlineTag,
} from "react-icons/hi";
import _ from "underscore";
import { InputGroup, InputLeftElement } from "@chakra-ui/input";
import { MenuButton } from "@chakra-ui/menu";
import { Center } from "@chakra-ui/layout";
import { DropdownMenuItem } from "components/molecules";
import { SelectUserMenu } from "../SelectUserMenu";
import { SelectOfficeMenu } from "../SelectOfficeMenu";
import { SelectTypeMenu } from "../SelectTypeMenu";
import {columns} from "components/organisms/LeadsTable/components/Columns"
import { Toggle } from "components/atoms";
import { SelectLeadTypeMenu } from "../SelectLeadTypeMenu";

const DropdownButton = ({ icon, children }: any) => {
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
      color="gray.600"
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
          w={6}
          h={6}
          bg="gray.50"
          color="gray.500"
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
    <HStack spacing={1}>
      <Menu>
        <MenuButton>
          <DropdownButton icon={HiOutlineUser}>Responsible</DropdownButton>
        </MenuButton>
        <MenuList>
          <SelectUserMenu />
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton>
          <DropdownButton icon={HiOutlineOfficeBuilding}>
            Offices
          </DropdownButton>
        </MenuButton>
        <MenuList>
          <SelectOfficeMenu />
        </MenuList>
      </Menu>
      <Box mr={2} display="flex" alignItems="center">
        <Menu>
          <MenuButton>
            <DropdownButton icon={HiOutlineTag}>Statuses</DropdownButton>
          </MenuButton>
          <MenuList width={300}>
            <SelectTypeMenu />
          </MenuList>
        </Menu>
      </Box>
      <Box mr={2} display="flex" alignItems="center">
        <Menu>
          <MenuButton>
            <DropdownButton icon={HiOutlineTag}>Types</DropdownButton>
          </MenuButton>
          <MenuList width={300}>
            <SelectLeadTypeMenu/>
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
        <InputLeftElement size="md" opacity={0.5}>
          <HiSearch />
        </InputLeftElement>
        <Input
          placeholder="Search leads"
          size="sm"
          backgroundColor="transparent"
          rounded="md"
          bg="gray.50"
          pb="2px"
          border="1px solid"
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
      pl={1}
      pr={2}
      minH={12}
      display="flex"
      alignItems="center"
      shadow="sm"
      position="relative"
      zIndex={2}
      borderBottom="1px solid"
      borderTop="1px solid"
      borderColor="gray.100"
    >
      <LeadsActions />
      <Box ml="auto" minWidth={300} display="flex">
      
        <Box mr={2} display="flex" alignItems="center">
          <Menu>
            <MenuButton>
              <DropdownButton>Columns</DropdownButton>
            </MenuButton>
            <MenuList>
              {columns.map((column) => {
                return (
                  <DropdownMenuItem>
                    <Box display="flex" alignItems="center">
                      <Box mr={2}>
                    <Toggle isChecked size="sm"/>
                    </Box>
                    {column.name}
                    </Box>
                  </DropdownMenuItem>
                )
              })}
            </MenuList>
          </Menu>
        </Box>
        <Box mr={4}>
        <DropdownButton>Export</DropdownButton>
        </Box>
        <LeadsSearch />
      </Box>
    </Box>
  );
};
