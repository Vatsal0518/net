import UpdateM from './UpdateM';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';
import MoviesList from './components/MoviesList';
import UpdateList from './components/UpdateList';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
  
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/'element={<Home/>}/>
<Route path='/movies' element={<Movies/>}/>
<Route path='/movies/:id' element={<UpdateM/>}/>
<Route path='/movielist' element={<MoviesList/>}/>
<Route path='/lists/:id' element={<UpdateList/>} />
      </Routes>
  
     </BrowserRouter>
  
    </div>
  );
}

export default App;
