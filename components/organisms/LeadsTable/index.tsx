import {
  Box,
  Menu,
  MenuList,
  HStack,
  DropdownMenuHeader,
  DropdownMenuItem,
  Label,
  Avatar,
} from "components";
import { fetchLeads } from "services/api";
import React, { useState } from "react";
import { Lead } from "./components/Lead";
import _ from "underscore";
import { LeadsKanbanView } from "components/organisms/LeadsKanbanView";
import { LeadsStages } from "components/organisms/LeadsStages";
import { LeadsToolbar } from "components/organisms/LeadsToolbar";
import { LeadTypes } from "constants/leadTypes";
import {
  LeadsListView,
  ListViewItem,
} from "components/organisms/LeadsListView";
import { leadGroupings } from "constants/leadGroupings";
import { Center, FormControl, MenuButton, Square } from "@chakra-ui/react";
import {
  HiBriefcase,
  HiCalendar,
  HiChevronRight,
  HiEmojiSad,
  HiIdentification,
  HiInbox,
  HiUser,
  HiSun,
} from "react-icons/hi";
import { DropdownMenuDivider, Stack } from "components/molecules";
import { LeadsFilter } from "../LeadsFilter";
import {Resizable} from "re-resizable";

type views = "Kanban" | "Table" | "List";

interface ILeadsTableContext {
  view: views;
  sectionBy: leadGroupings;
  handleSetView: Function;
  handleSetSection: Function;
}

export const DateColumn = ({ children }) => {
  return (
    <Menu>
      <MenuButton>{/* 19 Mar 2023 */}</MenuButton>
      <MenuList width={200}>
        <DropdownMenuItem icon={<HiSun />}>Later today</DropdownMenuItem>
        <DropdownMenuItem icon={<HiSun />}>This evening</DropdownMenuItem>
        <DropdownMenuItem icon={<HiSun />}>Tomorrow</DropdownMenuItem>
        <DropdownMenuItem icon={<HiSun />}>Next week</DropdownMenuItem>
        <DropdownMenuItem icon={<HiSun />}>
          Specific date and time
        </DropdownMenuItem>
      </MenuList>
    </Menu>
  );
};

export const ResponsibleColumn = () => {
  return (
    <Menu>
      <MenuButton display="flex">
        <Box display="flex" alignItems="center" fontSize="sm">
          <Box mr={2}>
            <Avatar
              size="xxs"
              initials="S"
              color="blue"
              imageSrc="https://s3.amazonaws.com/profile_photos/9385458149476.ro69QIeUi8md7Lr0OAFD_60x60.png"
            />
          </Box>
          Sam Z.
        </Box>
      </MenuButton>
      <MenuList></MenuList>
    </Menu>
  );
};

