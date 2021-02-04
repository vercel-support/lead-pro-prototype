import { Box, Button } from "components/atoms";
import React from "react";
import { HiArrowLeft } from "react-icons/hi";

export const PageHeader = ({
  title,
  actions,
  backTo,
}: {
  title?: string;
  backTo?: string;
  actions?: any;
}) => {
  return (
    <Box
      bg="white"
      px={16}
      height="60px"
      display="flex"
      alignItems="center"
      borderBottom="1px solid"
      borderColor="gray.50"
    >
      {backTo && (
        
          <Box mr={2} ml={-8}>
            <HiArrowLeft size={20} />
          </Box>
        
      )}
      <Box fontSize="xl" fontWeight={600}>
        {title}
      </Box>
    </Box>
  );
};
