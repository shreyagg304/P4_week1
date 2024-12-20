import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Marketplace from './components/Marketplace';
import Profile from './components/Profile';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import SignUp from './components/Signup';
import Cart from './components/Cart';
import Details from './components/Details';
import NewBook from './components/Newbook';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/book/:id" element={<Details />} />
        <Route path="/newbook" element={<NewBook />} />
      </Routes>
    </Router>
  );
}

export default App;
