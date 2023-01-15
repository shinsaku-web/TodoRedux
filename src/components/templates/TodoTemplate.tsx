import { useTodoTemplate } from '@/hooks/templates/useTodoTemplate'
import { Box, Button, Heading, Text } from '@chakra-ui/react'

export const TodoTemplate = () => {
  const { id, todo, handleTopButton, handleUpdateButton } = useTodoTemplate()
  return (
    <Box>
      <Heading as='h1' size='xl' color={'blue.400'} textAlign={'center'}>
        TodoTemplate
      </Heading>
      <Box pt={6} display='flex' justifyContent={'space-around'}>
        <Button onClick={handleTopButton}>Go To Top</Button>
        <Button onClick={() => handleUpdateButton(Number(id))}>Update Todo</Button>
      </Box>
      <Box pt={6}>
        <Box pt={0}>
          〜Title〜
          <Heading as={'h2'} size={'md'} mt='2'>
            {todo.title}
          </Heading>
        </Box>
        <Box pt={6}>
          〜Content〜
          <Text mt={2}>{todo.content}</Text>
        </Box>
      </Box>
    </Box>
  )
}
