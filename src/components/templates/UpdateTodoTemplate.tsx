import { deleteTodo } from '@/features/todos/todoSlice'
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
import { useDispatch } from 'react-redux'

export const UpdateTodoTemplate = () => {
  const router = useRouter()
  const { id } = router.query
  const [newTodo, setNewTodo] = useState<Omit<Todo, 'id'>>({ title: '', content: '' })

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo((prev) => ({ ...prev, title: e.target.value }))
  }

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTodo((prev) => ({ ...prev, content: e.target.value }))
  }

  const dispatch = useDispatch()

  const { todoUpdate } = useTodos()

  const handleUpdate = (id: number, title: string, content: string) => {
    todoUpdate(id, title, content)
    router.push('/')
  }

  const handleGoToTop = () => {
    router.push('/')
  }

  const handleDelete = (id: number) => {
    if (confirm('本当に削除しますか？')) {
      dispatch(deleteTodo({ id }))
      router.push('/')
    }
  }

  return (
    <Box>
      <Heading as='h1' size='xl' color={'blue.400'} textAlign={'center'}>
        Update Todo {id}
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
          <Button
            colorScheme='blue'
            onClick={() => handleUpdate(Number(id), newTodo.title, newTodo.content)}
            w={'full'}
          >
            Update
          </Button>
          <Button onClick={handleGoToTop} w={'full'} mt='4'>
            Go To Top
          </Button>
          <Button colorScheme={'red'} onClick={() => handleDelete(Number(id))} w={'full'} mt='4'>
            Delete This Todo
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
