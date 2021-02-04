import { Box, Heading, PseudoBox, AspectRatioBox, Image } from "components";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { usePagination, useTable, useSortBy } from "react-table";
import styled from "styled-components";

const TableHeader = ({ headerGroup }) => {
  return headerGroup.headers.map((column, i) => {
    return <TableHeaderCell key={i} column={column} />;
  });
};

const Styles = styled.div`
  
    tr:not(:last-of-type) {
      td {
        border-bottom: 1px solid #e6eaec;
      }
    }
  
`;

const TableHeaderCell = ({ column }) => {
  return (
    <Box
      as="th"
      bg="white"
      textAlign="left"
      fontSize="xs"
      lineHeight="none"
      top={0}
      position="sticky"
      p={0}
      fontWeight="medium"
      color="gray.400"
      borderColor="gray.100"
      minWidth={column.width}
      {...column.getHeaderProps(column.getSortByToggleProps())}
    >
      <Box
        borderBottom="1px solid"
        borderRight="1px solid"
        py={3}
        px={3}
        borderColor="gray.100"
      >
        <Box
          position="relative"
          role="group"
          title={column.tooltip}
          lineHeight="none"
          color={column.isSorted ? "gray.900" : "gray.400"}
          whiteSpace="nowrap"
          _hover={{
            color: "gray.900",
          }}
        >
          <Box
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box mr={column.isSorted ? 2 : 0}>{column.render("Header")}</Box>
            {/* <Box ml="auto" position="relative">
              {column.isSorted ? (
                <Box>
                  {column.isSortedDesc ? (
                    <IoMdArrowDropup size={13} />
                  ) : (
                    <IoMdArrowDropdown size={13} />
                  )}
                </Box>
              ) : null}
            </Box> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const TableRow = ({ row, onClick }) => {
  const { column } = row.cells[row.id];

  return (
    <Box
      as="tr"
      onClick={onClick}
      _hover={{
        bg: "gray.50",
      }}
    >
      {row.cells.map((cell, i) => {
        const { isEditable } = cell.column;

        return cell.column.isVisible !== false ? (
          <Box
            key={i}
            title={cell.value}
            className={cell.column.class}
            lineHeight="none"
            p={0}
            px={isEditable === true ? 0 : 3}
            fontWeight="medium"
            color="gray.700"
            as="td"
            borderRight="1px solid"
            borderColor="gray.100"
            _hover={{
              bg: isEditable === true && "gray.100",
              boxShadow: isEditable === true  && "inset 0px 0px 0px 1px #000",
              outline: "",
            }}
            height="40px"
            role="group"
            fontSize="xs"
            {...cell.getCellProps()}
          >
            {cell.render("Cell")}
          </Box>
        ) : null;
      })}
    </Box>
  );
};

export const Table = (props) => {
  const {
    data,
    columns,
    defaultSort,
    isLoading,
    onRowClick,
    hiddenColumns = [],
  } = props;
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,

    page,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      pageCount: Math.ceil(data.length / 10),
      initialState: {
        pageIndex: 0,
        pageSize: 50,
        hiddenColumns,
        sortBy: defaultSort ? defaultSort : [],
      },
    },
    useSortBy,
    usePagination
  );

  return (
    <Styles>
      <Box
        {...getTableProps()}
        as="table"
        bg="white"
        fontSize="base"
        width="100%"
        // overflow="hidden"
        tableLayout="fixed"
        borderBottom="1px solid"
        borderColor="gray.100"
        style={{
          borderCollapse: "separate",
          borderSpacing: 0,
        }}
      >
        <Box as="thead">
          <Box as="tr">
            {headerGroups.map((headerGroup, i) => {
              return <TableHeader key={i} headerGroup={headerGroup} />;
            })}
          </Box>
        </Box>

        <Box as="tbody" {...getTableBodyProps()}>
          
          {page.map((row, i) => {
            prepareRow(row);
            return row.original && row.original.blankRow ? (
              <Box
                key={i}
                title={row.id}
                lineHeight="none"
                borderTop="1px solid"
                borderColor="gray.100"
                as="tr"
                _hover={{
                  bg: "gray.100",
                }}
                bg="brand.secondary.base"
              >
                <Box
                  as="td"
                  color="white"
                  height="40px"
                  fontWeight="600"
                  textAlign="center"
                  verticalAlign="middle"
                >
                </Box>
              </Box>
            ) : (
              <TableRow
                key={i}
                row={row}
                onClick={() => onRowClick && onRowClick(row)}
              />
            );
          })}
        </Box>
      </Box>
    </Styles>
  );
};

export default Table;
