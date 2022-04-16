
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Breakfast from './Pages/Shared/Foods/Breakfast/Breakfast';
import Dinner from './Pages/Shared/Foods/Dinner/Dinner';
import Lunch from './Pages/Shared/Foods/Lunch/Lunch';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login/>}></Route>
          <Route path='/breakfast' element={<Breakfast />}></Route>
          <Route path='/lunch' element={<Lunch />}></Route>
          <Route path='/dinner' element={<Dinner />}></Route>
        </Routes>
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
