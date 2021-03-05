import { Box } from "components";

const sizes = {
  sm: {
    width: 6,
    height: 4,
  },
  md: {
    width: 9,
    height: 5,
  },
};

export const Toggle = ({ isChecked, size = "md" }) => {
  const selectedSize = sizes[size];

  return (
    <Box
      width={selectedSize.width}
      h={selectedSize.height}
      bg={isChecked ? "green.500" : "gray.200"}
      //   border="1px solid"
      rounded="full"
      display="inline-flex"
      alignItems="center"
      px={1 / 8 + "rem"}
      //   borderColor="gray.200"
    >
      <Box
        w={selectedSize.height - 1}
        h={selectedSize.height - 1}
        bg="white"
        shadow="md"
        rounded="full"
        ml={isChecked ? "auto" : 0}
      ></Box>
    </Box>
  );
};
