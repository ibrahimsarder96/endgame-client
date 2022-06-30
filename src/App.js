import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './components/Home/Calendar';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='calendar' element={<Calendar></Calendar>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
