import { Box } from "components";

export const Cell = ({ children, isEditable }) => {
  return (
    <Box
      py={1}
      rounded="md"
      cursor="pointer"
      _hover={{
        bg: isEditable === true && "gray.50",
      }}
    >
      {children}
    </Box>
  );
};
