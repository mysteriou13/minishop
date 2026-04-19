import { InputItem, InputProps } from "../type"
import Input from "../input/input"

type  LinePros = {
    dataInput:InputItem[],
    handleChange: (name:string, value:string) =>void
}

export default function LineInput({dataInput,handleChange}:LinePros) {
  return (
    <div className="flex gap-16"> 
        {dataInput.map((data,index)=>
           <Input
                  key={index}
                  name={data.name}
                  label={data.label}
                  type={data.type}
                  value={data.value}
                  handleChange={(value: string) =>
                    handleChange(data.name, value)
                  }
                />
        )}
    </div>
  )
}
