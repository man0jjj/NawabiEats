import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="bg-red-600 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img className="h-12" src={LOGO_URL} alt="Logo" />
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-6">
            <li className="hidden sm:block font-semibold">
              Online Status: {onlineStatus ? "✅" : "🔴"}
            </li>
            <li>
              <Link to="/" className="hover:text-gray-200 font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-200 font-semibold">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-200 font-semibold">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/grocery" className="hover:text-gray-200 font-semibold">
                Grocery
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-gray-200 font-semibold">
                Cart ({cartItems.length} items)
              </Link>
            </li>
            <li className="hidden sm:block">
              <button
                className="bg-white text-red-600 px-4 py-2 rounded hover:bg-gray-200"
                onClick={() => {
                  btnNameReact === "Login"
                    ? setBtnNameReact("Logout")
                    : setBtnNameReact("Login");
                }}
              >
                {btnNameReact}
              </button>
            </li>
            <li className="hidden sm:block">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;