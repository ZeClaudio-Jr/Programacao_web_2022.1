import Cabecalho from "./cabecalho";
import DataAtual from "./dataatual";

//const DataAtual = require("./dataAtual"); *Quando usar dessa forma?

function Home() {
        
    return (

        <div>

            <DataAtual/>

            <Cabecalho/>
            
            <h2>Viva Santana!</h2>

        </div>
    );
}

export default Home;


// export default function Home(){

//    return (

//       <div>

//          <h2>

//            Viva Santana!

//          </h2>

//       </div>

//    )

// }
