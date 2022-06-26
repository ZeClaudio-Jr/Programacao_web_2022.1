const ContagemRegres = require('./seguranca/contagemRegres')
const Precaucao = require('./seguranca/precaucao')
const Convite = require('./referencias/convite')
const Cidade = require('./referencias/cidade')


export default function Principal(){

    return (
 
       <div>
 
          <h2>  Nós que fazemos a festa de <Convite.Nss/>. <ContagemRegres.ContRegr/> e <MariaPrea/></h2>

          
       </div>
 
    )
 
 }


 export function MariaPrea(){  //OK

    return (
 
       <h1>morreu Maria Preá...</h1>
 
    )
 
 }