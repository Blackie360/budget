import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";
import { Form, useFetcher } from "react-router-dom";

const AddBudgetForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef  = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if(!isSubmitting){
      formRef.current.reset()
      focusRef.current.focus()
    }
  }, [isSubmitting])
  
  return (
    <div className="max-w-xl mx-auto lg:ml-0 lg:w-2/3 p-4 sm:p-8"> {/* Adjust max-w-xl, lg:ml-0, and lg:w-2/3 for the desired width */}
      <h3 className="text-2xl lg:text-3xl">Create Budget</h3>
      <fetcher.Form
        method="POST"
        className="bg-white shadow-md rounded-lg border-dotted border border-gray-300 p-4 sm:p-8"
        ref={formRef}   
      >
        <div className="mb-4">
          <label htmlFor="newBudget" className="block text-gray-700 font-bold mb-2">
            Budget Name
          </label>
          <input
            type="text"
            id="newBudget"
            name="newBudget"
            placeholder="e.g. Smocha"
            required
            ref={focusRef}
            className="w-full px-3 py-2 border border-dotted border-gray-400 rounded-lg focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newBudgetAmount" className="block text-gray-700 font-bold mb-2">
            Amount
          </label>
          <input
            type="number"
            id="newBudgetAmount"
            step="0.01"
            name="newBudgetAmount"
            placeholder="e.g. Ksh. 100"
            required
            inputMode="decimal"
            className="w-full px-3 py-2 border border-dotted border-gray-400 rounded-lg focus:outline-none focus:border-purple-500"
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-lg font-semibold shadow-md focus:outline-none focus:ring focus:ring-purple-300 transition duration-200"
        >
          {
            isSubmitting ? <span>Submitting...</span> :(
              <>
              
          <span>Create Budget </span>
          <CurrencyDollarIcon className="h-5 w-5 inline-block ml-2" />
              </>
            )
          }
        </button>
      </fetcher.Form>
    </div>
  );
};

export default AddBudgetForm;
