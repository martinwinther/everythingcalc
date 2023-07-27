function Navbar({ setGender, setMeasurementSystem }) {
	const [isMale, setIsMale] = useState(true);
	const [isMetric, setIsMetric] = useState(true);

	const handleGenderChange = () => {
		setIsMale(!isMale);
		setGender(!isMale ? "male" : "female");
	};

	const handleMeasurementChange = () => {
		setIsMetric(!isMetric);
		setMeasurementSystem(!isMetric ? "metric" : "imperial");
	};

	return (
		<nav className="bg-white shadow-lg p-4 mb-4 rounded fixed w-full z-10 top-0 flex justify-between items-center">
			<h1 className="text-xl">EverythingCalc</h1>
			<div className="flex space-x-8">
				<div className="flex items-center space-x-2">
					<span>Gender:</span>
					<label className="relative inline-flex items-center cursor-pointer">
						<input
							type="checkbox"
							checked={isMale}
							onChange={handleGenderChange}
							className="sr-only peer"
						/>
						<div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border-2 after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600"></div>
					</label>
					<div className="w-20 text-center">
						<span>{isMale ? "Male" : "Female"}</span>
					</div>
				</div>
				<div className="flex items-center space-x-2">
					<span>Unit:</span>
					<label className="relative inline-flex items-center cursor-pointer">
						<input
							type="checkbox"
							checked={isMetric}
							onChange={handleMeasurementChange}
							className="sr-only peer"
						/>
						<div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border-2 after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600"></div>
					</label>
					<div className="w-24 text-center">
						<span>{isMetric ? "Metric" : "Imperial"}</span>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
