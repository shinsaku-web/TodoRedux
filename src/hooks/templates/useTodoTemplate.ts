import { useRouter } from 'next/router'
import { useTodos } from '../useTodos'

export const useTodoTemplate = () => {
  const router = useRouter()
  const { id } = router.query
  const { useGetTodo } = useTodos()
  const todo = useGetTodo(Number(id))

  const handleTopButton = () => {
    router.push('/')
  }

  const handleUpdateButton = (id: number) => {
    router.push(`/update/${id}`)
  }

  return {
    id,
    todo,
    handleTopButton,
    handleUpdateButton,
  }
}
