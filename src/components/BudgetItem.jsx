import { Form, Link } from "react-router-dom";
import { BanknotesIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from "../helpers";

const BudgetItem = ({ budget, showDelete = false }) => {
  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBudget(id);

  return (
    <div className="budget p-4 bg-white rounded-lg shadow-md ">
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={spent} className="mt-2">
        {formatPercentage(spent / amount)}
      </progress>
      <div className="progress-text mt-2">
        <small>{formatCurrency(spent)} spent</small>
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
              className="btn text-purple-500 hover:text-red-500"
            >
              <span>Delete Budget</span>
              <TrashIcon width={20} className="ml-1" />
            </button>
          </Form>
        </div>
      ) : (
        <div className="flex-sm mt-2">
          <Link to={`/budget/${id}`} className="btn text-purple-500 hover:text-blue-900">
            <span>View Details</span>
            <BanknotesIcon width={20} className="ml-1" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default BudgetItem;
