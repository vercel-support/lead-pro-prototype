import {
  Box,
  Container,
  PageBody,
  Stack,
  Button,
  Card,
  Modal,
  Image,
  Input,
  ModalFooter,
  ModalHeader,
  InternalLink,
  Toggle,
} from "components";
import { useState } from "react";
import { Column, Grid, ModalBody, PageHeader } from "components/molecules";
import _ from "underscore";
import { AspectRatio } from "@chakra-ui/react";
import { fetchIntegrations, fetchIntegrationsCategories } from "services/api";
import { paths } from "constants/paths";
import { Integration } from "components/organisms/Integration";
import { ModalClose } from "components/molecules/Modal";

const Logo = ({ imageSrc }) => {
  return (
    <AspectRatio
      bg="gray.100"
      w={16}
      h={16}
      rounded="md"
      border="1px solid"
      borderColor="gray.100"
      ratio={16 / 9}
      overflow="hidden"
    >
      <Image src={imageSrc} />
    </AspectRatio>
  );
};

const IntegrationCard = ({ integration }) => {
  const { name, logo, description, activatedAt } = integration;
  return (
    <Card>
      <Box display="flex" w="full" p={4}>
        <Logo imageSrc={`/integrations/${logo}`} />
        <Box pl={4} display="flex" alignItems="center">
          <Box>
            <Box mb={2}>{name}</Box>
            <Box ml="auto">
              <Toggle isChecked={true} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

const IntegrationListItem = ({ integration, handleModal, handleShowIntegration }) => {
  const { name, logo, description, activatedAt } = integration;
  return (
    <Card>
      <Box display="flex" w="full" p={4} onClick={() => handleShowIntegration()} cursor="pointer">
        <Box flex={1}>
          <Logo imageSrc={`/integrations/${logo}`} />
        </Box>
        <Box pl={4} display="flex" alignItems="center">
          <Box pr={16}>
            <Box fontSize="md">{name}</Box>
            <Box fontSize="sm" color="gray.500" mb={3} fontWeight="normal">
              {description}
            </Box>
          </Box>
          <Box ml="auto" width={100} textAlign="right">
            {activatedAt ? (
              <Toggle isChecked={activatedAt} />
            ) : (
              <Button
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleModal();
                }}
              >
                Connect
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

const SidebarLink = ({
  label,
  count,
  isActive,
}: {
  label?: string;
  count?: number;
  isActive?: boolean;
}) => {
  return (
    <Box
      fontSize="sm"
      lineHeight="none"
      display="flex"
      px={3}
      py={2}
      bg={isActive === true ? "gray.50" : "transparent"}
      rounded="4px"
      fontWeight="normal"
      _hover={{ bg: "gray.50" }}
      cursor="pointer"
    >
      {label}
      <Box ml="auto" fontSize="xs" color="gray.400">
        {count}
      </Box>
    </Box>
  );
};

const Sidebar = () => {
  return (
    <Box>
      <Box minWidth="250px">
        <Box mb={2}>Categories</Box>
        <Stack spacing={1}>
          <SidebarLink label="All" count={12} isActive={true} />
          {categories.map((category) => {
            const { name, count } = category;
            return <SidebarLink label={name} count={count} />;
          })}
        </Stack>
        <Box mt={4}>
          <Box
            bg="blue.50"
            px={5}
            py={4}
            border="1px solid"
            borderColor="blue.400"
            fontSize="sm"
            rounded="4px"
            color="blue.900"
          >
            <Box>Can't find your integration?</Box>
            <Box textDecoration="underline">Get in touch.</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const Integrations = () => {
  const integrations = fetchIntegrations();
  const categories = fetchIntegrationsCategories();

  const [isModalOpen, setModalOpen] = useState(false);
  const [isIntegrationOpen, setIntegrationOpen] = useState(false);

  return (
    <Box width="100%" height="full" overflow="scroll">
      <PageHeader title="Integrations" />
      <Modal isOpen={isModalOpen} handleClose={() => setModalOpen(false)}>
        <ModalHeader>Connect your Drip account</ModalHeader>
        <ModalBody>
          <Stack spacing={4}>
            <Input placeholder="API key" />
            <Input placeholder="API secret" />
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Box ml="auto">
            <InternalLink href={paths.INTEGRATIONS_INDEX + "/mailchimp"}>
              <Button variant="primary" size="sm">
                Connect
              </Button>
            </InternalLink>
          </Box>
        </ModalFooter>
      </Modal>
      <Modal
        isOpen={isIntegrationOpen}
        handleClose={() => setIntegrationOpen(false)}
        size="3xl"
      >
        <Box position="absolute" top={3} right={3}>
          <ModalClose />
        </Box>
        <ModalBody padding={12}>
          <Integration />
        </ModalBody>
      </Modal>
      <PageBody>
        <Container maxWidth="3xl">
          {/* <Grid columns={3}>
            {_.sortBy(integrations, "name").map((integration) => {
              if (integration.activatedAt) {
                return (
                  <Column>
                    <Box onClick={() => setIntegrationOpen(true)}>
                      <IntegrationCard integration={integration} />
                    </Box>
                  </Column>
                );
              } else {
                return <></>;
              }
            })}
          </Grid> */}
          <Box display="flex">
            <Stack>
              {_.sortBy(integrations, "name").map((integration) => {
                const { activatedAt } = integration;

                return (
                  <IntegrationListItem
                    handleModal={(e) => {
                      setModalOpen(true);
                    }}
                    handleShowIntegration={() => setIntegrationOpen(true)}
                    integration={integration}
                  />
                );
              })}
            </Stack>
          </Box>
        </Container>
      </PageBody>
    </Box>
  );
};

export default Integrations;
