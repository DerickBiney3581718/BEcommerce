
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ExplorePage from "./pages/ExplorePage";
import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";
import Receipt from "./components/Receipt";
import ShowCatPage from "./pages/ShowCatPage";
import { Outbound } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";


function App() {
  const theme = createTheme({
    palette: {
      biney: {
        gray: '#717f94'
      },
    },
    typography: {
      fontFamily: 'Lato'
    }
  })
  return (
    <ThemeProvider theme={theme} >
      <div className="App">
        {/* <CssBaseline/> */}
        <Layout>
          <Outlet />
        </Layout>
        <Footer />
      </div>

    </ThemeProvider>
  );
}

export default App;

