import {createSlice} from "@reduxjs/toolkit";
import {databack,StateInputForm} from "@/app/type";
interface FromState {
    initialDataInput: StateInputForm;
    dataBack: databack[];
    statusReponseBack: boolean;
    loading: boolean | null;
      
}

const initialState: FromState = {
    initialDataInput: [],
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
        setInitialDataInput: (state, action) => {
            state.initialDataInput = action.payload
        }

    }
})

export const {setFrom, setStatusResponseBack, setLoading, setInitialDataInput } = slicerFrom.actions
export default slicerFrom.reducer