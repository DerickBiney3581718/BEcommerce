
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ExplorePage from "./pages/ExplorePage";
import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";
import Receipt from "./components/Receipt";
import ShowCatPage from "./pages/ShowCatPage";
import { Outbound } from "@mui/icons-material";
import { Outlet, useLoaderData } from "react-router-dom";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { CartContext, CartDispatcherContext, CartProvider } from "./CartContext";
import { useEffect, useReducer, useRef } from "react";
import CartReducer from "./CartReducer";

// // TODO: FETCHING CART INFO
// const cartEndpoint = 'http://localhost:8000/orders/current/'
// const FetchSync = async () => {
//   const fetchPromise = await fetch(cartEndpoint)
//   const jsonPromise = await fetchPromise.json()
//   // console.log(`json promise : ${jsonPromise}`);
//   return jsonPromise
// }

function App() {
  // let initialState = useRef({});
  const cartInitial = useLoaderData()
  console.log("initial cart in app function",cartInitial);
  const [cart, dispatch] = useReducer(CartReducer, cartInitial[0])
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
        <CartContext.Provider value={cart}>
          <CartDispatcherContext.Provider value={dispatch}>
            <Layout>
              <Outlet />
            </Layout>
          </CartDispatcherContext.Provider>
        </CartContext.Provider>

      </div>

    </ThemeProvider>
  );
}
export default App;

