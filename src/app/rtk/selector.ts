import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { setFrom,setInitialDataInput,setLoading } from "./slice/slicerFrom";
import{setToken} from "./slice/sliceuser";
import { InputItem, StateInputForm } from "@/app/type";

export default function selector() {
let DataBackFromSelector = useSelector((state: RootState) => state.from.dataBack);
let token = useSelector((state: RootState) => state.user.token)  || localStorage.getItem("token");
let loading = useSelector((state: RootState) => state.from.loading);
let initialDataInput = useSelector((state: RootState) => state.from.initialDataInput);
const dispatch = useDispatch();
 const setDataBackSelector = (data: any) => {
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
        .map((item) => (item.name === name ? { ...item, value, errorMessage:item.errorMessage } : item))
        .concat(
          DataBackFromSelector?.find((item) => item.name === name)
            ? []
            : [{ name, value, errorMessage: "" }],
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
    
     const updataInputDataBackError = () => {
      if (DataBackFromSelector) {
        setDataBackSelector(DataBackFromSelector);
  
         const updatedInitialDataInput = initialDataInput.map((group) =>
          group.map((input) => ({
            ...input,
            errorMessage: DataBackFromSelector.find((item: any) => item.name === input.name)
              ?.errorMessage,
          })),
        );
        setInitialDataInputSelector(updatedInitialDataInput);
      }
      }


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
    updataInputDataBackError,
    UpataDatainput ,
   
   }
}