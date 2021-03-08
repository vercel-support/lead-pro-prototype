import { Box } from "components";

export const Input = ({
  defaultValue,
  placeholder,
  type = "text"
}: {
  defaultValue?: string;
  placeholder?: string;
  type?: string;
}) => {
  return (
    <Box
      as="input"
      placeholder={placeholder}
      // border="1px solid"
      bg="gray.50"
      // borderColor="gray.200"
      rounded="md"
      px={3}
      h={8}
      type={type}
      w="full"
      fontSize="sm"
      defaultValue={defaultValue}
      lineHeight="1.5"
      pb="2px"
      _focus={{ outline: "none", borderColor: "teal.500" }}
    />
  );
};
