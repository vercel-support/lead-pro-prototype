import { Box } from "components";
export const Office = ({ children }) => {
    return (
      <Box
        display="flex"
        bg="gray.100"
        rounded="md"
        py={1}
        alignItems="center"
        color="gray.700"
        fontSize="xs"
        px={2}
        lineHeight="none"
      >
        {/* <Box h="6px" w="6px" bg="blue.500" rounded="full" mr={1}/> */}
        {children}
      </Box>
    );
  };