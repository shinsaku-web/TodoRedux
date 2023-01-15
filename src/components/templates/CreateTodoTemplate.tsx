import { useCreateTodoTemplate } from '@/hooks/templates/useCreateTodoTemplate'
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from '@chakra-ui/react'

export const CreateTodoTemplate = () => {
  const { newTodo, handleChangeTitle, handleChangeContent, handleClickCreate, handleGoToTop } =
    useCreateTodoTemplate()
  return (
    <Box>
      <Heading as='h1' size='xl' color={'blue.400'} textAlign={'center'}>
        Create Todo
      </Heading>
      <Box pt={6}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            type='text'
            value={newTodo.title}
            onChange={handleChangeTitle}
            placeholder='eat apple'
          />
          <FormHelperText>Enter your todo.</FormHelperText>
        </FormControl>
        <FormControl isInvalid={false} pt='10'>
          <FormLabel>Content</FormLabel>
          <Textarea
            rows={8}
            value={newTodo.content}
            onChange={handleChangeContent}
            placeholder='eat apple at 9:00 am before go to the cafe.'
          />
          <FormHelperText>Enter your todo detail.</FormHelperText>
        </FormControl>
        <Box pt={8}>
          <Button colorScheme={'blue'} onClick={handleClickCreate} w={'full'}>
            Create
          </Button>
          <Button onClick={handleGoToTop} w={'full'} mt='4'>
            Go To Top
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
