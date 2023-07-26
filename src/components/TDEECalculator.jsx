import React, { useState } from "react";

function TDEECalculator({ gender, measurementSystem }) {
	const [age, setAge] = useState(0);
	const [height, setHeight] = useState(0);
	const [weight, setWeight] = useState(0);
	const [activityLevel, setActivityLevel] = useState(0);

	const calculateTDEE = () => {
		let bmr = 0;
		if (measurementSystem === "metric") {
			bmr =
				gender === "male"
					? 10 * weight + 6.25 * height - 5 * age + 5
					: 10 * weight + 6.25 * height - 5 * age - 161;
		} else {
			weight /= 2.2046; // convert lbs to kg
			height *= 2.54; // convert inch to cm
			bmr =
				gender === "male"
					? 10 * weight + 6.25 * height - 5 * age + 5
					: 10 * weight + 6.25 * height - 5 * age - 161;
		}
		let tdee = bmr * (1 + activityLevel / 2);
		return tdee.toFixed(2);
	};

	return (
		<div>
			<input
				type="number"
				placeholder="Age"
				onChange={(e) => setAge(e.target.value)}
			/>
			<input
				type="number"
				placeholder="Height"
				onChange={(e) => setHeight(e.target.value)}
			/>
			<input
				type="number"
				placeholder="Weight"
				onChange={(e) => setWeight(e.target.value)}
			/>
			<input
				type="number"
				placeholder="Activity Level (1-4)"
				onChange={(e) => setActivityLevel(e.target.value)}
			/>
			<button onClick={calculateTDEE}>Calculate</button>
			<p>Your TDEE is {calculateTDEE()} calories/day</p>
		</div>
	);
}

export default TDEECalculator;
