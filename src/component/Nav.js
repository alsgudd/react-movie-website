import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
  const nav_title = {
    fontWeight: "700",
    fontSize: "30px",
  }
  const nav_icon = {
    fontSize: "24px",
    padding: "4px 8px",
  }
  const nav_icon_container = {
    display: "flex",
    listStyle: "none",
  }

  
  return (
    <Navbar className='p-3'>
      <Container>
        <Navbar.Brand href="/" style={nav_title}>MAXBOX</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Designed by: <a href="https://github.com/alsgudd">MinHyung Lee</a>
          </Navbar.Text>
        </Navbar.Collapse>
        <div style={{marginTop: "4px"} }>
          <ul style={nav_icon_container}>
            <li style={nav_icon}><a href="https://twitter.com/?lang=ko" target="_blank"><i className="fab fa-twitter-square"></i></a></li>
            <li style={nav_icon}><a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
}

export default Nav;