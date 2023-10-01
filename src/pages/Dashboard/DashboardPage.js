import { useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { getUserOrders, userData } from "../../utilities";
import { toast } from "react-toastify";
export const DashboardPage = () => {
    const [user, setUser ] = useState({});
    useTitle (`${user.name}'s order summary`);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchOrders() {
            try{
                const data =  await getUserOrders();
                setOrders(data);
            }
            catch(error){
                toast.error(error.message, {position:"bottom-center"});
            }
        }
        fetchOrders();
    }, []);
    
    
    useEffect (() => {
        async function fetchData() {
            const data = await userData();
            setUser(data);
        }
        fetchData();
    });
return (
    <main>
        <section>
            <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8 text-transform: capitalize">{user.name}'s Dashboard</p>
        </section>

        <section>
            {orders.length && orders.map((order) => (
                <DashboardCard key={order.id} order={order} />
            ))}
        </section>

        <section>
            {!orders.length && <DashboardEmpty />}
        </section>

    </main>
)
}
