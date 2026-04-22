import './App.css'
import { Home } from './pages/Home';
import { Navbar } from './pages/Navbar';
import { Footer } from './pages/Footer';
import { Menu } from './pages/Menu';
import { Gallery } from './pages/Gallery';
import { ContactUs } from './pages/ContactUs';
import { OrderDelivery } from './pages/OrderDelivery';
import { OrderPickUp } from './pages/OrderPickUp';
import { DeliveryOptions } from './pages/DeliveryOptions';
import { OrderSelection } from './pages/OrderSelection';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTopArrow } from './pages/ScrollToTopArrow';
import { useState } from 'react';

function App() {

  const [deliveryOption, setDeliveryOption] = useState("");

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/orderDelivery" element={<OrderDelivery />} />
          <Route path="/orderPickUp" element={<OrderPickUp />} />
          <Route path="/deliveryOptions" element={<DeliveryOptions setDeliveryOption={setDeliveryOption} />} />
          <Route path="/orderSelection" element={<OrderSelection deliveryOption={deliveryOption} />} />
        </Routes>
        <ScrollToTopArrow />
        
      </Router>
    </div>

  )
}

export default App;
