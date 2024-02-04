import './App.css';
import Header from './components/Header/Header';
import SubHeader from './components/SubHeader/SubHeader';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import FormPage from './pages/FormPage/FormPage';
import ContactPage from './pages/ContactPage/ContactPage';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<FormPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <About />
      <Footer />
    </div>
  );
}

export default App;
