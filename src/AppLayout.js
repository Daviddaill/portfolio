import { Outlet } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";

import './App.css';
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