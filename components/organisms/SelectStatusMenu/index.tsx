import {
  Box,
  Menu,
  MenuList,
  HStack,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuDivider,
  Label,
  ModalFooter,
  ModalBody,
  Avatar,
} from "components";
import { ColorTag } from "components/atoms";
import { fetchStages } from "services/api";

const StatusItem = ({ color, name, handleClick }) => {
  return (
    <DropdownMenuItem onClick={handleClick}>
      <Box display="flex" alignItems="center">
        <Box mr={2}>
          <ColorTag color={color} />
        </Box>
        {name}
      </Box>
    </DropdownMenuItem>
  );
};

export const SelectStatusMenu = ({ handleClick }) => {
  const stages = fetchStages();
  return (
    <>
      {stages.map((stage, i) => {
        return (
          <>
            <DropdownMenuGroup title={stage.name}>
              {stage.statuses.map((status) => {
                return (
                  <StatusItem
                    color={status.color}
                    name={status.name}
                    handleClick={handleClick}
                  />
                );
              })}
            </DropdownMenuGroup>
            {i < stages.length - 1 && <DropdownMenuDivider />}
          </>
        );
      })}
    </>
  );
};
