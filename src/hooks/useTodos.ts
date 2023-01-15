import { createTodo, deleteTodo, updateTodo } from '@/features/todos/todoSlice'
import { useTodoDispatch, useTodoSelector } from './hooks'

export const useTodos = () => {
  const useGetTodos = () => useTodoSelector((state) => state.todos.todos)
  const useGetTodo = (id: number) => {
    const [todo] = useTodoSelector((state) => state.todos.todos.filter((todo) => todo.id === id))
    return todo
  }

  const dispatch = useTodoDispatch()
  const todoCreate = (title: string, content: string) => {
    dispatch(createTodo({ title, content }))
  }
  const todoUpdate = (id: number, title: string, content: string) => {
    dispatch(updateTodo({ id, title, content }))
  }
  const todoDelete = (id: number) => {
    dispatch(deleteTodo({ id }))
  }
  return { useGetTodos, useGetTodo, todoCreate, todoUpdate, todoDelete }
}
