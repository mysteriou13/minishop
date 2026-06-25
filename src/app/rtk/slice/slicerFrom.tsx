import {createSlice} from "@reduxjs/toolkit";
import {databack,StateInputForm} from "@/app/type";
import { initialStateConnection } from "@/app/Utilis";
interface FromState {
    initialDataConnection: StateInputForm;
    dataBack: databack[];
    statusReponseBack: boolean;
    loading: boolean | null;
      
}

const initialState: FromState = {
    initialDataConnection: initialStateConnection,
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
        setInitialDataConnection: (state, action) => {
            state.initialDataConnection = action.payload
        }

    }
})

export const {setFrom, setStatusResponseBack, setLoading, setInitialDataConnection } = slicerFrom.actions
export default slicerFrom.reducer