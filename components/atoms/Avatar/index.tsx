import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Box, AspectRatio, Image } from "components";
import { HiOutlineUser } from "react-icons/hi";

const sizes = {
  xxxxs: { size: "16px", fontSize: "xs" },
  xxxs: { size: "20px", fontSize: "xs" },
  xxs: { size: "28px", fontSize: "sm" },
  xs: { size: "36px", fontSize: "sm" },
  sm: { size: "45px", fontSize: "md" },
  base: { size: "50px", fontSize: "md" },
  md: { size: "60px", fontSize: "lg" },
  lg: { size: "80px", fontSize: "lg" },
};

export const Avatar = ({
  imageSrc,
  borderColor = "white",
  size = "base",
  color,
  style,
  icon,
  initials,
}: {
  imageSrc?: string;
  borderColor?: any;
  size?: any;
  icon?: boolean;
  color?: any;
  style?: string;
  initials?: any;
}) => {
  const selectedSize = sizes[size];

  const { colors } = useTheme();

  return (
    <AspectRatio
      width={selectedSize.size}
      height={selectedSize.size}
      ratio={1}
      fontSize={selectedSize.fontSize}
      rounded="full"
      fontWeight="medium"
      lineHeight="none"
      display="inline-block"
      verticalAlign="middle"
      bg={colors[color] && colors[color][600]}
      color="white"
      overflow="hidden"
      {...(style === "outline" && {
        border: "1px solid",
      })}
    >
      {icon === true ? (
        <Box display="flex" alignItems="center" justifyContent="center">
          <HiOutlineUser />
        </Box>
      ) : imageSrc ? (
        <Image src={imageSrc} objectFit="cover" />
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center">
          {initials}
        </Box>
      )}
    </AspectRatio>
  );
};
