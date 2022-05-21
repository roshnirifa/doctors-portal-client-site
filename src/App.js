
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequriedAuth from './Pages/RequriedAuth/RequriedAuth';

import Header from './Pages/Shared/Header/Header';
import SignUp from './Pages/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appointment' element={
          <RequriedAuth>
            <Appoinment></Appoinment>
          </RequriedAuth>
        }></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
