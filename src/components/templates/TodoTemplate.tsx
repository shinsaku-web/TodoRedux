import { Box, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export const TodoTemplate = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <Box>
      <Heading as='h1' size='xl' color={'blue.400'} textAlign={'center'}>
        TodoTemplate
      </Heading>
      <Box pt={6}>{id}</Box>
    </Box>
  )
}
