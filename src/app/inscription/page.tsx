import From from "../components/From/From";
import { initialStateInscription } from "../Utilis";

export default function page() {
  return (
    <div>
      page inscription
      <From
        tapinput={initialStateInscription}
        title={"Formulaire d'inscription"}
       
      />
    </div>
  );
}
