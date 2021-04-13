import { Box } from "components";
import React from "react";
import { LeadSection } from "./LeadSection";
import { Stack } from "components/molecules";
import moment from "moment";

export const LeadBookingSection = () => {
  const request = [
    {
      date: "2021-10-06",
      hours: ["12:00"],
    },
    {
      date: "2021-10-11",
      hours: ["8:00", "9:00", "11:00", "13:00", "14:00"],
    },
    {
      date: "2021-10-15",
      hours: ["9:00"],
    },
    {
      date: "2021-10-17",
      hours: [
        "7:00",
        "8:00",
        "9:00",
        "11:00",
        "13:00",
        "14:00",
        "16:00",
        "18:00",
        "19:00",
      ],
    },
  ];

  return (
    <LeadSection title="Valuation booking request">
      <Box pl={6}>
        <Box
          fontSize="xs"
          color="gray.700"
          mb={2}
          textTransform="uppercase"
          fontWeight="bold"
          letterSpacing="wide"
        >
          October
        </Box>
        <Stack spacing={3}>
          {request.map((day) => {
            return (
              <Box>
                <Box display="flex" mb={2} alignItems="center">
                  <Box
                    whiteSpace="nowrap"
                    ml={0}
                    lineHeight="none"
                    bg="white"
                    fontSize="xs"
                    width={65}
                    display="flex"
                    color="gray.500"
                  >
                    {moment(day.date).format("ddd")}{" "}
                    {moment(day.date).format("Do")}
                  </Box>
                  <Box borderTop="1px solid" flex={1} borderColor="gray.100" />
                </Box>
                <Box display="flex" flexWrap="wrap">
                  {day.hours.map((hour) => {
                    return (
                      <Box
                        fontSize="xs"
                        rounded="md"
                        px={2}
                        border="1px solid"
                        borderColor="gray.100"
                        color="gray.600"
                        mr={1}
                        lineHeight="none"
                        py={1}
                        mb={1}
                      >
                        {hour}
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </LeadSection>
  );
};
