import { createSlice } from '@reduxjs/toolkit'

const initialTodos = {
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
    deleteTodo: (state, { payload: { id } }) => {
      const newTodos = state.todos.filter((todo) => todo.id !== id)
      state.todos = newTodos
    },
  },
})

export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
