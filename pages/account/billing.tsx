import { Leads } from "components/pages/Leads";
import { Tabs, TabItem, Box, Container, Stack } from "components";
import React from "react";
import { LayoutSettings } from "components/layouts/LayoutSettings";

import { Section, Field } from "components/molecules/Settings";

const PlanField = ({ title, price, charges }) => {
  return (
    <Field title="Plan">
      {title} {price} {JSON.stringify(charges)}
    </Field>
  );
};

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

const Product = ({ product }) => {
  const { name } = product;
  return (
    <>
      <Box py={6} borderBottom="1px solid" borderColor="gray.100">
        <Box display="flex">
          <Box mr={3}>
            <Box w={7} h={7} bg="gray.100" rounded="md"></Box>
          </Box>
          <Box>
            <Box fontSize="md" lineHeight="none" mb={2}>
              {name}
            </Box>

            <Box>
              <Box display="flex" fontSize="sm" lineHeight="none">
                <Box>Pro Plus</Box>
                <Box ml={1} textDecoration="underline" cursor="pointer">
                  Change
                </Box>
              </Box>
            </Box>
          </Box>
          <Box ml="auto">£38</Box>
        </Box>
      </Box>
    </>
  );
};

const products = [
  { name: "Instant Online Valuation", plan: "5 users" },
  { name: "Autocaller" },
  { name: "Lead Responder" },
];

const months = ["January", "Februray", "March"];

export default function PageBilling() {
  return (
    <LayoutSettings title="Billing">
      <Section title="Products">
        {products.map((product) => {
          return <Product product={product} />;
        })}
        <Box display="flex" pt={5} mb={1}>
          <Box>Total monthly charge</Box>
          <Box ml="auto">£238</Box>
        </Box>
        <Box fontSize="sm" color="gray.400" fontWeight="normal">
        Billed to  mastercard ending in 6519 expires Apr 2024 on the 11th of every month
        </Box>
      </Section>
      <Section title="Payment details">
        <Field title="Payment method">
          <Box>Mastercard ending 1125 (expires 11/12)</Box>
        </Field>
        <Field title="Invoice address">
          <Stack>
            <Box>Office 7</Box>
            <Box>27 Corsham Street</Box>
            <Box>London, England</Box>
            <Box>N1 6DR</Box>
          </Stack>
        </Field>
        <Field title="Billing address">
          <Stack>
            <Box>Office 7</Box>
            <Box>27 Corsham Street</Box>
            <Box>London, England</Box>
            <Box>N1 6DR</Box>
          </Stack>
        </Field>
        <Field title="Billing contacts">
          <Stack>
            <Box>billing@lead.pro</Box>
          </Stack>
        </Field>
      </Section>
      <Section title="Invoices">
        {months.map((invoice) => {
          return <Invoice invoice={invoice} />;
        })}
      </Section>
    </LayoutSettings>
  );
}
