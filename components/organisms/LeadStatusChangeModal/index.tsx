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

const Status = () => {
  return (
    <Box flex={1} p={3}>
      <Box textTransform="uppercase" fontSize="xs">
        In progress
      </Box>
      <Box>
        <Label color="red">Keep in touch</Label>
      </Box>
    </Box>
  );
};

export const LeadStatusChangeModal = ({ isOpen, handleClose }) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <ModalHeader>Update status</ModalHeader>
      <ModalBody>
        <Box display="flex" bg="gray.50" rounded="md">
          <Status />
          {/* <Box borderBottom="1px solid" display="flex"></Box> */}
          <Box >
          <HiArrowRight />
          </Box>
          <Status />
        </Box>
        {/* <Box>Business</Box> */}
        {/* <Box>Won</Box> */}
        {/* </Box> */}
        <div>What fee did you agree on?</div>
        <Input />
      </ModalBody>
      <ModalFooter>
        <Box ml="auto">
          <Button variant="primary">Move to 'Confirmed'</Button>
        </Box>
      </ModalFooter>
    </Modal>
  );
};
