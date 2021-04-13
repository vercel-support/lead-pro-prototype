import { Box } from "components";
import { HiOutlineTag } from "react-icons/hi";
import React from "react";

export const Attribute = ({ label, value, py = 2, fontSize = "sm", icon }: any) => {
  return (
    <Box display={"flex"} py={py} alignItems="center" fontSize={fontSize}>
      <Box
        width="150px"
        lineHeight="none"
        color="gray.500"
        fontWeight="medium"
        display="flex"
      >
        {icon && (
          <Box mr={1} w={4} display="flex" alignItems="center" justifyContent="center">
            {React.createElement(icon)}
          </Box>
        )}
        {label}
      </Box>
      <Box>{value}</Box>
    </Box>
  );
};
