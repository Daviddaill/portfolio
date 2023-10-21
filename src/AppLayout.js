import { Outlet } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import { ThemeProvider } from "./component/themeContext/ThemeContext";
import './component/themeContext/theme.css'

function AppLayout() {

   return (
      <ThemeProvider>
      <div>
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