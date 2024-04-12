import { Skeleton, Stack } from '@chakra-ui/react'

const Skeletons = () => {
  return (
    <Stack>
        <Skeleton height="200px"/>
        <Stack>
          <Skeleton height="20px"/>
          <Skeleton height="20px"/>
          <Skeleton height="20px"/>
          <Skeleton height="20px"/>
        </Stack>
    </Stack>
  )
}

export default Skeletons