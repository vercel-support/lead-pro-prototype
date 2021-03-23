import {Menu, MenuButton, MenuList, DropdownMenuItem} from "components";
import {HiSun} from "react-icons/hi";

export const DateColumn = ({ children }) => {
    return (
      <Menu>
        <MenuButton>Not date set</MenuButton>
        <MenuList width={200}>
          <DropdownMenuItem icon={<HiSun />}>Later today</DropdownMenuItem>
          <DropdownMenuItem icon={<HiSun />}>This evening</DropdownMenuItem>
          <DropdownMenuItem icon={<HiSun />}>Tomorrow</DropdownMenuItem>
          <DropdownMenuItem icon={<HiSun />}>Next week</DropdownMenuItem>
          <DropdownMenuItem icon={<HiSun />}>
            Specific date and time
          </DropdownMenuItem>
        </MenuList>
      </Menu>
    );
  };