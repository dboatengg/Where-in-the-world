import { Box, Flex, Heading, Image, Img } from '@chakra-ui/react'
import data from '../data/data.json'
import { useEffect, useState } from 'react'
import { useData } from '../hooks/useData';

interface Data {
    flags:string;
    name:string;
    population:number;
    region:string;
    capital:string;
}

const Country = () => {
  const {data, loading, error} = useData('asdf')

  console.log(data)

  return (
    <Box>
    </Box>
  )
}

export default Country