import { Box, Card, Flex, Heading, Image, Img, Link, SimpleGrid, Text, textDecoration } from '@chakra-ui/react'
import { useData } from '../hooks/useData';
import Skeletons from './Skeletons';


const CardGrid = () => {
  const {data, loading, error} = useData('https://restcountries.com/v3/all')

  // console.log(data)

  const sortedData = data.slice().sort((a, b) => {
    const nameA = a.name.common.toUpperCase();
    const nameB = b.name.common.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  const skeletons = [1,2,3,4,5,6,7,8,9]

  return (
    <Box >
        {error && <Text textAlign="center" marginY={5} color='red' fontWeight="medium">{error}</Text>}
      <SimpleGrid spacing={10} columns={{base:1, md:2,lg:4}} maxWidth={{base:'90%',md:'95%'}} mx="auto" paddingY="50px">
        {loading && skeletons.map(skeleton=><Skeletons key={skeleton}/>)}
        {sortedData.map(country => (
          <Flex key={country.name.common} flexDirection="column" boxShadow="md" height="380px" borderRadius={5} maxWidth="400px">
            <Image height={{base:'250px', md:'200px'}} objectFit="cover" width="100%" src={country.flags[0]} borderTopLeftRadius={5} borderTopRightRadius={5}/>
            <Flex flexDirection="column" padding={5}>
              <Link fontWeight="bold" _hover={{textDecoration:'none'}} fontSize="18px">{country.name.common}</Link>
              <Text fontSize="14px">Population: {country.population}</Text>
              <Text fontSize="14px">Region: {country.region}</Text>
              <Text fontSize="14px"><strong>Capital</strong> {country.capital}</Text>
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default CardGrid