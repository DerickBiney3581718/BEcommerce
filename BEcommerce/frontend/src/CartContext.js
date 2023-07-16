import { createContext, useContext, useEffect, useReducer, useRef, useState } from "react";
import CartReducer from "./CartReducer";
// TODO: CREATE CONTEXT FOR STATES AND DISPATCH
export const CartContext = createContext(null);
export const CartDispatcherContext = createContext(null)

// TODO: CREATE CUSTOM HOOKS FOR USECONTEXT
export const useCart = () => {
    return useContext(CartContext)
}

export const useCartDispatch = () =>{
    return useContext(CartDispatcherContext)
}
