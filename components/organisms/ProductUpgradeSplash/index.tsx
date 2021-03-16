import { Box, Modal, ModalBody, Button, Stack } from "components";
import { AspectRatio, Close } from "components/atoms";
import { DividerHeader } from "components/molecules";
import { Children, useState } from "react";
import { HiPlay } from "react-icons/hi";
import { CardModal } from "../CardModal";

export const ProductUpgradeSplash = ({ product}) => {
  const [isUpgradeModalOpen, setUpgradeModalOpen] = useState(false);
  const { name, color, description, price, usage } = product;

  return (
    <>
      <CardModal
        isOpen={isUpgradeModalOpen}
        handleClose={() => setUpgradeModalOpen(false)}
      />
      <Box display="flex">
        <Box flex={1}>
          <Box display="flex" alignItems="center" mb={2}>
            {/* <Box w={5} h={5} bg="blue.300" rounded="full" mr={3}></Box> */}
            <Box
              color={`${color}.500`}
              textTransform="uppercase"
              letterSpacing="wide"
              fontWeight="bold"
              fontSize="sm"
            >
              {name}
            </Box>
          </Box>
          <Box mb={2} fontSize="2xl" fontWeight="semibold">
            Convert your website traffic into leads
          </Box>

          <Box fontSize="lg" color="gray.500" mb={6} fontWeight="normal">
            <Box mb={1}>{description}</Box>

            <Box>
              <DividerHeader title="Pricing" />£{price} per month, up to{" "}
              {/* {usage.allowance} {usage.type}. £{usage.feePerAdditionalUnit} for
              every additional {usage.type} above your allowance. */}
            </Box>
          </Box>

          <Box display="flex" alignItems="center">
            <Box>
              <Button
                variant="primary"
                onClick={() => setUpgradeModalOpen(true)}
                size="md"
              >
                Upgrade
              </Button>
            </Box>
            <Box lineHeight="none" color="gray.400" ml={4}>
              This will add £{price} to your monthly bill.
            </Box>
          </Box>
        </Box>

        <Box flex={1} pl={12}>
          <AspectRatio ratio={16 / 9} position="relative" cursor="pointer">
            <Box bg="teal.500" rounded="md">
              <Box
                width={20}
                height={20}
                color="white"
                rounded="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="6xl"
              >
                <HiPlay />
              </Box>
            </Box>
          </AspectRatio>
        </Box>
      </Box>
    </>
  );
};
