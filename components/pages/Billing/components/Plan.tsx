import { Leads } from "components/pages/Leads";
import { Tabs, TabItem, Box, Container, Stack, Modal } from "components";
import React from "react";
import { LayoutSettings } from "components/layouts/LayoutSettings";
import { Section, Field } from "components/molecules/Settings";
import { fetchAddons } from "services/api";
import { Addon } from "components/molecules/Addon";
import { InternalLink } from "components/atoms";
import { paths } from "constants/paths";

export const Plan = () => {
  return (
    <Box border="1px solid" p={5} borderColor="gray.100" shadow="sm" borderTop="none">
      <Box display="flex" mb={2} alignItems="center">
        <Box fontSize="2xl" fontWeight="bold" lineHeight="none">
          Free
        </Box>

        <Box ml="auto" lineHeight="none" textAlign="right">
          <Box mb={2} fontWeight="bold">
            £0
          </Box>
          <Box fontSize="sm" color="gray.400">
          3 of 5 seats used. Add seats.
          </Box>
        </Box>
      </Box>

      <Box fontSize="sm" color="gray.500" mb={3}>
        Includes:
        <Box>Autocaller – 800 mins</Box>
        <Box>IVT – 800 mins</Box>
        <Box>8 users</Box>
      </Box>
      <InternalLink href={paths.PLANS_INDEX}>
        <Box
          color="teal.500"
          fontSize="sm"
          cursor="pointer"
          _hover={{
            textDecoration: "underline",
          }}
        >
          Upgrade
        </Box>
      </InternalLink>
    </Box>
  );
};
