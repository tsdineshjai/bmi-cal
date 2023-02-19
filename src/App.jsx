import React from "react";

function App() {
	const [height, setHeight] = React.useState(0);
	const [weight, setWeight] = React.useState(0);
	const [BMI, setBMI] = React.useState(0);

	function CaluculateBMI(height, weight) {
		if (height > 1 || weight > 1) {
			const value = weight / (height / 100) ** 2;
			return value.toFixed(2);
		} else {
			return;
		}
	}

	React.useEffect(() => {
		const result = CaluculateBMI(height, weight);
		setTimeout(() => {
			setBMI(result);
		}, 2000);
	}, [height, weight]);
	return (
		<main>
			<h1>BMI Caluculator</h1>
			<div className="bmi-container">
				<article className="bmi-inputs">
					<label htmlFor="height">Height in cm: {height} cm</label>
					<input
						max={225}
						min={0}
						type="range"
						name="height"
						value={height}
						id="height"
						onChange={(e) => setHeight(e.target.value)}
					/>
					<label htmlFor="weight">Weight in Kg: {weight} kg</label>
					<input
						max={225}
						min={0}
						type="range"
						name="weight"
						id="weight"
						value={weight}
						onChange={(e) => setWeight(e.target.value)}
					/>
				</article>
				<article className="bmi-result">
					<p>Your BMI is</p>
					<p>{BMI}</p>
				</article>
			</div>
		</main>
	);
}

export default App;
