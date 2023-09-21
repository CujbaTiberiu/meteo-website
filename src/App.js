import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyHome from './components/MyHome';
import CityPage from './components/CityPage';
import Favourites from './components/Favourites';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<MyHome />}></Route>
          <Route path='/city/:id' element={<CityPage />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
