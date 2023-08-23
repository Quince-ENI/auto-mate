import { configureStore, createSlice } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { INITIAL_STATE } from "./constants"
import { onSetIsUserLogged } from "./reducer"

const autoMateSlice = createSlice({
  name: "autoMate",
  initialState: INITIAL_STATE,
  reducers: {
    setIsUserLogged: onSetIsUserLogged,
  },
  extraReducers: {},
})

export const actions = {
  ...autoMateSlice.actions,
}

const { reducer } = autoMateSlice
export const backofficeReducer = reducer
export const store = configureStore({ reducer })

export type AutoMateDispatch = typeof store.dispatch

export function useAutoMateDispatch(): AutoMateDispatch {
  return useDispatch<AutoMateDispatch>()
}
