//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from "./components/layouts/Header";
import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Nav/>
      <Routes>
        {/*aca se habilitan los distintos componentes*/}
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
