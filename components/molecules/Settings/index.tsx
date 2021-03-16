import { Leads } from "components/pages/Leads";
import { Tabs, TabItem, Box, Container, Stack } from "components";
import React from "react";
import { LayoutSettings } from "components/layouts/LayoutSettings";


export const Section = ({ title, children }: any) => {
    return (
      <Box w="full">
        {title &&
        <Box
          fontSize="2xl"
          fontWeight="bold"
          pb={6}
          borderBottom="1px solid"
          borderColor="gray.100"
          mb={0}
        >
          {title}
        </Box>}
        {children}
      </Box>
    );
  };


  export const Field = ({ title, children }) => {
    return (
        <Box
        borderBottom="1px solid"
        display="flex"
        lineHeight="none"
        borderColor="gray.100"
        py={5}
      >
        <Box minW={200} color="teal.500">{title}</Box>
        <Box>{children}</Box>
        <Box ml="auto" color="gray.300" _hover={{textDecoration: "underline"}} cursor="pointer">Edit</Box>
      </Box>
    );
  };