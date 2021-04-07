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
    createNewRecipe: (state) => {
      state.id = 'NEW';
    }
  }
})

// Action creators are generated for each case reducer function
export const { select, createNewRecipe } = menuSlice.actions

export default menuSlice.reducer