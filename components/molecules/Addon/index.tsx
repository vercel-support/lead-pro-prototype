import { Leads } from "components/pages/Leads";
import {
  Tabs,
  TabItem,
  Button,
  Box,
  Container,
  Stack,
  DividerHeader,
} from "components";
import React from "react";
import { HiOutlineUsers } from "react-icons/hi";

export const Addon = ({
  addon,
  isActive,
}: {
  isActive?: boolean;
  addon: any;
}) => {
  const {
    name,
    price,
    usage,
    color,
    description,
    charges,
    isRemovable,
  } = addon;

  let total = 0;

  charges &&
    charges.map((charge) => {
      total += charge.unitPrice;
    });

  return (
    <Box p={6} rounded="md" bg="white" shadow="md" border="1px solid" borderColor="gray.100">
      <Box display="flex" fontSize="md" alignItems="center">
        <Box d="flex" mb={1} alignItems="center">
          <Box
            w={7}
            h={7}
            bg={"gray.100"}
            mr={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            rounded="md"
          >
            <HiOutlineUsers />
          </Box>
          <Box fontSize="xl" lineHeight="none" mb={0} fontWeight="semibold">
            {name}
          </Box>
        </Box>

        <Box ml="auto">
          {isActive === false ? (
            <Button>Add add-on</Button>
          ) : (
            isRemovable && (
              <Box
                cursor="pointer"
                color="gray.400"
                lineHeight="none"
                fontSize="sm"
                _hover={{
                  textDecoration: "underline",
                }}
              >
                Remove add-on
              </Box>
            )
          )}
        </Box>

        {/* <Box ml="auto" fontWeight="semibold">
          £{price}
        </Box> */}
      </Box>
      <Box maxW="2xl" fontWeight="normal" opacity={0.75}>
        {description}
      </Box>

      <DividerHeader title="Charges" fontSize="xs" />
      <Box fontSize="sm">
        <Stack>
          {charges &&
            charges.map((charge) => {
              const { type } = charge;

              return (
                <>
                  {type === "Fixed" ? (
                    <Box display="flex">
                      <Box>{charge.feeName}</Box>
                      <Box ml="auto">£{charge.unitPrice}</Box>
                    </Box>
                  ) : type === "Variable" ? (
                    <Box display="flex">
                      <Box>
                        {charge.unitName} ({charge.usage} x £{charge.unitPrice})
                      </Box>
                      <Box ml="auto">£{charge.unitPrice * charge.usage} </Box>
                    </Box>
                  ) : (
                    <Box>
                      <Box lineHeight="none">
                        <Box display="flex" mb={1}>
                          <Box>
                            <Box display="flex">
                              <Box mr={1}>Usage fee</Box>
                              <Box alignItems="center">
                                <Box
                                  fontSize="sm"
                                  fontStyle="italic"
                                  display="flex"
                                  mb={2}
                                  opacity={0.5}
                                  alignItems="center"
                                >
                                  {charge.usage} of {charge.allowance}{" "}
                                  {charge.name} used
                                </Box>
                              </Box>
                            </Box>
                            <Box
                              width="300px"
                              h="6px"
                              bg="gray.200"
                              rounded="lg"
                            >
                              <Box
                                w={
                                  (charge.usage / charge.allowance) * 100 + "%"
                                }
                                rounded="lg"
                                bg="teal.500"
                                h="100%"
                              />
                            </Box>
                          </Box>
                          <Box ml="auto">
                            <Box display="flex" alignItems="center">
                              {charge.usage > charge.allowance && (
                                <Box
                                  fontSize="sm"
                                  mr={2}
                                  fontStyle="italic"
                                  color="gray.400"
                                  fontWeight="normal"
                                >
                                  £{charge.unitPrice} x{" "}
                                  {charge.usage - charge.allowance}
                                </Box>
                              )}
                              £
                              {charge.usage > charge.allowance
                                ? charge.unitPrice *
                                  (charge.usage - charge.allowance)
                                : 0}
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  )}
                </>
              );
            })}
        </Stack>
      </Box>
      <Box display="flex" mt={4} fontSize="sm" fontWeight="semibold">
        Subtotal
        <Box ml="auto">£{total}</Box>
      </Box>
    </Box>
  );
};
