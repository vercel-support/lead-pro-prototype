import { Box } from "components";
import React, { useContext } from "react";
import { Close } from "components/atoms";

interface ModalContext {
  handleClose: any;
  isOpen: boolean;
}

const ModalContext = React.createContext<ModalContext>({
  handleClose: () => {},
  isOpen: false,
});

export const Modal = ({ children, handleClose, isOpen, size = "md" }) => {
  return isOpen ? (
    <ModalContext.Provider value={{ handleClose, isOpen }}>
      <Box
        w="full"
        h="full"
        bg="rgba(00,00,00,0.3)"
        display="flex"
        position="fixed"
        left={0}
        top={0}
        zIndex={999}
        alignItems="center"
        justifyContent="center"
        onClick={handleClose}
      >
        <Box
          maxW={size}
          bg="white"
          rounded="md"
          shadow="lg"
          w="full"
          position="relative"
          overflow="hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </Box>
      </Box>
    </ModalContext.Provider>
  ) : (
    <></>
  );
};

export const ModalBody = ({ children, padding = 6 }) => {
  return <Box p={padding}>{children}</Box>;
};

export const ModalHeader = ({ children }) => {
  return (
    <Box
      borderBottom="1px solid"
      px={6}
      py={4}
      fontSize="md"
      display="flex"
      borderColor="gray.100"
      alignItems="center"
    >
      {children}
      <ModalClose />
    </Box>
  );
};

export const ModalFooter = ({ children }) => {
  return (
    <Box
      bg="gray.50"
      px={6}
      py={4}
      fontSize="lg"
      display="flex"
      borderTop="1px solid"
      borderColor="gray.100"
      
    >
      {children}
    </Box>
  );
};

export const ModalClose = () => {
  const { handleClose } = useContext(ModalContext);

  return (
    <Box
      cursor="pointer"
      onClick={handleClose}
      w={6}
      h={6}
      display="flex"
      alignItems="center"
      justifyContent="center"
      ml="auto"
      rounded="md"
      _hover={{
        bg: "gray.100",
      }}
    >
      <Close />
    </Box>
  );
};
