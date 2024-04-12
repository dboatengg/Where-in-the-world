import { Box, Card, Flex, Heading, Image, Img, Link, SimpleGrid, Text, textDecoration } from '@chakra-ui/react'
import { useData } from '../hooks/useData';


const CardGrid = () => {
  const {data, loading, error} = useData('https://restcountries.com/v3/all2')

  console.log(data)

  return (
    <SimpleGrid spacing={10} columns={{base:1, md:2,lg:4}} maxWidth="95%" mx="auto" paddingY="50px">
      {error && <Text>{error}</Text>}
      {data.map(country => (
        <Flex flexDirection="column" boxShadow="md">
          <Image height="200px" objectFit="cover" width="100%" src={country.flags[0]}/>
          <Flex flexDirection="column" padding={5}>
            <Link fontWeight="bold" _hover={{textDecoration:'none'}} fontSize={{base:'20px', md:'25px'}}>{country.name.common}</Link>
            <Text>Population: {country.population}</Text>
            <Text>Region: {country.region}</Text>
            <Text><strong>Capital</strong> {country.capital}</Text>
          </Flex>
        </Flex>
      ))}
    </SimpleGrid>
  )
}

export default CardGrid