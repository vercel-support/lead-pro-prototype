import { Leads } from "components/pages/Leads";
import { Tabs, TabItem, Box, Container, Stack, Modal } from "components";
import React from "react";
import { LayoutSettings } from "components/layouts/LayoutSettings";
import { Section, Field } from "components/molecules/Settings";
import { fetchAddons } from "services/api";
import { Addon } from "components/molecules/Addon";
import { InternalLink } from "components/atoms";
import { paths } from "constants/paths";

export const PaymentDetails = () => {
  return (
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
  );
};
