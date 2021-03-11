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
  Stack,
} from "components";
import { fetchLeads, fetchTeam } from "services/api";
import React, { Children, useState } from "react";
import { TeamMember, TeamMemberDropdownItem } from "./TeamMember";
import { DropdownMenu, Dropdown, DropdownMenuItem } from "components/molecules";
import { ILead } from "interfaces/lead.interface";
import {
  HiBell,
  HiChevronDown,
  HiOutlineArchive,
  HiOutlineClock,
  HiOutlineMail,
  HiOutlineTrash,
  HiSelector,
  HiStop,
} from "react-icons/hi";
import {
  BiArchive,
  BiArrowFromLeft,
  BiBuilding,
  BiCaretRight,
  BiRightIndent,
  BiRightArrowAlt,
  BiUser,
  BiChevronDown,
  BiAddToQueue,
  BiListPlus,
  BiDollar,
  BiLabel,
  BiArrowFromRight,
} from "react-icons/bi";

const additional = [
  // {
  //   status: "Unread",
  //   office: "Nottingham",
  //   assignee: "Hannah Swift",
  //   type: "Vendor",
  // },
  {
    status: "In progress",
    office: "Manchester",
    assignee: "Hannah Swift",
    type: "Mortgage",
  },
  {
    status: "In progress",
    office: "Manchester",
    assignee: "Hannah Swift",
    type: "Sale",
  },
];

const HeaderActions = ({ children }) => {
  return <Box display="flex">{children}</Box>;
};

const HeaderAction = ({ children }) => {
  return (
    <Box
      w={8}
      h={8}
      display="flex"
      color="gray.500"
      alignItems="center"
      cursor="pointer"
      rounded="md"
      fontSize="md"
      justifyContent="center"
      _hover={{
        bg: "gray.50",
      }}
    >
      {children}
    </Box>
  );
};

const Header = () => {
  return (
    <Box
      height={14}
      minHeight={14}
      display="flex"
      alignItems="center"
      px={3}
      borderColor="gray.100"
    >
      <HeaderActions>
        <HeaderAction>
          <HiOutlineClock />
        </HeaderAction>
        <HeaderAction>
          <HiOutlineTrash />
        </HeaderAction>
        <HeaderAction>
          <BiArchive />
        </HeaderAction>
      </HeaderActions>
    </Box>
  );
};

const Section = ({ title, children, icon }) => {
  const [isOpen, setOpen] = useState(true);
  return (
    <Box bg="white" rounded="md">
      <Box
        display="flex"
        alignItems="center"
        mb={2}
        onClick={() => setOpen(!isOpen)}
        _hover={{ color: "blue.500" }}
        cursor="pointer"
      >
        <Box
          mr={1}
          display="flex"
          // bg="gray.50"
          opacity={0.5}
          w={6}
          h={6}
          alignItems="center"
          justifyContent="center"
          rounded="md"
        >
          {icon && React.createElement(icon)}
        </Box>
        {/* <Box fontSize="md" position="relative" mr={1} left={-1}> */}
        {/* <Box transform={isOpen === true ? "rotate(90deg)" : "rotate(0)"}>
          <BiCaretRight/>
          </Box>
        </Box> */}
        <Box fontWeight="semibold" fontSize="base">
          {title}
        </Box>
      </Box>
      {isOpen && children}
    </Box>
  );
};

