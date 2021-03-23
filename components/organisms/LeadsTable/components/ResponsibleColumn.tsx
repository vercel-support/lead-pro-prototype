import {Menu, MenuButton, Box, Avatar, MenuList} from "components"
import {SelectUserMenu} from "components/organisms/SelectUserMenu";

export const ResponsibleColumn = () => {
    return (
      <Menu>
        <MenuButton>
          <Box display="flex" alignItems="center">
            <Box mr={2}>
              <Avatar
                size="xxxs"
                initials="S"
                color="blue"
                imageSrc="https://s3.amazonaws.com/profile_photos/9385458149476.ro69QIeUi8md7Lr0OAFD_60x60.png"
              />
            </Box>
            Sam Z.
          </Box>
        </MenuButton>
        <MenuList>
          <SelectUserMenu/>
        </MenuList>
      </Menu>
    );
  };