import { Box } from "components";

export const Tabs = ({
  children,
  height,
  isFitted = true,
  fontSize,
  px,
}: {
  children: any;
  height?: any;
  isFitted?: boolean;
  px?: number;
  fontSize?: string;
}) => {
  return (
    <Box
      display="flex"
      borderBottom="1px solid"
      borderColor="gray.100"
      height={height}
      fontSize={fontSize}
      px={px}
    >
      {children}
    </Box>
  );
};

export const TabItem = ({
  children,
  isActive,
  color = "teal",
}: {
  children: any;
  isActive?: any;
  color?: string;
}) => {
  return (
    <Box
      // flex={1}
      textAlign="center"
      px={5}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="100%"
      cursor="pointer"
      position="relative"
      fontWeight="medium"
      color={isActive === true ? `${color}.500` : "gray.400"}
      role="group"
      _hover={{
        color: isActive === false && "gray.900",
      }}
    >
      {children}

      <Box
        position="absolute"
        bottom={0}
        width="100%"
        bg={isActive === true ? `${color}.500` : "transparent"}
        height="3px"
        _groupHover={{
          bg: !isActive && "gray.100",
        }}
      />
    </Box>
  );
};
