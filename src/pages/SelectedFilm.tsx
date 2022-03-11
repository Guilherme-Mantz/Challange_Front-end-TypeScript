import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import CardActor from "../components/CardActor/CardActor";
import CardFilm from "../components/CardFilm/CardFilm";

import { FilmData, CreditData, VideoData } from "../types/Types";

interface Recommendations {
    results: [
        FilmData
    ]
};

export default function SelectedFilm(){
    const { id } = useParams();
    const [ data, setData ] = useState<FilmData | null>(null);
    const [ credit, setCredit ] = useState<CreditData | null>(null); 
    const [ video, setVideo ] = useState<VideoData | null>(null);
    const [ recommendation, setRecommendation ] = useState<Recommendations | null>(null);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=77de67cc3e0bf5fd1326957e1b15e076&language=en-US`)
        .then((response) => {
            setData(response.data)
        })

        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=77de67cc3e0bf5fd1326957e1b15e076&language=en-US`)
        .then((response) => {
            setVideo(response.data)
        })

        axios.get(` https://api.themoviedb.org/3/movie/${id}/credits?api_key=77de67cc3e0bf5fd1326957e1b15e076&language=en-US`)
        .then((response) => {
            setCredit(response.data)
        })

        axios.get(` https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=77de67cc3e0bf5fd1326957e1b15e076&language=en-US`)
        .then((response) => {
            setRecommendation(response.data)
        })
    }, [id])

    return(
        <>
        <Header/>
        <div className="container-fluid shadow" id="banner-film">
            <div className="container primary-color position-relative" id="characteristics">
                <div className="row">
                    <div className="col-lg-4 col-md-3 text-center"><img src={data? 'https://image.tmdb.org/t/p/w500'+data.poster_path:''} id="image-film" className="img-fluid" alt="" width="383" height="574" /></div>
                    <div className="col" id="text-film">
                        <h2>{ data? data.title : '' }</h2>
                        <p>{ data ? data.release_date+' '+`(${data.original_language})` + ' • '+ data.genres.map(g => g.name) +' • '+ data.runtime + ' min': ''}</p>
                        <h5>Sinopse</h5>
                        <p>{data? data.overview : ''}</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container" id="list">
            <h2 id="title-list">Elenco original</h2>
            <div className="scrollmenu">
                { credit ? <CardActor persons={credit}/>:''}           
            </div> 
        </div>

        <div className="container mt-5">
            <h2 className="mb-3" id="title-list">Trailer</h2>
            <div className="row">
            <iframe className="image-fluid" width="560" height="650" src={video? `https://www.youtube.com/embed/${ video.results.length !== 0 ? video.results[0].key :'' }`:''} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>        
        </div>

        <div className="container mt-5" id="recomendations">
            <h2 className="mb-4" id="title-list">Recomendações</h2>
            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4">
               { recommendation? <CardFilm dataFilms={recommendation}/>:''}
            </div>
        </div>
        </>
    )
};