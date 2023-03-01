import { useState } from "react";
import { Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Movies.module.css";

function Movie(props) {
    const navigate = useNavigate();

    if (props.hasOwnProperty("medium_cover_image")) return null;
    return (
        <Col md={6} className={styles.movie}>
            <div className={styles.movie__img__bg}>
                <div className={styles.movie__overlay}><span className={styles.movie__overlay__text}>
                    {props.movie.rating} / 10 ⭐
                    </span></div>
                <img src={props.movie.medium_cover_image}
                    alt="Movie Cover Image"
                    className={styles.movie__img}
                    onClick={() => {
                        navigate(`/movie/${props.movie.id}`)
                    }}
                />
            </div>


            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${props.movie.id}`}>{props.movie.title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{props.movie.year}</h3>
                <p>{props.movie.summary.length > 235 ? `${props.movie.summary.slice(0, 235)}...` : props.movie.summary}</p>
                <ul className={styles.movie__genres}>
                    {props.movie.genres.map((genre, i) => {
                        return (
                            <li key={i}> {genre} </li>
                        )
                    })}
                </ul>
            </div>
        </Col>
    )
}

export default Movie;