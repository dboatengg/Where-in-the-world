import { Box, Flex, Heading, useColorMode,Text } from "@chakra-ui/react"
import SwitchMode from "./SwitchMode"
import { Link } from "react-router-dom"

const Navbar = () => {
  const {colorMode} = useColorMode()
  return (
    <Box boxShadow="md" bg={colorMode === 'dark'?'gray.700':''}>
        <Flex justifyContent="space-between" alignItems="center" height="60px" maxWidth="95%" mx="auto">
          <Link to="/">
            <Text _hover={{ textDecoration: "none" }} ><Heading fontSize="18px" whiteSpace="nowrap">Where in the world?</Heading></Text>
          </Link>
            <SwitchMode/>
        </Flex>
    </Box>
  )
}

export default Navbar;
