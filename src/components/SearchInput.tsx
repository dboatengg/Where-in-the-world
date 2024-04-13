import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import {GoSearch} from 'react-icons/go'


const SearchInput = () => {

  return (
    <InputGroup width="400px" marginY="20px" boxShadow="lg">
        <InputLeftElement children={<GoSearch/>}/>
        <Input placeholder="Search for a country..." size="lg" focusBorderColor="transparent" borderColor="transparent" variant="filled"/>
    </InputGroup>
  )
}

export default SearchInput;
