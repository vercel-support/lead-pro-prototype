import { Box, Table, Label, Tabs, TabItem, InternalLink } from "components";
import React, { useState } from "react";
import _ from "underscore";
import { leadStatuses } from "constants/leadStatuses";
import { useRouter } from "next/router";

export const LeadsStatusTabs = () => {
  const router = useRouter();

  const { query } = router;

  const { status } = query;

  return (
    <Tabs height="50px">
      {leadStatuses.map((s, i) => {
        const { href, color } = s;
        return (
          <InternalLink href={`/leads/${href}`} display="block" flex={1}>
            <TabItem isActive={status === s.href ? true : false} color={color}>
              {s.label}
            </TabItem>
          </InternalLink>
        );
      })}
    </Tabs>
  );
};
