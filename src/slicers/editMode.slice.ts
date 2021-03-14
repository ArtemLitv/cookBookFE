import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EditModeState = {
  editMode: boolean;
};

const initialState: EditModeState = {
  editMode: false,
};

export const editModeSlice = createSlice({
  name: "editMode",

  initialState,

  reducers: {
    changeMode: (state, action: PayloadAction<boolean>) => {
      const mode = action.payload;
      state.editMode = mode;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeMode } = editModeSlice.actions;

export default editModeSlice.reducer;
