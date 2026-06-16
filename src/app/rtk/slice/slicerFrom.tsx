import {createSlice} from "@reduxjs/toolkit";
import {databack} from "@/app/type";
interface FromState {
    dataBack: databack[];
    statusReponseBack: boolean;
    loading: boolean | null;
      
}

const initialState: FromState = {
    dataBack: [],
    statusReponseBack: false,
    loading: false,
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
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },

    }
})

export const {setFrom, setStatusResponseBack, setLoading, } = slicerFrom.actions
export default slicerFrom.reducer