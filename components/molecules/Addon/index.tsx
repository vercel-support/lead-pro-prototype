import { Leads } from "components/pages/Leads";
import {
  Tabs,
  TabItem,
  Button,
  Box,
  Container,
  Stack,
  DividerHeader,
} from "components";
import React from "react";

export const Addon = ({
  addon,
  isActive,
}: {
  isActive?: boolean;
  addon: any;
}) => {
  const { name, price, usage, color, description } = addon;
  return (
    <Box p={6} border="1px solid" borderColor="gray.200" rounded="md" >
      <Box display="flex" fontSize="md">
        <Box d="flex" mb={2}>
          <Box fontSize="xl" lineHeight="none" mb={0} fontWeight="semibold">
            {name}
          </Box>
        </Box>

        <Box ml="auto" fontWeight="semibold">
          £{price}
        </Box>
      </Box>
      <Box fontSize="sm" maxW="2xl" fontWeight="normal" color="gray.400">
        {description}
      </Box>
      {usage && isActive !== false && (
        <>
          <DividerHeader title="Monthly Usage" fontSize="xs"/>
          <Box lineHeight="none">
            <Box display="flex" mb={1}>
              <Box mb={1} fontSize="sm">
                {usage.used} of {usage.allowance} {usage.type} used
              </Box>
              <Box ml="auto">
                £
                {usage.used > usage.allowance
                  ? usage.feePerAdditionalUnit * (usage.used - usage.allowance)
                  : 0}
              </Box>
            </Box>
            {usage.used > usage.allowance && (
              <Box fontSize="sm" mb={3} color="gray.400" fontWeight="normal">
                £{usage.feePerAdditionalUnit} x {usage.used - usage.allowance}{" "}
                {usage.type} beyond plan
              </Box>
            )}
            <Box width="300px" h={1} bg="teal.100">
              <Box
                w={(usage.used / usage.allowance) * 100 + "%"}
                bg="teal.500"
                h="100%"
              />
            </Box>
          </Box>
        </>
      )}
      <Box mt={3}>
        {isActive === false ? (
          <Button>Add add-on</Button>
        ) : (
          <Box display="flex" fontSize="sm" lineHeight="none">
            <Box
              cursor="pointer"
              color="gray.400"
              fontSize="sm"
              _hover={{
                textDecoration: "underline",
              }}
            >
              Remove add-on
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
