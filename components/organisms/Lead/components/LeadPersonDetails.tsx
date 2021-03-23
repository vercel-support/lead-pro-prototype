import { Box, Avatar } from "components";
import React, { Children, useState } from "react";
import { LeadContactButtons } from "./LeadContactButtons";

export const LeadPersonDetails = () => {
  return (
    <Box
      px={5}
      display="flex"
      pt={5}
      alignItems="center"
    >
      
        <Box mr={2}>
          <Avatar color="orange" size="xs" initials="J" />
        </Box>
        <Box>
          <Box fontSize="md" lineHeight="none" fontWeight="semibold" mb={1}>
            Sebastien Powell
          </Box>
          <Box fontSize="xs" color="gray.500" lineHeight="none">
            Monday, 17th Jan
          </Box>
        </Box>

      
    </Box>
  );
};
