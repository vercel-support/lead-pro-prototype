import { Leads } from "components/pages/Leads";
import { Tabs, TabItem, Box, Container, Stack, Modal } from "components";
import React, { useState } from "react";
import { LayoutSettings } from "components/layouts/LayoutSettings";
import { Section, Field } from "components/molecules/Settings";
import { fetchAddons } from "services/api";
import { Addon } from "components/molecules/Addon";
import { AddonsModal } from "components/pages/Billing/components/AddonsModal";
import { PaymentDetails } from "components/pages/Billing/components/PaymentDetails";
import { Invoices } from "components/pages/Billing/components/Invoices";

export default function PageBilling() {
  const addons = fetchAddons();
  const [isOpen, setOpen] = useState(false);

  return (
    <LayoutSettings title="Billing">
      <Section title="Your subscription">
        <AddonsModal isOpen={isOpen} handleClose={() => setOpen(false)} />
        <Stack spacing={3}>
          {addons.map((addon) => {
            return <Addon addon={addon} />;
          })}
        </Stack>
        <Box fontSize="lg" px={6}>
          <Box display="flex" pt={5} mb={1}>
            <Box fontWeight="bold">Total monthly charge</Box>
            <Box ml="auto" fontWeight="bold">
              £1038
            </Box>
          </Box>
          <Box fontSize="sm" color="gray.400">
            <Box>Billed to mastercard ending in 6519</Box>
            on the 11th of every month
          </Box>
        </Box>
      </Section>
      <PaymentDetails />
      <Invoices />
    </LayoutSettings>
  );
}
