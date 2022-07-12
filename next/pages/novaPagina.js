import { ContRegr } from "./components/contagemRegres";
import { Nss } from "./components/convite";

export default function Principal() {
        
    return(

        <div>

            <Nss/>

            <ContRegr/>
            
            <MariaPrea />

            <h1>Feliz festa</h1>
            
                   
        </div>

    );
}

export function MariaPrea() {

    return <h2>E morreu Maria Preá...</h2>;
}
