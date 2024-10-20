import React, { useRef } from "react";
import PageButton from "../components/PageButton";
import Dropdowns from "../components/Dropdowns";
import { useState } from "react";
import Autocomplete from "react-google-autocomplete";
import { useLocation } from "wouter";

const Landing = () => {
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedDays, setSelectedDays] = useState({
    Sun: false,
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
  });
  const mapsRef = useRef();
  const [location, setLocation] = useLocation();

  const createEvent = (formData) => {
    let elements = formData.target.elements;

    let eventObj = {
      name: elements["getEventName"].value,
      time: {
        from: elements["getStartTime"].value,
        to: elements["getEndTime"].value,
      },
      days: selectedDays,
      numPeople: elements["getNumPeople"].value,
      location: selectedLocation,
    };

    fetch("http://localhost:3000/create", {
      method: "POST",
      body: JSON.stringify(eventObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      setLocation("/create");
    });
  };

  const handleDaySelection = (e) => {
    let val = e.target.value;
    let obj = JSON.parse(JSON.stringify(selectedDays));
    obj[val] = !obj[val];
    setSelectedDays(obj);
  };

  return (
    <div className="centerContents" style={{ marginTop: "50px" }}>
      <div
        className="centerContents"
        style={{
          justifyContent: "space-evenly",
          maxWidth: "800px",
          gap: "100px",
        }}
      >
        <div>
          <div style={{ width: "300px" }}>
            <p style={{ margin: "0" }}>not sure</p>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <h1 style={{ fontSize: "60px", margin: "0" }}>what2eat</h1>
              <p>?</p>
            </div>
            <p>
              Find the best nearby restaurant that satisfies all your group's
              needs!
            </p>
          </div>
          <div></div>
        </div>
        <div className="centerContentsVertical" style={{ gap: "20px" }}>
          <PageButton title={"Join Existing Event"} />
          <div className="verticalForm">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                createEvent(e);
              }}
            >
              <div>
                <label htmlFor="eventName">Create a new event</label>
                <input
                  placeholder="Name your event..."
                  id="eventName"
                  name="getEventName"
                  required
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="time">What times might work?</label>
                <div
                  className="centerContents"
                  style={{ justifyContent: "space-evenly" }}
                >
                  <Dropdowns
                    style={{ width: "40%" }}
                    setName="getStartTime"
                    items={[
                      "12am",
                      "1am",
                      "2am",
                      "3am",
                      "4am",
                      "5am",
                      "6am",
                      "7am",
                      "8am",
                      "9am",
                      "10am",
                      "11am",
                      "12pm",
                      "1pm",
                      "2pm",
                      "3pm",
                      "4pm",
                      "5pm",
                      "6pm",
                      "7pm",
                      "8pm",
                      "9pm",
                      "10pm",
                      "11pm",
                    ]}
                    setRequired
                  />
                  <p>to</p>
                  <Dropdowns
                    style={{ width: "40%" }}
                    setName="getEndTime"
                    items={[
                      "12am",
                      "1am",
                      "2am",
                      "3am",
                      "4am",
                      "5am",
                      "6am",
                      "7am",
                      "8am",
                      "9am",
                      "10am",
                      "11am",
                      "12pm",
                      "1pm",
                      "2pm",
                      "3pm",
                      "4pm",
                      "5pm",
                      "6pm",
                      "7pm",
                      "8pm",
                      "9pm",
                      "10pm",
                      "11pm",
                    ]}
                    setRequired
                  />
                </div>
              </div>
              <div>
                <label>What days might work?</label>
                <div name="getDaysOfWeek" className="weekDayPicker">
                  <input
                    type="button"
                    id="days"
                    onClick={(e) => {
                      handleDaySelection(e);
                    }}
                    value="Sun"
                    className={selectedDays["Sun"] == true ? "green" : "white"}
                  />
                  <input
                    type="button"
                    onClick={(e) => {
                      handleDaySelection(e);
                    }}
                    value="Mon"
                    className={selectedDays["Mon"] ? "green" : "white"}
                  />
                  <input
                    type="button"
                    onClick={(e) => {
                      handleDaySelection(e);
                    }}
                    value="Tue"
                    className={selectedDays["Tue"] ? "green" : "white"}
                  />
                  <input
                    type="button"
                    onClick={(e) => {
                      handleDaySelection(e);
                    }}
                    value="Wed"
                    className={selectedDays["Wed"] ? "green" : "white"}
                  />
                  <input
                    type="button"
                    onClick={(e) => {
                      handleDaySelection(e);
                    }}
                    value="Thu"
                    className={selectedDays["Thu"] ? "green" : "white"}
                  />
                  <input
                    type="button"
                    onClick={(e) => {
                      handleDaySelection(e);
                    }}
                    value="Fri"
                    className={selectedDays["Fri"] ? "green" : "white"}
                  />
                  <input
                    type="button"
                    onClick={(e) => {
                      handleDaySelection(e);
                    }}
                    value="Sat"
                    className={selectedDays["Sat"] ? "green" : "white"}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="getNumPeople">
                  How many people are showing up?
                </label>
                <input
                  required
                  name="getNumPeople"
                  placeholder="2 people..."
                  type="number"
                  min="0"
                  id="getNumPeople"
                />
              </div>
              <div className="centerContents" style={{ gap: "1rem" }}>
                <Autocomplete
                  ref={mapsRef}
                  required
                  style={{
                    width: "50%",
                    border: "none",
                    borderRadius: "5px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    boxShadow: "0px 4px 4px rgba(90, 90, 90, 0.3)",
                  }}
                  apiKey={"AIzaSyB6uWOr_UuBlz6vD_f-faIlAxgTHyBtC8A"}
                  onPlaceSelected={(place) => {
                    setSelectedLocation([
                      place.geometry.location.lng(),
                      place.geometry.location.lat(),
                    ]);
                  }}
                />
                <button
                  type="button"
                  className="buttonStyle"
                  style={{
                    backgroundColor: "#F5ABFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={(e) => {
                    navigator.geolocation.getCurrentPosition(
                      (position) => {
                        setSelectedLocation([
                          position.coords.longitude,
                          position.coords.latitude,
                        ]);
                        mapsRef.current.value = `${position.coords.longitude}, ${position.coords.latitude}`;
                      },
                      () => {
                        alert("Unable to retrive your location");
                      }
                    );
                  }}
                >
                  Use Location
                  <span
                    className="material-symbols-outlined"
                    style={{ lineHeight: "35px" }}
                  >
                    location_on
                  </span>
                </button>
              </div>
              <input
                type="submit"
                value="Create Event"
                className="buttonStyle"
                style={{ width: "100%", backgroundColor: "#F5ABFF" }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
