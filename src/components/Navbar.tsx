import { Box, Flex, Heading, Link, useColorMode } from "@chakra-ui/react"
import SwitchMode from "./SwitchMode"

const Navbar = () => {
  const {colorMode} = useColorMode()
  return (
    <Box boxShadow="md" bg={colorMode === 'dark'?'gray.700':''}>
        <Flex justifyContent="space-between" alignItems="center" height="70px" maxWidth="95%" mx="auto">
            <Link as="a" _hover={{ textDecoration: "none" }} ><Heading fontSize={{sm:'18px', md:'20px'}} whiteSpace="nowrap">Where in the world?</Heading></Link>
            <SwitchMode/>
        </Flex>
    </Box>
  )
}

export default Navbar;
