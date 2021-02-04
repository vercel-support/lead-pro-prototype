import { Box } from "components/atoms";
import React from "react";
import { HiChevronDown, HiOutlineCash, HiOutlineMail } from "react-icons/hi";

export const DrawerSection = ({
  title,
  children,
  icon,
  isOpen,
}: {
  title?: string;
  icon?: any;
  children?: any;
  isOpen?: boolean;
}) => {
  return (
    <Box  borderColor="gray.100" borderBottom="1px solid" pb={5} >
      <Box
        fontSize="lg"
        mb={5}
        display="flex"
        alignItems="center"
        lineHeight="none"
        cursor="pointer"
      >
        <Box mr={2} color="gray.600">
          {icon}
        </Box>
        {title}
      </Box>
      {isOpen !== false && children}
    </Box>
  );
};

export const DrawerAction = ({ name, icon }: { name?: string; icon?: any }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      px={2}
      py={2}
      border="1px solid"
      rounded="md"
      borderColor="gray.200"
      shadow="sm"
      cursor="pointer"
    >
      <Box
        width="30px"
        height="30px"
        fontSize="lg"
        mr={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {icon}
      </Box>
      {name}
    </Box>
  );
};


export const Drawer = ({children, isOpen}) => {
  return (
    <Box height="100vh" width="500px"  zIndex={9999} position="fixed" bg="white" right={isOpen === true ? "0" : "-500px"} top={0} shadow="-2px -4px 10px rgba(00,00,00,0.1), 0 0 0 1px rgba(00,00,00,0.05)" transition="all .25s">
      {children}
    </Box>
  )
}