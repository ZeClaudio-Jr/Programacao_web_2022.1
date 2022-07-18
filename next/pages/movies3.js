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


    const [input_0, setInput_0] = useState('')
    const [input_1, setInput_1] = useState('')
    const [input_2, setInput_2] = useState('')
    const [input_3, setInput_3] = useState('')

    //const {data, error} = useSWR(url, theFetcher)

    

    const onClickHandler_0 = (e) => {

        e.preventDefault()

        if (url_0 === '') setUrl_0('http://www.omdbapi.com/?apikey=20cf0b68&s=${input_0')

        else setUrl_0('')

    }


    const onClickHandler_1 = (e) => {

        e.preventDefault()

        if (url_1 === '') setUrl_1('http://www.omdbapi.com/?apikey=20cf0b68&s=${input_1')

        else setUrl_1('')

    }


    const onClickHandler_2 = (e) => {

        e.preventDefault()

        if (url_2 === '') setUrl_2('http://www.omdbapi.com/?apikey=20cf0b68&s=${input_2')

        else setUrl_2('')

    }


    const onClickHandler_3 = (e) => {

        e.preventDefault()

        if (url_3 === '') setUrl_3('http://www.omdbapi.com/?apikey=20cf0b68&s=${input_3')

        else setUrl_3('')

    }


    

    return (


        <div>

            <div style={{marginBottom: '26px'}}>
                <h3>Nos diga qual o nome do filme aqui:</h3>
                <input type="text" id="film_0" style={{marginBottom: '7px'}}></input>
                <button style={{margin: '7px'}} onClick={() => setInput_0(document.getElementById('film_0').value)}> Solicite aqui </button>
            </div>
            <TheLink url={url_0} handler={onClickHandler_0}/>
            <TheMovies data={resposta_0.error ? {error: 'Sua pesquisa não está correta.'}: resposta_0.data ? resposta_0.data: {Search: ''}} show={url_0 !== ''}/>


            <div style={{marginBottom: '26px'}}>
                <h3>Nos diga qual o nome do filme aqui:</h3>
                <input type="text" id="film_1" style={{marginBottom: '7px'}}></input>
                <button style={{margin: '7px'}} onClick={() => setInput_1(document.getElementById('film_1').value)}> Solicite aqui </button>
            </div>
            <TheLink url={url_1} handler={onClickHandler_1}/>
            <TheMovies data={resposta_1.error ? {error: 'Sua pesquisa não está correta.'}: resposta_1.data ? resposta_1.data: {Search: ''}} show={url_1 !== ''}/>


            <div style={{marginBottom: '26px'}}>
                <h3>Nos diga qual o nome do filme aqui:</h3>
                <input type="text" id="film_2" style={{marginBottom: '7px'}}></input>
                <button style={{margin: '7px'}} onClick={() => setInput_2(document.getElementById('film_2').value)}> Solicite aqui </button>
            </div>
            <TheLink url={url_2} handler={onClickHandler_2}/>
            <TheMovies data={resposta_2.error ? {error: 'Sua pesquisa não está correta.'}: resposta_2.data ? resposta_2.data: {Search: ''}} show={url_2 !== ''}/>


            <div style={{marginBottom: '26px'}}>
                <h3>Nos diga qual o nome do filme aqui:</h3>
                <input type="text" id="film_3" style={{marginBottom: '7px'}}></input>
                <button style={{margin: '7px'}} onClick={() => setInput_3(document.getElementById('film_3').value)}> Solicite aqui </button>
            </div>
            <TheLink url={url_3} handler={onClickHandler_3}/>
            <TheMovies data={resposta_3.error ? {error: 'Sua pesquisa não está correta.'}: resposta_3.data ? resposta_3.data: {Search: ''}} show={url_3 !== ''}/>



        </div>

        // <div>

        //     <TheLink url={url} handler={onClickHandler}/>

        //     <TheMovies data={ error?{error:'Erro na pesquisa'}: data ? data: {Search:''} } show={url !== ''}/>

        

        // </div>

    )

}





export function TheMovies({data,show}){

    if (!show) return (<div></div>)

    if (!data.Search === '') return (<div></div>)

    if (data.error) return (<div>Falha na requisição</div>)

    if (data.Search === '' ) return (<div>CARREGANDO...</div>)

    

    const[urlMv, setUrlMv] = useState('')

    const mv =useSWR(urlMv, theFetcher)
    
    const showMovie = (imdbID) => {setUrlMv(`http://www.omdbapi.com/?apikey=20cf0b68&i=${imdbID}`)}
    
    
    
    return (

        <div>

            <div style={{ margin: 90}}> {mv.data ? <TheMv data={mv.data} error={mv.error} /> : ''} </div> 

            { data.Search.map( (m) => <div>{m.Title} --- {m.Year}</div>  ) }            

        </div>

    )

}


export function TheMv({ data, error}) {

    if (error) return <div>Falha na requisição...</div>

    if (!data) return <div>CARREGANDO...</div>

    return (

        <div>

            <div>{data.Title} --- {data.Year} --- <img style={{height: 185, width: 100}} src={data.Poster} /></div>
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