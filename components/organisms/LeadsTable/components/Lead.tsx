import {
  Box,
  Table,
  Avatar,
  Image,
  Drawer,
  Tabs,
  TabItem,
  Attribute,
  Label,
} from "components";
import { fetchLeads, fetchTeam } from "services/api";
import React from "react";
import { TeamMember, TeamMemberDropdownItem } from "./TeamMember";
import { DropdownMenu, Dropdown, DropdownMenuItem } from "components/molecules";
const Section = ({ title, children }) => {
  return (
    <Box p={5} bg="white" shadow="sm" mb={2} rounded="md">
      <Box mb={2}>{title}</Box>
      {children}
    </Box>
  );
};

const Cell = ({ children, isEditable }) => {
  return (
    <Box
      py={1}
      px={3}
      rounded="md"
      cursor="pointer"
      _hover={{
        bg: isEditable === true && "gray.50",
      }}
    >
      {children}
    </Box>
  );
};

export const Lead = ({ isOpen }) => {
  const team = fetchTeam();
  return (
    <>
      <Box height="100%" display="flex" flexDirection="column">
        <Box flex={1}>
          <Tabs>
            <TabItem isActive={true}>Lead</TabItem>
            <TabItem>Notes</TabItem>
          </Tabs>
          <Box p={2}>
          <Section title="Details">
            <Attribute label="Date" value="Thu 4/02/21 @ 09:42" />
            <Attribute
              label="Assignee"
              value={
                <>
                  <Box position="relative">
                    <Dropdown>
                      <Cell isEditable={true}>
                        <Box display="flex" alignItems="center">
                          <Box mr={1}>
                            <Avatar initials={team[0].name?.charAt(0)} color={team[0].color} size="xxs" />
                          </Box>
                          {team[0].name}
                        </Box>
                      </Cell>
                      <DropdownMenu width="200px">
                        {team.map((member) => {
                          return (
                            <DropdownMenuItem>
                              <Box display="flex" alignItems="center">
                                <Box mr={2}>
                                  <Avatar size="xxs" initials={member.name?.charAt(0)} color={member.color}/>
                                </Box>
                                {member.name}
                              </Box>
                            </DropdownMenuItem>
                          );
                        })}
                      </DropdownMenu>
                    </Dropdown>
                  </Box>
                </>
              }
            />

            <Attribute label="Source" value={<Label color="blue">IVT</Label>} />
            <Attribute
              label="Type"
              value={<Label color="blue">Vendor</Label>}
            />
          </Section>
          <Section title="Contact">
            <Attribute label="Name" value="Thu 4/02/21 @ 09:42" />
            <Attribute label="Phone" value="079 22 999 559" />
            <Attribute label="Email" value="sebastienpowell@gmail.com" />
            <Attribute label="Address" value="15 Marlborough Court, IG9 5BN" />
          </Section>
          <Section title="Valuation report">
            <Attribute label="Bedrooms" value={3} />
            <Attribute label="Address line 1" value="15 Marlborough Court," />
            <Attribute label="Postcode" value="IG9 5BN" />
            <Attribute label="Min. sales price" value="£150,000" />
            <Attribute label="Est. sales price" value="£250,000" />
            <Attribute label="Max. sales price" value="£300,000" />
          </Section>
        </Box>
        </Box>
      </Box>
      <Box bg="gray.100" mt="auto">
        <Avatar imageSrc="" />
        <textarea placeholder="Add a note" />
      </Box>
    </>
  );
};
