import {Box} from "components";

export const Divider = ({my, mt, mb}: {my?: number, mt?: number, mb?: number}) => {
    return (
        <Box borderTop="1px solid" borderColor="gray.100" my={my} mt={mt} mb={mb} />
    )
}