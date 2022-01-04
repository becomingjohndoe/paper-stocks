import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

export function Chart(props: any) {
	let prices: number[] = props.priceInfo.priceArr;
	let isUp = props.priceInfo.isUp;

	const red = "#f65757";
	const green = "#03c03c";
	const options = {
		responsive: true,
		animation: {
			duration: 500,
		},
		plugins: {
			legend: {
				display: false,
				usePointStyle: true,
			},
			title: {
				display: false,
				text: "Chart.js Line Chart",
			},
		},

		elements: {
			line: {
				tension: 0.4,
			},
		},
		scales: {
			xAxis: {
				display: false,
			},
			yAxis: {
				grid: {
					drawBorder: false,
				},
			},
		},
	};
	// create array with numbers 1 to 30
	let labels: number[] = [];
	for (let i = 1; i <= 30; i++) {
		labels.push(i);
	}

	const data = {
		labels,
		datasets: [
			{
				label: "Dataset 1",
				data: prices,
				borderColor: isUp ? green : red,
				backgroundColor: isUp ? green : red,
				fill: "origin",
				pointRadius: 0,
			},
		],
	};

	return <Line options={options} data={data} />;
}
