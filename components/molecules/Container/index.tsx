import { Box } from "components/atoms";
import React from "react";

export const Container = ({
  children,
  display,
  maxWidth = "1200px",
  bg,
}: {
  children?: any;
  maxWidth?: any;
  display?: any;
  bg?: any;
}) => {
  return (
    <Box mx="auto" maxWidth={maxWidth} width="100%" display={display} bg={bg} px={6}>
      {children}
    </Box>
  );
};
