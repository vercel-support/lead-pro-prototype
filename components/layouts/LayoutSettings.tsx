import { Leads } from "components/pages/Leads";
import { Tabs, TabItem, Box, Container, Stack } from "components";
import React, { Children } from "react";
import { InternalLink } from "components/atoms";
import { useRouter } from "next/router";

export const LayoutSettings = ({ title, children }) => {
  const router = useRouter();
  const {route} = router;

  return (
    <Box w="full" py={12} overflow="scroll" h="full">
      <Container>
        <Box fontSize="3xl" fontWeight="bold" mb={0}>
          {title}
        </Box>
        <Tabs height={16} fontSize={"md"}>
          <InternalLink href={"/account"}>
            <TabItem  isActive={route === "/account" && true}>Account</TabItem>
          </InternalLink>
          <InternalLink href={"/account/billing"}>
            <TabItem isActive={route === "/account/billing" && true}>Billing</TabItem>
          </InternalLink>
          <InternalLink href={"/account/offices"}>
            <TabItem isActive={route === "/account/offices" && true}>Offices</TabItem>
          </InternalLink>
          <InternalLink href={"/account/products"}>
            <TabItem>Users</TabItem>
          </InternalLink>
        </Tabs>
        <Box py={12}>
          <Stack spacing={12}>{children}</Stack>
        </Box>
      </Container>
    </Box>
  );
};
