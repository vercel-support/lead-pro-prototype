import React from "react";
import { Box } from "components";

export const Label = ({
  children,
  color,
}: {
  children: any;
  color?: string;
}) => {
  return (
    <Box
      py={1}
      px={3}
      bg={`${color}.100`}
      fontSize="xs"
      textTransform="capitalize"
      fontWeight="medium"
      verticalAlign="text-bottom"
      display="inline-block"
      color={`${color}.900`}
      rounded="full"
      lineHeight="none"
    >
      {children}
    </Box>
  );
};
