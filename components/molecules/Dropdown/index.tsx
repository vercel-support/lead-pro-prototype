import { Box } from "components";
import { Children, useContext, useState } from "react";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";

export const Dropdown = ({
  children,
  showMode,
  isOpen = false,
  display
}: {
  children: any;
  showMode?: any;
  display?: any;
  isOpen?: boolean;
}) => {
  const [_isOpen, setStatus] = useState(isOpen);

  const handleToggle = (status) => {
    setStatus(status);
  };

  return (
    <Box display="inline-block">
      <OutsideClickHandler
        onOutsideClick={() => {
          handleToggle(false);
        }}
      >
        <DropdownContext.Provider
          value={{
            isOpen: _isOpen,
            toggle: handleToggle,
          }}
        >
          <Box
            position="relative"
            display="inline-block"
            {...(showMode === "hover" && {
              onMouseEnter: () => handleToggle(true),
            })}
            {...(showMode === "hover" && {
              onMouseLeave: () => handleToggle(false),
            })}
            onClick={() => handleToggle(true)}
          >
            {children}
          </Box>
        </DropdownContext.Provider>
      </OutsideClickHandler>
    </Box>
  );
};

export const DropdownMenuHeading = ({ children }) => {
  return (
    <Box lineHeight="none" px={4} py={1} mb={1} fontSize="sm" color="gray.400">
      {children}
    </Box>
  );
}

export const DropdownMenuHeader= ({children}) => {
  return <Box textAlign="center" fontSize="sm" lineHeight="none" pt={2} pb={2}>{children}</Box>;
};

export const DropdownMenuDivider = () => {
  return <Box borderTop="1px solid" borderColor="gray.100" my={1} />;
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
  const { isOpen: _isOpen } = useContext(DropdownContext);

  const pos =
    position === "bottomRight"
      ? { right: 0, top: "100%" }
      : { right: 0, top: "100%" };

  return (
    <Box
      position="absolute"
      overflowY="hidden"
      bg="white"
      color="gray.900"
      shadow="sm"
      py={1}
      rounded="md"
      width={width}
      border="1px solid"
      borderColor="gray.100"
      transition="all .25s"
      transform={_isOpen === true ? "translateY(0)" : "translateY(10px)"}
      transformOrigin="100% 0"
      visibility={_isOpen === true ? "visible" : "hidden"}
      opacity={_isOpen === true ? "1" : 0}
      zIndex={999}
      style={{
        ...pos,
      }}
    >
      {children}
    </Box>
  );
};
