// export default function Movies() {

//     <div>

//         <div>

//             {data.Search.map((m) => <div>{m.Title}   - - -  {m.Year} <img src={m.poster} width="220px" /></div>)}


//         </div>


//     </div>

 
// export async function getServerSideProps(context) {
//     const res = await fetch(`http://www.omdbapi.com/?apikey=c8f0306e&s=bagdad`)
//     const data = await res.json()
//     return {
//         props: {

//             data

//         }
//     }
// }


// async function fetcher(url) {

//     const res = await fetch(url)

//     const json = await res.json()

//     return json

// }


import useSWR from 'swr'

export default function Movies2(){

    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=20cf0b68&s=bagdad`, fetcher)    

    if (error) return <div>Falha na requisição...</div>

    if (!data) return <div>Carregando...</div>

    return (

        <div>

            {data.Search.map( (m) => <div> <div>{m.Title}</div> <div>{m.Year}</div> <div> <img src={m.Poster} width="300px" height="200px"/>  </div>  </div>  )}

        </div>

    )    

}



async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}
