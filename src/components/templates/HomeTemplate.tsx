import { Todo } from '@/types/todotypes'
import { Box, Button, Heading, List } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { TodoItem } from '../molecules/TodoItem'

export const HomeTemplate = () => {
  const todos = useSelector((state: { todos: { todos: Todo[] } }) => state.todos.todos)

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
        <Button onClick={handleClick}>新規作成</Button>
      </Box>
      <Box pt={6}>
        <List spacing={3}>
          {todos.map((todo) => (
            <li key={todo.id}>
              <TodoItem text={todo.title} />
            </li>
          ))}
        </List>
      </Box>
    </Box>
  )
}
