import { useRouter } from 'next/router'
import { useTodos } from '../useTodos'

export const useHomeTemplate = () => {
  const { useGetTodos } = useTodos()
  const todos = useGetTodos()

  const router = useRouter()
  const handleClickCreate = () => {
    router.push('/create')
  }

  return { todos, handleClickCreate }
}
