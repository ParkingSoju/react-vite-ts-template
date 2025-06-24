import {useState} from 'react';

export const App = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Vite + React + TS</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
		</>
	);
};
