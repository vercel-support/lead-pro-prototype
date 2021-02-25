import { Box, Table, Avatar, Image } from "components";
import {
  HiOutlineArchive,
  HiChevronDown,
  HiMenu,
  HiSelector,
} from "react-icons/hi";
import {
  BiCog,
  BiAward,
  BiChart,
  BiBuilding,
  BiUser,
  BiArchive,
  BiNotification,
  BiDollar,
  BiBookOpen,
  BiCheckCircle,
  BiFootball,
  BiPlug,
} from "react-icons/bi";
import React from "react";
import { InternalLink } from "components/atoms";

const horizontalPadding = 4;

const NavigationHeader = () => {
  return (
    <Box mb={4} display="flex" alignItems="center" px={horizontalPadding}>
      <InternalLink href="/">
        <Box width="120px">
          <Image src="https://dashboard.lead.pro/images/leadpro-banner.png" />
        </Box>
      </InternalLink>
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
        width={6}
        height={6}
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

const NavigationLink = ({
  children,
  icon,
  isActive,
  href,
}: {
  children: any;
  icon?: any;
  isActive?: any;
  href?: string;
}) => {
  return (
    <Box
      lineHeight="none"
      display="flex"
      alignItems="center"
      cursor="pointer"
      fontSize="sm"
      fontWeight="medium"
      color="gray.600"
      py={1}
      px={horizontalPadding}
      bg={isActive === true ? "gray.100" : "transparent"}
      _hover={{
        bg: "gray.100",
      }}
    >
      {icon && (
        <Box>
          <Box
            w={6}
            h={6}
            mr={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="xl"
          >
            {React.createElement(icon)}
          </Box>
        </Box>
      )}
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
        <InternalLink href="/leads/unread">
          <NavigationLink isActive={true} icon={BiCheckCircle}>
            Leads
          </NavigationLink>
        </InternalLink>
        <NavigationLink icon={BiChart}>Analytics</NavigationLink>
        <NavigationLink icon={BiAward}>Achievements</NavigationLink>
      </NavigationSection>
      <NavigationSection>
        <InternalLink href="/account">
          <NavigationLink icon={BiCog}>Settings</NavigationLink>
        </InternalLink>
        <InternalLink href="/integrations">
          <NavigationLink icon={BiPlug}>Integrations</NavigationLink>
        </InternalLink>
      </NavigationSection>
      <Box mt="auto" px={horizontalPadding}>
        <Box display="flex" alignItems="center">
          <Avatar
            size="xxs"
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
