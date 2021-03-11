import { Box, Avatar, Stack } from "components";
import React, { useState } from "react";
import _ from "underscore";
import { ILead } from "interfaces/lead.interface";
import { LeadsSection } from "components/organisms/LeadsSection";

// const ListViewItemIcon = ({ children }) => {
//   return (
//     <Box
//       opacity={0.5}
//       _hover={{
//         opacity: 1,
//       }}
//     >
//       {children}
//     </Box>
//   );
// };

// const ListViewItemIconContainer = ({ children }) => {
//   return (
//     <Box
//       w={7}
//       h={7}
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//       // rounded="md"
//       // _hover={{
//       //   bg: "gray.100",
//       // }}
//     >
//       {children}
//     </Box>
//   );
// };

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
      borderColor="gray.100"
      height={14}
    >
      {columns.map((column, i) => {

        const isLast = i === columns.length - 1 ? true : false;
        
        return (
          <Box
            width={!isLast && column.width}
            borderRight={!isLast ? "1px solid": "none"}
            flexShrink={0}
            flex={isLast ? 1 : "none"}
            borderColor="gray.100"
            py={3}
            px={6}
            h="full"
            alignItems="center"
            display="flex"
          >
            {column.component &&
              React.createElement(column.component, { lead })}
          </Box>
        );
      })}
{/* 
      <Box
        opacity={0}
        _groupHover={{
          opacity: 1,
        }}
      >
        <HStack spacing={1}>
          <ListViewItemIconContainer>
            <ListViewItemIcon>
              <HiArchive />
            </ListViewItemIcon>
          </ListViewItemIconContainer>
          <ListViewItemIconContainer>
            <ListViewItemIcon>
              <HiTrash />
            </ListViewItemIcon>
          </ListViewItemIconContainer>
        </HStack>
      </Box> */}
    </Box>
  );
};

export const LeadsListView = ({ leads }) => {
  return <LeadsSection leads={leads} component={ListViewItem} />;
};
