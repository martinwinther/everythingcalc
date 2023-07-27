const CalculatorToggle = ({ name, isVisible, onToggle }) => {
	return (
		<button
			onClick={onToggle}
			className="w-full p-4 bg-blue-500 text-white rounded hover:bg-blue-600">
			{isVisible ? `Hide ${name}` : `Show ${name}`}
		</button>
	);
};

export default CalculatorToggle;
