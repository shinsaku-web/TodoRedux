import { Todo } from '@/types/todotypes'
import { createSlice } from '@reduxjs/toolkit'

const initialTodos: { todos: Todo[] } = {
  todos: [
    { id: 1, title: '手羽先を食べる', content: 'Todo1の内容です。' },
    { id: 2, title: 'ラーメンを食べる', content: 'Todo2の内容です。' },
    { id: 3, title: 'お風呂に入る', content: 'Todo3の内容です。' },
  ],
}

const getRandomId = () => Math.floor(Math.random() * 100000000000)

export const todoSlice = createSlice({
  name: 'todos',
  initialState: initialTodos,
  reducers: {
    addTodo: (state, { payload: { title, content } }) => {
      state.todos.push({ id: getRandomId(), title, content })
    },
    updateTodo: (state, { payload: { id, title, content } }) => {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === Number(id)) {
          return {
            id,
            title,
            content,
          }
        }
        return todo
      })
      state.todos = newTodos
    },
    deleteTodo: (state, { payload: { id } }) => {
      const newTodos = state.todos.filter((todo) => todo.id !== id)
      state.todos = newTodos
    },
  },
})

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
