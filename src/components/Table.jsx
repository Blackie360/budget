import React from 'react'
import ExpenseItem from './ExpenseItem'

const Table = ({ expenses }) => {
  return (
    <div className='table'>
        <table>
            <thead>
                <tr>
                    {
                        ["Name", "Amount", "Date"].map((i, index) => (
                            <th key={index}>{i} </th>
                        ))
                    }
                </tr>
            </thead>
            <thead>
                {
                    expenses.map((expense) => (
                        <tr key={expense.id}>
                            {expense.name}
                            <ExpenseItem  expense={expense}/>
                        </tr>
                    ))
                }
            </thead>
        </table>
    </div>
  )
}

export default Table