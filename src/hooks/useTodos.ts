import { updateTodo } from '@/features/todos/todoSlice'
import { useTodoDispatch, useTodoSelector } from './hooks'

export const useTodos = () => {
  const useGetTodos = () => useTodoSelector((state) => state.todos.todos)
  const useGetTodo = (id: number) => {
    const [todo] = useTodoSelector((state) => state.todos.todos.filter((todo) => todo.id === id))
    return todo
  }

  const dispatch = useTodoDispatch()

  const todoUpdate = (id: number, title: string, content: string) => {
    dispatch(updateTodo({ id, title, content }))
  }
  return { useGetTodos, useGetTodo, todoUpdate }
}
