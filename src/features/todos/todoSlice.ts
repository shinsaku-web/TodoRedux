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
    add: (state, { payload: { title, content } }) => {
      state.todos.push({ id: getRandomId(), title, content })
    },
  },
})

export const { add } = todoSlice.actions

export default todoSlice.reducer
