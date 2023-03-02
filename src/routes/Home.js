import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Movie from '../component/Movie.js'
import Loading from '../component/Loading.js';
import '../style.css';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch(
            `https://yts.mx/api/v2/list_movies.json?limit=50&sort_by=year&minimum_rating=8`
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, [])

    return (
        <div>
            {
                loading ?
                    <Loading /> :
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



export default Home;