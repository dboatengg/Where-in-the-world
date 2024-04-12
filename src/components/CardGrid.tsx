import { Box, Card, Flex, Heading, Image, Img, Link, SimpleGrid, Text, textDecoration } from '@chakra-ui/react'
import { useData } from '../hooks/useData';
import Skeletons from './Skeletons';


const CardGrid = () => {
  const {data, loading, error} = useData('https://restcountries.com/v3/all')

  console.log(data)

  const skeletons = [1,2,3,4,5,6,7,8,9]

  return (
    <Box >
        {error && <Text textAlign="center" marginY={5} color='red' fontWeight="medium">{error}</Text>}
      <SimpleGrid spacing={10} columns={{base:1, md:2,lg:4}} maxWidth={{base:'90%',md:'95%'}} mx="auto" paddingY="50px">
        {loading && skeletons.map(skeleton=><Skeletons key={skeleton}/>)}
        {data.map(country => (
          <Flex key={country.name.common} flexDirection="column" boxShadow="md" height={{base:'400px',md:'350px'}} borderRadius={5}>
            <Image height={{base:'250px', md:'200px'}} objectFit="cover" width="100%" src={country.flags[0]} borderTopLeftRadius={5} borderTopRightRadius={5}/>
            <Flex flexDirection="column" padding={5}>
              <Link fontWeight="bold" _hover={{textDecoration:'none'}} fontSize={{base:'20px', md:'25px'}}>{country.name.common}</Link>
              <Text>Population: {country.population}</Text>
              <Text>Region: {country.region}</Text>
              <Text><strong>Capital</strong> {country.capital}</Text>
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default CardGrid