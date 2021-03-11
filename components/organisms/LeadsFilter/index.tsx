import { Box, Input, Stack, Avatar } from "components";
import { fetchTeam, fetchOffices } from "services/api";
import { LeadTypes } from "constants/leadTypes";
import { DropdownMenuDivider, DropdownMenuItem } from "components/molecules";
import { MenuOptionGroup, MenuGroup } from "@chakra-ui/react";

const ColorTag = ({ color }) => {
  return <Box w={2} h={2} bg={`${color}.500`} rounded="full" />;
};

const SidebarItem = ({ children, icon, isActive }) => {
  return (
    <Box
      lineHeight="none"
      _hover={{ bg: "white" }}
      fontWeight="semibold"
      alignItems="center"
      cursor="pointer"
      // bg="gray.200"
      display="flex"
    >
      <Box mr={2}>
        <Box w={1} h={1} bg="red.500" rounded="full" />
      </Box>
      <Box fontSize="sm" fontWeight="medium">
        {children}
      </Box>
      <Box ml="auto" fontSize="xs" opacity={0.5}>
        {Math.floor(Math.random() * 50) + 1}
      </Box>
    </Box>
  );
};

export const LeadsFilter = () => {
  const team = fetchTeam();
  const offices = fetchOffices();
  return (
    <>
      <MenuGroup title="Assigned to">
        <DropdownMenuItem>Me</DropdownMenuItem>
        <DropdownMenuItem>Everyone</DropdownMenuItem>
      </MenuGroup>

      <DropdownMenuDivider />
      <MenuGroup title="Types">
        {LeadTypes.map((type) => {
          const { name, color } = type;
          return <DropdownMenuItem>{name}</DropdownMenuItem>;
        })}
      </MenuGroup>

      <DropdownMenuDivider />

      {/* <MenuOptionGroup>Offices</MenuOptionGroup> */}
      <MenuGroup title="Offices">
        {offices.map((office) => {
          return <DropdownMenuItem>{office.name}</DropdownMenuItem>;
        })}
      </MenuGroup>
    </>
  );
};
