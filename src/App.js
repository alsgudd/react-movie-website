import { Routes, Route, Link } from 'react-router-dom'
import Home from './routes/Home';
import './App.css';
import Detail from './routes/Detail';

function App() {
  return (
    <Routes>
      <Route path='/movie/:id' element={ <Detail/> }/>
      <Route path='/' element={ <Home /> }/>
    </Routes>
  )
}

export default App;
