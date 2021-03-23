import { Box, Avatar, Button } from "components";
import { fetchLeads, fetchTeam } from "services/api";
import React, { Children, useState } from "react";
import {
  HiAnnotation,
  HiMail,
  HiOutlineCalendar,
  HiOutlineMail,
  HiOutlineOfficeBuilding,
  HiOutlineUser,
  HiPencil,
  HiPhone,
} from "react-icons/hi";
import { LeadSection } from "components/organisms/Lead/components/LeadSection";
import { format, parseISO } from "date-fns";
import { LeadContactButtons } from "components/organisms/Lead/components/LeadContactButtons";
import { Stack } from "components/molecules";
import { Divider } from "components/atoms";

const AddNote = () => {
  return (
    <Box display="flex" alignItems="center">
      <Box mr={3}>
        <Avatar
          color="teal"
          size="xs"
          imageSrc="https://s3.amazonaws.com/profile_photos/9385458149476.ro69QIeUi8md7Lr0OAFD_60x60.png"
        />
      </Box>
      <Box
        bg="white"
        shadow="sm"
        px={3}
        // pb={2}
        border="1px solid"
        borderColor="gray.100"
        rounded="md"
        flex={1}
      >
        <Box
          width="100%"
          flex={1}
          rounded="md"
          cursor="pointer"
          display="flex"
          alignItems="center"
          h={10}
          fontSize="sm"
          color="gray.600"
          lineHeight="none"
        >
          Add a note
        </Box>
        {/* <Button variant="primary">Save</Button> */}
      </Box>
    </Box>
  );
};

const TimelineEntry = ({ entry, isLast }: any) => {
  const { type, person, message, date } = entry;
  return (
    <Box display="flex">
      <Box display="flex" alignItems="center" flexDirection="column">
        <Box display="flex">
          <Box
            minW={7}
            minH={7}
            bg={
              type === "call"
                ? "emerald.500"
                : type === "note"
                ? "orange.500"
                : "blue.500"
            }
            color="white"
            fontSize="xs"
            rounded="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            shadow="sm"
          >
            {type === "call" ? (
              <HiPhone />
            ) : type === "message" ? (
              <HiMail />
            ) : (
              <HiPencil />
            )}
          </Box>
        </Box>
        {!isLast && (
          <Box
            w="2px"
            bg="gray.100"
            height="100%"
            minH={8}
            mt={1}
            rounded="full"
            mb={1}
          />
        )}
      </Box>
      <Box pl={3} mb={6}>
        <Box fontSize="sm" lineHeight="none" mb={1}>
          {person}
        </Box>
        <Box fontSize="xs" color="gray.500" mb={3} lineHeight="none">
          {format(parseISO(date), "eeee ee MMM")}
        </Box>
        <Box fontSize="sm">
          {type === "call" ? (
            <Box opacity={0.75} fontSize="sm">
              Call lasted 15 seconds. Recipient didn't pick up
            </Box>
          ) : (
            <Box p={3} border="1px solid" rounded="md" borderColor="gray.100">
              {message}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

const TimelineTab = ({ children, isActive }: any) => {
  return (
    <Box
      rounded="full"
      px={4}
      bg={isActive && "gray.100"}
      lineHeight="none"
      fontSize="sm"
      flex={1}
      h={8}
      display="inline-flex"
      color={isActive ? "gray.800" : "gray.500"}
      alignItems="center"
      justifyContent="center"
      _hover={{
        bg: "gray.50",
      }}
    >
      {children}
    </Box>
  );
};

const Timeline = () => {
  const events = [
    {
      date: "2020-02-01",
      type: "note",
      duration: "5:39",
      person: "Sam Zawadzki",

      message: "No response to email",
    },
    {
      date: "2020-02-01",
      type: "message",
      duration: "5:39",
      person: "Sam Zawadzki",
      message:
        "Hello Jo, I tried calling you today but got your VM. Please give me a call at your earliest convenience on 079 22 999 449.",
    },
    {
      date: "2020-02-01",
      type: "call",
      duration: "5:39",
      person: "Sam Zawadzki",
    },
  ];

  return (
    <Box>
      {events.map((entry, i) => {
        return (
          <TimelineEntry
            entry={entry}
            isLast={i === events.length - 1 && true}
          />
        );
      })}
    </Box>
  );
};

const DropdownButton = ({ label, value, icon }: any) => {
  return (
    <Box display="flex" alignItems="center">
      <Box
        fontSize="sm"
        lineHeight="none"
        mb={1}
        width={300}
        display="flex"
        color="gray.500"
      >
        <Box
          mr={3}
          w={4}
          display="flex"
          fontSize="sm"
          justifyContent="center"
          alignItems="center"
        >
          {React.createElement(icon)}
        </Box>
        {label}
      </Box>
      <Box
        px={2}
        rounded="md"
        display="inline-flex"
        width="100%"
        fontSize="sm"
        // shadow="sm"
        alignItems="center"
        // border="1px solid"
        cursor="pointer"
        // borderColor="gray.100"
        lineHeight="none"
        py={2}
        h={8}
        bg="white"
      >
        {value}
      </Box>
    </Box>
  );
};

export const LeadTimeline = () => {
  return (
    <Box flex={1} overflow="scroll" bg="white">
      <LeadSection title="Activity">
        <Box mb={2}>
          <DropdownButton
            label="Next action date"
            value="15 Jan 2021"
            icon={HiOutlineCalendar}
          />
          <DropdownButton
            label="Responsible"
            icon={HiOutlineUser}
            value={
              <Box display="flex" alignItems="center">
                <Box mr={2}>
                  <Avatar size="xxs" initials="S" color="teal" imageSrc="https://s3.amazonaws.com/profile_photos/9385458149476.ro69QIeUi8md7Lr0OAFD_60x60.png" />
                </Box>
                Sam Z.
              </Box>
            }
          />
        </Box>
        <LeadContactButtons />
        <Divider my={5} />
        <AddNote />

        <Box display="flex" my={5}>
          <TimelineTab isActive>All</TimelineTab>
          <TimelineTab>Calls</TimelineTab>
          <TimelineTab>Notes</TimelineTab>
          <TimelineTab>Emails</TimelineTab>
        </Box>

        <Timeline />
      </LeadSection>
    </Box>
  );
};
