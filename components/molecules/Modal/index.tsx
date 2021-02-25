import {Box} from "components";


export const Modal = ({children, handleClose, isOpen, maxW = "md"}) => {
    return (
        isOpen &&
        <Box w="full" h="full" bg="rgba(00,00,00,0.2)" display="flex" position="fixed" left={0} top={0} zIndex={999} alignItems="center" justifyContent="center" onClick={handleClose}>
            <Box maxW={maxW} bg="white" rounded="md" shadow="lg" w="full" p={8} onClick={(e) => e.stopPropagation()}>

               {children}
            </Box>
        </Box>
    )
}