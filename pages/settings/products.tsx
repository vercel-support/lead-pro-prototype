import { Leads } from "components/pages/Leads";
import { Tabs, TabItem, Box, Container, Stack } from "components";
import React from "react";
import { LayoutSettings } from "components/layouts/LayoutSettings";

const Field = ({ title, children }) => {
  return (
    <Box display="flex" py={6} borderBottom="1px solid" w="full">
      <Box minW={200} fontSize="lg">
        Plan
      </Box>
      <Box flex={1} w="full">
        {children}
      </Box>
    </Box>
  );
};

const PlanField = ({ title, price, charges }) => {
  return (
    <Field title="Plan">
      <Box display="flex" w="full">
        {title} {price}
        <Box ml="auto">Change</Box>
      </Box>

      <Stack>
        {charges.map((charge) => {
          return <Box>Charge</Box>;
        })}
      </Stack>
    </Field>
  );
};

const Section = ({ title, children }) => {
  return (
    <Box w="full">
      <Box
        fontSize="2xl"
        fontWeight="bold"
        pb={6}
        borderBottom="1px solid"
        mb={0}
      >
        Instant valuation tool
      </Box>
      {children}
    </Box>
  );
};

export default function PageBilling() {
  return (
    <LayoutSettings title="Products">
      <Section title="Instant valuation tool">
        <PlanField title="Pro 300K" price="500" charges={["300,000L"]} />
      </Section>
    </LayoutSettings>
  );
}
