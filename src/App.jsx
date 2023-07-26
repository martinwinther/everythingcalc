import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CalculatorToggle from "./components/CalculatorToggle";
import BMICalculator from "./components/BMICalculator";
import TDEECalculator from "./components/TDEECalculator";

const App = () => {
	const [gender, setGender] = useState("male");
	const [measurementSystem, setMeasurementSystem] = useState("metric");
	const [bmiVisible, setBmiVisible] = useState(false);
	const [tdeeVisible, setTdeeVisible] = useState(false);

	const toggleBmiVisibility = () => {
		setBmiVisible(!bmiVisible);
	};

	const toggleTdeeVisibility = () => {
		setTdeeVisible(!tdeeVisible);
	};

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-4">
			<Navbar
				setGender={setGender}
				setMeasurementSystem={setMeasurementSystem}
			/>
			<div>
				<CalculatorToggle
					name="BMI Calculator"
					isVisible={bmiVisible}
					onToggle={toggleBmiVisibility}
				/>
				{bmiVisible && (
					<BMICalculator
						gender={gender}
						measurementSystem={measurementSystem}
					/>
				)}
			</div>
			<div>
				<CalculatorToggle
					name="TDEE Calculator"
					isVisible={tdeeVisible}
					onToggle={toggleTdeeVisibility}
				/>
				{tdeeVisible && (
					<TDEECalculator
						gender={gender}
						measurementSystem={measurementSystem}
					/>
				)}
			</div>
		</div>
	);
};

export default App;
