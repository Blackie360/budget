import { Form } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import illustration from "../assets/illustration.svg";

const Intro = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-4 sm:p-8 lg:p-16">
      <div className="max-w-screen-md w-full bg-white rounded-lg p-4 sm:p-8 shadow-md flex flex-col sm:flex-row justify-between items-center">
        <div className="sm:w-1/2 p-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-4 text-purple-700">
            Take Control of <span className="text-accent">Your Money</span>
          </h1>
          <p className="text-gray-700 text-center mb-8">
            Personal budgeting is the secret to financial freedom. Start your journey today.
          </p>
          <Form
            method="post"
            className="flex flex-col items-center space-y-4 sm:space-y-6"
          >
            <input
              type="text"
              name="userName"
              required
              placeholder="What is your name?"
              aria-label="Your Name"
              autoComplete="given-name"
              className="rounded-lg border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <input type="hidden" name="_action" value="newUser" />
            <button
              type="submit"
              className="bg-purple-700 hover:bg-purple-800 focus:ring-purple-500 focus:ring-offset-purple-200 text-white py-2 px-4 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg flex items-center"
            >
              <span>Create Account</span>
              <UserPlusIcon className="w-6 h-6 ml-1" />
            </button>
          </Form>
        </div>
      </div>
      <img src={illustration} alt="Person with money" className="max-w-full" />
    </div>
  );
};

export default Intro;
