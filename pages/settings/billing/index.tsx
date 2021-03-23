import { Leads } from "components/pages/Leads";
import { Tabs, TabItem, Box, Container, Stack, Modal, InternalLink } from "components";
import React, { useState } from "react";
import { LayoutSettings } from "components/layouts/LayoutSettings";
import { Section, Field } from "components/molecules/Settings";
import { fetchAddons } from "services/api";
import { Addon } from "components/molecules/Addon";
import { AddonsModal } from "components/pages/Billing/components/AddonsModal";
import { PaymentDetails } from "components/pages/Billing/components/PaymentDetails";
import { Invoices } from "components/pages/Billing/components/Invoices";
import { LayoutBilling } from "components/layouts/LayoutBilling";

export default function PageBilling() {
  const addons = fetchAddons();
  const [isOpen, setOpen] = useState(false);

  return (
    <LayoutSettings title="Billing">
      <LayoutBilling>
        <Section>
          <AddonsModal isOpen={isOpen} handleClose={() => setOpen(false)} />
          <Box
            bg="blue.50"
            rounded="md"
            px={4}
            py={3}
            color="blue.800"
            fontSize="sm"
            border="1px solid"
            borderColor="blue.100"
            mb={6}
          >
            Your next payment will be taken on the 1st of February.
          </Box>
          <Box mt={6} mb={4} fontSize="xl" fontWeight="bold">Core</Box>
          <Stack spacing={3}>
            {addons.map((addon) => {

              const {isRemovable} = addon;
              return !isRemovable && <Addon addon={addon} />;
            })}
          </Stack>
          <Box mt={6} mb={4} fontSize="xl" fontWeight="bold">Addons</Box>
          <Stack spacing={3}>
            {addons.map((addon) => {

              const {isRemovable} = addon;
              return isRemovable && <Addon addon={addon} />;
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
              <Box>
                Billed to mastercard ending in{" "}
                <Box fontWeight="bold" as="span">
                  6519
                </Box>
                on the 11th of every month
              </Box>
            </Box>
            <InternalLink href="/account/billing/methods">
            <Box fontSize="sm" mt={2} textDecoration="underline">
              Change card details
            </Box>
            </InternalLink>
          </Box>
        </Section>
      </LayoutBilling>
    </LayoutSettings>
  );
}
