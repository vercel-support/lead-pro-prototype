import { Tabs, TabItem, Box, Container, Stack } from "components";
import React, { Children } from "react";
import { InternalLink } from "components/atoms";
import { useRouter } from "next/router";
import { Leads } from "components/pages/Leads";
import { Button } from "components";
import { useState } from "react";
import { CardModal } from "components/organisms/CardModal";
import { UpgradeConfirmationModal } from "components/organisms/UpgradeConfirmationModal";
import { HiPhone } from "react-icons/hi";
import { fetchAddons } from "services/api";
import _ from "underscore";

const ProductContext = React.createContext();

export const LayoutProduct = ({ title, children }) => {
  const router = useRouter();
  const { route, query } = router;
  const { slug } = query;
  const [isUpgradeModalOpen, setUpgradeModalOpen] = useState(false);
  const [isCardModalOpen, setCardModalOpen] = useState(false);

  console.log(route);

  const products = fetchAddons();

  const product = _.findWhere(products, { slug });

  const handleConfirm = () => {
    setCardModalOpen(true);
  };

  const { name, icon } = product;

  return (
    <Box w="full" py={4} overflow="scroll" h="full" px={4}>
      <Box
        display="flex"
        alignItems="center"
        borderBottom="1px solid"
        pb={4}
        borderColor="gray.100"
      >
        <Box fontSize="xl" fontWeight="semibold" mb={0}>
          {name}
        </Box>
      </Box>
      <Box py={10}>{children}</Box>

      {/* <CardModal isOpen={isCardModalOpen} />
      <UpgradeConfirmationModal
        isOpen={isUpgradeModalOpen}
        handleClose={() => setUpgradeModalOpen(!isUpgradeModalOpen)}
        handleConfirm={handleConfirm}
      /> */}
      {/* 
      <Box p={12} bg="gray.50" rounded="md" textAlign="center">
        <Box mb={4}>Add this product to your account</Box>
        <Button onClick={() => setUpgradeModalOpen(true)}>Upgrade</Button>
      </Box> */}
    </Box>
  );
};
