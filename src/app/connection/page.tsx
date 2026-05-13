import From from "../components/From/From"
import { initialStateConnection } from "../Utilis"
export default function  connection() {
  return (
    <div className="
     shadow-2xl/60 
       rounded-[20px]
        bg-white 
        w-[60vw]
        relative
        left-[50%]
        translate-x-[-50%]
        p-10
        mt-10
    "> page connection
      <From
        tapinput={initialStateConnection}
        
      />

    </div>
  )
}
