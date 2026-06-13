import {createSlice} from "@reduxjs/toolkit";
import {databack} from "@/app/type";
interface FromState {
    dataBack: databack[];
    statusReponseBack?: boolean;
}

const initialState: FromState = {
    dataBack: [],
    statusReponseBack: undefined
}

const slicerFrom = createSlice({
    name: 'from',
    initialState,
    reducers: {
        setFrom: (state, action) => {
            state.dataBack = action.payload
        },
        setStatusResponseBack: (state, action) => {
            state.statusReponseBack = action.payload
        }
    }
})

export const {setFrom, setStatusResponseBack} = slicerFrom.actions
export default slicerFrom.reducer