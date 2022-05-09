import './App.scss';
import { Routes ,Route , Router } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about"  element={<About />} />
          <Route path="contact"  element={<Contact />} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
