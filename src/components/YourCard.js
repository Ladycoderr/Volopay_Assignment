import React from "react";
import Card from "./Card";
import Data from "./data.json";
const Your = () => {
  const user = [1, 3];
  let data = Data.data.filter((ele) => {
    if (user.findIndex((id) => id === ele.owner_id) !== -1) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div>
      {data.map((val, id) => {
        return (
          <Card
            key={id}
            name={val.name}
            budgetName={val.budget_name}
            expiry={val.expiry}
            spentValue={val.spent.value}
            spentCurrency={val.spent.currency}
            availableSpend={val.available_to_spend.value}
            availableCurrency={val.available_to_spend.currency}
            card_type={val.card_type}
          />
        );
      })}
    </div>
  );
};

export default Your;
