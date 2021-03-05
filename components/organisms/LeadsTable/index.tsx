import { Box } from "components";
import { fetchLeads } from "services/api";
import React, { useState } from "react";
import { Lead } from "./components/Lead";
import _ from "underscore";
import { LeadsKanbanView } from "components/organisms/LeadsKanbanView";
import { Sidebar } from "components/organisms/LeadsSidebar";
import { LeadsToolbar } from "components/organisms/LeadsToolbar";
import { LeadsListView } from "components/organisms/LeadsListView";
import { LeadsTableView } from "../LeadsTableView";
import { leadGroupings } from "constants/leadGroupings";
import { LeadsStatusTabs } from "components/organisms/LeadsStatusTabs";
import { Rnd } from "react-rnd";
import SplitPane, { Pane } from "react-split-pane";
import { Resizable } from "re-resizable";
import { FormControl } from "@chakra-ui/react";

type views = "Kanban" | "Table" | "List";

interface ILeadsTableContext {
  view: views;
  sectionBy: leadGroupings;
  handleSetView: Function;
  handleSetSection: Function;
}

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

export const LeadsTableContext = React.createContext<ILeadsTableContext>({
  view: "Kanban",
  sectionBy: "none",
  handleSetSection: () => {},
  handleSetView: () => {},
});

export const LeadsTable = ({ status }) => {
  let leads = fetchLeads();

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
      <Box flex={1} overflow="hidden" display="flex">
        <Sidebar />
        <Box display="flex" flexDirection="column" flex={1}>
          <Box display="flex" height="100%">
            <Box flex={1}>
              <LeadsToolbar />
              <LeadsStatusTabs />
              <Box display="flex" overflow="hidden" flex={1} bg="gray.50">
                <Box flex={1} display="flex" flexDirection="column">
                  <Box flex={1}>
                    {view === "Kanban" ? (
                      <LeadsKanbanView leads={leads} />
                    ) : view === "List" ? (
                      <LeadsListView leads={leads} />
                    ) : (
                      <LeadsTableView leads={leads} />
                    )}
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
              maxWidth="50%"
            >
              <Box
                // minW={600}
                bg="gray.50"
                borderLeft="2px solid"
                borderColor="gray.100"
                zIndex={2}
                height="100%"
              >
                <Lead />
              </Box>
            </Resizable>
          </Box>
        </Box>
      </Box>
    </LeadsTableContext.Provider>
  );
};
