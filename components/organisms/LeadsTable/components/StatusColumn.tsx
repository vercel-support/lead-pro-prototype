import {Box, Menu, MenuButton, Label, MenuList} from "components";
import {useContext} from "react";
import {LeadsTableContext} from "../";
import {SelectStatusMenu} from "components/organisms/SelectStatusMenu";

export const StatusColumn = ({ lead }) => {
    const { status } = lead;
    const { handleStatusChange } = useContext(LeadsTableContext);
    return (
      <Box flex={1} display="flex" alignItems="center">
        <Menu>
          <MenuButton>
            <Label color={status === "Contacted" ? "orange" : "red"}>
              {status}
            </Label>
          </MenuButton>
          <MenuList>
            <SelectStatusMenu handleClick={handleStatusChange} />
          </MenuList>
        </Menu>
      </Box>
    );
  };