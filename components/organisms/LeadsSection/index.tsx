import { Box, Stack } from "components";
import { useState, useContext } from "react";
import _ from "underscore";
import { ILead } from "interfaces/lead.interface";
import React from "react";
import moment from "moment";
import { leadGroupings } from "constants/leadGroupings";
import { LeadsTableContext } from "components/organisms/LeadsTable";

const LeadsSectionGroupByDate = ({
  leads,
  component,
}: {
  leads: ILead[];
  component;
}) => {
  let _leads = _.groupBy(leads, "createdAt");

  const { view } = useContext(LeadsTableContext);

  return (
    <>
      {Object.keys(_leads).map((key, i) => {
        return (
          <Box>
            <Box
              px={4}
              mt={i > 0 ? 8 : 0}
              pb={2}
              mb={3}
              fontSize="sm"
              fontWeight="semibold"
              borderBottom="1px solid"
              borderColor="gray.100"
            >{`Created on ${moment(key).format("DD MMM")}`}</Box>

            <Stack spacing={view === "Kanban" ? 3 : 0}>
              {leads.map((lead) => {
                return <>{React.createElement(component, { lead })}</>;
              })}
            </Stack>
          </Box>
        );
      })}
    </>
  );
};

export const LeadsSection = ({
  component,
  leads,
}: {
  component: any;
  leads: ILead[];
}) => {
  const [isOpen, setOpen] = useState(true);

  const { sectionBy } = useContext(LeadsTableContext);

  if (sectionBy !== "none") {
    return (
      <Box>
        <LeadsSectionGroupByDate leads={leads} component={component} />
      </Box>
    );
  } else {
    return (
      <Box>
        {leads.map((lead) => {
          return (
            <>{React.createElement(component, { lead, isSelected: true })}</>
          );
        })}
      </Box>
    );
  }
};
