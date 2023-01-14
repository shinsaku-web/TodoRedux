import { CheckIcon } from '@chakra-ui/icons'
import { Box, CheckboxIcon, Heading, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { TodoItem } from '../organisms/TodoItem'

export const HomeTemplate = () => {
  const style = css({
    display: 'block',
    fontSize: '16px',
    background: '#1e2f5d',
    color: '#a4cff4',
    fontFamily: 'Inter,sans-serif',
    fontWeight: 'bold',
  })
  return (
    <Box>
      <Heading as='h1' size='xl' color={'blue.400'} textAlign={'center'}>
        Todo App
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
