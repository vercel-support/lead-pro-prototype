import { Box, Avatar } from "components";
import React, { Children, useState } from "react";
import { ILead } from "interfaces/lead.interface";
import { LeadHeaderButtons } from "components/organisms/Lead/components/LeadHeaderButtons";
import { LeadDetailsSection } from "components/organisms/Lead/components/LeadDetailsSection";
import { LeadTimeline } from "./LeadTimeline";
import { LeadConnectedLeads } from "components/organisms/Lead/components/LeadConnectedLeads";
import { LeadBookingSection } from "components/organisms/Lead/components/LeadBookingSection";

export const Lead = ({ lead = {} as ILead }: { lead?: ILead }) => {
  return (
    <Box bg="gray.50" height="100%" display="flex" flexDirection="column">
      <Box flex={1} display="flex" flexDirection="column" overflow="hidden">
        <LeadHeaderButtons />
        <Box bg="white" shadow="sm" flex={1} overflow="scroll">
          <LeadBookingSection/>
          <LeadDetailsSection />
          <LeadConnectedLeads />
          <LeadTimeline />
        </Box>
      </Box>
    </Box>
  );
};
