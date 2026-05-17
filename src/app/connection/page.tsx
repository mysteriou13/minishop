import From from "../components/From/From"
import { initialStateConnection } from "../Utilis"
export default function  connection() {
  return (
    <div className="From"> page connection
      <From
        tapinput={initialStateConnection}
        
      />

    </div>
  )
}
