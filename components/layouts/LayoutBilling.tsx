import { Leads } from "components/pages/Leads";
import { Tabs, TabItem, Box, Container, Stack } from "components";
import React, { Children } from "react";
import { InternalLink } from "components/atoms";
import { useRouter } from "next/router";

export const LayoutBilling = ({ children }) => {
  const router = useRouter();
  const { route } = router;
  return (
    <Box>
      <Tabs height={12}>
        <InternalLink href={"/account/billing"}>
          <TabItem isActive={route === "/account/billing" && true}>Subscription</TabItem>
        </InternalLink>
        <InternalLink href={"/account/billing/methods"}>
          <TabItem isActive={route === "/account/billing/methods" && true}>
            Payment methods
          </TabItem>
        </InternalLink>
        <InternalLink href={"/account/billing/invoices"}>
          <TabItem isActive={route === "/account/billing/invoices" && true}>
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
