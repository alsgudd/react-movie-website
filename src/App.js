import { Routes, Route, Link } from 'react-router-dom'
import Home from './routes/Home';
import './style.css';
import Detail from './routes/Detail';
import Nav from './component/Nav.js';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/movie/:id' element={<Detail />} />
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      </Routes></>
  )
}

export default App;
