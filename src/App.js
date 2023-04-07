import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyHome from './components/MyHome';
import CityPage from './components/CityPage';

function App() {
  return (
    <div className="App">
      <MyNav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyHome />}></Route>
          <Route path='city/:name' element={<CityPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
