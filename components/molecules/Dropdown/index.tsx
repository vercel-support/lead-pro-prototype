import { Box } from "components";
export {MenuList, Menu} from "@chakra-ui/react";
import { Children, useContext, useState } from "react";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";


export const Dropdown = (props: any) => {
  return (
    <div></div>
  )
}

export const DropdownMenuHeading = ({ children }) => {
  return (
    <Box lineHeight="none" px={4} py={1} mb={1} fontSize="sm" color="gray.400">
      {children}
    </Box>
  );
}


export const DropdownMenuHeader= ({children}) => {
  return <Box textAlign="left" px={3} fontSize="xs" lineHeight="none" pt={2} pb={2} textTransform="uppercase" letterSpacing="wide" opacity={0.75}>{children}</Box>;
};

export const DropdownMenuDivider = () => {
  return <Box borderTop="1px solid" borderColor="gray.200" my={1} w="full" />;
};

export const DropdownMenuItem = ({
  children,
  onClick,
  icon,
}: {
  children: any;
  onClick?: Function;
  icon?: any;
}) => {
  const { toggle } = useContext(DropdownContext);

  const handleClick = (e) => {
    e.stopPropagation();
    toggle(false);
    onClick && onClick();
  };

  return (
    <Box
      _hover={{ bg: "gray.50" }}
      cursor="pointer"
      px={3}
      py={2}
      lineHeight="none"
      display="flex"
      fontWeight="normal"
      alignItems="center"
      fontSize="sm"
      onClick={(e) => handleClick(e)}
    >
      {icon && <Box mr={2}>{icon}</Box>}
      <Box opacity={0.75}>{children}</Box>
    </Box>
  );
};

interface IDropdownContext {
  isOpen: boolean;
  toggle: Function;
}

export const DropdownContext = React.createContext<IDropdownContext>({
  isOpen: false,
  toggle: () => {},
});

type positions = "topRight" | "bottomRight" | "topLeft" | "bottomLeft" | "right";

export const DropdownMenu = ({
  children,
  width = "100%",
  isOpen = false,
  p = 1,
  position = "bottomRight",
}: {
  children: any;
  width?: any;
  isOpen?: boolean;
  position?: positions;
  p?: any;
}) => {
  // const { isOpen: _isOpen } = useContext(DropdownContext);

  const pos =
    position === "bottomRight"
      ? { right: 0, top: "100%" }
      : { right: 0, top: "100%" };

  return (
    <div>
      {children}
    </div>
  );
};
