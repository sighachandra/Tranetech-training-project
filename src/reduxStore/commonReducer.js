import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    loading: false,
    fetchUserDetails: [],
    counter: 0
};

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setLoading: (state, action) => {
          state.loading = action.payload;
        },
        setFetchUserDetails: (state, action) => {
            state.fetchUserDetails = action.payload;
        },
        setCounter: (state, action) => {
            state.counter = action.payload;
        }
    },
    extraReducers: {},
});

export const { setLoading, setFetchUserDetails, setCounter } = commonSlice.actions;
export default commonSlice.reducer;  