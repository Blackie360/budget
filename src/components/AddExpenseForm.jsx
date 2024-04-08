import { useEffect, useRef } from "react"

// rrd imports
import { useFetcher } from "react-router-dom"


import { PlusCircleIcon } from "@heroicons/react/24/solid"

const AddExpenseForm = ({ budgets }) => {
  const fetcher = useFetcher()
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef()
  const focusRef = useRef()

  useEffect(() => {
    if (!isSubmitting) {
      // clear form
      formRef.current.reset()
      // reset focus
      focusRef.current.focus()
    }

  }, [isSubmitting])

  return (
    <div className="form-wrapper border-dashed border-2 border-purple-200 rounded-xl">
      <h2 className="font-semibold">Add New{" "}<span className="text-purple-500">
        {budgets.length === 1 && `${budgets.map((budg) => budg.name)}`}
      </span>{" "}
        Expense
      </h2>
      <fetcher.Form
        method="post"
        className="grid-sm"
        ref={formRef}
      >
        <div className="">
          <div className="">
            <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="newExpense">Expense Name </label>
            <input
              type="text"
              name="newExpense"
              id="newExpense"
              placeholder="e.g., Coffee"
              ref={focusRef}
              required
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-purple-400"

            />
          </div>
          <br></br>
          <div className="">
            <label htmlFor="newExpenseAmount">Amount </label>
            <input
              type="number"
              step="0.01"
              inputMode="decimal"
              name="newExpenseAmount"
              id="newExpenseAmount"
              placeholder="e.g.  65"
              required
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-purple-400"

            />
          </div>
        </div>
        <br></br>
        <div className="glow-purple-600" hidden={budgets.length === 1}>
          <label htmlFor="newExpenseBudget">Budget Category </label>
          <select name="newExpenseBudget" id="newExpenseBudget" required>
            {
              budgets
                .sort((a, b) => a.createdAt - b.createdAt)
                .map((budget) => {
                  return (
                    <option key={budget.id} value={budget.id}>
                      {budget.name}
                    </option>
                  )
                })
            }
          </select>
        </div>
        <br></br>
        <input type="hidden" name="_action" value="createExpense" />
        <button
          type="submit"
          className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 flex items-center justify-center gap-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          disabled={isSubmitting}
          >
  {isSubmitting ? (
    <span>Submitting…</span>
  ) : (
    <>
      <span>Add Expense</span>
      <PlusCircleIcon width={20} className="ml-2" />
    </>
  )}
</button>

      </fetcher.Form>
    </div>
  )
}
export default AddExpenseForm