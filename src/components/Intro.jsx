import React from "react";
import { Form } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import illustration from "../assets/illustration.jpg";

const Intro = () => {
  return (
    <div className="intro-card bg-white rounded-lg shadow-lg p-8 md:p-12 lg:p-16 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Take Control of <span className="text-accent">Your Money</span>
          </h1>
          <p className="text-lg mb-6">
            Personal budgeting is the secret to financial freedom. Start your journey today.
          </p>
          <Form method="post">
            <input
              type="text"
              name="userName"
              required
              placeholder="What is your name?"
              aria-label="Your Name"
              autoComplete="given-name"
              className="w-full bg-white rounded-lg py-2 px-4 mb-2 focus:outline-none"
            />
            <input type="hidden" name="_action" value="newUser" />
            <button
              type="submit"
              className="btn btn--dark inline-flex items-center space-x-2"
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
          className="hidden md:block rounded-lg"
        />
      </div>
    </div>
  );
};

export default Intro;
