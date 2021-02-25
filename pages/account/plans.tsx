import React from "react";
import { Box, Grid, Column, Button, Stack } from "components";
import { LayoutSettings } from "components/layouts/LayoutSettings";
import { fetchPlans } from "services/api";
import { HiCheck } from "react-icons/hi";

const Plan = ({ plan }) => {
  const { name, price, features, description } = plan;
  return (
    <Box
      w="full"
      bg="white"
      border="1px solid"
      p={8}
      rounded="md"
      borderColor="gray.200"
      shadow="sm"
    >
      <Box
        fontSize="sm"
        fontWeight="bold"
        textTransform="uppercase"
        mb={2}
        lineHeight="none"
        color="blue.500"
        letterSpacing="wide"
      >
        {name}
      </Box>
      <Box fontSize="4xl" fontWeight="bold" lineHeight="none" mb={2}>
        {price}
      </Box>
      <Box mb={4} color="gray.400">
        {description}
      </Box>
      <Box mb={4}>
        <Stack>
          {features.map((feature) => {
            return (
              <Box display="flex" fontSize="sm">
                  <Box mr={3}>
                <Box w={6} h={6} bg="gray.100" rounded="full" display="flex" alignItems="center" justifyContent="center">
                  <HiCheck />
                </Box>
                </Box>
                {feature}
              </Box>
            );
          })}
        </Stack>
      </Box>
      <Button isBlock variant="primary">
        Upgrade
      </Button>
    </Box>
  );
};

export default function PageOffices() {
  const plans = fetchPlans();
  return (
    <LayoutSettings title="Plans">
      <Grid columns={3}>
        {plans.map((plan) => {
          return (
            <Column>
              <Plan plan={plan} />
            </Column>
          );
        })}
      </Grid>
    </LayoutSettings>
  );
}
