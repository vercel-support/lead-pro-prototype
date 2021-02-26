import { Box } from "components";

export const Alert = ({ children }) => {
  return (
    <Box
      bg="white"
      border="1px solid"
      borderLeft="3px solid"
      p={3}
      borderColor="orange.500"
      borderLeftColor="orange.500"
      fontSize="sm"
      fontWeight="normal"
    >
      {children}
    </Box>
  );
};
