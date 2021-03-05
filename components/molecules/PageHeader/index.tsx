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
      px={8}
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
      <Box fontSize="xl" fontWeight="medium">
        {title}
      </Box>
    </Box>
  );
};


// const PageHeader = () => {
//   return (
//     <Box
//       minHeight="60px"
//       borderBottom="1px solid"
//       display="flex"
//       px={6}
//       fontSize="lg"
//       alignItems="center"
//       borderColor="gray.100"
//     >
//       Leads
//     </Box>
//   );
// };
