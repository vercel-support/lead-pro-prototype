import { Box } from "components";
import { useState } from "react";
import React from "react";
import { Navigation } from "components/molecules";
import { LeadsTable } from "components";
import { BiArrowFromRight } from "react-icons/bi";
import { Avatar } from "components/atoms";

export const Leads = ({ status }) => {
  const [selectedLead, setSelectedLead] = useState(null);
  return (
    <>
      <Box minW={16} py={3} h="full" borderRight="1px solid" borderColor="gray.100" display="flex" px={1} alignItems="center" justifyContent="center">
        {/* <Box>
          <BiArrowFromRight />
        </Box> */}
        <Box mt="auto">
        <Avatar initials="S" color="blue" size="xxs" />
        </Box>
      </Box>
      <LeadsTable status={status} />
    </>
  );
};
