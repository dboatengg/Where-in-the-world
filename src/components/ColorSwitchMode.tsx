import { Flex, Switch,Text, useColorMode } from "@chakra-ui/react"

const ColorSwitchMode = () => {
    const {toggleColorMode} = useColorMode()
  return (
    <Flex alignItems="center" gap="5px">
        <Switch onChange={toggleColorMode}/>
        <Text whiteSpace="nowrap">Dark mode</Text>
    </Flex>
  )
}

export default ColorSwitchMode

