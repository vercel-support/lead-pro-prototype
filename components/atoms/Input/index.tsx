import { Box } from "components";

export const Input = ({defaultValue}) => {
  return (
    <Box
      as="input"
      placeholder="test"
      border="1px solid"
      borderColor="gray.200"
      rounded="md"
      px={3}
      py={2}
      w="full"
      defaultValue={defaultValue}
      lineHeight="none"
      _focus={{ outline: "none", borderColor: "teal.500" }}
    />
  );
};
