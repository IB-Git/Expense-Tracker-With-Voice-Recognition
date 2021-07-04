import React from "react";
const isIncome = Math.round(Math.random());
const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      Try saying: <br />
      Add {isIncome ? "Income " : "Expense "}
      of {isIncome ? "₹50 " : "₹100 "}
      in category {isIncome ? "Business " : "Entertainment "}
      for {isIncome ? "Tomorrow." : "Next Tuesday."}
    </div>
  );
};

export default InfoCard;
