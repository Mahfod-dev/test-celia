//https://beacon.nist.gov/beacon/2.0/chain/last/ pulse/last

import { ReponseDataPulse, Pulse } from '../interfaces/ReponseData';

export const fetchBeaconApi = async (): Promise<ReponseDataPulse> => {
	const response = await fetch(
		'https://beacon.nist.gov/beacon/2.0/chain/last/pulse/last'
	);

	const pulse: ReponseDataPulse = await response.json();

	return pulse;
};
