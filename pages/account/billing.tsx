import { Leads } from "components/pages/Leads";
import { Tabs, TabItem, Box, Container, Stack, Modal } from "components";
import React, {useState} from "react";
import { LayoutSettings } from "components/layouts/LayoutSettings";
import { Section, Field } from "components/molecules/Settings";
import { fetchAddons } from "services/api";
import { Addon } from "components/molecules/Addon";
import {AddonsModal} from "components/pages/Billing/components/AddonsModal";
import { Plan } from "components/pages/Billing/components/Plan";

export default function PageBilling() {
  const addons = fetchAddons();
  const [isOpen, setOpen] = useState(false);

  return (
    <LayoutSettings title="Billing">
      
      <Section title="Your subscription">
      <AddonsModal isOpen={isOpen} handleClose={() => setOpen(false)}/>
        <Plan />
        <Box mt={8} mb={4} display="flex" alignItems="center">
          <Box fontSize="xl" fontWeight="bold">
            Add-ons
          </Box>
          <Box ml="auto" onClick={() => setOpen(true)} cursor="pointer" fontSize="sm" _hover={{
            textDecoration: "underline"
          }}>+ Add addons</Box>
        </Box>
        <Stack spacing={0}>
          {addons.map((addon) => {
            return <Addon addon={addon} />;
          })}
        </Stack>
        <Box fontSize="lg">
        <Box display="flex" pt={5} mb={1} >
          <Box fontWeight="bold">Total monthly charge</Box>
          <Box ml="auto" fontWeight="bold">£1038</Box>
        </Box>
        <Box fontSize="sm" color="gray.400" >
          <Box>
          Billed to mastercard ending in 6519 
          </Box>
          on the 11th of every month
        </Box>
        </Box>
      </Section>
    </LayoutSettings>
  );
}

