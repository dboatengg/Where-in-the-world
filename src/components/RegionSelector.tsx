import { Select, useColorMode} from "@chakra-ui/react"

const RegionSelector = () => {
    const {colorMode} = useColorMode()
  return (
  <Select width={{base:'100%', md:"250px"}} placeholder="Filter by Region" bg={colorMode === 'dark'?'gray.700':''} size="lg">
    
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </Select>
  )
}

export default RegionSelector