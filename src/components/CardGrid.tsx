import { Box, Card, Flex, Image, Link, SimpleGrid, Text, useColorMode } from '@chakra-ui/react'
import { useData } from '../hooks/useData';
import Skeletons from './Skeletons';
import SearchInput from './SearchInput';
import { sortData } from '../utils/sortData';
import { useState } from 'react';


const CardGrid = () => {
  const {data, loading, error} = useData('https://restcountries.com/v3/all')
  const {colorMode}= useColorMode()


  // console.log(data)
  console.log(loading)

  //sort data
  const sortedData = sortData(data)

  //no. of skeletons to display
  const skeletons = [1,2,3,4,5,6,7,8,9]

  return (
    <>
    <Box maxWidth={{base:'90%',md:'95%'}} mx="auto">
      <SearchInput />
    </Box>
    {error && <Text textAlign="center" marginY={5} color='red' fontWeight="medium">{error}</Text>}
    <SimpleGrid spacing={10} columns={{base:1, md:2,lg:4}} paddingY="50px" maxWidth={{base:'90%',md:'95%'}} mx="auto">
        {loading && skeletons.map(skeleton=><Skeletons key={skeleton}/>)}
        {sortedData.map(country => (
          <Flex key={country.name.common} flexDirection="column" boxShadow="lg" bg={colorMode === 'dark'?'gray.700':''} height="380px" borderRadius={5} maxWidth={{base:'100%',lg:'300px'}}>
            <Image height={{base:'250px', md:'200px'}} objectFit="cover" width="100%" src={country.flags[0]} borderTopLeftRadius={5} borderTopRightRadius={5}/>
            <Flex flexDirection="column" padding={5} alignItems="flex-start">
              <Link fontWeight="bold" _hover={{textDecoration:'none'}} fontSize="18px">{country.name.common}</Link>
              <Text fontSize="14px">Population: {country.population.toLocaleString()}</Text>
              <Text fontSize="14px">Region: {country.region}</Text>
              <Text fontSize="14px"><strong>Capital</strong> {country.capital}</Text>
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </>
  )
}

export default CardGrid;
