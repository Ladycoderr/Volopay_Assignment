import React, { useState, useEffect } from "react";
import Card from "./Card";
import Data from "./data";
import { FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import "../styles/AllCard.css";

const All = () => {
  const [filterToggle, setFilterToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [subCheck, setSubCheck] = useState(false);
  const [burnCheck, setBurnCheck] = useState(false);
  const [filter, setFilter] = useState(null);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  const handleFilterSubmit = () => {
   if(burnCheck || subCheck) setFilter({burnCheck, subCheck});
   else setFilter(null);
   setFilterToggle(false)
  }

  const handleScrollEvent = (e) => {
    let endList =
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 3;
    if (endList) {
      let newPage = page + 1;
      setPage(newPage);
    }
  };
  useEffect(() => {
    getCards(page);
  }, [page]);
  const getCards = (page) => {
    setData(Data.data.slice(0, page * 4 + 4));
  };
  return (
    <div>
      <div className="body_icon">
        <div className="searchBox">
          <input
            type="text"
            className="searchText"
            placeholder="Type here..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="search_btn">
            <FaSearch />
          </div>
        </div>
        <div
          onClick={() => setFilterToggle(!filterToggle)}
          className="filter_icon_container"
        >
          <IoFilter size="1.2rem" /> <p>Filter</p>
        </div>
      </div>
      {/* card_container */}
      {filterToggle ? (
        <div className="all_filter">
          <div className="filter_box_container">
            <div>
              <h4 className="filter_header">Filters</h4>
            </div>
            <div className="type_container">
              <p className="type">Type</p>
              <div className="subs_burn_flex">
                <div className="check_subs">
                  <input type="checkbox" checked={subCheck} onClick={(e) => setSubCheck(e.target.checked)}/>
                  <p>Subscription</p>
                </div>
                <div className="check_burner">
                  <input type="checkbox" checked={burnCheck} onClick={(e) => setBurnCheck(e.target.checked)} />
                  <p>Burner</p>
                </div>
              </div>
              <div>
                <p>Cardholder</p>
                <select className="select_option" name="" id="">
                  <option className="select-value" value="">
                    Select cardholder
                  </option>
                </select>
              </div>
              <div className="filter_container_btn">
                <button className="apply_btn" onClick={handleFilterSubmit}>Apply</button>
                <button
                  onClick={() => {
                    setFilter(null)
                    setFilterToggle(false)
                  }}
                  className="clear_btn"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="scroll_div" onScroll={handleScrollEvent}>
        {data
          .filter((val) => {
            if (searchTerm === "") {
              return true;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            } else {
              return false;
            }
          })
          .map((val, id) => {
            return (
              
                (!filter || (filter.burnCheck && filter.subCheck)) ? <>
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
                </> 
                :
                filter.burnCheck && val.card_type === "burner" ?
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
                 : 
                 filter.subCheck && val.card_type === "subscription" ?
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
               /> :
               <></>
              
            )
          })}
      </div>
    </div>
  );
};

export default All;
