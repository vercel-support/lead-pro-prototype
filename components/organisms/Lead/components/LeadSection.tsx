import { Box } from "components";
import React, { Children, useState } from "react";
import { BiCaretRight } from "react-icons/bi";

export const LeadSection = ({ title, children, icon, p = 5, border = "1px solid", pb }: any) => {
  const [isOpen, setOpen] = useState(true);
  return (
    <Box p={p} borderBottom={border} borderColor="gray.50" pb={pb}>
      <Box
        display="flex"
        alignItems="center"
        onClick={() => setOpen(!isOpen)}
        cursor="pointer"
      >
        {title && (
          <>
            <Box
              w={5}
              h={5}
              bg="gray.100"
              rounded="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mr={2}
              fontSize="xs"
              color="gray.600"
              _hover={{
                bg: "gray.200"
              }}
            >
              <Box transform={`rotate(${isOpen ? "90deg" : "0deg"})`}>
                <BiCaretRight />
              </Box>
            </Box>
            <Box fontWeight="semibold" fontSize="sm" color="gray.900">
              {title}
            </Box>
          </>
        )}
      </Box>
      {isOpen && <Box mt={title && 2}>{children}</Box>}
    </Box>
  );
};
