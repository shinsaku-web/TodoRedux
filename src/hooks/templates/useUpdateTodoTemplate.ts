import { Todo } from '@/types/todotypes'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTodos } from '../useTodos'

export const useUpdateTodoTemplate = () => {
  const router = useRouter()
  const { id } = router.query
  const { useGetTodo, todoUpdate, todoDelete } = useTodos()

  const initialTodo = useGetTodo(Number(id))
  const [newTodo, setNewTodo] = useState<Todo>(initialTodo)

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo((prev) => ({ ...prev, title: e.target.value }))
  }

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTodo((prev) => ({ ...prev, content: e.target.value }))
  }

  const handleUpdate = (todo: Todo) => {
    todoUpdate(todo)
    router.push('/')
  }

  const handleGoToTop = () => {
    router.push('/')
  }

  const handleDelete = (id: number) => {
    if (confirm('本当に削除しますか？')) {
      todoDelete(id)
      router.push('/')
    }
  }

  return {
    id,
    newTodo,
    handleChangeTitle,
    handleChangeContent,
    handleUpdate,
    handleGoToTop,
    handleDelete,
  }
}
