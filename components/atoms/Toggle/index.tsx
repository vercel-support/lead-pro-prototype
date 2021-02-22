import { Box } from "components";

export const Toggle = ({isChecked}) => {
  return (
    <Box
      width={9}
      h={5}
      bg={isChecked ? "green.500" : "gray.200"}
    //   border="1px solid"
      rounded="full"
      display="inline-flex"
      alignItems="center"
      px={1/8 + "rem"}
    //   borderColor="gray.200"
    >
      <Box w={4} h={4} bg="white" shadow="md" rounded="full" ml={isChecked ? "auto" : 0}></Box>
    </Box>
  );
};
