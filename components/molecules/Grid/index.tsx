import { Box } from "components/atoms";
import React, { useContext, ReactElement } from "react";

const calculateWidth = (columns: any) => {
  return 100 / columns + "%";
};

type GridContextType = {
  columns: number | number[];
  spacing: number | number[];
};

export const GridContext = React.createContext<GridContextType>({
  columns: [],
  spacing: [],
});

export const Column = ({ children }: { children: any }) => {
  const { columns, spacing } = useContext(GridContext);
  let width: any;
  let margin: number[] = Array.isArray(spacing) ? [...spacing] : [spacing];

  if (Array.isArray(columns)) {
    width = [];
    columns.map((val) => {
      width.push(calculateWidth(val));
    });
  } else {
    width = 100 / columns + "%";
  }

  return (
    <Box
      width={width}
      mb={margin.map((x: any) => {
        return x * 2;
      })}
      px={margin.map((x: any) => {
        return x;
      })}
    >
      {children}
    </Box>
  );
};

export const Grid = ({
  columns = [12],
  children,
  spacing = [4],
}: {
  columns?: number | number[];
  children?: ReactElement<typeof Column> | Array<ReactElement<typeof Column>>;
  spacing?: number | number[];
}) => {
  let margin: number[] = Array.isArray(spacing) ? [...spacing] : [spacing];

  return (
    <GridContext.Provider
      value={{
        columns: columns,
        spacing: spacing,
      }}
    >
      <Box display="flex" mx={margin.map((x: any) => x * -1)} flexWrap="wrap">
        {children}
      </Box>
    </GridContext.Provider>
  );
};
