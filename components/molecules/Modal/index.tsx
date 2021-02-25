import { Box } from "components";

export const Modal = ({ children, handleClose, isOpen, maxW = "md" }) => {
  return isOpen ? (
    <Box
      w="full"
      h="full"
      bg="rgba(00,00,00,0.2)"
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
        maxW={maxW}
        bg="white"
        rounded="md"
        shadow="lg"
        w="full"
        overflow="hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </Box>
    </Box>
  ) : (
    <></>
  );
};

export const ModalBody = ({ children }) => {
  return <Box p={6}>{children}</Box>;
};

export const ModalHeader = ({ children }) => {
  return (
    <Box bg="gray.100" borderB="1px solid" px={6} py={4} fontSize="lg">
      {children}
    </Box>
  );
};
