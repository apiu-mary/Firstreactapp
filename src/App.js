import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile';
import LoginForm from './pages/profile';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>

    </div>
    <switch>
       <Routes>
    <Route path='/home'Component={Home}exact/>
    <Route path='/about'Component={About}/>
    <Route path='/profile'Component={Profile}/>
    </Routes>

    </switch>
   
    </BrowserRouter>
    
  );
}

export default App;