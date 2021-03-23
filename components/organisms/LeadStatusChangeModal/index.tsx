import {
  Modal,
  ModalBody,
  Box,
  ModalFooter,
  Button,
  Label,
  Input,
  ModalHeader,
} from "components";
import { HiArrowRight } from "react-icons/hi";

export const LeadStatusChangeModal = ({ isOpen, handleClose }) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <ModalHeader>Update status</ModalHeader>
      <ModalBody>
        <Box
          display="flex"
          bg="gray.50"
          rounded="md"
          alignItems="center"
          mb={5}
          padding={0}
          border="1px solid"
          borderColor="gray.100"
        >
          <Box
            flex={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Label color="red">Keep in touch</Label>
          </Box>
          <Box
            borderLeft="1px solid"
            height="70px"
            display="flex"
            position="relative"
            borderColor="gray.200"
          >
            <Box
              w={6}
              h={6}
              position="absolute"
              top="50%"
              left={-3}
              border="1px solid"
              borderColor="gray.200"
              rounded="full"
              color="gray.700"
              display="flex"
              shadow="sm"
              bg="white"
              alignItems="center"
              justifyContent="center"
              fontSize="sm"
              marginTop={-3}
            >
              <HiArrowRight />
            </Box>
          </Box>
          <Box
            flex={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Label color="purple">Instructed</Label>
          </Box>
        </Box>
        <Input placeholder="What fee did you agree on?" />
      </ModalBody>
      <ModalFooter>
        <Box ml="auto">
          <Button variant="primary">Move to 'Instructed'</Button>
        </Box>
      </ModalFooter>
    </Modal>
  );
};
