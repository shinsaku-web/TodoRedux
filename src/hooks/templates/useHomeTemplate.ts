import { getTodos } from '@/features/todos/todoSlice'
import { useRouter } from 'next/router'
import { useTodoDispatch } from '../hooks'
import { useTodos } from '../useTodos'
import { useEffect } from 'react'

export const useHomeTemplate = () => {
  const { useGetTodos } = useTodos()
  const todos = useGetTodos()
  const dispatch = useTodoDispatch()
  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  const router = useRouter()
  const handleClickCreate = () => {
    router.push('/create')
  }

  return { todos, handleClickCreate }
}
