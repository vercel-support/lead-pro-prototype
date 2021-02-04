import NextLink from "next/link";
import { Box } from "components";
import React from "react";

export const InternalLink = ({ href, children, display = "block", flex }) => {
  return (
    <NextLink href={href}>
      <Box as="a" display={display} href={href} flex={flex}>
        {children}
      </Box>
    </NextLink>
  );
};
