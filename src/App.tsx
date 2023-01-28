import { useEffect, useState } from 'react';
import { fetchBeaconApi } from './api/fetchBeaconApi';

import './App.css';

function App() {
	const [beaconData,setBeaconData] = useState('');
	let [timer,setTimer] = useState(60);
	const [disable,setDisable] = useState(true);


	useEffect(() => {

		if(timer === 0){
			setDisable(false)
			return
		} 
		

		const interval = setInterval(() => {
			setTimer(timer--);
		}, 1000);
	return () => clearInterval(interval);
	}, [timer]);








	const onChangeNewData = () => {
		fetchBeaconApi().then((data) => {
			setBeaconData(data.pulse.outputValue);
		});
		setDisable(true)
		setTimer(60)
		
	};

	useEffect(() => {
		fetchBeaconApi().then((data) => {
			setBeaconData(data.pulse.outputValue);
		});
	}, []);

const buttonValue = disable
	? 'Wait 60 seconds'
	: 'Show me the last random value';

	return (
		<div className='App'>
			<h1>{beaconData}</h1>
			<h1>{timer}</h1>
			<button onClick={onChangeNewData} disabled={disable}>{buttonValue}</button>
			
		</div>
	);
}

export default App;
