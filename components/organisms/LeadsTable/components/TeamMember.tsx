import { Box, Table, Avatar, Image, Dropdown, DropdownMenu } from "components";
import { DropdownMenuItem } from "components/molecules";
import React from "react";
import { TableControl } from "./TableControl";
import { fetchTeam } from "services/api";
import _ from "underscore";

const T = ({assignee}) => {
  const team = fetchTeam();

  const member = _.findWhere(team, {id: assignee }) || {};

  return (
    <Box position="relative" width="100%">
      <Box display="flex" alignItems="center">
        <Box mr={2}>
          <Avatar
            size="xxs"
            color={member.color}
            initials={member.name.charAt(0)}
          />
        </Box>
        {member.name}
      </Box>
      <DropdownMenu width="200px">
        {team.map((member) => {
          return (
            <DropdownMenuItem>
              <Box display="flex" alignItems="center" fontSize="xs">
                <Box mr={2}>
                  <Avatar size="xxs"  color={member.color} initials={member.name?.charAt(0)}/>
                </Box>
                {member.name}
              </Box>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenu>
    </Box>
  );
};

export const TeamMember = ({assignee}) => {
  return <TableControl isEditable={true} component={<T assignee={assignee}/>}></TableControl>;
};

export const TeamMemberDropdownItem = () => {
  return <Avatar size="xs" />;
};
