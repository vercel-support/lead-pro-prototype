import { Box, Avatar, Button, Stack, Attribute } from "components";
import { fetchLeads, fetchTeam } from "services/api";
import React, { Children, useState } from "react";
import { HiAnnotation, HiOutlineCube, HiOutlineCurrencyDollar, HiOutlineLocationMarker, HiPhone } from "react-icons/hi";
import { LeadSection } from "components/organisms/Lead/components/LeadSection";


export const LeadValuationReport = () => {
  return (
    <Stack spacing={6}>
      <LeadSection title="Valuation report">
        <Attribute icon={HiOutlineCube} label="Bedrooms" value={3} />
        <Attribute icon={HiOutlineCurrencyDollar}  label="Min. sales price" value="£150,000" />
        <Attribute icon={HiOutlineCurrencyDollar} label="Est. sales price" value="£250,000" />
        <Attribute icon={HiOutlineCurrencyDollar} label="Max. sales price" value="£300,000" />
      </LeadSection>
    </Stack>
  );
};
