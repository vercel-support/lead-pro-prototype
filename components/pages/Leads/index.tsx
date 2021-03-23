import { Box, Stack } from "components";
import { useState } from "react";
import React from "react";
import { HStack, Navigation } from "components/molecules";
import { LeadsTable } from "components";
import { Avatar, InternalLink } from "components/atoms";
import {
  HiHome,
  HiOutlineBadgeCheck,
  HiOutlineChartBar,
  HiOutlineCloudDownload,
  HiOutlineCog,
  HiOutlineColorSwatch,
  HiOutlineCurrencyPound,
  HiOutlineHome,
  HiOutlineInbox,
  HiOutlinePhone,
  HiSpeakerphone,
} from "react-icons/hi";
import { paths } from "constants/paths";

const NavBarIcon = ({ icon, color = "gray.600", bgGradient, hasCounter, isActive }: any) => {
  return (
    <Box
      w={8}
      h={8}
      rounded="md"
      cursor="pointer"
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontSize="xl"
      position="relative"
      bg={isActive ? "emerald.100" : "transparent"}
      bgGradient={bgGradient}
      color={isActive ? "emerald.700": color}
      _hover={{
        bg: "gray.100"
      }}
    >
      {hasCounter && (
        <Box position="absolute" right={-2} top={-2}>
          <Counter />
        </Box>
      )}
      {icon && React.createElement(icon)}
    </Box>
  );
};

const Counter = () => {
  return (
    <Box
      bg="red.500"
      rounded="full"
      px="4px"
      lineHeight="none"
      fontSize="10px"
      display="inline-block"
      color="white"
      textAlign="center"
      fontWeight="bold"
      pt="2px"
      pb="3px"
    >
      12
    </Box>
  );
};

const CollapsedNavBar = () => {
  return (
    <Box
      minW={16}
      w={14}
      py={3}
      h="full"
      borderRight="1px solid"
      borderColor="gray.100"
      display="flex"
      px={1}
      bg="gray.50"
      flexDirection="column"
      alignItems="center"
    >
      <Box mb={6}>
        <Box
          w={8}
          h={8}
          cursor="pointer"
          border="1px solid"
          borderColor="white"
          rounded="md"
          color="white"
          backgroundColor="#3e7922"
          backgroundImage="url(http://logo.clearbit.com/yourmove.co.uk)"
          backgroundSize="60%"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        />
      </Box>
      <Box mb={6}>
        <NavBarIcon icon={HiOutlineHome} />
      </Box>
      <Box mb={6}>
        <Stack spacing={1}>
          <InternalLink href={paths.LEADS_INDEX}>
            <NavBarIcon icon={HiOutlineInbox} hasCounter isActive/>
          </InternalLink>
          <NavBarIcon icon={HiOutlineChartBar} />
          <NavBarIcon icon={HiOutlineBadgeCheck} />
        </Stack>
      </Box>
      <Box mb={6}>
        <Stack spacing={1}>
          <NavBarIcon icon={HiOutlinePhone} />
          <NavBarIcon icon={HiOutlineCurrencyPound} />
        </Stack>
      </Box>
      <Box mt="auto">
        <Stack spacing={3}>
          <InternalLink href={paths.SETTINGS_INDEX}>
            <NavBarIcon icon={HiOutlineCog} />
          </InternalLink>
          <Box display="inline-flex">
            <Avatar initials="S" color="blue" size="xxs" />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export const Leads = ({ status }) => {
  const [selectedLead, setSelectedLead] = useState(null);
  return (
    <>
      <CollapsedNavBar />
      <LeadsTable status={status} />
    </>
  );
};
