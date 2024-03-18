import {Routes,Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import  Login  from './pages/Login';

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  </>
  );
}

export default App;
