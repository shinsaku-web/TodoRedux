import { createSlice } from '@reduxjs/toolkit'

const initialTodos = {
  todos: [{ id: 1, title: '手羽先を食べる', content: 'Todoの内容です。' }],
}

const getRandomId = () => Math.floor(Math.random() * 100000000000)

export const todoSlice = createSlice({
  name: 'todos',
  initialState: initialTodos,
  reducers: {
    add: (state, { payload: { title, content } }) => {
      state.todos.push({ id: getRandomId(), title, content })
    },
    add2: (state) => {
      state.todos.push({
        id: getRandomId(),
        title: 'りんごを食べる',
        content: 'Todoの内容3です。',
      })
    },
  },
})

export const { add, add2 } = todoSlice.actions

export default todoSlice.reducer
