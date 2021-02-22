import {Box} from "components";

export const Card = ({children}) => {
    return (
        <Box shadow="sm" rounded="md" border="1px solid" borderColor="gray.100">
            {children}
        </Box>
    )
}