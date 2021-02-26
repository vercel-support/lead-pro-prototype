import {
  Box,
  Input,
  Modal,
  Button,
  ModalBody,
  ModalHeader,
  Stack,
  Alert,
  ModalFooter,
} from "components";

export const CardModal = ({ isOpen, handleClose }) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <ModalHeader>Add payment method</ModalHeader>
      <ModalBody>
        <Box>
          <Box mb={4}>
            <Alert>You first need to add a card to this account.</Alert>
          </Box>
          <Stack>
            <Input placeholder="Card number" />
            <Box display="flex">
              <Box mr={3}>
                <Box maxW="140px">
                  <Input placeholder="Exp date" />
                </Box>
              </Box>
              <Box maxW="100px">
                <Input placeholder="CV2" />
              </Box>
            </Box>
          </Stack>
        </Box>
      </ModalBody>
      <ModalFooter>
        <Box ml="auto">
          <Button variant="primary" size="md">Add payment method</Button>
        </Box>
      </ModalFooter>
    </Modal>
  );
};
