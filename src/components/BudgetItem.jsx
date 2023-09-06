import React from 'react';


const BudgetItem = ({ budget }) => {
  const { id, name, amount, } = budget;
  
  return (
      <div className="bg-slate-50 text-black-500 rounded shadow-xl py-2 px-4 w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <div className="flex w-full justify-between mb-2">
          <h3 className="text-purple-500">{name}</h3>
          <p>{amount} budgeted</p>
        </div>
        <div>
          <div className="pb-1 lg:pb-2">
            <h4 className="text-2xl lg:text-3xl text-black font-semibold leading-tight inline-block">
              {amount}
            </h4>
            <div className="mb-2 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
              <div
                className="h-1 bg-green-500"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <small className="text-purple-500">....spent</small>
            <small>...remain</small>
          </div>
        </div>
      </div>
  );
};

export default BudgetItem;
