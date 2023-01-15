import { Todo } from '@/types/todotypes'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTodos } from '../useTodos'

export const useCreateTodoTemplate = () => {
  const [newTodo, setNewTodo] = useState<Omit<Todo, 'id'>>({ title: '', content: '' })

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo((prev) => ({ ...prev, title: e.target.value }))
  }

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTodo((prev) => ({ ...prev, content: e.target.value }))
  }

  const { todoCreate } = useTodos()
  const router = useRouter()

  const handleClickCreate = () => {
    todoCreate(newTodo)
    router.push('/')
  }
  const handleGoToTop = () => {
    router.push('/')
  }

  return {
    newTodo,
    handleChangeTitle,
    handleChangeContent,
    handleClickCreate,
    handleGoToTop,
  }
}
