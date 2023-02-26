import { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [moviedetail, setMovieDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    const getMovie = async () => {
        const response = await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        );
        const json = await response.json();
        console.log(json);
        setMovieDetail(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, [])
    return (
        <div>
            {
                loading ?
                    <h1>Loading...</h1> :
                    <Container>
                        <Row>
                            <Col sm={6}>
                                <img src="" />
                            </Col>
                        </Row>
                    </Container>
            }

        </div>

    );
}
export default Detail;