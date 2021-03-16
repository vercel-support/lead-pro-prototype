import { Leads } from "components/pages/Leads";
import { Tabs, TabItem, Box, Container, Stack, Modal } from "components";
import React from "react";
import { LayoutSettings } from "components/layouts/LayoutSettings";
import { Section, Field } from "components/molecules/Settings";
import { fetchAddons } from "services/api";
import { Addon } from "components/molecules/Addon";
import { InternalLink } from "components/atoms";
import { paths } from "constants/paths";

// const PaymentCard = () => {
//   return (
//     <Box bg="white" border="1px solid" rounded="md" borderColor="gray.100" p={6}>
//       <Box display="flex">
//       <Box w={6}>
//       <img src="https://cdn.convertkit.com/packs/media/app/shared/assets/cc-brands/mastercard-e35a83fe83ca807641040ac794730573.png"/>
//       </Box>

//       <Box ml="auto">
//         ** 6519
//       </Box>
//       </Box>
      
//       <Box>Expires</Box>
//       <Box>04/24</Box>
//     </Box>
//   )
// }


export const PaymentDetails = () => {
  return (
    <Section>
      <Field title="Payment method">
        <Box>Mastercard ending 1125 (expires 11/12)</Box>
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
