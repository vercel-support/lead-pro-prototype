import { Box, Table, Tabs, TabItem, InternalLink } from "components";
import { fetchLeads } from "services/api";
import React, { useState } from "react";
import { TeamMember, TeamMemberDropdownItem } from "./components/TeamMember";
import {
  DropdownMenu,
  Dropdown,
  DropdownMenuItem,
  Attribute,
} from "components/molecules";
import { Lead } from "./components/Lead";
import { HiFilter, HiOutlineFilter, HiOutlineLibrary, HiOutlineSwitchVertical, HiOutlineViewList } from "react-icons/hi";
import moment from "moment";
import _ from "underscore";

const statuses = [
  { href: "unread", label: "Unread", code: 50, color: "blue" },
  { href: "in-progress", label: "In progress", code: 100, color: "orange" },
  { href: "business", label: "Business", code: 150, color: "green" },
  { href: "no-business", label: "No business", code: 200, color: "gray" },
];

export const LeadsTable = ({ status }) => {
  let leads = fetchLeads();

  const selectedStatus = _.findWhere(statuses, { href: status });

  leads = leads.filter((el) => el.status === selectedStatus.code);

  const [isLeadOpen, setLeadOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  const hiddenColumns = [];

  // ["person.createdAt"]

  const columns = [
    {
      Header: "Date",
      accessor: "person.createdAt",
      width: "150px",
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
      isEditable: true,
      width: "220px",
      Cell: (row) => {
        return <TeamMember assignee={row.cell.row.original.assignee} row={row} />;
      },
    },
    {
      Header: "From",
      accessor: "person.firstName",
      isEditable: false,
      Cell: (row) => {
        const person = row.cell.row.original.person;

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
      },
    },

    {
      Header: "Type",
      accessor: "type",
      isEditable: false,
      Cell: (row) => {
        return (
          <Box
            bg="blue.100"
            color="blue.900"
            px={2}
            py={1}
            textAlign="center"
            rounded="full"
            lineHeight="none"
            display="inline-flex"
            textTransform="capitalize"
          >
            {row.cell.value}
          </Box>
        );
      },
    },
    {
      Header: "Subject",
      isEditable: false,
      accessor: "address",
    },
  ];

  const handleRowClick = (row) => {
    setLeadOpen(true);
    setSelectedLead(row);
  };

  return (
    <Box flex={1} overflow="hidden" flexDirection="column" display="flex">
      <Box
        height="60px"
        borderBottom="1px solid"
        display="flex"
        px={6}
        fontSize="lg"
        alignItems="center"
        borderColor="gray.100"
      >
        Leads
      </Box>
      <Tabs height="45px">
        {statuses.map((s, i) => {
          const { href, color } = s;
          return (
            <InternalLink href={`/leads/${href}`} display="block" flex={1}>
              <TabItem isActive={status === s.href ? true : false} color={color}>
                {s.label}
              </TabItem>
            </InternalLink>
          );
        })}
      </Tabs>
      <Box
        px={3}
        height="40px"
        borderBottom="1px solid"
        borderColor="gray.100"
        display="flex"
        alignItems="center"
      >
        <Dropdown>
          <Box
            display="inline-flex"
            rounded="full"
            px={3}
            py={2}
            lineHeight="none"
            bg="gray.100"
            cursor="pointer"
            fontSize="sm"
            _hover={{
              bg: "gray.50",
            }}
          >
            <Box mr={1}>
            <HiOutlineSwitchVertical/>
            </Box>
            Filter
          </Box>
          <DropdownMenu width="200px">
            <DropdownMenuItem>Just my leads</DropdownMenuItem>
            <DropdownMenuItem>All leads</DropdownMenuItem>
          </DropdownMenu>
        </Dropdown>
      </Box>
      <Box display="flex" flex={1} overflow="hidden">
        <Box flex={1} overflow="hidden" display="flex" flexDirection="column">
          <Box flex={1} overflow="scroll">
            <Table
              data={leads}
              columns={columns}
              isLoading={false}
              // onRowClick={handleRowClick}
              hiddenColumns={hiddenColumns}
            />
          </Box>
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
        </Box>
        <Box
          width="500px"
          bg="gray.50"
          borderLeft="1px solid"
          borderColor="gray.100"
        >
          <Lead isOpen={isLeadOpen} />
        </Box>
      </Box>
    </Box>
  );
};
