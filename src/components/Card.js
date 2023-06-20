import React from "react";
import "../styles/Card.css";
import { GoPrimitiveDot } from "react-icons/go";
import { AiFillFire } from "react-icons/ai";
import { HiRefresh } from "react-icons/hi";

const Card = ({
  name,
  budgetName,
  expiry,
  spentValue,
  spentCurrency,
  availableSpend,
  availableCurrency,
  card_type,
}) => {
  return (
    <div className="main_container">
      <div className="card_container">
        <div className="top_part">
          <div className="top_part_1">
            <h2>{name}</h2>
            <p>{budgetName}</p>
            <button className="burner">
              {card_type === "burner" ? "BURNER" : "SUBSCRIPTION"}
            </button>
          </div>
          <div className="top_part_2">
            <div className="burn_icon">
              {card_type === "burner" ? (
                <AiFillFire
                  size="1.5rem"
                  style={{
                    marginTop: ".7rem",
                    marginLeft: ".7rem",
                    color: "rgb(255, 90, 118)",
                  }}
                />
              ) : (
                <HiRefresh
                  size="1.5rem"
                  style={{
                    transform: "rotate(90deg)",
                    fontWeight: "bolder",
                    marginTop: ".7rem",
                    marginLeft: ".7rem",
                    color: "rgb(255, 90, 118)",
                  }}
                />
              )}
            </div>
            <p>Expires: {expiry}</p>
          </div>
        </div>
        <div className="pink_green_line">
          <div
            style={{
              width: (spentValue / (spentValue + availableSpend)) * 100 + "%",
            }}
            className="pink_line"
          ></div>
          <div
            style={{
              width:
                (availableSpend / (spentValue + availableSpend)) * 100 + "%",
            }}
            className="green_line"
          ></div>
        </div>
        <div className="bottom_part">
          <div className="bottom_part_1">
            <p>
              <GoPrimitiveDot color="rgb(255, 90, 118)" /> spent
            </p>
            <p>
              <GoPrimitiveDot color="green" /> available to spend
            </p>
          </div>
          <div className="bottom_part_2">
            <p>
              {spentValue} {spentCurrency}
            </p>
            <p>
              {availableSpend} {availableCurrency}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
