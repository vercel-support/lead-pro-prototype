import NextLink from "next/link";
import { Box } from "components";
import React from "react";

export const InternalLink = ({ href, children, display = "block", flex, height }: {href: string, children: any, display?: string, flex?: any, height?: any}) => {
  return (
    <NextLink href={href}>
      <Box as="a" display={display} href={href} flex={flex} height={height}>
        {children}
      </Box>
    </NextLink>
  );
};
