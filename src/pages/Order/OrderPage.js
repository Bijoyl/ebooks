import { OrderSuccess } from "./components/OrderSuccess";
import { OrderFailure } from "./components/OrderFailure";
import { useLocation } from "react-router-dom";
export const OrderPage = () => {
  const { state } = useLocation();
  return (
    <main>
        {state.status ? <OrderSuccess data={state.data}/> : <OrderFailure/>}
    </main>
  )
}
