import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Movies.module.css";

function Movie(props) {
    if (props.movie.medium_cover_image == "") {
        return null;
    }
    return (
        <Col sm={6} className={styles.movie}>
            <img src={props.movie.medium_cover_image} alt="Movie Cover Image" className={styles.movie__img} />
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${props.movie.id}`}>{props.movie.title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{props.movie.year}</h3>
                <p>{props.movie.summary.length > 235 ? `${props.movie.summary.slice(0, 235)}...` : props.movie.summary}</p>
                <ul className={styles.movie__genres}>
                    {props.movie.genres.map((genre) => {
                        return (
                            <li key={genre}> {genre} </li>
                        )
                    })}
                </ul>
            </div>
        </Col>
    )
}

export default Movie;