import { Box } from "components/atoms";
import React from "react";

export const PageSection = ({
  children,
  title,
}: {
  children?: any;
  title?: string;
}) => {
  return (
    <Box>
      <Box
        pb={5}
        borderBottom="1px solid"
        fontWeight="medium"
        fontSize="lg"
        borderColor="gray.100"
        mb={6}
        lineHeight="none"
      >
        {title}
      </Box>
      {children}
    </Box>
  );
};
