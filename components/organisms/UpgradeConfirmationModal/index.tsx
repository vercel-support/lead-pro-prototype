import { Box, Modal, ModalBody, Button } from "components";
import { Close } from "components/atoms";

export const UpgradeConfirmationModal = ({handleClose, isOpen, handleConfirm}) => {
  return (
    <Modal isOpen={isOpen} size="lg" handleClose={handleClose}>
      <Box position="absolute" right={4} top={4} onClick={handleClose}>
        <Close />
      </Box>
      <ModalBody>
        
      </ModalBody>
    </Modal>
  );
};
