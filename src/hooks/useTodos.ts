import { createTodo, deleteTodo, updateTodo } from '@/features/todos/todoSlice'
import { Todo } from '@/types/todotypes'
import { useTodoDispatch, useTodoSelector } from './hooks'

export const useTodos = () => {
  const useGetTodos = () => useTodoSelector((state) => state.todos.todos)
  const useGetTodo = (id: number) => {
    const [todo] = useTodoSelector((state) => state.todos.todos.filter((todo) => todo.id === id))
    return todo
  }

  const dispatch = useTodoDispatch()
  const todoCreate = (todo: Omit<Todo, 'id'>) => {
    dispatch(createTodo({ title: todo.title, content: todo.content }))
  }
  const todoUpdate = (todo: Todo) => {
    dispatch(updateTodo({ id: todo.id, title: todo.title, content: todo.content }))
  }
  const todoDelete = (id: number) => {
    dispatch(deleteTodo({ id }))
  }
  return { useGetTodos, useGetTodo, todoCreate, todoUpdate, todoDelete }
}
