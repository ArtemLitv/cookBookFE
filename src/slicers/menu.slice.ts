import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type MenuState = {
    id: string | null;
}

const initialState: MenuState = {
    id: null
}

export const menuSlice = createSlice({
  name: 'menu',

  initialState,

  reducers: {
    select: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  }
})

// Action creators are generated for each case reducer function
export const { select } = menuSlice.actions

export default menuSlice.reducer