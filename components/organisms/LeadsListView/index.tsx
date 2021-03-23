import { Box, Avatar, Stack } from "components";
import React, { useState } from "react";
import _ from "underscore";
import { ILead } from "interfaces/lead.interface";
import { LeadsSection } from "components/organisms/LeadsSection";

const Checkbox = () => {
  return (
    <Box
      w={4}
      h={4}
      border="1px solid"
      position="absolute"
      left={2}
      top={3}
      rounded="md"
      shadow="sm"
      borderColor="gray.200"
      opacity={0}
      _groupHover={{ opacity: 1 }}
    />
  );
};

export const ListViewItem = ({
  lead,
  columns,
  isSelected,
}: {
  lead?: any;
  columns?: any;
  isSelected?: any;
}) => {
  const { person } = lead;

  const { fullName } = person;
  const ref = React.useRef();

  return (
    <Box
      display="flex"
      borderBottom="1px solid"
      role="group"
      bg="white"
      alignItems="center"
      cursor="pointer"
      borderColor="gray.50"
      height={10}
      position="relative"
      fontSize="sm"
    >
      <Checkbox />
      {columns.map((column, i) => {
        const isLast = i === columns.length - 1 ? true : false;
        return (
          <Box
            width={!isLast && column.width}
            borderRight={!isLast ? "1px solid" : "none"}
            flexShrink={0}
            flex={isLast ? 1 : "none"}
            borderColor="gray.50"
            px={3}
            h="full"
            alignItems="center"
            display="flex"
          >
            {column.component &&
              React.createElement(column.component, { lead })}
          </Box>
        );
      })}
    </Box>
  );
};

export const LeadsListView = ({ leads }) => {
  return <LeadsSection leads={leads} component={ListViewItem} />;
};
