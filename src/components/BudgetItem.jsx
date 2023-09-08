import { Form, Link } from "react-router-dom";
import { BanknotesIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from "../helpers";

const BudgetItem = ({ budget, showDelete = false }) => {
  const { id, name, amount, } = budget;
  const spent = calculateSpentByBudget(id);

  return (
    <div className="lg:flex lg:justify-end"> {/* Container with flex layout */}
      <div className="budget p-4 bg-white rounded-lg shadow-md border-dashed border-2 border-purple-200">
      <h2 className="col-span-full text-xl font-semibold mb-2">
                  Existing <span className="text-purple-500 font-sans">Budgets</span>
                </h2>
        <div className="flex justify-between">
          
          <h3 className="text-purple-400">{name}  </h3>
          <p>{formatCurrency(amount)} Budgeted</p>
        </div>
        <div>
          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
            Budget in progress
          </span>
        </div>
        <br></br>
        <progress
          max={amount}
          value={spent}
          className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-300"
        >
          {formatPercentage(spent / amount)}
        </progress>
        <div className="flex justify-between">
          <small>{formatCurrency(spent)} spent</small>
          <br></br>
          <small>{formatCurrency(amount - spent)} remaining</small>
        </div>
        {showDelete ? (
          <div className="flex-sm mt-2">
            <Form
              method="post"
              action="delete"
              onSubmit={(event) => {
                if (
                  !confirm(
                    "Are you sure you want to permanently delete this budget?"
                  )
                ) {
                  event.preventDefault();
                }
              }}
            >
              <button
                type="submit"
                className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 flex items-center justify-center gap-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
              >
                <span>Delete Budget</span>
                <TrashIcon width={20} className="ml-1" />
              </button>
            </Form>
          </div>
        ) : (
          <div className="flex-sm mt-2">
            <Link
              to={`/budget/${id}`}
              className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 flex items-center justify-center gap-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"            >
              <span>View Details</span>
              <BanknotesIcon width={20} className="ml-1" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetItem;
