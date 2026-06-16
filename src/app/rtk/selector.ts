import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { setFrom,setLoading } from "./slice/slicerFrom";
import{setToken} from "./slice/sliceuser";
import { databack } from "@/app/type";

export default function selector() {

let DataBackFromSelector = useSelector((state: RootState) => state.from.dataBack);
let token = useSelector((state: RootState) => state.user.token);
let loading = useSelector((state: RootState) => state.from.loading);

const dispatch = useDispatch();

 const setDataBackSelector = (data: databack[]) => {
    dispatch(setFrom(data));
}
 const setTokenSelector = (token: string | null) => {
    dispatch(setToken(token));
}

const setLoadingSelector = (isLoading: boolean) => {
    dispatch(setLoading(isLoading));
  }



return {
    DataBackFromSelector,
    setDataBackSelector,
    setTokenSelector,
    setLoadingSelector,
    loading,
    token,
    
   }
}