import { useState } from "react";
import './BMIcalculator.css';

export function BMIcalculator() {
const [weight,updateWeightValue] = useState("");
const [height,updateHeightValue] = useState("");
const [bmiValue,updateBMIValue] = useState(null);

function calculateBMIValue() {
 const heightInMeter = height/100;
 const bmiValue = weight/(heightInMeter*heightInMeter);
 const roundOfBMIValue = bmiValue.toFixed(2);
 updateBMIValue(roundOfBMIValue);
}
function handleWeightInputChange(event){
	updateWeightValue(event.target.value);
}
function handleHeightInputChange(event){
	updateHeightValue(event.target.value);
}
function displayBMIValue(){
	if (bmiValue !== null){
	return(
	<div>
	Your BMIValue is : { bmiValue }
	</div>
	)
	}
}

	return (
	<div className="container  form-container">
	<div>
    <label className="me-4 mt-5">weight in kgs:</label>
    <input type="text"
           value={weight}
           onChange = {handleWeightInputChange}
    >
    </input>
    </div>

    <div>
    <label className="me-4 mt-5">Height in cms:</label>
    <input type="text"
           value={height}
           onChange = {handleHeightInputChange}>
    </input>
    </div>
    <button 
    type="button" 
    className="btn btn-primary mt-4"
    onClick={calculateBMIValue}>
    Calculate BMI
    </button>
    {displayBMIValue()}
    </div>
	);
}