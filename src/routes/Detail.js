import { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
    const { id } = useParams();
    const [datas, setDatas] = useState({});
    const [loading, setLoading] = useState(true);

    const getMovie = async () => {
        const response = await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        );
        const json = await response.json();
        setDatas(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, [])
    console.log(datas);
    return (
        <div>
            {
                loading ?
                    <h1>Loading...</h1> :
                    <Container>
                        <Row>
                            <Col lg={6}>
                                <img className={styles.detail__img} src={datas.large_cover_image} />
                            </Col>
                            <Col lg={6}>
                                <h1 className={styles.detail__title}>
                                    {datas.title_long}<br />
                                    {datas.rating} / 10 ⭐
                                </h1>
                                <ul>
                                    {
                                        datas.genres.map((genre, i) => {
                                            return (
                                                <li key={i}>{genre}</li>
                                            )
                                        })
                                    }
                                </ul>
                                <p>{datas.description_full}</p>
                            </Col>
                        </Row>
                    </Container>
            }
        </div>

    );
}
export default Detail;