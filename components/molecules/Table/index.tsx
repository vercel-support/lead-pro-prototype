import { Box } from "components";
import { usePagination, useTable, useSortBy } from "react-table";
import styled from "styled-components";
import _ from "underscore";
import React, { useState } from "react";
import { BiChevronRight, BiCaretRight } from "react-icons/bi";

const TableHeader = ({ headerGroup }) => {
  return (
    <>
      <Box
        as="th"
        width="40px"
        borderBottom="1px solid"
        borderColor="gray.100"
      />
      {headerGroup.headers.map((column, i) => {
        const isLastIndex =
          i ===
          _.findLastIndex(headerGroup.headers, function (o) {
            return o.isVisible === true;
          })
            ? true
            : false;

        return <TableHeaderCell key={i} column={column} isLast={isLastIndex} />;
      })}
    </>
  );
};

const Styles = styled.div`
  tr:not(:last-of-type) {
    td {
      border-bottom: 1px solid #e6eaec;
    }
  }
`;

const TableHeaderCell = ({ column, isLast }) => {
  const { icon } = column;
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
        borderRight={isLast === true ? "none" : "1px solid"}
        // py={3}
        height="45px"
        display="flex"
        alignItems="center"
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
            {icon && (
              <Box mr={1} fontSize="md">
                {React.createElement(icon)}
              </Box>
            )}
            <Box mr={column.isSorted ? 2 : 0} position="relative" top="1px">
              {column.render("Header")}
            </Box>
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

const TableExpander = ({ onClick, subRows, isOpen }) => {
  return (
    <Box
      as="td"
      width="40px"
      onClick={onClick}
      fontSize="md"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="40px"
      cursor="pointer"
    >
      {subRows.length > 0 && (
        <Box transform={isOpen === true ? "rotate(90deg)" : "rotate(0)"}>
          <BiCaretRight />
        </Box>
      )}
    </Box>
  );
};

const TableRow = ({ row, onClick, prepareRow }) => {
  const { column } = row.cells[row.id];

  const [isOpen, setOpen] = useState(false);

  const { subRows } = row;

  console.log(subRows);

  return (
    <>
      <Box
        as="tr"
        onClick={onClick}
        _hover={{
          bg: "gray.50",
        }}
      >
        <TableExpander
          onClick={() => setOpen(!isOpen)}
          subRows={subRows}
          isOpen={isOpen}
        />
        {row.cells.map((cell, i) => {
          const { isEditable } = cell.column;

          const isLastIndex = _.findLastIndex(row.cells, function (o) {
            return o.column.isVisible === true;
          });

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
              borderRight={i < isLastIndex && "1px solid"}
              borderColor="gray.100"
              _hover={{
                bg: isEditable === true && "gray.100",
                boxShadow:
                  isEditable === true &&
                  "inset 0px 0px 0px 1px rgba(00, 00, 00, 0.3)",
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

      {subRows.length > 0 && (
        <Box
          as="tr"
          bg="gray.50"
          display={isOpen === true ? "table-row" : "none"}
          onClick={onClick}
          _hover={{
            bg: "gray.50",
          }}
        >
          <Box width="30px"></Box>
          {subRows.map((subRow) => {
            prepareRow(subRow);
            return (
              <>
                {subRow.cells.map((cell, i) => {
                  const { isEditable } = cell.column;

                  const isLastIndex = _.findLastIndex(subRow.cells, function (o) {
                    return o.column.isVisible === true;
                  });

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
                      borderRight={i < isLastIndex && "1px solid"}
                      borderColor="gray.100"
                      _hover={{
                        bg: isEditable === true && "gray.100",
                        boxShadow:
                          isEditable === true &&
                          "inset 0px 0px 0px 1px rgba(00, 00, 00, 0.3)",
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
              </>
            );
          })}
        </Box>
      )}
    </>
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
                ></Box>
              </Box>
            ) : (
              <TableRow
                prepareRow={prepareRow}
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
