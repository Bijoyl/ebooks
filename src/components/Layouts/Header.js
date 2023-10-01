import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { SearchBook } from "../../components";
import { DropDownMenuLout, DropDownMenuLin } from "../index";
import { useCart } from "../../context";

export const Header = () => {
  const {cartList}  = useCart();

  const [dropDown, setDropDown] = useState(false); //profile/login/signup

  const [dark, setDark] = useState(JSON.parse(localStorage.getItem("dark")) || false);//darkmode

  const [bsearch, setBsearch] = useState(false);

  const token = JSON.parse(sessionStorage.getItem("token")); //logincreds


  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
    if (dark) {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);


  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-slate-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-3">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-8 mr-3" alt="ebookstore Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">EbookStore</span>
          </Link>
          <div className="flex items-center">
            <span onClick={() => setDark(!dark)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-lightbulb"></span>
            <span onClick={() => setBsearch(!bsearch)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi bi-search"></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-bag relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-900 px-1 rounded-full">{cartList?.length ? cartList?.length : " " }</span>
                <span>{ dropDown && (token ? <DropDownMenuLin setDropDown={setDropDown}/> : <DropDownMenuLout setDropDown={setDropDown}/>)}</span>
              </span>
            </Link>
            <span onClick={() => setDropDown(!dropDown)} className="cursor-pointer text-2xl text-gray-700 dark:text-white mr-5  bi bi-person"></span>
          </div>
        </div>
      </nav>
      {bsearch && <SearchBook setBsearch={setBsearch} />}
    </header>
  )
}
