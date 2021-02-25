import { Leads } from "components/pages/Leads";
import { Tabs, TabItem, Box, Container, Stack, Modal } from "components";
import React from "react";
import { LayoutSettings } from "components/layouts/LayoutSettings";

import { Section, Field } from "components/molecules/Settings";
import { fetchAddons } from "services/api";
import {Addon} from "components/molecules/Addon";


const months = ["January", "Februray", "March"];

const Invoice = ({ invoice }) => {
    return (
      <Box
        borderBottom="1px solid"
        display="flex"
        lineHeight="none"
        borderColor="gray.100"
        alignItems="center"
        py={5}
      >
        <Box mr={3}>
          <Box w={3} h={3} bg="green.500" rounded="full" />
        </Box>
        <Box
          cursor="pointer"
          _hover={{
            textDecoration: "underline",
          }}
        >
          {invoice} 2021
        </Box>
        <Box ml="auto" fontWeight="semibold">
          £89.00
        </Box>
      </Box>
    );
  };

export const Invoices = () => {
    return (
<Section title="Invoices">
        {months.map((invoice) => {
          return <Invoice invoice={invoice} />;
        })}
      </Section>
    )
}
