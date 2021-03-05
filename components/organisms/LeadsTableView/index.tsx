import { Box, Table, Label } from "components";
import React, { useState } from "react";
import { TeamMember } from "components/organisms/LeadsTable/components/TeamMember";
import { DropdownMenu, Dropdown, Attribute, Page } from "components/molecules";
import moment from "moment";
import _ from "underscore";
import { LeadsStatusTabs } from "components/organisms/LeadsStatusTabs";
import {
  BiCalendar,
  BiConversation,
  BiEnvelope,
  BiNotepad,
  BiTab,
  BiUser,
} from "react-icons/bi";

export const LeadsTableView = ({ leads }) => {
  const hiddenColumns = [];

  const columns = [
    {
      Header: "Date",
      accessor: "person.createdAt",
      width: "150px",
      icon: BiCalendar,
      isEditable: false,
      Cell: (row) => {
        return (
          <Box position="relative">
            {moment(row.cell.value).format("DD MMM YYYY HH:mm")}
          </Box>
        );
      },
    },
    {
      Header: "Responsible",
      accessor: "responsible",
      icon: BiUser,
      isEditable: true,
      width: "220px",
      Cell: (row) => {
        return (
          <TeamMember assignee={row.cell.row.original.assignee} row={row} />
        );
      },
    },
    {
      Header: "From",
      accessor: "person.firstName",
      isEditable: false,
      icon: BiEnvelope,
      Cell: (row) => {
        const person = row.cell.row.original.person;

        if (person) {
          return (
            <>
              <Dropdown showMode="hover">
                <Box _hover={{}} textDecoration="underline" color="brand.500">
                  {person.fullName}
                </Box>

                <DropdownMenu p={4} width="400px">
                  {Object.keys(person).map((key) => {
                    return (
                      <Attribute
                        value={person[key]}
                        label={key}
                        py={2}
                        fontSize="xs"
                      />
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
            </>
          );
        } else {
          return <></>;
        }
      },
    },

    {
      Header: "Type",
      accessor: "type",
      isEditable: false,
      icon: BiNotepad,
      Cell: (row) => {
        return (
          <Label
            color={
              row.cell.value === "vendor"
                ? "blue"
                : row.cell.value === "mortgage"
                ? "orange"
                : "green"
            }
          >
            <Box textTransform="capitalize">{row.cell.value}</Box>
          </Label>
        );
      },
    },
    {
      Header: "Subject",
      icon: BiConversation,
      isEditable: false,
      accessor: "address",
    },
  ];

  return (
    <>
      <LeadsStatusTabs />
      <Table
        data={leads}
        columns={columns}
        isLoading={false}
        // onRowClick={handleRowClick}
        hiddenColumns={hiddenColumns}
      />
      <Box
        flexShrink={0}
        bg="white"
        borderTop="1px solid"
        height="50px"
        display="flex"
        alignItems="center"
        px={3}
        fontSize="xs"
        borderColor="gray.100"
      >
        Showing 1 to {leads.length} of {leads.length} results
        <Box display="flex"></Box>
      </Box>
    </>
  );
};
