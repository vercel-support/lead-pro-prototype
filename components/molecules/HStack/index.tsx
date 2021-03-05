import React from "react";
import { Box } from "components/atoms";

export const HStack = ({
  spacing = 3,
  children,
}: {
  spacing?: number;
  children?: any;
}) => {
  const childrenWithProps = React.Children.map(children, (child, i) => {
    if (child) {
      return (
      <Box mr={i < children.length - 1 ? spacing : 0}>
        {React.cloneElement(child)}
      </Box>);
    }

    else {
      return <></>  
    }
  });

  return <Box display="flex">{childrenWithProps}</Box>;
};
