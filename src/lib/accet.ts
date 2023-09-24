const ACCETS = {
	amber: 'text-amber-100 bg-amber-600',
	blue: 'text-blue-100 bg-blue-600',
	green: 'text-green-100 bg-green-600'
};

const ACCETSHOVER = {
	amber: 'hover:bg-amber-500',
	blue: 'hover:bg-blue-500',
	green: 'hover:bg-green-500'
};

export function getAccet(accet: 'amber' | 'blue' | 'green'): { accet: string; accethover: string } {
	return {
		accet: ACCETS[accet],
		accethover: ACCETSHOVER[accet]
	};
}
