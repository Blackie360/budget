import React from 'react'

const Table = ({ expenses }) => {
  return (
    <div className='table'>
        <table>
            <thead>
                <tr>
                    {
                        []
                    }
                </tr>
            </thead>
            <thead>
                {
                    expenses.map((expense) => (
                        <tr key={expense.id}>
                            {expense.name}
                            {/* <ExpenseItem /> */}
                        </tr>
                    ))
                }
            </thead>
        </table>
    </div>
  )
}

export default Table