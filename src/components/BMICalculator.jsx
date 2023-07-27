function BMICalculator({ gender, measurementSystem }) {
	const [height, setHeight] = useState(0);
	const [weight, setWeight] = useState(0);

	const calculateBMI = () => {
		let bmi = 0;
		if (measurementSystem === "metric") {
			bmi = weight / Math.pow(height / 100, 2);
		} else {
			bmi = (weight / Math.pow(height, 2)) * 703;
		}
		return bmi.toFixed(2);
	};

	return (
		<div>
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
			<button onClick={calculateBMI}>Calculate</button>
			<p>Your BMI is {calculateBMI()}</p>
		</div>
	);
}

export default BMICalculator;
