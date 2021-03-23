import { Stack, Box, Label } from "components";
import { LeadSection } from "./LeadSection";
import { BiLabel } from "react-icons/bi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const additional = [
  // {
  //   status: "Unread",
  //   office: "Nottingham",
  //   assignee: "Hannah Swift",
  //   type: "Vendor",
  // },
  {
    status: "In progress",
    office: "Manchester",
    assignee: "Hannah Swift",
    type: "Mortgage",
  },
  {
    status: "In progress",
    office: "Manchester",
    assignee: "Hannah Swift",
    type: "Sale",
  },
];

const AdditionalLead = ({ lead }) => {
  const { status, assignee, type } = lead;
  return (
    <Box
      display="flex"
      alignItems="center"
      fontSize="xs"
      borderColor="gray.100"
      _hover={{ bg: "gray.50" }}
      py={1}
      cursor="pointer"
    >
      <Box mr={2}>
        <Label
          color={
            type === "Vendor"
              ? "blue"
              : type === "Mortgage"
              ? "orange"
              : "green"
          }
        >
          {type}
        </Label>
      </Box>
      <Box display="flex" alignItems="center" opacity={0.75} pb={"3px"}>
        <Box mr={1}>
          <HiOutlineOfficeBuilding />
        </Box>{" "}
        Norfolk
      </Box>

      <Box ml="auto" color={status === "Unread" ? "blue.500" : "orange.500"} display="flex">
        <Box display="flex" alignItems="center">
          <Box
            w={2}
            h={2}
            bg={status === "Unread" ? "blue.500" : "orange.500"}
            rounded="full"
            mr={1}
          />
          {lead.status}
        </Box>
      </Box>
    </Box>
  );
};

export const LeadConnectedLeads = () => {
  return (
    <LeadSection title="Other leads" icon={BiLabel}>
      <Stack spacing={2}>
        {additional.map((additional) => {
          return <AdditionalLead lead={additional} />;
        })}
      </Stack>
    </LeadSection>
  );
};
