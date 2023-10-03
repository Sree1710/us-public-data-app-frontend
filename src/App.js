import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewData from './Components/ViewData';
import AddData from './Components/AddData';
import SearchData from './Components/SearchData';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<AddData/>}/>
        <Route path='/searchpd' exact element={<SearchData/>}/>
        <Route path='/viewpd' exact element={<ViewData/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
