import { useRouteError, Link, useNavigate } from "react-router-dom";
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
 // Import your error image

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src={errorImage}
        alt="Error Illustration"
        className="mb-8 max-w-full"
      />
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          Uh oh! We’ve got a problem.
        </h1>
        <p className="text-lg mb-4">{error.message || error.statusText}</p>
        <div className="flex justify-center">
          <button
            className="btn btn--dark mr-4"
            onClick={() => navigate(-1)}
          >
            <ArrowUturnLeftIcon width={20} className="mr-2" />
            <span>Go Back</span>
          </button>
          <Link to="/" className="btn btn--dark">
            <HomeIcon width={20} className="mr-2" />
            <span>Go home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
