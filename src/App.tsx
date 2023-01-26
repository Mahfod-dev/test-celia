import { useEffect, useState } from 'react';
import { fetchBeaconApi } from './api/fetchBeaconApi';

import './App.css';

function App() {
	const [beaconData, setBeaconData] = useState('');

	const onChangeNewData = () => {
		fetchBeaconApi().then((data) => {
			setBeaconData(data.pulse.outputValue);
		});
	};

	useEffect(() => {
		fetchBeaconApi().then((data) => {
			setBeaconData(data.pulse.outputValue);
		});
	}, []);

	return (
		<div className='App'>
			<h1>{beaconData}</h1>

			<button onClick={onChangeNewData}>Show me the last random value</button>
		</div>
	);
}

export default App;
