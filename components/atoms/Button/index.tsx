import { Box } from "components";

type variants = "primary" | "ghost";

export const Button = ({ children, variant, onClick }: {children, variant?: variants, onClick?: any}) => {

  return (
    <Box
      bg={variant === "primary" ?  "teal.500" : "white"}
      display="inline-block"
      color={variant === "primary" ? "white" : "gray.900"}
      cursor="pointer"
      border="1px solid"
      shadow="sm"
      fontSize="sm"
      px={4}
      lineHeight="none"
      py={2}
      rounded="4px"
      fontWeight="medium"
      borderColor={variant === "primary" ? "teal.600" : "gray.600"}
      {...(onClick && {onClick: onClick})}
    >
      {children}
    </Box>
  );
};
