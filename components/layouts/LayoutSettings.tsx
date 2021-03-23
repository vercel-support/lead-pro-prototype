import { Tabs, TabItem, Box, Container, Stack } from "components";
import React, { Children } from "react";
import { InternalLink } from "components/atoms";
import { useRouter } from "next/router";
import {
  NavigationContainer,
  NavigationLink,
} from "components/molecules/Navigation";
import {
  HiOutlineCog,
  HiOutlineCurrencyDollar,
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
} from "react-icons/hi";
import { paths } from "constants/paths";

const links = [
  {
    label: "Account",
    href: paths.SETTINGS_INDEX,
    icon: HiOutlineCog,
  },
  {
    label: "Billing",
    href: paths.BILLING_INDEX,
    icon: HiOutlineCurrencyDollar,
  },
];

export const LayoutSettings = ({ title, children }) => {
  const router = useRouter();
  const { route } = router;

  return (
    <Box w="full" overflow="hidden" h="full" display="flex">
      <NavigationContainer>
        <InternalLink href={paths.DASHBOARD_INDEX}>
          <Box
            px={5}
            py={4}
            cursor="pointer"
            display="flex"
            alignItems="center"
            fontSize="sm"
            borderBottom="1px solid"
            borderColor="gray.100"
            mb={3}
            _hover={{
              bg: "gray.100",
            }}
          >
            Dashboard
          </Box>
        </InternalLink>
        {links.map((link) => {
          return (
            <InternalLink href={link.href}>
              <NavigationLink icon={link.icon}>{link.label}</NavigationLink>
            </InternalLink>
          );
        })}
      </NavigationContainer>
      <Box py={6} flex={1} overflow="scroll">
        <Container>
          <Box fontSize="3xl" fontWeight="bold" mb={0}>
            {title}
          </Box>
          <Box py={12}>{children}</Box>
        </Container>
      </Box>
    </Box>
  );
};
