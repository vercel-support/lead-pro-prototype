import { Box } from "components";
import { useState } from "react";
import React from "react";
import { Navigation } from "components/molecules";
import { LeadsTable } from "components";

export const Leads = ({status}) => {
  const [selectedLead, setSelectedLead] = useState(null);
  return (
    <Box display="flex" overflow="hidden" height="100vh">
      <Navigation />
      <Box flex={1} overflow="hidden" display="flex" roundedTopLeft="md" roundedBottomLeft="md" bg="white" shadow="0 -3px 3px rgba(00,00,00,0.1)">
        <LeadsTable status={status}/>
      </Box>
    </Box>
  );
};
