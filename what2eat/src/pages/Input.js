import React, { useRef } from "react";
import { useState } from "react";
import { useLocation, useSearch } from "wouter";
import ListingContainer from "../components/ListingContainer";

const Input = () => {
  const searchString = useSearch();
  const [location, setLocation] = useLocation();

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
  const [dataObject, setDataObject] = useState({});
  const [restaurantData, setRestaurantData] = useState(null);

  const sendPreference = (formData) => {
    let elements = formData.target.elements;

    let preferenceObj = {
      key: searchString,
      preferences: {
        cuisines: cuisineOptions,
        distance: elements["distanceSelector"].value,
        price: elements["dollars"].value,
      },
    };

    fetch("/setprefs", {
      method: "POST",
      body: JSON.stringify(preferenceObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      fetchRestaurantData();
    });
  };

  const fetchRestaurantData = () => {
    fetch("/checkKeyExists", {
      method: "POST",
      body: JSON.stringify(searchString),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        let prefArray = Object.values(data.prefs).map((v) => v);
        let currNumPeople = prefArray.length;
        let dataObject = {
          days: data.days,
          location: data.location,
          name: data.name,
          maxNumPeople: data.numPeople,
          currNumPeople: currNumPeople,
          prefs: prefArray,
          time: data.time,
        };
        setDataObject(dataObject);
      })
      .catch((error) => {
        setLocation("/");
      });
  };

  useState(() => {
    if (
      searchString == undefined ||
      searchString == null ||
      searchString == ""
    ) {
      setLocation("/");
    } else {
      fetchRestaurantData();
    }

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
    <div className="centerContents" style={{ marginTop: "50px", gap: "5rem" }}>
      <div className="centerContentsVertical">
        <h1>Here's what2eat!</h1>
        <div className="centerContentsVertical" style={{ gap: "15px" }}>
          <div>
            {"Preferences Submitted: "}
            <span>
              {dataObject.currNumPeople}/{dataObject.maxNumPeople}
            </span>
          </div>
          <button
            className="buttonStyle"
            style={{ backgroundColor: "#ffb94f" }}
            onClick={() => {
              if (dataObject.maxNumPeople > dataObject.currNumPeople) {
                let confirmRes = window.confirm(
                  "Are you sure you want to compile results? Not everyone has submitted their preferences yet"
                );
                if (confirmRes) {
                  let aggData = {
                    preferredCuisines: [],
                    preferredDistance: [],
                    preferredPrice: [],
                  };
                  for (let i = 0; i < dataObject.prefs.length; i++) {
                    Object.keys(dataObject.prefs[i].cuisines).forEach((e) => {
                      if (dataObject.prefs[i].cuisines[e] == true) {
                        aggData.preferredCuisines.push(e);
                      }
                    });
                    aggData.preferredDistance.push(
                      parseInt(dataObject.prefs[i].distance)
                    );
                    aggData.preferredPrice.push(
                      parseInt(dataObject.prefs[i].price)
                    );
                  }
                  fetch("/restaurants", {
                    method: "POST",
                    body: JSON.stringify(aggData),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8",
                    },
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      setRestaurantData(data);
                    })
                    .catch((err) => {});
                }
              }
            }}
          >
            Search for food!
          </button>
          {restaurantData ? <ListingContainer datas={restaurantData} /> : null}
        </div>
      </div>
      <div className="verticalForm">
        <h1>Submit your preferences here!</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendPreference(e);
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
                  value="1"
                  name="distanceSelector"
                  required
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
                  value="5"
                  name="distanceSelector"
                  required
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
                  value="10"
                  name="distanceSelector"
                  required
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
                  value="20"
                  name="distanceSelector"
                  required
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
                  value="40"
                  name="distanceSelector"
                  required
                />
                <label htmlFor="40mi">40mi</label>
              </div>
            </div>
          </div>
          <div>
            <label>How much are you willing to spend?</label>
            <div style={{ display: "block" }}>
              <div>
                <input
                  id="1dollar"
                  type="radio"
                  name="dollars"
                  value="1"
                  required
                />
                <label htmlFor="1dollar">
                  <i className="material-icons-round">attach_money</i>
                </label>
              </div>
              <div>
                <input
                  id="2dollar"
                  type="radio"
                  name="dollars"
                  value="2"
                  required
                />
                <label htmlFor="2dollar">
                  <i className="material-icons-round">
                    attach_moneyattach_money
                  </i>
                </label>
              </div>
              <div>
                <input
                  id="3dollar"
                  type="radio"
                  name="dollars"
                  value="3"
                  required
                />
                <label htmlFor="3dollar">
                  <i className="material-icons-round">
                    attach_moneyattach_moneyattach_money
                  </i>
                </label>
              </div>
              <div>
                <input
                  id="4dollar"
                  type="radio"
                  name="dollars"
                  value="4"
                  required
                />
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
