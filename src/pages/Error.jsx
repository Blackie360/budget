import { Link, useRouteError,useNavigate } from "react-router-dom"
import {HomeIcon, ArrowUturnLeftIcon} from '@heroicons/react/24/solid'


const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-4 sm:p-8 lg:p-16">
  <div className="max-w-screen-md w-full bg-white rounded-lg p-4 sm:p-8 shadow-md">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-4 text-purple-700">
      Sorry, there is a problem
    </h1>
    <p className="text-gray-700 text-center mb-8">
      {error.message || error.statusText}
    </p>
    <div className="flex justify-between items-center">
  <button onClick={() => navigate(-1)} className="rounded-full p-2 bg-blue-500 hover:bg-blue-600 text-white flex items-center space-x-2">
    <ArrowUturnLeftIcon className="w-5 h-5" />
    <span>Go Back</span>
  </button>
  <Link to="/" className="text-blue-500 hover:text-blue-600 flex items-center space-x-2">
    <HomeIcon className="w-5 h-5" />
    <span>Back Home</span>
  </Link>
</div>

  </div>
</div>

  )
}
export default Error