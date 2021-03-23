import {Box} from "components";
import React from "react";

export const LeadsTableHeaderCell = ({ children, column, isLast }) => {
    return (
      <Box
        px={3}
        py={2}
        borderRight={!isLast ? "1px solid" : "none"}
        fontSize="xs"
        color="gray.500"
        borderBottom="1px solid"
        borderColor="gray.100"
        display="flex"
        alignItems="center"
        flexShrink={0}
        flex={isLast ? 1 : ""}
        width={column.width}
          
      >
        {/* <Box mr={3}>
          <Box bg="white" w={5} h={5} color="gray.400" rounded="md" display="flex" alignItems="center" justifyContent="center" fontSize="sm">
            {React.createElement(column.icon)}
          </Box>
        </Box> */}
        {children}
      </Box>
    );
  };