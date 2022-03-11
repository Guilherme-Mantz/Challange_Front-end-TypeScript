import { Link } from 'react-router-dom';
import { FilmData } from '../../types/Types';

interface Props {
    dataFilms: {
        results: [
            FilmData
        ]
    }
};

function CardFilm({dataFilms}: Props) {
  return (
    <>
        { dataFilms.results.map((item: FilmData) => {
            return (
                <Link to={`/movie/${item.id}`} key={item.id} className='card' id='movie-link'>
                    <div className="col">
                        <div className="card h-100">
                            <img src={'https://image.tmdb.org/t/p/w500'+item.poster_path} className="card-img-top" alt={item.title} />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.release_date}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            )
        })
        }
        </>
  )
}

export default CardFilm