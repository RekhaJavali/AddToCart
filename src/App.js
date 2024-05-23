import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Header } from './components/Header';

import { Cards } from './components/Cards';
import { CardsDetails } from './components/CardsDetails';

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route  path="/" element={<Cards/>} />
        <Route path="/cart/:id" element ={<CardsDetails/>} />
      </Routes>
     
    </div>
  );
}

export default App;
