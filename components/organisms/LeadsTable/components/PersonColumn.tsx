import {Box} from "components";

export const PersonColumn = ({ column, lead }) => {
    const { fullName, type, person } = lead;
    return (
      <Box flex={1}>
        {/* <Box w={2} h={2} bg="red.500" rounded="full" pos="absolute" /> */}
        <Box lineHeight="none">
          {person.fullName}
        </Box>
        {/* <Box fontSize="xs">
          <HStack>
            <Box
              color="blue.500"
              fontWeight="semibold"
              lineHeight="none"
              textTransform="uppercase"
            >
              {type}
            </Box>
            <Box opacity={0.5} fontWeight="normal" lineHeight="none">
              25 Torridge Road
            </Box>
          </HStack>
        </Box> */}
      </Box>
    );
  };