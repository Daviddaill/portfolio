import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import './App.css';
import AppLayout from './AppLayout';
import Home from './page/home/Home';
import About from './page/about/About';
import Projects from './page/projects/Projects';
import Resume from './page/resume/Resume';
import Menu from './component/menu/menu'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          {/* Default route for English */}

          {/* Route for other languages */}
          <Route path='/:lang' element={<Home />} />
          <Route path='/:lang/home' element={<Home />} />
          <Route path='/:lang/about' element={<About />} />
          <Route path='/:lang/projects' element={<Projects />} />
          <Route path='/:lang/resume' element={<Resume />} />
          <Route path='/:lang/menu' element={<Menu />} />
          {/* Redirect to English for the root path */}
          <Route index element={<Navigate to='/en' replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
