
import './App.css';
import Create from './components/Create';
import Update from './components/Update';
import Read from './components/Read';
import {BrowserRouter,Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="main">
   <h2> CURD OPERATION </h2>
    <BrowserRouter>
    <Routes>
      <Route exact path="/create" element={<Create/>}/>
       <Route exact path="/read" element={<Read/>}/>
        <Route exact path="/update" element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    </div> 
  );
}

export default App;
