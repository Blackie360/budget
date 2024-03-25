import React from "react";
import { NavLink } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid";
import budget from "../assets/budget.png"

const Nav = ({ userName }) => {
  return (
    <nav className="bg-transparent p-4 flex items-center justify-between">
      <NavLink
        to="/"
        aria-label="Go to home"
        className="flex items-center space-x-2 text-white hover:animate-pulse"
      >
       <img
  src={budget}
  alt=""
  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:animate-bounce"
/>
        <span className="text-xl text-purple-500 font-bold hover:underline">SmartSpend</span>
      </NavLink>
      {userName && (
        <div className="flex">
          <NavLink
            to="/feedback"
            className="bg-red-600 text-white py-1 px-2 rounded-lg flex items-center hover:bg-purple-600 hover:text-white mr-2"
          >
            <span>Feedback</span>
          </NavLink>
          <form
            method="post"
            action="logout"
            onSubmit={(event) => {
              if (!window.confirm("Delete user and all data?")) {
                event.preventDefault();
              }
            }}
          >
            <button
              type="submit"
              className="bg-purple-600 text-white py-1 px-2 rounded-lg flex items-center hover:bg-green-700 hover:text-white"
            >
              <span>Delete User</span>
              <TrashIcon width={20} className="ml-1" />
            </button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Nav;
