import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URI, POSTFIX } from '../../const';

const initialState = {
  category: [],
  error: '',
  activeCategory: 0,
}

export const categoryRequestAsync = createAsyncThunk(
  'category/fetch', () => fetch(`${API_URI}${POSTFIX}/category`)
    .then(res => res.json())
    .catch(err => ({ err }))
)

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeCategory(state, action) {
      state.activeCategory = action.payload.indexCategory
    }
  },
  extraReducers: builder => {
    builder
      .addCase(categoryRequestAsync.pending, state => {
        state.err = ''
      })
      .addCase(categoryRequestAsync.fulfilled, (state, action) => {
        state.err = ''
        state.category = action.payload
      })
      .addCase(categoryRequestAsync.rejected, (state, action) => {
        state.err = action.payload.error
      })
  }
})

export const { changeCategory } = categorySlice.actions

export default categorySlice.reducer
