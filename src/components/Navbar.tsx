import { Box, Flex, Heading, Link } from "@chakra-ui/react"
import SwitchMode from "./SwitchMode"

const Navbar = () => {
  return (
    <Box boxShadow="md">
        <Flex justifyContent="space-between" alignItems="center" height="70px" maxWidth="95%" mx="auto">
            <Link as="a" _hover={{ textDecoration: "none" }} ><Heading fontSize={{sm:'18px', md:'20px'}} whiteSpace="nowrap">Where in the world?</Heading></Link>
            <SwitchMode/>
        </Flex>
    </Box>
  )
}

export default Navbar;
