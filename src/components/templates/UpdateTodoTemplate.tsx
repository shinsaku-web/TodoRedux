import { Box, CheckboxIcon, Heading, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { TodoItem } from '../molecules/TodoItem'

export const UpdateTodoTemplate = () => {
  return (
    <Box>
      <Heading as='h1' size='xl' color={'blue.400'} textAlign={'center'}>
        Update Todo
      </Heading>
      <Box pt={6}>
        <List spacing={3}>
          {[0, 1, 2].map((_) => (
            <li key={_}>
              <TodoItem text='todo1' />
            </li>
          ))}
        </List>
      </Box>
    </Box>
  )
}
