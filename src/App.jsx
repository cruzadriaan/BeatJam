import './App.css'
import { Home } from './pages/Home';
import { Navbar } from './pages/Navbar';
import { Footer } from './pages/Footer';
import { Menu } from './pages/Menu';
import { Gallery } from './pages/Gallery';
import { ContactUs } from './pages/ContactUs';
import { Order } from './pages/Order';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        
      </Router>
    </div>

  )
}

export default App;
