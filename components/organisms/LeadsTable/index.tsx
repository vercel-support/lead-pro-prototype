import { Box } from "components";
import React, { useState, useContext } from "react";
import { Lead } from "./components/Lead";
import _ from "underscore";
import {fetchLeads} from "services/api";
import { LeadsStages } from "components/organisms/LeadsStages";
import { LeadsToolbar } from "components/organisms/LeadsToolbar";
import { LeadStatusChangeModal } from "components/organisms/LeadStatusChangeModal";
import { LeadsTableHeaderCell } from "./components/LeadsTableHeader";
import { columns } from "./components/Columns";
import {
  format,
  addDays,
  endOfISOWeek,
  addWeeks,
  startOfISOWeek,
} from "date-fns";
import { leadGroupings } from "constants/leadGroupings";
import { Resizable } from "re-resizable";
import { LeadsSection } from "./components/Sections";

type views = "Kanban" | "Table" | "List";

interface ILeadsTableContext {
  view: views;
  sectionBy: leadGroupings;
  handleSetView: Function;
  handleSetSection: Function;
  handleStatusChange: Function;
}

const CustomHandle = (props) => (
  <Box
    width={1}
    height="100%"
    top={0}
    right={0}
    transition="all .5s"
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

export const LeadsTableContext = React.createContext<ILeadsTableContext>({
  view: "Kanban",
  sectionBy: "none",
  handleSetSection: () => {},
  handleSetView: () => {},
  handleStatusChange: () => {},
});

export const LeadsTable = ({ status }) => {
  // const selectedStatus = _.findWhere(statuses, { href: status });
  const [view, setView] = useState<views>("List");
  const [isReasonModalOpen, setReasonModalOpen] = useState(false);
  // leads = leads.filter((el) => el.status === selectedStatus.code);

  const [isLeadOpen, setLeadOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);
  const [sectionBy, setSectionBy] = useState<leadGroupings>("none");
  let leads = fetchLeads();

  const sections = [
    {
      name: "Today",
      data: leads,
      date: format(new Date(), "eee do MMMM"),
    },
    {
      name: "Tomorrow",
      data: [],
      date: format(addDays(new Date(), 1), "eee do MMMM"),
    },
    {
      name: "This week",
      data: [],
      date: format(addDays(new Date(), 2), "eee do MMMM"),
    },
    {
      name: "Next week",
      data: [],
      date:
        format(startOfISOWeek(addWeeks(new Date(), 1)), "eee do MMMM") +
        " - " +
        format(endOfISOWeek(addWeeks(new Date(), 1)), "eee do MMMM"),
    },
    {
      name: "Later",
      data: [],
      date: format(startOfISOWeek(addWeeks(new Date(), 2)), "eee do MMMM"),
    },
  ];

  const handleSetView = (view) => {
    setView(view);
  };

  const handleStatusChange = () => {
    setReasonModalOpen(!isReasonModalOpen);
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
      value={{
        view,
        sectionBy,
        handleSetView,
        handleSetSection,
        handleStatusChange,
      }}
    >
      <Box flex={1} display="flex">
        <Box flex={1} display="flex" flexDirection="column">
          <LeadsStages />
          <LeadsToolbar />
          <LeadStatusChangeModal
            isOpen={isReasonModalOpen}
            handleClose={() => setReasonModalOpen(false)}
          />
          <Box bg="gray.50" flex={1} display="flex" flexDirection="column">
            <Box display="flex" bg="gray.50">
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

            <Box flex={1}>
              {sections.map((section) => {
                return <LeadsSection section={section} />;
              })}
            </Box>
          </Box>
        </Box>
      </Box>

      <Resizable
        defaultSize={{ height: "auto", width: 500 }}
        minWidth={500}
        handleComponent={{
          left: <CustomHandle />,
        }}
        maxWidth="80%"
      >
        <Box
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
