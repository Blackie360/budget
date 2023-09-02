// rrd imports
import { useLoaderData } from "react-router-dom";

// toastify
import { toast } from "react-toastify";

// components
import Intro from "../components/Intro";

//  helper functions
import { createBudget, fetchData } from "../helpers"
import AddBudgetForm from "../components/AddBudgetForm";
import AddExpenseForm from "../components/AddExpenseForm";
// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets}
}

// action
export async function dashboardAction({ request }) {
  const data = await request.formData();
  const {_action, ...values} = Object.fromEntries(data)
  
//new user subs
if (_action === "newUser") {
  try {
    localStorage.setItem("userName", JSON.stringify(values.userName))
    return toast.success(`Welcome, ${values.userName}`)
  } catch (e) {
    throw new Error("There was a problem creating your account.")
  }
}
if (_action === "createBudget") {
  try{
    //create new budget 
    createBudget({
      name: values.newBudget,
      newBudgetAmountt: values.newBudgetnewBudgetAmountt

    })
    return toast.success("Budget created successfully")
  } catch (e) {
    throw new  Error ("There was a problem generating your budget.")
  }
  }
  
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData()

  return (
    <>
      {userName ? (
      <div>
        <h1 className="text-5xl text-black font-bold ">Welcome back, <span className="text-5xl font-bold text-purple-500">{userName}</span></h1>
        <div className="grid-sm">
       {
          budgets && budgets.length > 1
          ? (
          <div className="grid-lg">
            <div className="flex-lg">
              <AddBudgetForm />
              <AddExpenseForm budgets =
              {budgets} className/>
              </div>
             </div>
          ) 
          : (
            <div className="grid-sm">
              <h3>What is financial freedom?</h3>
              <p>Financial freedom is the ability to live the lifestyle you desire without having to work or rely on anyone else for money.
                <br></br>
                Best way is to create a budget and stick to it.
              </p>
              <p>Create a budget to get started!</p>
              <AddBudgetForm />
               </div>
          )
       }
       </div>
      </div>
      ) : <Intro />}
    </>
  )
}
export default Dashboard