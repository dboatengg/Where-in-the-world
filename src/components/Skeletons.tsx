import { Skeleton, SkeletonText, Stack } from '@chakra-ui/react'

const Skeletons = () => {
  return (
    <Stack>
        <Skeleton height="200px"/>
        <Stack>
          <SkeletonText mt='2' noOfLines={4} spacing='4' />
        </Stack>
    </Stack>
  )
}

export default Skeletons