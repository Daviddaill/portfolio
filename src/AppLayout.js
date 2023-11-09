import { Outlet } from "react-router-dom";
//Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
//Style
import './App.css';
//Hooks
import { ThemeProvider } from "./hooks/ThemeContext";

function AppLayout() {
   return (
      <ThemeProvider>
      <div className='app'>
         <Header />
         <main>
            <Outlet />
         </main>
         <Footer />
      </div>
      </ThemeProvider>
   )
}

export default AppLayout;