export const StatusColumn = () => {
  return (
    <Box flex={1}>
      <Menu>
        <MenuButton display="flex" alignItems="center">
          <Label color="red">Keep in touch</Label>
        </MenuButton>
        <MenuList>
          <DropdownMenuHeader>In progress</DropdownMenuHeader>
          <DropdownMenuItem>Keep in touch</DropdownMenuItem>
          <DropdownMenuItem>Contacted</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuHeader>Business</DropdownMenuHeader>
          <DropdownMenuItem>Viewing Booked</DropdownMenuItem>
          <DropdownMenuItem>Valuation Booked</DropdownMenuItem>
          <DropdownMenuItem>Instructed</DropdownMenuItem>
          <DropdownMenuDivider />
          <DropdownMenuHeader>No Business</DropdownMenuHeader>
          <DropdownMenuItem>Non contactable</DropdownMenuItem>
          <DropdownMenuItem>Lost to other agent</DropdownMenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

const PersonColumn = ({ column, lead }) => {
  const { fullName, type, person } = lead;
  return (
    <Box flex={1}>
      {/* <Box w={2} h={2} bg="red.500" rounded="full" pos="absolute" /> */}
      <Box mb={1} lineHeight="none" fontSize="sm" fontWeight="semibold">
        {person.fullName}
      </Box>
      <Box fontSize="xs">
        <HStack>
          <Box
            color="blue.500"
            fontWeight="semibold"
            lineHeight="none"
            textTransform="uppercase"
          >
            {type}
          </Box>
          <Box opacity={0.5} fontWeight="normal" lineHeight="none">
            25 Torridge Road
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

const SidebarLink = ({ children, icon, isActive, color = "gray" }: any) => {
  return (
    <Box
      px={2}
      py={2}
      bg={isActive && `${color}.50`}
      _hover={{
        bg: !isActive && "gray.50",
      }}
      rounded="md"
      display="flex"
      alignItems="center"
      lineHeight="none"
      cursor="pointer"
      fontSize="sm"
      color={isActive ? `${color}.800` : "gray.400"}
    >
      <Box mr={2} fontSize="lg">
        <Square>
          <Center>{icon}</Center>
        </Square>
      </Box>
      {children}
    </Box>
  );
};

const columns = [
  {
    name: "Name",
    width: 400,
    icon: HiUser,
    component: PersonColumn,
  },
  {
    name: "Status",
    width: 200,
    icon: HiIdentification,
    component: StatusColumn,
  },
  {
    name: "Responsible",
    width: 200,
    icon: HiUser,
    component: ResponsibleColumn,
  },
  {
    name: "Next action date",
    width: 200,
    icon: HiCalendar,
    component: DateColumn,
  },
];

const sections = [
  {
    name: "Today",
  },
  {
    name: "Tomorrow",
  },
  {
    name: "This week",
  },
  {
    name: "Next week",
  },
  {
    name: "Later",
  },
];

const CustomHandle = (props) => (
  <Box
    width={1}
    height="100%"
    top={"5px"}
    right={0}
    transition="all .5s"
    rounded="full"
    bg="transparent"
    // bg="blue.500"
    cursor="col-resize"
    zIndex={999}
    position="absolute"
    _hover={{
      bg: "blue.700",
      transform: "scaleX(1.2)",
    }}
    {...props}
  />
);

const LeadsTableHeaderCell = ({ children, column, isLast }) => {
  return (
    <Box
      px={6}
      py={2}
      borderRight={!isLast ? "1px solid" : "none"}
      fontSize="xs"
      color="gray.400"
      borderBottom="1px solid"
      borderColor="gray.100"
      display="flex"
      alignItems="center"
      flexShrink={0}
      flex={isLast ? 1 : ""}
      width={column.width}
    >
      <Box mr={2}>
        <Square bg="gray.400" w={4} h={4} color="white" rounded="sm">
          {React.createElement(column.icon)}
        </Square>
      </Box>
      {children}
    </Box>
  );
};

const LeadsSection = ({ section }) => {
  const { name } = section;

  let leads = fetchLeads();

  return (
    <Box w="full">
      <Box display="flex" alignItems="center" px={6} pb={2} pt={6}>
        {/* <Square cursor="pointer" rounded="sm" w={6} h={6}>
          <Center>
            <HiChevronRight />
          </Center>
        </Square> */}
        <Box
          lineHeight="none"
          textTransform="uppercase"
          opacity={0.5}
          fontSize="xs"
          fontWeight="bold"
        >
          {name}
        </Box>
        <Box ml="auto" opacity={0.5} fontSize="sm">
          16 Dec 2020
        </Box>
      </Box>
      <Box shadow="sm">
        {leads.map((lead) => {
          return <ListViewItem lead={lead} columns={columns} />;
        })}
      </Box>
    </Box>
  );
};

// const SidebarFilters = () => {
//   return (
//     <>
//       <Box>
//         <SidebarSectionHeading>Lead types</SidebarSectionHeading>
//         <Stack spacing={2}>
//           {LeadTypes.map((type) => {
//             const { name, color } = type;
//             return (
//               <SidebarItem icon={<ColorTag color={type.color} />}>
//                 {name}
//               </SidebarItem>
//             );
//           })}
//         </Stack>
//       </Box>

//       {/* <Box>
//         <SidebarSectionHeading>Offices</SidebarSectionHeading>
//         <Stack spacing={2}>
//           {offices.map((office) => {
//             return (
//               <SidebarItem icon={<ColorTag color={office.color} />}>
//                 {office.name}
//               </SidebarItem>
//             );
//           })}
//         </Stack>
//       </Box>
//       </Box> */}
//     </>
//   );
// };

export const LeadsTableContext = React.createContext<ILeadsTableContext>({
  view: "Kanban",
  sectionBy: "none",
  handleSetSection: () => {},
  handleSetView: () => {},
});

export const LeadsTable = ({ status }) => {
  // const selectedStatus = _.findWhere(statuses, { href: status });

  const [view, setView] = useState<views>("List");

  // leads = leads.filter((el) => el.status === selectedStatus.code);

  const [isLeadOpen, setLeadOpen] = useState(false);

  const [selectedLead, setSelectedLead] = useState(null);

  const [sectionBy, setSectionBy] = useState<leadGroupings>("none");

  const handleSetView = (view) => {
    setView(view);
  };

  const handleSetSection = (section: leadGroupings) => {
    alert(section);
    setSectionBy(section);
  };

  const handleRowClick = (row) => {
    setLeadOpen(true);
    setSelectedLead(row);
  };

  return (
    <LeadsTableContext.Provider
      value={{ view, sectionBy, handleSetView, handleSetSection }}
    >
      <Box flex={1} display="flex">
        <Box
          w={72}
          h="full"
          bg="white"
          borderRight="1px solid"
          borderColor="gray.100"
          p={6}
        >
          <Stack spacing={1}>
            <SidebarLink color="blue" isActive icon={<HiInbox />}>
              Inbox
            </SidebarLink>
            <SidebarLink color="blue" icon={<HiBriefcase />}>
              Business
            </SidebarLink>
            <SidebarLink color="blue" icon={<HiEmojiSad />}>
              No business
            </SidebarLink>
          </Stack>

          {LeadTypes.map((type) => {
            const { name, color } = type;
            return <DropdownMenuItem>{name}</DropdownMenuItem>;
          })}
        </Box>
        <Box flex={1}>
          <LeadsStages />
          <LeadsToolbar />
          <Box bg="gray.50" flex={1}>
            <Box display="flex">
              {columns.map((column, i) => {
                return (
                  <LeadsTableHeaderCell
                    column={column}
                    isLast={i === columns.length - 1 ? true : false}
                  >
                    {column.name}
                  </LeadsTableHeaderCell>
                );
              })}
            </Box>

            {sections.map((section) => {
              return <LeadsSection section={section} />;
            })}
          </Box>
        </Box>
      </Box>

      <Resizable
        defaultSize={{ height: "auto", width: 500 }}
        minWidth={500}
        handleComponent={{
          left: <CustomHandle />,
        }}
        maxWidth="50%"
      >
        <Box
          // minW={600}
          bg="gray.50"
          borderLeft="1px solid"
          borderColor="gray.100"
          zIndex={2}
          height="100%"
        >
          <Lead />
        </Box>
      </Resizable>
    </LeadsTableContext.Provider>
  );
};
