import { Tabs, TabItem, Box, Container, Stack } from "components";

export const DividerHeader = ({ title }) => {
    return (
      <Box display="flex" alignItems="center" w="full">
        <Box
          my={4}
          textTransform="uppercase"
          letterSpacing="wide"
          fontSize="xs"
          whiteSpace="nowrap"
          mr={2}
          color="gray.400"
          fontWeight="bold"
        >
          {title}
        </Box>
        <Box borderTop="1px solid" w="full" borderColor="gray.100" />
      </Box>
    );
  };