import { Box, Avatar } from "components";
import React, { Children, useState } from "react";
import { ILead } from "interfaces/lead.interface";
import { LeadHeaderButtons } from "components/organisms/Lead/components/LeadHeaderButtons";
import { LeadDetailsSection } from "components/organisms/Lead/components/LeadDetailsSection";
import { LeadTimeline } from "./LeadTimeline";
import { LeadConnectedLeads } from "components/organisms/Lead/components/LeadConnectedLeads";
import { LeadBookingSection } from "components/organisms/Lead/components/LeadBookingSection";
import { Resizable } from "re-resizable";

const CustomHandle = (props) => (
  <Box
    width="100%"
    height={1}
    top={0}
    right={0}
    transition="all .5s"
    bg="transparent"
    // bg="blue.500"
    cursor="row-resize"
    zIndex={999}
    position="absolute"
    _active={{
      bg: "blue.700"
    }}
    _hover={{
      bg: "blue.700",
      transform: "scaleX(1.2)",
    }}
    {...props}
  />
);

export const Lead = ({ lead = {} as ILead }: { lead?: ILead }) => {
  return (
    <Box bg="gray.50" height="100%" display="flex" flexDirection="column">
      <Box flex={1} display="flex" flexDirection="column" overflow="hidden">
        <LeadHeaderButtons />
        <Box
          flex={1}
          overflow="hidden"
          display="flex"
          flexDirection="column"
        >
          <Box flex={3} overflow="scroll" bg="white">
            <LeadDetailsSection />
            <LeadBookingSection />
            <LeadConnectedLeads />
          </Box>
          <Box position="relative" borderTop="1px solid" borderColor="gray.100"> 
            <Resizable
              defaultSize={{ height: 400, width: "100%" }}
              minHeight={400}
              handleComponent={{
                top: <CustomHandle />,
              }}
              maxHeight={1400}
            >
              {/* <Box flex={1} bg="white" borderTop="1px"> */}
              <LeadTimeline />
              {/* </Box> */}
            </Resizable>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
