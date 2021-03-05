import { Leads } from "components/pages/Leads";
import React from "react";
import { Box } from "components";
import { fetchLeads } from "services/api";
import { Lead } from "components/organisms/LeadsTable/components/Lead";
import {ListViewItem} from "components/organisms/LeadsListView";

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
];

const Section = ({ section, leads }) => {
  const { name } = section;

  return (
    <Box>
      <Box px={8} py={2} borderBottom="1px solid" bg="gray.50" display="flex" borderColor="gray.100" fontSize="sm">{name}</Box>
      {leads.map((lead) => {
          return (
              <ListViewItem lead={lead} isSelected={false} />
          )
      })}
    </Box>
  );
};

export default function PageDashboard({ status }) {
  const leads = fetchLeads();

  return (
    <Box display="flex" width="100%">
      <Box flex={1}>
        {sections.map((section) => {
          return <Section section={section} leads={leads} />;
        })}
      </Box>
      <Box borderLeft="1px solid" w={600}>
        <Lead />
      </Box>
    </Box>
  );
}

export async function getServerSideProps(ctx) {
  const { query } = ctx;

  return {
    props: {},
  };
}
