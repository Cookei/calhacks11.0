import React, { useRef } from "react";

import NumberInput from "../components/NumberInput";
import { useState } from "react";

const Input = () => {
  const createEvent = (formData) => {
    console.log(formData);
  };

  const CUISINE_OPTIONS = [
    "Chinese",
    "Mexican",
    "Italian",
    "Korean",
    "Indian",
    "Mediterranean",
    "Thai",
    "Japanese",
    "American",
    "French",
    "Vietnamese",
    "Other",
  ];

  const [cuisineOptions, setCuisineOptions] = useState({});

  useState(() => {
    let obj = {};
    for (let key of CUISINE_OPTIONS) {
      obj[key] = false;
    }
    obj["Other"] = true;
    setCuisineOptions(obj);
  }, []);

  const handleCuisineSelect = (e) => {
    const value = e.target.value;
    let obj = JSON.parse(JSON.stringify(cuisineOptions));
    obj[value] = !obj[value];
    setCuisineOptions(obj);
  };

  return (
    <div className="centerContents" style={{ marginTop: "50px" }}>
      <div className="verticalForm">
        <h1>Submit your preferences here!</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createEvent(e);
          }}
        >
          <div>
            <label htmlFor="cuisines">
              What cuisine(s) are you feeling today?
            </label>
            <div style={{ display: "block" }}>
              <div className="cuisineGrid">
                {CUISINE_OPTIONS.map((e, i) => {
                  return (
                    <input
                      type="button"
                      name={e}
                      value={e}
                      key={i}
                      className={
                        cuisineOptions[e]
                          ? "cuisineButton green"
                          : "cuisineButton white"
                      }
                      onClick={handleCuisineSelect}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="distance">
              How far are you willing to travel? (miles)
            </label>
            <div className="centerContents">
              <div
                style={{ position: "relative" }}
                className="centerContentsVertical"
              >
                <input
                  id="1mi"
                  type="radio"
                  value="1mi"
                  name="distanceSelector"
                />
                <label htmlFor="1mi">1mi</label>
              </div>
              <div
                style={{ position: "relative" }}
                className="centerContentsVertical"
              >
                <input
                  id="5mi"
                  type="radio"
                  value="1mi"
                  name="distanceSelector"
                />
                <label htmlFor="5mi">5mi</label>
              </div>
              <div
                style={{ position: "relative" }}
                className="centerContentsVertical"
              >
                <input
                  id="10mi"
                  type="radio"
                  value="1mi"
                  name="distanceSelector"
                />
                <label htmlFor="10mi">10mi</label>
              </div>
              <div
                style={{ position: "relative" }}
                className="centerContentsVertical"
              >
                <input
                  id="20mi"
                  type="radio"
                  value="1mi"
                  name="distanceSelector"
                />
                <label htmlFor="20mi">20mi</label>
              </div>
              <div
                style={{ position: "relative" }}
                className="centerContentsVertical"
              >
                <input
                  id="40mi"
                  type="radio"
                  value="40mi"
                  name="distanceSelector"
                />
                <label htmlFor="40mi">40mi</label>
              </div>
            </div>
          </div>
          <div>
            <label>How much are you willing to spend?</label>
            <div style={{ display: "block" }}>
              <div>
                <input id="1dollar" type="radio" name="dollars" value="1" />
                <label htmlFor="1dollar">
                  <i className="material-icons-round">attach_money</i>
                </label>
              </div>
              <div>
                <input id="2dollar" type="radio" name="dollars" value="2" />
                <label htmlFor="2dollar">
                  <i className="material-icons-round">
                    attach_moneyattach_money
                  </i>
                </label>
              </div>
              <div>
                <input id="3dollar" type="radio" name="dollars" value="3" />
                <label htmlFor="3dollar">
                  <i className="material-icons-round">
                    attach_moneyattach_moneyattach_money
                  </i>
                </label>
              </div>
              <div>
                <input id="4dollar" type="radio" name="dollars" value="4" />
                <label htmlFor="4dollar">
                  <i className="material-icons-round">
                    attach_moneyattach_moneyattach_moneyattach_money
                  </i>
                </label>
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Submit Preferences!"
            className="buttonStyle"
            style={{ width: "100%", backgroundColor: "#F5ABFF" }}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Input;
