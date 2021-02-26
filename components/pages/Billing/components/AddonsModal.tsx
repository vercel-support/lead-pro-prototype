import { Leads } from "components/pages/Leads";
import {
  Tabs,
  TabItem,
  Box,
  Container,
  Stack,
  Modal,
  ModalHeader,
  ModalBody,
} from "components";
import React from "react";
import { Addon } from "components/molecules/Addon";
import { fetchAddons } from "services/api";

export const AddonsModal = ({ isOpen, handleClose }) => {
  const addons = fetchAddons();
  return (
    <Modal isOpen={isOpen} size="4xl" handleClose={handleClose}>
      <ModalHeader>Addons</ModalHeader>
      <ModalBody>
        {addons.map((addon) => {
          return <Addon addon={addon} isActive={false} />;
        })}
      </ModalBody>
    </Modal>
  );
};
