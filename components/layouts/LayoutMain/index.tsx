import { Box } from "components/atoms";
import { Container } from "components/molecules";
import { paths } from "constants/routes";
import React, { useState } from "react";
import {
  HiClock,
  HiOutlineChartPie,
  HiOutlineHome,
  HiOutlineCash,
  HiOutlineLibrary,
  HiOutlineOfficeBuilding,
  HiOutlineCollection,
  HiOutlineUsers,
  HiOutlinePlus,
  HiOutlineEyeOff,
  HiOutlineTag,
} from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Action = ({ children }: { children: any }) => {
  return (
    <Box
      color="gray.900"
      fontSize="medium"
      lineHeight="none"
      py={3}
      fontWeight={500}
      px={3}
      rounded="md"
      _hover={{
        bg: "gray.50",
      }}
    >
      {children}
    </Box>
  );
};

const Sidebar = () => {
  const [showShortcuts, toggleShortcuts] = useState(false);

  return (
    <Box
      width="240px"
      height="100vh"
      pb={4}
      bg="gray.50"
      display="flex"
      flexDirection="column"
      borderRight="1px solid"
      borderColor="gray.100"
      position="relative"
    >
      <Box>
        <Box
          mb={2}
          fontSize="xl"
          display="flex"
          alignItems="center"
          height="60px"
          pl={4}
          borderBottom="1px solid"
          borderColor="gray.100"
          position="relative"
          fontWeight={600}
        >
          Lead Pro Admin
          {/* <Box position="absolute" marginRight={"-15px"} right={0}>
            <Box
              width="30px"
              height="30px"
              bg="blue.500"
              rounded="full"
              display="flex"
              color="white"
              shadow="sm"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              transition="all .5s"
              onClick={() => toggleShortcuts(!showShortcuts)}
              _hover={{
                shadow: "lg",
                transform: "scale(1.1)",
              }}
            >
              <HiOutlinePlus />
            </Box>
            {showShortcuts === true && (
              <Box
                bg="white"
                shadow="lg"
                rounded="md"
                position="absolute"
                left={12}
                top={0}
                minWidth="200px"
                p={2}
                zIndex={3}
              >
                <Action>Account</Action>
                <Action>Discount group</Action>
                <Action>Invoice</Action>
                <Action>Franchise</Action>
              </Box>
            )}
          </Box> */}
        </Box>
        <SidebarLinks />
      </Box>
      <SidebarUser />
    </Box>
  );
};

const SidebarUser = () => {
  return (
    <Box mt="auto" display="flex" alignItems="center">
      <Box width="40px" height="40px" bg="gray.100" rounded="full" mr={3}></Box>
      <Box>
        <Box fontWeight={600}>Seb Powell</Box>
        <Box color="gray.500" fontWeight={400}>
          seb@lead.pro
        </Box>
      </Box>
    </Box>
  );
};

const SidebarLinks = () => {
  return (
    <>
      <SidebarLink to={paths.ACCOUNTS_INDEX} icon={<HiOutlineCollection />}>
        Accounts
      </SidebarLink>
      <SidebarLink to={paths.OFFICES_INDEX} icon={<HiOutlineOfficeBuilding />}>
        Offices
      </SidebarLink>
      <SidebarLink to={paths.USERS_INDEX} icon={<HiOutlineUsers />}>
        Users
      </SidebarLink>
    </>
  );
};

const SidebarLink = ({
  children,
  to,
  icon,
}: {
  children: any;
  to: paths;
  icon?: any;
}) => {
  const location = useLocation();
  const { pathname } = location;
  const isActive = pathname === to ? true : false;

  return (
    <Link to={to}>
      <Box
        display="flex"
        pl={3}
        mb={1}
        py={2}
        lineHeight="none"
        borderRadius="5px 0 0 5px"
        alignItems="center"
        bg={isActive === true ? "gray.100" : "transparent"}
        _hover={{
          bg: "gray.100",
        }}
      >
        <Box
          mr={3}
          fontSize="lg"
          color={isActive === true ? "gray.400" : "gray.300"}
        >
          {icon}
        </Box>
        <Box fontSize="base" fontWeight={500}>
          {children}
        </Box>
      </Box>
    </Link>
  );
};

export const LayoutMain = ({ children }: { children: any }) => {
  return (
    <Box bg="gray.50" width="100%">
      <Container display="flex" bg="white">
        <Sidebar />
        <Box flex={1}>{children}</Box>
      </Container>
    </Box>
  );
};
