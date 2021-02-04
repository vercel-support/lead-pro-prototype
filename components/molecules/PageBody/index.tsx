import { Box } from "components/atoms";
import React from "react";

export const PageBody = ({ children }: { children?: any }) => {
  return (
    <Box p={16} overflow="scroll" flex={1}>
      {children}
    </Box>
  );
};
