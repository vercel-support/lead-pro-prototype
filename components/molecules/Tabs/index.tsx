import {Box} from "components";

export const Tabs = ({ children, height }: {children: any, height?: any}) => {
  return (
    <Box display="flex" borderBottom="1px solid" borderColor="gray.100" height={height}>
      {children}
    </Box>
  );
};

export const TabItem = ({ children, isActive, color = "blue" }: {children: any, isActive?: any, color?: string}) => {
  return (
    <Box
      flex={1}
      textAlign="center"
      px={3}
      py={3}
      fontSize="sm"
      cursor="pointer"
      position="relative"
      fontWeight="medium"
      color={isActive === true ? `${color}.500` : "gray.400"}
      role="group"
      _hover={{
        color: isActive === false && "gray.900"
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
            bg: !isActive && "gray.100"
          }}
        />
      
    </Box>
  );
};
