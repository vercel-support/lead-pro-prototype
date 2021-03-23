import { Box, Grid } from "components";
import { Column, HStack } from "components/molecules";

import { HiMail, HiPhone, HiPhoneOutgoing, HiSelector, HiStop } from "react-icons/hi";

const CommsButton = ({ children, color, bgColor, borderColor }) => {
  return (
    <Box
      display="inline-flex"
      bg={`${bgColor}`}
      color={color}
      px={6}
      height={9}
      alignItems="center"
      textAlign="center"
      fontSize="sm"
      width="100%"
      lineHeight="none"
      justifyContent="center"
      border="1px solid"
      borderColor={borderColor}
      shadow="sm"
      rounded="md"
      cursor="pointer"
    >
      {children}
    </Box>
  );
};

export const LeadContactButtons = () => {
  return (
    <Box display="flex">
      <Box pr={1} flex={1}>
        <CommsButton
          color="white"
          bgColor="emerald.600"
          borderColor="green.600"
        >
          <Box mr={2}>
          <HiPhoneOutgoing/>
          </Box>
          Call lead
        </CommsButton>
        </Box>
      <Box pl={1} flex={1}>
        <CommsButton color="green.600" bgColor="white" borderColor="green.600">
          <Box mr={2}>

        <HiMail/>
        </Box>
          Send email
        </CommsButton>
        </Box>

    </Box>
  );
};
