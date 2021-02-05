import { Box } from "components";
import { Children, useContext, useState } from "react";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";

export const Dropdown = ({
  children,
  showMode,
}: {
  children: any;
  showMode?: any;
}) => {
  const [isOpen, setStatus] = useState(false);

  const handleToggle = (status) => {
    console.log(status);
    setStatus(status);
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        handleToggle(false);
      }}
      display="flex"
    >
      <DropdownContext.Provider
        value={{
          isOpen,
          toggle: handleToggle,
        }}
      >
        <Box
          position="relative"
          height="100%"
          width="100%"
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
  );
};

export const DropdownMenuItem = ({ children, onClick }: {children: any, onClick?: Function}) => {
  const { toggle } = useContext(DropdownContext);

  const handleClick = (e) => {
    e.stopPropagation();
    toggle(false);
    onClick && onClick();
  };

  return (
    <Box
      _hover={{ bg: "gray.50" }}
      rounded="md"
      cursor="pointer"
      px={2}
      py={1}
      fontSize="sm"
      onClick={(e) => handleClick(e)}
    >
      {children}
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

export const DropdownMenu = ({
  children,
  width = "100%",
  isOpen = false,
  p = 1,
  position = "right",
}: {
  children: any;
  width?: any;
  isOpen?: boolean;
  position?: any;
  p?: any;
}) => {
  const { isOpen: _isOpen } = useContext(DropdownContext);

  return (
    <Box
      position="absolute"
      overflowY="hidden"
      bg="white"
      color="gray.900"
      shadow="sm"
      left={0}
      p={p}
      top="100%"
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
    >
      {children}
    </Box>
  );
};
