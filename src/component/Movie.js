import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Movie(props) {
    if(props.movie.medium_cover_image == "") {
        return null;
    }
    return (
        <Col sm={6}>
            <img src={ props.movie.medium_cover_image } alt="Movie Cover Image"/>
            <h2>
                <Link to={ `/movie/${props.movie.id}` }>{ props.movie.title }</Link>
            </h2>
            <p>{ props.movie.summary }</p>
            <ul>
                { props.movie.genres.map((genre) => {
                    return (
                        <li key={genre}> {genre} </li>
                    )
                })}
            </ul>
        </Col>
    )
}

export default Movie;