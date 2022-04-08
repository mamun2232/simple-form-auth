

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/LogIn/Login';
import Register from './Components/Register/Register';


function App() {
  return (
    <div className="log-infrom">
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
