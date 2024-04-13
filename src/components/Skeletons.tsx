import { Card, Flex, Skeleton, SkeletonText, Stack } from '@chakra-ui/react'

const Skeletons = () => {
  return (
    <Card width={{base:'300px', sm:"220",lg:'250px'}} marginRight={{base:'',md:10}} boxShadow="lg">
        <Skeleton height="200px"/>
        <Card padding="20px" height="180px">
          <SkeletonText mt='2' noOfLines={4} spacing='4' />
        </Card>
    </Card>
  )
}

export default Skeletons

