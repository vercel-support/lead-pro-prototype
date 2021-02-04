import React from "react";
import { Box } from "components/atoms";

export const Stack = ({
  spacing = 3,
  children,
}: {
  spacing?: number;
  children?: any;
}) => {
  const childrenWithProps = React.Children.map(children, (child, i) => (
    <Box mb={i < children.length - 1 ? spacing : 0}>
      {React.cloneElement(child)}
    </Box>
  ));

  return <Box>{childrenWithProps}</Box>;
};
