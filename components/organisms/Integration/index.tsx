import {
  Box,
  Container,
  PageBody,
  Stack,
  Image,
  Heading,
  Button,
  Input,
  Toggle,
  Divider,
  InternalLink,
  AspectRatio,
} from "components";
import { PageHeader } from "components/molecules";
import { HiArrowLeft } from "react-icons/hi";
import { paths } from "constants/paths";

const Logo = ({ imageSrc }) => {
  return (
    <AspectRatio ratio={1} rounded="md" overflow="hidden">
      <Image src={imageSrc} />
    </AspectRatio>
  );
};

const Field = ({
  label,
  description,
  component,
}: {
  label: string;
  description?: string;
  component: any;
}) => {
  return (
    <>
      <Box fontSize="sm" lineHeight="none" fontWeight="semibold" mb={1}>
        {label}
      </Box>
      {description && (
        <Box mb={2} color="gray.400" fontSize="sm">
          {description}
        </Box>
      )}
      <Box>{component}</Box>
    </>
  );
};

const Section = ({ title, children }: { title?: string; children: any }) => {
  return (
    <Box>
      {title && (
        <Heading fontSize="lg" mb={3} fontWeight="semibold">
          {title}
        </Heading>
      )}
      {children}
    </Box>
  );
};

const RadioField = ({
  label,
  component,
}: {
  label: string;
  component: any;
}) => {
  return (
    <Box
      py={4}
      borderTop="1px solid"
      borderColor="gray.100"
      display="flex"
      alignItems="center"
    >
      <Box fontSize="base">{label}</Box>
      <Box ml="auto">{component}</Box>
    </Box>
  );
};

export const Integration = () => {
  return (
    <>
      <Box display="flex">
        <Box minW={24}>
          <Logo imageSrc="/integrations/mailchimp.png" />
        </Box>
        <Box pl={6}>
          <Box
            fontSize="xs"
            color="blue.500"
            textTransform="uppercase"
            letterSpacing="wide"
            fontWeight="bold"
          >
            Marketing
          </Box>
          <Box fontSize="2xl" fontWeight="semibold">
            Mailchimp
          </Box>
          <Box fontWeight="normal" mb={3} fontSize="md">
            Discover how people find and interact with your typeform. Get the
            data you need to measure campaigns, improve conversions, and more.
          </Box>
          <Divider my={8} />
          <Stack spacing={8}>
            <Section title="Authentication">
              <Field
                label="API key"
                component={
                  <Input defaultValue="78sdfg6796712" type="password" />
                }
              />
            </Section>
            <Section title="Settings">
              <Field
                label="Mailchimp list"
                description="This is the list your leads will be synced to."
                component={<Input defaultValue="MC-12355" />}
              />
            </Section>
            <Section>
              <RadioField
                label="Enable integration"
                component={<Toggle isChecked={true} />}
              />
              <RadioField
                label="Disconnect integration"
                component={<Button>Disconnect</Button>}
              />
            </Section>
          </Stack>
          <Divider my={6} />
          <Box display="flex">
            <Box ml="auto">
              <Button variant="primary" size="md">
                Save
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
