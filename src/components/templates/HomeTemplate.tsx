import { useHomeTemplate } from '@/hooks/templates/useHomeTemplate'
import { Box, Button, Heading, List } from '@chakra-ui/react'
import { TodoItem } from '../molecules/TodoItem'

export const HomeTemplate = () => {
  const { todos, handleClickCreate } = useHomeTemplate()

  return (
    <Box>
      <Heading as='h1' size='xl' color={'blue.400'} textAlign={'center'}>
        Todo App
      </Heading>
      <Box pt={6} display='flex' justifyContent={'space-around'}>
        <Button onClick={handleClickCreate}>Create Todo</Button>
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
