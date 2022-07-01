import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './components/Home/Calendar';
import Todo from './components/Home/Todo';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Completed from './components/Home/Completed';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='task' element={<Completed></Completed>}></Route>
        <Route path='calendar' element={<Calendar></Calendar>}></Route>
        <Route path='todo' element={<Todo></Todo>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
