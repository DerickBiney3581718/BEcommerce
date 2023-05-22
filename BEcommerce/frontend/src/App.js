
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



function App() {
  return (
    <div className="App">
      <Layout>
        <Outlet/>
        
        {/* <LandingPage /> */}
        {/* <ShowCatPage /> */}
        {/* <ExplorePage /> */}
        {/* <CartPage /> */}
        {/* <OrdersPage/> */}
        {/* <Receipt/> */}
      </Layout>
      <Footer />
    </div>
  );
}

export default App;

