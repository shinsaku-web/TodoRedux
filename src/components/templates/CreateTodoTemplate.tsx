import { useTodos } from '@/hooks/useTodos'
import { Todo } from '@/types/todotypes'
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
import { useRouter } from 'next/router'
import { useState } from 'react'

export const CreateTodoTemplate = () => {
  const [newTodo, setNewTodo] = useState<Omit<Todo, 'id'>>({ title: '', content: '' })

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo((prev) => ({ ...prev, title: e.target.value }))
  }

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTodo((prev) => ({ ...prev, content: e.target.value }))
  }

  const { todoCreate } = useTodos()
  const router = useRouter()

  const handleClick = () => {
    todoCreate(newTodo.title, newTodo.content)
    router.push('/')
  }
  const handleGoToTop = () => {
    router.push('/')
  }

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
          <Button colorScheme={'blue'} onClick={handleClick} w={'full'}>
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
