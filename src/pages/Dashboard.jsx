import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";
import AddExpenseForm from "../components/AddExpenseForm";
import BudgetItem from "../components/BudgetItem";
import Table from "../components/Table";
import {
  createBudget,
  createExpense,
  deleteItem,
  fetchData,
  waait,
} from "../helpers";

export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  const expenses = fetchData("expenses");
  return { userName, budgets, expenses };
}

export async function dashboardAction({ request }) {
  await waait();

  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch (e) {
      throw new Error("There was a problem creating your account.");
    }
  }

  if (_action === "createBudget") {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success("Budget created!");
    } catch (e) {
      throw new Error("There was a problem creating your budget.");
    }
  }

  if (_action === "createExpense") {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      });
      return toast.success(`Expense ${values.newExpense} created!`);
    } catch (e) {
      throw new Error("There was a problem creating your expense.");
    }
  }

  if (_action === "deleteExpense") {
    try {
      deleteItem({
        key: "expenses",
        id: values.expenseId,
      });
      return toast.success("Expense deleted!");
    } catch (e) {
      throw new Error("There was a problem deleting your expense.");
    }
  }
}

const Dashboard = () => {
  const { userName, budgets, expenses } = useLoaderData();

  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1 className="text-5xl text-black font-bold ">
            Welcome back, <span className="text-5xl font-bold text-purple-500">{userName}</span>
          </h1>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {budgets && budgets.length > 0 ? (
              <>
                <div className="col-span-2 flex justify-between items-center flex-col md:flex-row mb-4">
                  <div className="mb-4 md:mb-0">
                    <AddBudgetForm />
                  </div>
                  <div>
                    <AddExpenseForm budgets={budgets} />
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  {budgets.map((budget) => (
                    <BudgetItem key={budget.id} budget={budget} />
                  ))}
                </div>
                {expenses && expenses.length > 0 && (
                  <>
                    <div className="col-span-2">
                      <h2 className="text-xl font-semibold mb-2">
                        Recent Expenses
                      </h2>
                      <Table
                        expenses={expenses
                          .sort((a, b) => b.createdAt - a.createdAt)
                          .slice(0, 8)}
                      />
                      {expenses.length > 8 && (
                        <Link
                          to="expenses"
                          className="btn btn--dark inline-block"
                        >
                          View all expenses
                        </Link>
                      )}
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <div className="col-span-2">
                  <p className="mb-2">
                    Personal budgeting is the secret to financial freedom.
                  </p>
                  <p className="mb-2">Create a budget to get started!</p>
                  <AddBudgetForm />
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
