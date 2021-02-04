import { Box, Table, Avatar, Image, Dropdown } from "components";
import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  > div {
    height: 100%;
  }
`;

export const TableControl = ({ children, isEditable, component }: {children?: any, isEditable?: any, component?: any}) => {
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
