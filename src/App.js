import './App.css';
import ContactUs from './Components/ContactUs';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/contactus" element={<ContactUs />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
