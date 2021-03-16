import { Box } from "components";
import React from "react";
import _ from "underscore";
import { LayoutDefault } from "./LayoutDefault";

export const LayoutProduct = ({ title, children }) => {
  return (
    <LayoutDefault>
    <Box w="full" py={4} overflow="scroll" h="full" px={4}>
      <Box
        display="flex"
        alignItems="center"
        borderBottom="1px solid"
        pb={4}
        borderColor="gray.100"
      >
        <Box fontSize="xl" fontWeight="semibold" mb={0}>
          {title}
        </Box>
      </Box>
      <Box py={10}>{children}</Box>
    </Box>
    </LayoutDefault>
  );
};
