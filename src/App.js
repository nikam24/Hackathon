import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';
import Login from './components/Login';
import Signin from './components/Signin'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Login' element={<Login/>} />
        <Route path='/Signin' element={<Signin/>}/>
        </Routes>
    </div>
  );
}

export default App;
