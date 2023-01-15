import { useTodos } from '@/hooks/useTodos'
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export const TodoTemplate = () => {
  const router = useRouter()
  const { id } = router.query
  const { useGetTodo } = useTodos()
  const todo = useGetTodo(Number(id))

  const handleTopButton = () => {
    router.push('/')
  }

  const handleUpdateButton = (id: number) => {
    router.push(`/update/${id}`)
  }

  return (
    <Box>
      <Heading as='h1' size='xl' color={'blue.400'} textAlign={'center'}>
        TodoTemplate
      </Heading>
      <Box pt={6} display='flex' justifyContent={'space-around'}>
        <Button onClick={handleTopButton}>Go To Top</Button>
        <Button onClick={() => handleUpdateButton(Number(id))}>Update Todo</Button>
      </Box>
      <Box pt={10}>
        <Heading as={'h2'} size={'md'}>
          {todo.title}
        </Heading>
        <Text mt={4}>{todo.content}</Text>
      </Box>
    </Box>
  )
}
