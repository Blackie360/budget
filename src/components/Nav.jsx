import { Form, NavLink } from "react-router-dom";
import { TrashIcon } from '@heroicons/react/24/solid';
import budget from '../assets/budget.png';

const Nav = ({ userName }) => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <NavLink
          to="/"
          aria-label="Go to home"
          className="flex items-center space-x-2 text-gray-800 hover:text-purple-500 transition duration-300 group"
        >
          <img src={budget} alt="Budget Logo" className="h-8" />
          <span className="text-2xl font-bold group-hover:text-purple-500 hover:animate-pulse">YouBudget</span>
        </NavLink>
        {userName && (
          <Form
            method="post"
            action="logout"
            onSubmit={(event) => {
              if (!confirm("Delete user and all data?")) {
                event.preventDefault();
              }
            }}
          >
            <button
              type="submit"
              className="btn btn--warning flex items-center space-x-2 text-gray-800 hover:text-purple-500 transition duration-300 text-2xl"
            >
              <span>Delete User</span>
              <TrashIcon width={20} />
            </button>
          </Form>
        )}
      </div>
    </nav>
  );
};

export default Nav;
