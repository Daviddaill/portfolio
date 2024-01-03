import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
//Style
import './App.css';
//Layout
import AppLayout from './AppLayout';
//Pages
import Home from './page/home/Home';
import About from './page/about/About';
import Projects from './page/projects/Projects';
//Components
import Menu from './components/menu/menu'
import ScrollToTop from './components/scrollTop/ScrollTop';
import Solutions from './page/solutions/Solutions';
// import Pricing from './page/pricing/Pricing';
 
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<AppLayout />}>
          {/* Route for other languages */}
          <Route path=':lang' element={<Home />} />
          <Route path=':lang/home' element={<Home />} />
          <Route path=':lang/solutions' element={<Solutions />} />
          {/* <Route path=':lang/pricing' element={<Pricing />} /> */}
          <Route path=':lang/projects' element={<Projects />} />
          <Route path=':lang/about' element={<About />} />
          <Route path=':lang/menu' element={<Menu />} />
          {/* Redirect to English for the root path */}
          <Route index element={<Navigate to='/en' replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;