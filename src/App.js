
import './App.css';
import AddMovie from './components/AddMovie';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import UpdateMovie from './components/UpdateMovie';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddMovie />} />
        <Route path='/movies/:id' element={<MovieDetails/>}/>
        <Route path='/update/:id' element={<UpdateMovie />} />
        <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        
    </div>
    </Router>
  );
}

export default App;
