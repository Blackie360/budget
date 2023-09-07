import React from "react";
import { Form } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import illustration from "../assets/illustration.svg";

const Intro = () => {
  return (
    <div className="intro-card bg-white rounded-lg shadow-lg p-8 md:p-12 lg:p-16 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Take Control of <span className="text-purple-700">Your Money</span>
          </h1>
          <p className="text-lg mb-6">
            Take control of your financial future.
            Begin your path to financial independence today.
          </p>
          <Form method="post">
            <input
              type="text"
              name="userName"
              required
              placeholder="What is your name?"
              aria-label="Your Name"
              autoComplete="given-name"
              className="w-full border-2 border-dashed rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-purple-400"
            />
            <input type="hidden" name="_action" value="newUser" />
            <br></br>
            <button
              type="submit"
              className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 flex items-center justify-center gap-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
              >
              <span>Create Account</span>
              <UserPlusIcon width={20} className="ml-1" />
            </button>
          </Form>
        </div>
        <img
          src={illustration}
          alt="Person with money"
          width={600}
          className="md:hidden rounded-lg mt-8"
        />
      </div>
    </div>
  );
};

export default Intro;
