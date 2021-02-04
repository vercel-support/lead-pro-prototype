import { Box, Table, Avatar, Image } from "components";
import { HiOutlineArchive, HiChevronDown, HiMenu, HiSelector } from "react-icons/hi";
import React from "react";

const horizontalPadding = 4;

const NavigationHeader = () => {
  return (
    <Box mb={4} display="flex" alignItems="center" px={horizontalPadding}>
      <Box width="120px">
        <Image src="https://dashboard.lead.pro/images/leadpro-banner.png" />
      </Box>
      <Box
        ml="auto"
        bg="gray.100"
        width={8}
        height={8}
        display="flex"
        cursor="pointer"
        rounded="sm"
        alignItems="center"
        justifyContent="center"
        _hover={{
          bg: "gray.200",
        }}
      >
        <HiMenu />
      </Box>
    </Box>
  );
};

const NavigationAccountSelect = () => {
  return (
    <Box
      display="flex"
      px={horizontalPadding}
      cursor="pointer"
      alignItems="center"
      py={2}
      _hover={{
        bg: "gray.100",
      }}
    >
      <Box
        width="24px"
        height="24px"
        bg="blue.500"
        mr={2}
        backgroundImage="url('/YourMove.png')"
        backgroundSize="cover"
        rounded="sm"
      ></Box>
      <Box fontSize="sm">YourMove</Box>
      <Box ml="auto">
        <HiSelector />
      </Box>
    </Box>
  );
};

const NavigationLink = ({ children, icon, isActive }) => {
  return (
    <Box
      lineHeight="none"
      display="flex"
      alignItems="center"
      cursor="pointer"
      fontSize="sm"
      fontWeight={500}
      color="gray.600"
      py={3}
      px={horizontalPadding}
      bg={isActive === true ? "gray.100" : "transparent"}
      _hover={{
        bg: "gray.100",
      }}
    >
      {children}
    </Box>
  );
};

const NavigationSection = ({ children }) => {
  return (
    <Box borderBottom="1px solid" borderColor="gray.100" py={3}>
      {children}
    </Box>
  );
};

export const Navigation = () => {
  return (
    <Box
      width="220px"
      bg="gray.50"
      height="100%"
      display="flex"
      flexDirection="column"
      pb={3}
    >
      <NavigationSection>
        <NavigationHeader />
        <NavigationAccountSelect />
        <NavigationLink isActive={true}>Leads</NavigationLink>
        <NavigationLink>League</NavigationLink>
        <NavigationLink>Analytics</NavigationLink>
        <NavigationLink>Achievements</NavigationLink>
        <NavigationLink>Guides</NavigationLink>
      </NavigationSection>
      <NavigationSection>
        <NavigationLink>Account</NavigationLink>
        <NavigationLink>Offices</NavigationLink>
        <NavigationLink>Users</NavigationLink>
        <NavigationLink>Archived leads</NavigationLink>
        <NavigationLink>Notifications</NavigationLink>
        <NavigationLink>Instant valuation tool</NavigationLink>
        <NavigationLink>Lead responder</NavigationLink>
      </NavigationSection>
      <Box mt="auto" px={horizontalPadding}>
        <Box display="flex" alignItems="center">
          <Avatar
            size="xs"
            imageSrc="https://s3.amazonaws.com/profile_photos/1150295469120596.hDqezwpgpUKfHSCHK8J9_60x60.png"
          />
          <Box ml={2} fontSize="sm">
            Seb P.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
