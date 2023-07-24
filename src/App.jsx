import './App.css';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom'
import Main from './Main/Main';
import About from './About/About';
import FeedBack from './FeedBack.jsx/FeedBack';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/feedback' element={<FeedBack/>}/>
      </Routes>
    </>
  );
}

export default App;
