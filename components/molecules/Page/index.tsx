import { Box } from "components/atoms";
import React from "react";

export const Page = ({ children }: { children?: any }) => {
  return (
    <Box height="100vh" overflow="hidden" display="flex" flexDirection="column">
      {children}
    </Box>
  );
};
