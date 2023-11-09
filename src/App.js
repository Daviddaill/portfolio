import { Route, Routes, HashRouter } from 'react-router-dom';
// Style
import './App.css';
// Layout
import AppLayout from './AppLayout';
// Pages
import Home from './page/home/Home';
import About from './page/about/About';
import Projects from './page/projects/Projects';
import Resume from './page/resume/Resume';
// Components
import Menu from './components/menu/menu';
import ScrollToTop from './components/scrollTop/ScrollTop';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<AppLayout />}>
          {/* Route for other languages */}
          <Route path='#/:lang/*' element={<Home />} />
          <Route path='#/:lang/about' element={<About />} />
          <Route path='#/:lang/projects' element={<Projects />} />
          <Route path='#/:lang/resume' element={<Resume />} />
          <Route path='#/:lang/menu' element={<Menu />} />

          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
