import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './slicers/menu.slice';
import editModeReducer from './slicers/editMode.slice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    editMode: editModeReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;