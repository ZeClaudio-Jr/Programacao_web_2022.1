import useSWR from 'swr'

import {useState} from 'react'



export default function Movies3(){

    const [url_0, setUrl_0] = useState('')
    const [url_1, setUrl_1] = useState('')
    const [url_2, setUrl_2] = useState('')
    const [url_3, setUrl_3] = useState('')


    const resposta_0 = useSWR(url_0, theFetcher)
    const resposta_1 = useSWR(url_1, theFetcher)
    const resposta_2 = useSWR(url_2, theFetcher)
    const resposta_3 = useSWR(url_3, theFetcher)


    const [input_0, setInput0] = useState('')
    const [input_1, setInput1] = useState('')
    const [input_2, setInput2] = useState('')
    const [input_3, setInput3] = useState('')

    //const {data, error} = useSWR(url, theFetcher)

    

    const onClickHandler = (e) => {

        e.preventDefault()

        if (url === '') setUrl('http://www.omdbapi.com/?apikey=20cf0b68&s=bagdad')

        else setUrl('')

    }



    return (

        <div>

            <TheLink url={url} handler={onClickHandler}/>

            <TheMovies data={ error?{error:'Erro na pesquisa'}: data ? data: {Search:''} } show={url !== ''}/>

        

        </div>

    )

}





export function TheMovies({data,show}){

    if (!show) return (<div></div>)    

    if (data.error) return (<div>falha na requisição</div>)

    if (data.Search === '' ) return (<div>carregando...</div>)

    return (

        <div>

            { data.Search.map( (m) => <div>{m.Title} --- {m.Year}</div>  ) }            

        </div>

    )

}


export function TheLink({url, handler}){    

    return (

        <div>

            <a href="/movies3.js" onClick={handler}> {url === '' ? 'Mostrar' : 'Ocultar'} </a>

        </div>

    )

}


async function theFetcher(url) {

    if (url === null || url === '') return {Search:''}

    const res = await fetch(url);

    const json = await res.json();

    return json;

}