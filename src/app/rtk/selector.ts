import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { setFrom,setStatusResponseBack } from "./slice/slicerFrom";
import { databack } from "@/app/type";

export default function selector() {

let DataBackFromSelector = useSelector((state: RootState) => state.from.dataBack);

const dispatch = useDispatch();

 const setDataBackSelector = (data: databack[]) => {
    dispatch(setFrom(data));
}


return {
    DataBackFromSelector,
    setDataBackSelector,
   }
}