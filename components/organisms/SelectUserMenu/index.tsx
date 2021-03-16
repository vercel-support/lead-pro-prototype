import { fetchTeam } from "services/api";
import {Box, Avatar, DropdownMenuItem} from "components";

export const SelectUserMenu = () => {
  const team = fetchTeam();

  return (
    <>
      {team.map((m) => {
        return (
          <DropdownMenuItem>
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
      })}
    </>
  );
};
