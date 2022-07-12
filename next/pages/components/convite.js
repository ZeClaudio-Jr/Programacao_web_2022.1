//import { Religiao } from "../seguranca/precaucao";

import { Religiao } from "./precausao";
import { Caico, Family } from "./referencia";

//const Caico = require("./cidade");

export function Nss() {
  //OK

  return (
    <div>
      <h1>
        Nossa Senhora de Santana, em <Caico/><Family/><Religiao/>
      </h1>
    </div>
  );
}

//module.exports = Nss
