import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Movie from '../component/Movie.js'
import '../style.css';

function Genre() {
    const genre = useParams();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch(
            `https://yts.mx/api/v2/list_movies.json?genre=${genre.id}&minimum_rating=8`
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, [])

    console.log(movies);
    console.log(genre);
    return (
        <div>
            {
                loading ?
                    <h1>Loading...</h1> :
                    <Container>
                        <Row>
                            {
                                movies.map((movie, i) => <Movie
                                    movie={movies[i]}
                                    key={movie.id} />)
                            }
                        </Row> 
                    </Container>
            }
        </div>
    );
}



export default Genre;