import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":100,"category":"Shopping","type":"Expense","date":"2021-01-10","id":"4d9e23f0-9234-4052-a072-e5e31fec2cb8"},{"amount":250,"category":"Business","type":"Income","date":"2021-01-11","id":"97557a8e-aadd-416e-9ac1-afcb6df82f29"}];
export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) =>
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  const addTransaction = (transaction) =>
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });

    const balance = transactions.reduce((acc, currVal)=> (currVal.type === 'Expense' ? acc- currVal.amount : acc + currVal.amount), 0)
  return (
    <ExpenseTrackerContext.Provider
      value={{ deleteTransaction, addTransaction, transactions, balance }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
