import {createSlice} from '@reduxjs/toolkit';

interface UserState {
    token: string | null;
}

const initialState: UserState = {
  
    token:null,
}

const sliceUser = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
    },
});

export const { setToken } = sliceUser.actions;
export default sliceUser.reducer;