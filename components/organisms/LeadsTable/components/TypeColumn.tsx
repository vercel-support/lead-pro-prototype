import { Menu, MenuButton, Box, Avatar, MenuList, Label } from "components";
import { SelectUserMenu } from "components/organisms/SelectUserMenu";

export const TypeColumn = ({ column, lead }) => {
  return <Label color="blue">{lead.type}</Label>;
};
