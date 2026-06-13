import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { setFrom } from "./slice/slicerFrom";
import{setToken} from "./slice/sliceuser";
import { databack } from "@/app/type";

export default function selector() {

let DataBackFromSelector = useSelector((state: RootState) => state.from.dataBack);

const dispatch = useDispatch();

 const setDataBackSelector = (data: databack[]) => {
    dispatch(setFrom(data));
}

 const setTokenSelector = (token: string | null) => {
    dispatch(setToken(token));
}

return {
    DataBackFromSelector,
    setDataBackSelector,
    setTokenSelector,
   }
}