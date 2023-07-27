function ToggleButton({ toggleVisibility, isVisible, componentName }) {
	return (
		<button
			onClick={toggleVisibility}
			className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
			{isVisible ? `Hide ${componentName}` : `Show ${componentName}`}
		</button>
	);
}

export default ToggleButton;
