import {createSlice} from "@reduxjs/toolkit";
import {databack} from "@/app/type";
export interface FromState {
    dataBack: databack[];
}

const initialState: FromState = {
    dataBack: []
}

const slicerFrom = createSlice({
    name: 'from',
    initialState,
    reducers: {
        setFrom: (state, action) => {
            state.dataBack = action.payload
        }
    }
})

export const {setFrom} = slicerFrom.actions
export default slicerFrom.reducer