import { Todo } from '@/types/todotypes'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialTodos: { todos: Todo[] } = {
  todos: [
    { id: 1, title: '手羽先を食べる', content: 'Todo1の内容です。' },
    { id: 2, title: 'ラーメンを食べる', content: 'Todo2の内容です。' },
    { id: 3, title: 'お風呂に入る', content: 'Todo3の内容です。' },
  ],
}

const getRandomId = () => Math.floor(Math.random() * 10 ** 10)

export const todoSlice = createSlice({
  name: 'todos',
  initialState: initialTodos,
  reducers: {
    createTodo: (state, action: PayloadAction<Omit<Todo, 'id'>>) => {
      state.todos.push({
        id: getRandomId(),
        title: action.payload.title,
        content: action.payload.content,
      })
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === Number(action.payload.id)) {
          return {
            id: todo.id,
            title: action.payload.title,
            content: action.payload.content,
          }
        }
        return todo
      })
      state.todos = newTodos
    },
    deleteTodo: (state, action: PayloadAction<Pick<Todo, 'id'>>) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload.id)
      state.todos = newTodos
    },
  },
})

export const { createTodo, updateTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
