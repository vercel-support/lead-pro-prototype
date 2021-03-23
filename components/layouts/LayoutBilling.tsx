import { Leads } from "components/pages/Leads";
import { Tabs, TabItem, Box, Container, Stack } from "components";
import React, { Children } from "react";
import { InternalLink } from "components/atoms";
import { useRouter } from "next/router";
import { paths } from "constants/paths";

export const LayoutBilling = ({ children }) => {
  const router = useRouter();
  const { route } = router;
  return (
    <Box>
      <Tabs height={12}>
        <InternalLink href={paths.BILLING_INDEX}>
          <TabItem isActive={route === paths.BILLING_INDEX && true}>Subscription</TabItem>
        </InternalLink>
        <InternalLink href={paths.BILLING_PAYMENT_METHODS_INDEX}>
          <TabItem isActive={route === paths.BILLING_PAYMENT_METHODS_INDEX && true}>
            Payment methods
          </TabItem>
        </InternalLink>
        <InternalLink href={paths.BILLING_INVOICES_INDEX}>
          <TabItem isActive={route === paths.BILLING_INVOICES_INDEX && true}>
            Invoices
          </TabItem>
        </InternalLink>
      </Tabs>
      <Box py={5}>
      {children}
      </Box>
    </Box>
  );
};
