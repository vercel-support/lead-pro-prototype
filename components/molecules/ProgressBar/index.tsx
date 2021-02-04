import React from "react";
import { Box } from "components/atoms";

export const ProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <Box position="relative" width="100%">
      <Box
        position="relative"
        height={2}
        bg="green.100"
        overflow="hidden"
        rounded="full"
      >
        <Box
          height="100%"
          width={percentage + "%"}
          position="absolute"
          rounded="full"
          bg="green.600"
        />
      </Box>
    </Box>
  );
};
