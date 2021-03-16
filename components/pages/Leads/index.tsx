import { Box } from "components";
import { useState } from "react";
import React from "react";
import { Navigation } from "components/molecules";
import { LeadsTable } from "components";
import { BiArrowFromRight } from "react-icons/bi";
import { Avatar } from "components/atoms";
import { HiSpeakerphone } from "react-icons/hi";

const NavBarIcon = () => {
  return (
    <Box bg="teal.500" w={6} h={6}>
      <HiSpeakerphone />
    </Box>
  );
};

const CollapsedNavBar = () => {
  return (
    <Box
      minW={14}
      w={14}
      py={3}
      h="full"
      borderRight="1px solid"
      borderColor="gray.100"
      display="flex"
      px={1}
      flexDirection="column"
      alignItems="center"
      // justifyContent="center"
    >
      {/* <Box>
      <BiArrowFromRight />
    </Box> */}
      <Box mt="auto" display="inline-flex">
        <Avatar initials="S" color="blue" size="xxs" />
      </Box>
    </Box>
  );
};

export const Leads = ({ status }) => {
  const [selectedLead, setSelectedLead] = useState(null);
  return (
    <>
      <CollapsedNavBar />
      <LeadsTable status={status} />
    </>
  );
};
