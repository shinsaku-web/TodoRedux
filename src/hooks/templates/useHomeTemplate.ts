import { setTodos } from '@/features/todos/todoSlice'
import { useRouter } from 'next/router'
import { useTodoDispatch } from '../hooks'
import { useTodos } from '../useTodos'
import axios from 'axios'
import { SERVER_HOST } from '@/constants/constants'
import { useEffect } from 'react'

export const useHomeTemplate = () => {
  const { useGetTodos } = useTodos()
  const todos = useGetTodos()
  const dispatch = useTodoDispatch()
  useEffect(() => {
    const getTodos = async () => {
      const { data } = await axios.get(SERVER_HOST + '/todo')
      dispatch(setTodos(data))
    }
    getTodos()
  }, [])

  const router = useRouter()
  const handleClickCreate = () => {
    router.push('/create')
  }

  return { todos, handleClickCreate }
}
