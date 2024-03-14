import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import './App.css';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import  Login  from './pages/Login';

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  </>
  );
}

export default App;
