import React from "react";
import { Box } from "components/atoms";

export const Tag = ({ children, mr }: { children: any; mr: number }) => {
  return (
    <Box
      py={1}
      px={2}
      mr={mr}
      bg={`gray.50`}
      border="1px solid"
      borderColor="gray.100"
      lineHeight="none"
      color="gray.400"
      fontWeight={600}
      fontSize="xs"
      display="inline-block"
      rounded="sm"
    >
      {children}
    </Box>
  );
};
