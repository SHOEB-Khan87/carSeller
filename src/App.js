
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';

import Navbar from './Components/Navbar';
import Page2 from './Components/Page2';
import Page1 from '../src/Components/Page1';
import Page3 from './Components/Page3';
import Page4 from './Components/Page4';
import Page5 from './Components/Page5';
import Page6 from './Components/Page6';
import Page7 from './Components/Page7';
import Page8 from './Components/Page8';
import Page9 from './Components/page9';
import Page10 from './Components/Page10';
import Popup from './Components/Popup';

function App() {


  return (
    <>
      <BrowserRouter>



        <Navbar />
        <Routes>
          <Route path='/' element={<Page1 />} />
          <Route path='/Page2' element={<Page2 />} />
          <Route path='/Page3' element={<Page3 />} />
          <Route path='/Page4' element={<Page4 />} />
          <Route path='/Page5' element={<Page5 />} />
          <Route path='/Page6' element={<Page6 />} />
          <Route path='/Page7' element={<Page7 />} />
          <Route path='/Page8' element={<Page8 />} />
          <Route path='/Page9' element={<Page9 />} />
          <Route path='/Page10' element={<Page10 />} />
        </Routes>

        <Popup />


        <Footer />

      </BrowserRouter>

    </>
  );
}

export default App;
