import { useState, useContext } from "react";
import { Box } from "components";
import { Center, Square } from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";
import { fetchLeads } from "services/api";
import { ListViewItem } from "components/organisms/LeadsListView";
import { columns } from "./Columns";
import { BiCaretRight } from "react-icons/bi";

export const LeadsSection = ({ section }) => {
  const { name, date, data } = section;

  const [isOpen, setOpen] = useState(true);

  return (
    <Box w="full">
      <Box display="flex" alignItems="center" px={2} pb={2} pt={6}>
        <Square
          cursor="pointer"
          w={5}
          h={5}
          _hover={{
            bg: "gray.100",
          }}
          rounded="md"
          mr={1}
          onClick={() => setOpen(!isOpen)}
        >
          <Center color="gray.500" fontSize="sm">
            <Box transform={isOpen ? "rotate(90deg)" : "none"}>
              <BiCaretRight />
            </Box>
          </Center>
        </Square>
        <Box
          lineHeight="none"
          color="gray.800"
          fontSize="sm"
          fontWeight="semibold"
        >
          {name}
        </Box>
        <Box ml="auto" opacity={0.5} fontSize="sm">
          {date}
        </Box>
      </Box>
      {isOpen && (
        <Box>
          {data.length > 0 ? (
            <Box shadow="sm">
            {data.map((lead) => {
              return <ListViewItem lead={lead} columns={columns} />;
            })}
            </Box>
          ) : (
            <Box px={8} fontSize="sm" opacity={0.5} fontStyle="italic">No leads </Box>
          )}
        </Box>
      )}
    </Box>
  );
};
