import { Box, Input, Stack, Avatar } from "components";
import { fetchTeam, fetchOffices, fetchStages } from "services/api";
import { LeadTypes } from "constants/leadTypes";
import { DropdownMenuDivider, DropdownMenuItem } from "components/molecules";
import { MenuOptionGroup, MenuGroup } from "@chakra-ui/react";
import { Toggle } from "components/atoms";

const ColorTag = ({ color }) => {
  return <Box w={2} h={2} bg={`${color}.500`} rounded="full" />;
};

const Status = ({ status }) => {
  return (
    <DropdownMenuItem>
      <Box
        lineHeight="none"
        fontWeight="medium"
        alignItems="center"
        cursor="pointer"
        display="flex"
      >
        <Box mr={2}>
          <Toggle size="sm" isChecked />
        </Box>
        <Box mr={2}>
          <Box w={2} h={2} bg={`${status.color}.500`} rounded="full" />
        </Box>

        {status.name}

        <Box ml="auto" fontSize="xs" opacity={0.5}>
          {Math.floor(Math.random() * 50) + 1}
        </Box>
      </Box>
    </DropdownMenuItem>
  );
};

const types = [
  { name: "Vendor", color: "blue" },
  { name: "Landlord", color: "purple" },
  { name: "Mortgage", color: "teal" },
  { name: "Letting", color: "orange" },
  { name: "Buyer", color: "pink" },
];

export const SelectLeadTypeMenu = () => {
  const stages = fetchStages();

  return (
    <>
      {types.map((type) => {
        const { name, color } = type;
        
          return <Status status={type} />;
        
      })}
    </>
  );
};