const Cell = ({ children, isEditable }) => {
  return (
    <Box
      py={1}
      // px={3}
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

const AdditionalLead = ({ lead }) => {
  const { status, assignee, type } = lead;
  return (
    <Box
      display="flex"
      alignItems="center"
      fontSize="xs"
      border="1px solid"
      rounded="md"
      px={3}
      borderColor="gray.100"
      _hover={{ bg: "gray.50" }}
      py={2}
      cursor="pointer"
    >
      <Box mr={2}>
        <Office>{lead.office}</Office>
      </Box>
      <Label
        color={
          type === "Vendor" ? "blue" : type === "Mortgage" ? "orange" : "green"
        }
      >
        {type}
      </Label>

      <Box ml="auto" color="gray.400" display="flex">
        <Box display="flex" alignItems="center">
          <Box
            w={2}
            h={2}
            bg={status === "Unread" ? "blue.500" : "orange.500"}
            rounded="full"
            mr={1}
          />
          {lead.status}
        </Box>
      </Box>
    </Box>
  );
};

const Status = () => {
  return (
    <Box
      bg="white"
      shadow="sm"
      border="1px solid"
      mb={2}
      rounded="md"
      px={3}
      lineHeight="none"
      fontSize="sm"
      cursor="pointer"
      py={3}
      borderColor="gray.200"
      display="flex"
      alignItems="center"
    >
      <Box width={2} height={2} bg="blue.500" rounded="md" mr={2} />
      Unread
      <Box ml="auto">
        <HiSelector />
      </Box>
    </Box>
  );
};

const Activity = () => {
  return <Box></Box>;
};

const Office = ({ children }) => {
  return (
    <Box
      display="flex"
      bg="gray.50"
      rounded="md"
      py={1}
      border="1px solid"
      borderColor="gray.100"
      alignItems="center"
      px={2}
      lineHeight="none"
    >
      {/* <Box h="6px" w="6px" bg="blue.500" rounded="full" mr={1}/> */}
      {children}
    </Box>
  );
};

const ActionButton = () => {
  return (
    <Box bg="gray.100" h={24} w="full">
      <HiOutlineMail />
    </Box>
  );
};

export const Lead = ({ lead = {} as ILead }: { lead?: ILead }) => {
  const { person } = lead;
  const team = fetchTeam();
  return (
    <>
      <Box bg="white" height="100%" display="flex" flexDirection="column">
        <Header />
        <Box flex={1} display="flex" flexDirection="column" overflow="hidden">
          <Tabs height={16} isFitted={false} px={6}>
            <TabItem isActive={true}>Lead</TabItem>
            <TabItem>Notes</TabItem>
          </Tabs>
          <Box p={5} flex={1} overflow="scroll">
            <Stack spacing={6}>
              <Status />
              <Section title="Details" icon={HiBell}>
                <Attribute label="Date" value="Thu 4/02/21 @ 09:42" />
                <Attribute
                  label="Responsible"
                  value={
                    <Box position="relative">
                      <Dropdown>
                        <Cell isEditable={true}>
                          <Box display="flex" alignItems="center">
                            <Box mr={2}>
                              <Avatar
                                initials={team[0].name?.charAt(0)}
                                color={team[0].color}
                                size="xxs"
                              />
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
                                    <Avatar
                                      size="xxs"
                                      initials={member.name?.charAt(0)}
                                      color={member.color}
                                    />
                                  </Box>
                                  {member.name}
                                </Box>
                              </DropdownMenuItem>
                            );
                          })}
                        </DropdownMenu>
                      </Dropdown>
                    </Box>
                  }
                />

                <Attribute label="Office" value={<Office>Bristol</Office>} />
                <Attribute
                  label="Referred by"
                  value={<Office>Nottingham</Office>}
                />

                <Attribute
                  label="Source"
                  value={<Label color="blue">IVT</Label>}
                />
                <Attribute
                  label="Type"
                  value={<Label color="blue">Vendor</Label>}
                />
              </Section>
              <Section title="Other leads" icon={BiLabel}>
                <Stack spacing={2}>
                  {additional.map((additional) => {
                    return <AdditionalLead lead={additional} />;
                  })}
                </Stack>
              </Section>
              <Section title="Contact" icon={BiUser}>
                <Attribute label="Name" value="Sebastien Powell" />
                <Attribute label="Phone" value="079 22 999 559" />
                <Attribute label="Email" value="sebastienpowell@gmail.com" />
                <Attribute
                  label="Address"
                  value="15 Marlborough Court, IG9 5BN"
                />
              </Section>
              <Section title="Valuation report" icon={BiDollar}>
                <Attribute label="Bedrooms" value={3} />
                <Attribute
                  label="Address line 1"
                  value="15 Marlborough Court,"
                />
                <Attribute label="Postcode" value="IG9 5BN" />
                <Attribute label="Min. sales price" value="£150,000" />
                <Attribute label="Est. sales price" value="£250,000" />
                <Attribute label="Max. sales price" value="£300,000" />
              </Section>
            </Stack>
          </Box>
        </Box>
        <Box bg="gray.50" p={5}>
          <Box display="flex">
            <Avatar imageSrc="" initials="SP" color="orange" />
            <Box
              bg="white"
              width="100%"
              p={5}
              rounded="md"
              border="1px solid"
            />
          </Box>
        </Box>
        <Box>
          <ActionButton />
        </Box>
      </Box>
    </>
  );
};
