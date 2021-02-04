import React from "react";
import { Box, Tag } from "components/atoms";

export const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <Box display="flex" alignItems="center">
      {tags.map((tag) => {
        return <Tag mr={1}>{tag}</Tag>;
      })}
    </Box>
  );
};
