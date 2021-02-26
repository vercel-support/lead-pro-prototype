import {
  Box,
  Container,
  PageBody,
  Stack,
  Image,
  Button,
  Input,
  Divider,
  InternalLink,
  AspectRatio,
} from "components";
import { PageHeader } from "components/molecules";
import { HiArrowLeft } from "react-icons/hi";
import { paths } from "constants/paths";

const Logo = ({ imageSrc }) => {
  return (
    <AspectRatio ratio={1} rounded="full" overflow="hidden">
      <Image src={imageSrc} />
    </AspectRatio>
  );
};

const Field = () => {
  return (
    <>
      <Box fontSize="sm" lineHeight="none" fontWeight="semibold" mb={1}>
        Mailchimp list
      </Box>
      <Box mb={2} color="gray.400" fontSize="sm">
        This is the list your leads will be synced to.
      </Box>
      <Box>
        <Input defaultValue="MC-12355" />
      </Box>
    </>
  );
};

export const Integration = () => {
  return (
    <>
      <Box mb={6}>
        <InternalLink href={paths.INTEGRATIONS_INDEX}>
          <Box display="flex" alignItems="center">
            <Box mr={3}>
              <HiArrowLeft />
            </Box>
            Integrations
          </Box>
        </InternalLink>
      </Box>
      <Box display="flex">
        <Box minW={32}>
          <Logo imageSrc="/integrations/mailchimp.png" />
        </Box>
        <Box pl={6}>
          <Box fontSize="xs" color="blue.500" textTransform="uppercase" letterSpacing="wide" fontWeight="bold">
            Marketing
          </Box>
          <Box fontSize="2xl" fontWeight="semibold">
            Mailchimp
          </Box>
          <Box fontWeight="normal" mb={3} fontSize="sm">
            Discover how people find and interact with your typeform. Get the
            data you need to measure campaigns, improve conversions, and more.
          </Box>
          <Button>Disconnect</Button>
          <Divider my={6} />
          <Field />
          <Divider my={6} />
          <Box display="flex">
            <Box ml="auto">
          <Button variant="primary" size="md">Save</Button>
          </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
