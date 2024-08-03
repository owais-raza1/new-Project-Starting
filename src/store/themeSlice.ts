import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  color: string
}

const initialState: CounterState = {
  color: "red",
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state) => {
      state.color = 'blue'
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions

export default themeSlice.reducer