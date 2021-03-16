
export const Test = () => {
  return (
    <div></div>
  )
}

// export const LeadsTableSidebar = () => {
//     return (
//       <Box
//         w={72}
//         h="full"
//         bg="white"
//         borderRight="1px solid"
//         borderColor="gray.100"
//         p={6}
//       >
//         <Stack spacing={1}>
//           <SidebarLink color="blue" isActive icon={<HiInbox />}>
//             Inbox
//           </SidebarLink>
//           <SidebarLink color="blue" icon={<HiBriefcase />}>
//             Business
//           </SidebarLink>
//           <SidebarLink color="blue" icon={<HiEmojiSad />}>
//             No business
//           </SidebarLink>
//         </Stack>
  
//         {LeadTypes.map((type) => {
//           const { name, color } = type;
//           return <DropdownMenuItem>{name}</DropdownMenuItem>;
//         })}
//       </Box>
//     );
//   };


// const SidebarFilters = () => {
//   return (
//     <>
//       <Box>
//         <SidebarSectionHeading>Lead types</SidebarSectionHeading>
//         <Stack spacing={2}>
//           {LeadTypes.map((type) => {
//             const { name, color } = type;
//             return (
//               <SidebarItem icon={<ColorTag color={type.color} />}>
//                 {name}
//               </SidebarItem>
//             );
//           })}
//         </Stack>
//       </Box>

//       {/* <Box>
//         <SidebarSectionHeading>Offices</SidebarSectionHeading>
//         <Stack spacing={2}>
//           {offices.map((office) => {
//             return (
//               <SidebarItem icon={<ColorTag color={office.color} />}>
//                 {office.name}
//               </SidebarItem>
//             );
//           })}
//         </Stack>
//       </Box>
//       </Box> */}
//     </>
//   );
// };
