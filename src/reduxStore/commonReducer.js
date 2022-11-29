import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    loading: false,
    fetchUserDetails: [],
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
        }
    },
    extraReducers: {},
});

export const { setLoading, setFetchUserDetails } = commonSlice.actions;
export default commonSlice.reducer;  