import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const AddExpenseForm = ({ budgets }) => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      // clear form
      formRef.current.reset();
      // reset focus
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="container mx-auto p-4 sm:p-8">
      <h2 className="text-2xl font-semibold mb-4">
        Add New{" "}
        <span className="text-accent">
          {budgets.length === 1 && `${budgets.map((budg) => budg.name)}`}
        </span>{" "}
        Expense
      </h2>
      <fetcher.Form
        method="post"
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        ref={formRef}
      >
        <div className="mb-4">
          <label htmlFor="newExpense" className="block text-gray-700 font-bold mb-2">
            Expense Name
          </label>
          <input
            type="text"
            name="newExpense"
            id="newExpense"
            placeholder="e.g., Coffee"
            ref={focusRef}
            required
            className="w-full px-3 py-2 border border-dotted border-gray-400 rounded-lg focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newExpenseAmount" className="block text-gray-700 font-bold mb-2">
            Amount
          </label>
          <input
            type="number"
            step="0.01"
            inputMode="decimal"
            name="newExpenseAmount"
            id="newExpenseAmount"
            placeholder="e.g., 3.50"
            required
            className="w-full px-3 py-2 border border-dotted border-gray-400 rounded-lg focus:outline-none focus:border-purple-500"
          />
        </div>
        {budgets.length !== 1 && (
          <div className="mb-4">
            <label htmlFor="newExpenseBudget" className="block text-gray-700 font-bold mb-2">
              Budget Category
            </label>
            <select
              name="newExpenseBudget"
              id="newExpenseBudget"
              required
              className="w-full px-3 py-2 border border-dotted border-gray-400 rounded-lg focus:outline-none focus:border-purple-500"
            >
              {budgets
                .sort((a, b) => a.createdAt - b.createdAt)
                .map((budget) => (
                  <option key={budget.id} value={budget.id}>
                    {budget.name}
                  </option>
                ))}
            </select>
          </div>
        )}
        <input type="hidden" name="_action" value="createExpense" />
        <button
          type="submit"
          className={`bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-lg font-semibold shadow-md focus:outline-none focus:ring focus:ring-purple-300 transition duration-200 ${
            isSubmitting ? "cursor-not-allowed" : ""
          } lg:text-sm lg:py-1 lg:px-2`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span>Submitting...</span>
          ) : (
            <span className="flex items-center">
              Add Expense
              <PlusCircleIcon width={20} className="h-5 w-5 inline-block ml-2"/>
            </span>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
};

export default AddExpenseForm;
