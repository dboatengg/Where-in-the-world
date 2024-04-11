import { Flex, Text } from "@chakra-ui/react"
import ColorSwitchMode from "./ColorSwitchMode"
import SearchInput from "./SearchInput"

const Navbar = () => {
  return (
    <Flex alignItems="center" gap="30px" height="80px" maxWidth="90%" mx="auto">
        <Text fontWeight="bold" color="teal" fontSize={{base:'20px', sm:'25px', lg:'30px'}}>MovieHub</Text>
        <SearchInput/>
        <ColorSwitchMode/>
    </Flex>
  )
}

export default Navbar