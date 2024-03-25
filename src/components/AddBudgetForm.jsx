import React, { useEffect, useRef } from "react";
import { Form, useFetcher } from "react-router-dom";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

const AddBudgetForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="form-wrapper p-4 bg-white rounded-lg shadow-md border-dashed border-2 border-purple-200">
      <h2 className="text-xl font-semibold mb-4">Create <span className="text-purple-500">Budget </span></h2>
      <Form method="post" className="grid gap-4" ref={formRef}>
        <div className="grid">
          <label htmlFor="newBudget" className="text-sm font-semibold">
            Budget Name
          </label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g., Groceries"
            required
            ref={focusRef}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-purple-400"
          />
        </div>
        <div className="grid">
          <label htmlFor="newBudgetAmount" className="text-sm font-semibold">
            Amount
          </label>
          <input
            type="number"
            step="0.01"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g., KES  100,200"
            required
            inputMode="decimal"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-purple-400"
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <div className="flex items-center">
        <button
            type="submit"
            className={`border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 flex items-center justify-center gap-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span>Submitting...</span>
            ) : (
              <>
                <span className="mr-2">Create Budget</span>
                <CurrencyDollarIcon width={20} />
              </>
            )}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AddBudgetForm;
