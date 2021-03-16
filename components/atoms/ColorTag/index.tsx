import { Box } from "components";

export const ColorTag = ({ color }) => {
  return <Box w={2} h={2} bg={`${color}.500`} rounded="full" />;
};
