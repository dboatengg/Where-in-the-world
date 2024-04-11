import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import {IoMdSearch} from 'react-icons/io'

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<IoMdSearch/>}/>
      <Input variant="filled" borderRadius="30px" placeholder="Search movies"/>
    </InputGroup>
  )
}

export default SearchInput
