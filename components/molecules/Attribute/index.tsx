import {Box} from "components";

export const Attribute = ({ label, value, py = 2, fontSize= "xs" }) => {
    return (
      <Box display="flex" py={py} alignItems="center" fontSize={fontSize}>
        <Box  width="150px" lineHeight="none" color="gray.400" fontWeight={500}>{label}</Box>
        <Box> {value}</Box>
      </Box>
    );
  };
  