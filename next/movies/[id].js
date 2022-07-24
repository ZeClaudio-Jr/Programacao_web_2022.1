// import useSWR from 'swr'

// import { useRouter } from 'next/router'



// export default function TheMovie(){

//     const {id} = useRouter().query

    

//     const {data, error} = useSWR(`https://www.omdbapi.com/?apikey=20cf0b68&i=${id}`, async (u) => {

//         const res = await fetch(u)

//         const json = await res.json();

//         return json;

//     })

    



//     if (error) return <div>Erro na requisição/resposta </div>



//     if (!data) return <div>Carregando...</div>



//     if (data.Error) <div>Erro</div>



//     return (

//         <div>

//             <div>{data.Title} --- {data.Year}</div>

//             <div>{data.Plot}</div>

//             <div>

//                 <img src={data.Poster} width="300" height="400"/>

//             </div>

            

            

//         </div>

                 

//     )

// }



// export async function getStaticPaths(){

//     return {

//         paths:[

//             {params: {id: "tt0095801"}},

//             {params: {id: "tt0033152"}},

//             {params: {id: "tt0015400"}},

//             {params: {id: "tt0041149"}},

//             {params: {id: "tt0044388"}},

//             {params: {id: "tt0098746"}},

//             {params: {id: "tt0046322"}},

//             {params: {id: "tt0046497"}},

//             {params: {id: "tt0044389"}}

//         ],

//         fallback: true 

//     }

// }



// export async function getStaticProps({ params }) {

//     const res = await fetch(`https://www.omdbapi.com/?apikey=20cf0b68&i=${params.id}`)

//     const movie = await res.json();

//     return {

//       props: {

//         movie

//       }

//     }

// }














// export default function TheMovie({data}){

//     console.log(`Pré-renderizando ${data.Title}`)

//     return (

//         <div>

//             <div>{data.Title} --- {data.Year}</div>

//             <div>{data.Plot}</div>

//             <div>

//                 <img src={data.Poster} width="300" height="400"/>

//             </div>

//         </div>     

//     )

// }



// export async function getStaticPaths(){

//     return {

//         paths:[

//             {params: {id: "tt0095801"}},

//             {params: {id: "tt0033152"}},

//             {params: {id: "tt0015400"}},

//             {params: {id: "tt0041149"}},

//             {params: {id: "tt0044388"}},

//             {params: {id: "tt0098746"}},

//             {params: {id: "tt0046322"}},

//             {params: {id: "tt0046497"}},

//             {params: {id: "tt0044389"}}

//         ],

//         fallback: true 

//     }

// }



// export async function getStaticProps({ params }) {

//     const res = await fetch(`https://www.omdbapi.com/?apikey=20cf0b68&i=${params.id}`)

//     const data = await res.json();

//     return {

//       props: {

//         data

//       }

//     }

// }




export default function TheMovie({ data }) {
  
    if (!data) return (<div> Carregando...</div>)
  
    if (data.Title) {
      return (
        <div className="container">
          <div className="titulo">{data.Title} --- {data.Year}</div>
          <div className="descricao">{data.Plot}</div>
          <div className="imagem">
            <img src={data.Poster} width="300" height="400" />
          </div>
  
          <style global jsx>{`
          body {
            
            background: #282C34;
            color: white;
            margin: 20px;
            padding: 20px;
            }
          .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
          }
          .titulo {
            font-size: 2rem;
            margin-bottom: 20px;
          }
          
          .descricao {
            margin-bottom: 20px;
            font-size: 1.2rem;
            width: 40%;
          }
          
        `}</style>
  
        </div>
        
      ) 
    } else {
      return (<div> Não há o recurso solicitado no sistema</div>)
    }
   
  }
  
  export async function getStaticPaths() {
    return {
      paths: [
        { params: { id: "tt0095801" } },
        { params: { id: "tt0033152" } },
        { params: { id: "tt0015400" } },
        { params: { id: "tt0041149" } },
        { params: { id: "tt0044388" } },
        { params: { id: "tt0098746" } },
        { params: { id: "tt0046322" } },
        { params: { id: "tt0046497" } },
        { params: { id: "tt0044389" } }
      ],
      fallback: true
    }
  }
  
  export async function getStaticProps({ params }) {
  
    const res = await fetch(`https://www.omdbapi.com/?apikey=20cf0b68&i=${params.id}`)
    const data = await res.json();
    
    return {
      props: {
        data
      }
    }
  }