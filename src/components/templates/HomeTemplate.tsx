import { useTodos } from '@/hooks/useTodos'
import { Box, Button, Heading, List } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { TodoItem } from '../molecules/TodoItem'

export const HomeTemplate = () => {
  const { useGetTodos } = useTodos()
  const todos = useGetTodos()

  const router = useRouter()
  const handleClick = () => {
    router.push('/create')
  }

  return (
    <Box>
      <Heading as='h1' size='xl' color={'blue.400'} textAlign={'center'}>
        Todo App
      </Heading>
      <Box pt={6} display='flex' justifyContent={'space-around'}>
        <Button onClick={handleClick}>Create Todo</Button>
      </Box>
      <Box pt={6}>
        <List spacing={3}>
          {todos.map((todo) => (
            <li key={todo.id}>
              <TodoItem id={todo.id} title={todo.title} />
            </li>
          ))}
        </List>
      </Box>
    </Box>
  )
}
