import { Box } from "components";

type variants = "primary" | "ghost";

const sizes = {
  sm: {
    fontSize: "sm",
    px: 4,
    py: 2,
  },
  md: {
    fontSize: "md",
    px: 5,
    py: 3,
  },
};

export const Button = ({
  children,
  variant,
  onClick,
  isBlock,
  size = "sm",
}: {
  children;
  variant?: variants;
  onClick?: any;
  isBlock?: boolean;
  size?: keyof typeof sizes;
}) => {
  const selectedSize = sizes[size];

  return (
    <Box
      bg={variant === "primary" ? "emerald.600" : "white"}
      display="inline-block"
      color={variant === "primary" ? "white" : "gray.900"}
      cursor="pointer"
      border="1px solid"
      shadow="sm"
      fontSize={selectedSize.fontSize}
      px={selectedSize.px}
      lineHeight="none"
      textAlign="center"
      py={selectedSize.py}
      w={isBlock && "100%"}
      rounded="4px"
      fontWeight="medium"
      borderColor={variant === "primary" ? "emerald.600" : "gray.600"}
      {...(onClick && { onClick: onClick })}
    >
      {children}
    </Box>
  );
};
