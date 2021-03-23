import { Box } from "components";
import React, { Children, useState } from "react";
import { BiCaretRight } from "react-icons/bi";

export const LeadSection = ({ title, children, icon, p = 5, border = "1px solid", pb }: any) => {
  const [isOpen, setOpen] = useState(true);
  return (
    <Box bg="white" p={p} borderBottom={border} borderColor="gray.50" pb={pb}>
      <Box
        display="flex"
        alignItems="center"
        onClick={() => setOpen(!isOpen)}
        cursor="pointer"
      >
        {title && (
          <>
            <Box
              w={4}
              h={4}
              bg="gray.50"
              rounded="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mr={2}
              fontSize="xs"
              color="gray.600"
            >
              <Box transform={`rotate(${isOpen ? "90deg" : "0deg"})`}>
                <BiCaretRight />
              </Box>
            </Box>
            <Box fontWeight="semibold" fontSize="sm" color="gray.800">
              {title}
            </Box>
          </>
        )}
      </Box>
      {isOpen && <Box mt={title && 2}>{children}</Box>}
    </Box>
  );
};
