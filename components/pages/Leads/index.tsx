import { Box } from "components";
import { useState } from "react";
import React from "react";
import { Navigation } from "components/molecules";
import { LeadsTable } from "components";

export const Leads = ({status}) => {
  const [selectedLead, setSelectedLead] = useState(null);
  return (
    <LeadsTable status={status}/>
  );
};
