import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    loading: false,
};

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setLoading: (state, action) => {
          state.loading = action.payload;
        }
    },
    extraReducers: {},
});

export const { setLoading } = commonSlice.actions;
export default commonSlice.reducer;  