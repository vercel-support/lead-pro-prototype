import { Stack } from "@chakra-ui/react";
import { Box, Table, Avatar, Image, Dropdown } from "components";
import { Children, useState } from "react";
import { HiOutlineArchive, HiChevronDown, HiMenu } from "react-icons/hi";
import { fetchLeads } from "services/api";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Navigation } from "components/molecules";
import { LeadsTable } from "components";

import styled from "styled-components";

const Styles = styled.div`
  > div {
    height: 100%;
  }
`;

export const TableControl = ({ children, isEditable, component }) => {
  return (
    <Styles>
      <Box height="100%">
        <Dropdown>
          <Box
            cursor="pointer"
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            px={3}
          >
            {component ? component : children}
          </Box>
        </Dropdown>
      </Box>
    </Styles>
  );
};
