import { Input, InputGroup, InputLeftElement, useColorMode } from "@chakra-ui/react"
import { FormEvent, useRef, useState } from "react"
import {GoSearch} from 'react-icons/go'

// interface Props {
//   onSearch:(query:string)=>void
// }

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null)
  const {colorMode} = useColorMode()

  const handleChange = (event:FormEvent)=>{
    event.preventDefault();
    // if(ref.current) onSearch(ref.current?.value)
    console.log(ref.current?.value)
  }

  return (
    <InputGroup width="400px" marginY="20px" boxShadow="lg" bg={colorMode === 'dark'?'gray.700':''} size="lg">
      <InputLeftElement  children={<GoSearch/>}/>
      <Input ref={ref} onChange={handleChange} placeholder="Search for a country..."  />
    </InputGroup>
  )
}

export default SearchInput;
