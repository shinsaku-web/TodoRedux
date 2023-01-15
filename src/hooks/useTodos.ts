import { useTodoDispatch, useTodoSelector } from './hooks'

const useGetTodos = () => useTodoSelector((state) => state.todos.todos)
const useGetTodo = (id: number) => {
  const [todo] = useTodoSelector((state) => state.todos.todos.filter((todo) => todo.id === id))
  return todo
}

export const useTodos = () => {
  const dispatch = useTodoDispatch()
  return { useGetTodos, useGetTodo }
}
