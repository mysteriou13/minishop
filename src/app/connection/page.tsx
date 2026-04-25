import From from "../components/From/From"
import { initialStateConnection } from "../Utilis"
export default function  connection() {
  return (
    <div> page connection
      <From
        tapinput={initialStateConnection}
        title={"Formulaire de connexion"}
      />

    </div>
  )
}
