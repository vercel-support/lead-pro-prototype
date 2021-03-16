import { Leads } from "components/pages/Leads";
import { Tabs, TabItem, Box, Container, Stack } from "components";
import React from "react";
import { LayoutSettings } from "components/layouts/LayoutSettings";
import { Section, Field } from "components/molecules/Settings";

export default function PageAccount() {
  return (
    <LayoutSettings title="Account">
      <Stack spacing={12}>
      <Section title="Your details">
        <Field title="Name">Sam Zawadzki</Field>
        <Field title="Email">sam@lead.pro</Field>
        <Field title="Phone">079 22 999 449</Field>
        <Field title="Account name">propertytechnology</Field>
        <Field title="Timezone">GMT-00:00 – Dublin, Lisbon, London</Field>
      </Section>
      <Section title="Company details">
        <Field title="Company name">Property Technology Ltd.</Field>
        <Field title="Address">
          <Stack>
            <Box>Office 7</Box>
            <Box>27 Corsham Street</Box>
            <Box>London, England</Box>
            <Box>N1 6DR</Box>
          </Stack>
        </Field>
        <Field title="VAT number">
          GB276576554
        </Field>
        <Field title="Website">www.propertytechnology.co.uk</Field>
      </Section>
      </Stack>
    </LayoutSettings>
  );
}
