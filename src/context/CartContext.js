import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer";
const cartInitialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(cartInitialState);

export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState);
    
    function addToCart(product){
        const updatedList = state.cartList?.concat(product);
        const updatedTotalPrice = state.total + product.price; 
        dispatch ({
            type: "ADD",
            payload: {
                products: updatedList,
                total: updatedTotalPrice  
            }
        })
    }
    
    function removeFromCart(product){
        const updatedList = state.cartList.filter(item => item.id !== product.id);
        const updatedTotalPrice = state.total - product.price;
        dispatch({
            type: "REMOVE",
            payload: {
                products: updatedList,
                total: updatedTotalPrice
            }
        })
     }

     function clearCart(){
        dispatch({
            type: "CLEAR",
            payload: {
                product: [],
                total: 0
            }
        })
     }

    const value = {
        cartList:state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart
    }
    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () =>{
    const context = useContext(CartContext);
    return context;
}