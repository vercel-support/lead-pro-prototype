import { fetchOffices, fetchTeam } from "services/api";
import { Box, Avatar, DropdownMenuItem, DropdownMenuSearch } from "components";
import { HiCheck } from "react-icons/hi";
import { Toggle } from "components/atoms";
import _ from "underscore";

const Office = ({ office }) => {
  const { name } = office;
  return (
    <Box display="flex" alignItems="center" width="100%">
      <Box mr={2}>
        <Toggle size="sm" isChecked />
      </Box>
      {name}
    </Box>
  );
};

export const SelectOfficeMenu = () => {
  const offices = fetchOffices();

  return (
    <>
    <Box px={3}>
      <DropdownMenuSearch/>
    </Box>
      {_.sortBy(offices, "name").map((office) => {
        return (
          <DropdownMenuItem>
            <Office office={office} />
          </DropdownMenuItem>
        );
      })}
    </>
  );
};
