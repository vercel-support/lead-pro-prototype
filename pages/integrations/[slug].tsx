import { Integration } from "components/organisms/Integration";
import { Box, Container } from "components";

const Integrations = () => {
  return (
    <Box width="100%">
      <Box py={24}>
        <Container>
          <Integration />
        </Container>
      </Box>
    </Box>
  );
};

export default Integrations;
