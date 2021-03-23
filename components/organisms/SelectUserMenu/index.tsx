import { fetchTeam } from "services/api";
import { Box, Avatar, DropdownMenuItem, Input } from "components";
import { HiCheck } from "react-icons/hi";
import { DropdownMenuSearch } from "components/molecules";

const User = ({ initial, name, color, isSelected, imageSrc }: any) => {
  return (
    <Box display="flex" alignItems="center" width="100%">
      <Box mr={2}>
        <Avatar size="xxxs" color={color} initials={initial} imageSrc={imageSrc}/>
      </Box>
      {name}
      {isSelected && (
        <Box color="green.500" ml="auto">
          <HiCheck />
        </Box>
      )}
    </Box>
  );
};

export const SelectUserMenu = () => {
  const team = fetchTeam();

  return (
    <>
      <Box px={3}>
        <DropdownMenuSearch />
      </Box>
      <DropdownMenuItem>
        <User initial={"S"} color={"blue"} name={"Me"} isSelected imageSrc="https://s3.amazonaws.com/profile_photos/9385458149476.ro69QIeUi8md7Lr0OAFD_60x60.png" />
      </DropdownMenuItem>
      {team.map((m) => {
        return (
          <DropdownMenuItem>
            <User initial={m.name.charAt(0)} color={m.color} name={m.name} />
          </DropdownMenuItem>
        );
      })}
    </>
  );
};
