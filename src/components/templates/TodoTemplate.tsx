import { Box, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export const TodoTemplate = () => {
  const router = useRouter()
  const { id } = router.query
  // TODO: todoを引数で指定して取ってくる関数を作成しimport
  // const res = useSelector((state: { todos: { todos: Todo[] } }) => state.todos.todos)

  return (
    <Box>
      <Heading as='h1' size='xl' color={'blue.400'} textAlign={'center'}>
        TodoTemplate
      </Heading>
      <Box pt={6}>{id}</Box>
    </Box>
  )
}
