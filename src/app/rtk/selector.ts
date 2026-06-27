import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { setFrom,setInitialDataInput,setLoading } from "./slice/slicerFrom";
import{setToken} from "./slice/sliceuser";
import { databack, InputItem, StateInputForm } from "@/app/type";

export default function selector() {

let DataBackFromSelector = useSelector((state: RootState) => state.from.dataBack);
let token = useSelector((state: RootState) => state.user.token);
let loading = useSelector((state: RootState) => state.from.loading);
let initialDataInput = useSelector((state: RootState) => state.from.initialDataInput);

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
const setInitialDataInputSelector = (data: StateInputForm) => {
    dispatch(setInitialDataInput(data));
}

  const AddHandleDataBack = (name: string, value: string) => {
    setDataBackSelector(
      [...(DataBackFromSelector || [])]
        .map((item) => (item.name === name ? { ...item, value } : item))
        .concat(
          DataBackFromSelector?.find((item) => item.name === name)
            ? []
            : [{ name, value }],
        ),
    );
  };

   //update data input
    const UpataDatainput = (nameinput: string, data: string) => {
      setInitialDataInputSelector(
        initialDataInput.map((group: InputItem[]) =>
          group.map((input: InputItem) =>
            input.name === nameinput ? { ...input, value: data } : input,     
          ),
        ),
      );
      AddHandleDataBack(nameinput, data);
    };



return {
    DataBackFromSelector,
    setDataBackSelector,
    setTokenSelector,
    setLoadingSelector,
    loading,
    token,
    initialDataInput,
    setInitialDataInputSelector,
    AddHandleDataBack,
    UpataDatainput  
    
   }
}