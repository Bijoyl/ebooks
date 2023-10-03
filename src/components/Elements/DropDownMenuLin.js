import { Link, useNavigate } from "react-router-dom";
import { logOut, userData } from "../../utilities";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const DropDownMenuLin = ({setDropDown}) => {
    const navigate = useNavigate(); 
    function handleLogout(){
        logOut();
        setDropDown(false);
        navigate("/");
    }

    const [user, setUser ] = useState({});
    useEffect (() => {
        async function fetchData() {
            try{
                const data = await userData();
                data.email ? setUser(data) : handleLogout() ;
            }
            catch(error){
                toast.error(error.status, {position: "bottom-center"})
            }
        }
        fetchData();
    });

    return (
        <div id="dropdownAvatar" className="select-none	absolute top-10 right-0 z-10 w-52 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
            <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                <Link onClick={() => setDropDown(false)} to="/dashboard" ><div className="font-medium truncate text-transform: capitalize">{user.name}</div> </Link>
            </div>
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                <li>
                    <Link onClick={() => setDropDown(false)} to="/products" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
                </li>
                <li>
                    <Link onClick={() => setDropDown(false)} to="/dashboard" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
            </ul>
            <div className="py-1">
                <span onClick={handleLogout} className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><Link to="/">Log out</Link></span>
            </div>
        </div>
    )
}
