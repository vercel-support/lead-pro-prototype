import { Box, Table, Avatar, Image, Dropdown, DropdownMenu } from "components";
import { DropdownMenuItem } from "components/molecules";
import React, { useState } from "react";
import { TableControl } from "./TableControl";
import { fetchTeam } from "services/api";
import _ from "underscore";
import { HiX } from "react-icons/hi";

const T = ({ assignee, row }) => {
  const team = fetchTeam();

  const [member, setMember] = useState(
    _.findWhere(team, { id: assignee }) || {}
  );

  const handleSetMember = (newMember) => {
    setMember(newMember);
  };

  return (
    <Box position="relative" width="100%" height="100%">
      <Box display="flex" alignItems="center" role="group" height="100%">
        {member.id ? (
          <>
            <Box mr={2}>
              <Avatar
                size="xxs"
                color={member.color}
                initials={member.name?.charAt(0)}
              />
            </Box>
            {member.name}

            <Box
              ml="auto"
              onClick={(e) => {
                e.stopPropagation();
                setMember({});
              }}
              _groupHover={{ opacity: 1 }}
              opacity={0}
              width="38px"
              height="38px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="absolute"
              right={-3}
            >
              <HiX />
            </Box>
          </>
        ) : (
          <Box _groupHover={{ opacity: 1 }} opacity={0}>
            <Avatar size="xxs" icon={true} style="outline" />
          </Box>
        )}
      </Box>
      <DropdownMenu width="100%">
        {team.map((m) => {
          if (member.id !== m.id) {
            return (
              <DropdownMenuItem onClick={() => handleSetMember(m)}>
                <Box display="flex" alignItems="center" fontSize="xs">
                  <Box mr={2}>
                    <Avatar
                      size="xxs"
                      color={m.color}
                      initials={m.name?.charAt(0)}
                    />
                  </Box>
                  {m.name}
                </Box>
              </DropdownMenuItem>
            );
          }

          else {
            return <></>
          }
        })}
      </DropdownMenu>
    </Box>
  );
};

export const TeamMember = ({ assignee, row }) => {
  return (
    <TableControl
      isEditable={true}
      component={<T assignee={assignee} row={row} />}
    ></TableControl>
  );
};

export const TeamMemberDropdownItem = () => {
  return <Avatar size="xs" />;
};
