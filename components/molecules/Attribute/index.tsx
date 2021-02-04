import {Box} from "components";

export const Attribute = ({ label, value, py = 2, fontSize= "sm" }) => {
    return (
      <Box display="flex" py={py} alignItems="center" fontSize={fontSize}>
        <Box  width="150px" lineHeight="none" color="gray.400">{label}</Box>
        <Box  fontWeight="normal"> {value}</Box>
      </Box>
    );
  };
  