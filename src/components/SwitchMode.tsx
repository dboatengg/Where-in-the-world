import { Flex, Switch, Text, useColorMode } from "@chakra-ui/react"

const SwitchMode = () => {
    const {toggleColorMode} = useColorMode()
  return (
    <Flex alignItems="center" gap="10px">
        <Switch onChange={toggleColorMode}/>
        <Text whiteSpace="nowrap" fontSize="16px" fontWeight="medium">Dark mode</Text>
    </Flex>
  )
}

export default SwitchMode;
