import React, { useRef } from "react";

import NumberInput from "../components/NumberInput";

import RangeSlider from "../components/RangeSlider";
import { useState } from "react";

const Input = () => {
    const createEvent = (formData) => {
        console.log(formData);
    };

    const [checkboxes, setCheckboxes] = useState({
        option1: false,
        option2: false,
        option3: false,
      });
    
      const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes({
          ...checkboxes,
          [name]: checked,
        });
      };

    return(
        <>
            <div className="verticalForm">
                <form
                onSubmit={(e) => {
                    e.preventDefault();
                    createEvent(e);
                }}
                >
                <div>
                    <label htmlFor="cuisines">What cuisine(s) are you feeling today?</label>
                        <label>
                            <input
                            type="checkbox"
                            name="option1"
                            checked={checkboxes.option1}
                            onChange={handleCheckboxChange}
                            />
                            Chinese
                        </label>
                </div>

                <div>
                    <label htmlFor="distance">How far are you willing to travel? (miles)</label>
                    <NumberInput></NumberInput>
                </div>

                Price


                </form>
            </div>
        </>
    );
};

export default Input;