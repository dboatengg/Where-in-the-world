import { Input, InputGroup, InputLeftAddon, InputLeftElement, useColorMode } from "@chakra-ui/react"
import {GoSearch} from 'react-icons/go'


const SearchInput = () => {
  const {colorMode} = useColorMode()

  return (
    <InputGroup width="400px" marginY="20px" boxShadow="lg" bg={colorMode === 'dark'?'gray.700':''} size="lg">
        <InputLeftElement children={<GoSearch/>}/>
        <Input placeholder="Search for a country..."  />
    </InputGroup>
  )
}

export default SearchInput;
