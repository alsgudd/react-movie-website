import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./Nav.module.css";
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();
  return (
    <Navbar className='p-3'>
      <Container>
        <Navbar.Brand onClick={() => {navigate('/react-movie-website')}} className={styles.nav_title}>MAXBOX</Navbar.Brand>
        <div style={{ marginLeft: '10px' }}>
          <Navbar.Brand  onClick={() => {navigate('/genre/romance')}} className={styles.nav_list}>Romance</Navbar.Brand>
          <Navbar.Brand onClick={() => {navigate('/genre/action')}} className={styles.nav_list}>Action</Navbar.Brand>
          <Navbar.Brand onClick={() => {navigate('/genre/thriller')}} className={styles.nav_list}>Thriller</Navbar.Brand>
        </div>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Designed by: <a href="https://github.com/alsgudd">MinHyung Lee</a>
          </Navbar.Text>
          <ul className={styles.nav_icon_container}>
            <li className={styles.nav_icon}><a href="https://twitter.com/?lang=ko" target="_blank"><i className="fab fa-twitter-square"></i></a></li>
            <li className={styles.nav_icon}><a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Nav;