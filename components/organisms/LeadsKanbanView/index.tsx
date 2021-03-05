import { Box, Avatar } from "components";
import React, { useState } from "react";
import _ from "underscore";
import { leadStatuses } from "constants/leadStatuses";
import { ILead } from "interfaces/lead.interface";
import { LeadsSection } from "components/organisms/LeadsSection";

const KanbanItem = ({ lead }: { lead: ILead }) => {
  const { person, address } = lead;

  const { fullName } = person;

  return (
    <Box
      display="flex"
    //   borderBottom="1px solid"
      px={4}
      rounded="md"
      shadow="sm"
      cursor="pointer"
      py={4}
      bg="white"
    //   borderColor="gray.100"
    //   _hover={{
    //     bg: "gray.50",
    //   }}
    >
      <Box flex={1}>
        <Box display="flex" flex={1} fontSize="sm">
          <Box lineHeight="none" fontWeight="semibold">
            {fullName}
          </Box>
          <Box
            color="blue.500"
            fontWeight="semibold"
            lineHeight="none"
            ml="auto"
          >
            Vendor
          </Box>
        </Box>
        <Box display="flex" fontSize="sm" fontWeight="normal">
          <Box opacity={0.5}>{address}</Box>
        </Box>
      </Box>

      {/* <Box ml="auto">
          <Avatar color="blue" initials="S" size="xxs" />
          <Box>Due in 3 days</Box>
        </Box> */}
    </Box>
  );
};

const KanbanColumn = ({ children, status }) => {
  return (
    <Box
      flex={1}
      bg="gray.50"
      height="full"
      p={2}
      borderRight="1px solid"
      borderColor="gray.100"
    >
      <Box color={`${status.color}.500`} p={4}>
        {status.label}
      </Box>
      {children}
    </Box>
  );
};

export const LeadsKanbanView = ({ leads }) => {
  return (
    <Box overflow="scroll" flex={1} height="100%" display="flex">
      {leadStatuses.map((s, i) => {
        const { href, color } = s;
        return (
          <KanbanColumn status={s}>
            <LeadsSection leads={leads} component={KanbanItem}/>
          </KanbanColumn>
        );
      })}
    </Box>
  );
};
