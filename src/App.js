import React, { useState } from "react";
import JSONDATA from "./db.json";
import "./styles.css";

function App() {
  console.log(JSONDATA);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <form className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </form>
      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return "No data";
        } else if (
          val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        ) {
          return <div>{val.country}</div>;
        }
      }).map((val) => {
        return (
          <div className="data">
            <h1>Name {val.name}</h1>

            <ol>Country:- {val.country}</ol>
            <ol>DOB:- {val.date}</ol>
            <ol>Email:- {val.email}</ol>
          </div>
        );
      })}
    </div>
  );
}

export default App;
