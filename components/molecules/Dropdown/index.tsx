import { Box, Input } from "components";
import { MenuList as _MenuList, Menu as _Menu, MenuButton as _MenuButton } from "@chakra-ui/react";
import { Children, useContext, useState } from "react";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";

export const Dropdown = (props: any) => {
  return <div></div>;
};

export const Menu = ({children}: any) => {
  return (
    <_Menu>
      {children}
    </_Menu>
  )
}

export const MenuButton = ({children}: any) => {
  return (
    <_MenuButton>
      {children}
    </_MenuButton>
  )
}

export const MenuList = ({children, width}: any) => {
  return (
    <_MenuList borderColor="gray.100" shadow="md" py={2} width={width}>
      {children}
    </_MenuList>
  )
}

export const DropdownMenuHeading = ({ children }) => {
  return (
    <Box lineHeight="none" px={4} py={1} mb={1} fontSize="sm" color="gray.400">
      {children}
    </Box>
  );
};

export const DropdownMenuHeader = ({ children }) => {
  return (
    <Box
      textAlign="left"
      px={3}
      fontSize="xs"
      lineHeight="none"
      pt={2}
      pb={2}
      textTransform="uppercase"
      letterSpacing="wide"
      opacity={0.75}
    >
      {children}
    </Box>
  );
};

export const DropdownMenuSearch = () => {
  return (
    <Input placeholder="Search" fontSize="xs" h="auto" bg="gray.50" px={3} border="none" lineHeight="none" py={2}/>
  )
}

export const DropdownMenuDivider = () => {
  return <Box borderTop="1px solid" borderColor="gray.100" my={2} w="full" />;
};

export const DropdownMenuGroup = ({title, children}) => {
  return (
    <Box>
      <Box px={3} textTransform="uppercase" letterSpacing="wide" fontSize="xs" color="gray.500" fontWeight="semibold" mb={1}>
      {title}
      </Box>
      {children}
    </Box>
  )
}

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
      alignItems="center"
      fontSize="sm" 
      fontWeight="medium"
      width="100%"
      onClick={(e) => handleClick(e)}
    >
      {icon && <Box mr={2}>{icon}</Box>}
      <Box flex={1}>{children}</Box>
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

type positions =
  | "topRight"
  | "bottomRight"
  | "topLeft"
  | "bottomLeft"
  | "right";

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

  return <div>{children}</div>;
};
