import { Box, Avatar, Attribute, Label } from "components";
import { fetchLeads, fetchTeam } from "services/api";
import React from "react";
import {
  HiBell,
  HiOutlineAnnotation,
  HiOutlineCalendar,
  HiOutlineOfficeBuilding,
  HiOutlineTag,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineCube,
  HiOutlineCurrencyDollar,
  HiOutlineLocationMarker,
  HiOutlineUser,
} from "react-icons/hi";
import { LeadSection } from "./LeadSection";
import { Office } from "./Office";

export const LeadDetailsSection = () => {
  const team = fetchTeam();
  return (
    <LeadSection title="Details" border="none" pb={0}>
    <Box  pb={0}>
      <Attribute
        icon={HiOutlineCalendar}
        label="Date"
        value="15 December 2020"
      />
      <Attribute
        icon={HiOutlineUser}
        label="Name"
        value={<Office>Sebastien Powell</Office>}
      />
      <Attribute icon={HiOutlinePhone} label="Phone" value="079 22 999 559" />
      <Attribute
        icon={HiOutlineMail}
        label="Email"
        value="sebastienpowell@gmail.com"
      />
      <Attribute
        icon={HiOutlineLocationMarker}
        label="Address"
        value="15 Marlborough Court, IG9 5BN"
      />
      <Attribute
        icon={HiOutlineAnnotation}
        label="Source"
        value={<Label color="blue">IVT</Label>}
      />
      <Attribute
        icon={HiOutlineTag}
        label="Type"
        value={<Label color="blue">Vendor</Label>}
      />
      <Attribute
        icon={HiOutlineOfficeBuilding}
        label="Referred by"
        value={<Office>Nottingham</Office>}
      />
      <Attribute icon={HiOutlineCube} label="Bedrooms" value={3} />

      <Attribute
        icon={HiOutlineCurrencyDollar}
        label="Min. sales price"
        value="£150,000"
      />
      <Attribute
        icon={HiOutlineCurrencyDollar}
        label="Est. sales price"
        value="£250,000"
      />
      <Attribute
        icon={HiOutlineCurrencyDollar}
        label="Max. sales price"
        value="£300,000"
      />
      </Box>
      <Box
        borderTop="1px solid"
        borderColor="gray.50"
        position="relative"
        mt={4}
        mx={-5}
      >
        <Box
          position="absolute"
          px={3}
          bg="white"
          fontSize="xs"
          textAlign="center"
          left="50%"
          transform="translateX(-50%) translateY(-50%)"
          top="50%"
          cursor="pointer"
          lineHeight="none"
          color="gray.500"
        >
          See more
        </Box>
      </Box>
    </LeadSection>
  );
};
