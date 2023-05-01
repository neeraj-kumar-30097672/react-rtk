import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'

type InitialState = {
  numOfIcecreams: number
}

const initialState: InitialState = {
  numOfIcecreams: 20
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams -= 1
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIcecreams += action.payload
    }
  },
  // extraReducers: {
  //   ['cake/ordered']: (state) => {
  //     state.numOfIcecreams -= 1
  //   }
  // }
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecreams -= 1
    })
  }
})

export default icecreamSlice.reducer
export const {ordered, restocked} = icecreamSlice.actions