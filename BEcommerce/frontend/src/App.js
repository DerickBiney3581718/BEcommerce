
import Layout from "./components/Layout";
import { useReducer } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { CartContext, CartDispatcherContext } from "./CartContext";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import CartReducer from "./CartReducer";

const queryClient = new QueryClient()


function App() {
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
        <QueryClientProvider client={queryClient}>
          <CartContext.Provider value={cart}>
            <CartDispatcherContext.Provider value={dispatch}>
              <Layout>
                <Outlet />
              </Layout>
            </CartDispatcherContext.Provider>
          </CartContext.Provider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </div>

    </ThemeProvider>
  );
}
export default App;

