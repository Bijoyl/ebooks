import { Routes, Route } from "react-router-dom";
import { HomePage, ProductList, ProductDetails, Register, Login, CartPage, OrderPage, DashboardPage, PageNotFound } from "../pages";
import { RestrictedRoutes } from "./RestrictedRoutes";

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/" element={<ProductList/>} />
            <Route path="/products/:id" element={<ProductDetails/>} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={ <RestrictedRoutes> <CartPage/> </RestrictedRoutes> }  />
            <Route path="/orderSummary" element={ <RestrictedRoutes> <OrderPage/> </RestrictedRoutes> }  />
            <Route path="/dashboard" element={ <RestrictedRoutes> <DashboardPage/> </RestrictedRoutes> }  />
            <Route path= "*" element={<PageNotFound/>} />
        </Routes>
    </>
  )
}
