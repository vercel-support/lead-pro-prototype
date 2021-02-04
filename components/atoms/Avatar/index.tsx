import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Box, AspectRatio, Image } from "components";

const sizes = {
  xxs: "28px",
  xs: "36px",
  sm: "45px",
  base: "50px",
  md: "60px",
  lg: "80px",
};

export const Avatar = ({
  imageSrc,
  borderColor = "white",
  size = "base",
  color,
  initials,
}: {
  imageSrc?: string;
  borderColor?: any;
  size?: any;
  color?: any;
  initials?: any;
}) => {
  const selectedSize = sizes[size];

  const { colors } = useTheme();

  return (
    <AspectRatio
      width={selectedSize}
      height={selectedSize}
      ratio={1}
      rounded="full"
      display="inline-block"
      verticalAlign="middle"
      bg={colors[color] && colors[color][100]}
      color={colors[color] && colors[color][900]}
      overflow="hidden"
    >
      {imageSrc ? (
        <Image src={imageSrc} objectFit="cover" />
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center">
          {initials}
        </Box>
      )}
    </AspectRatio>
  );
};
