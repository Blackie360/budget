// logout.js
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteItem } from "../helpers";

export async function logoutAction() {
  

  // delete the user
  deleteItem({
    key: "userName"
  });
  deleteItem({
    key: "budgets"
  });
  deleteItem({
    key: "expenses"
  });

  // show toast
  toast.success("You’ve deleted your account!");

  // redirect to home
 

  // resolve the promise
  return Promise.resolve();
}
