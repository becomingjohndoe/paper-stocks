import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export function Chart(props: any) {
	let prices: number[] = props.prices;

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Chart.js Line Chart",
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
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
			{
				label: "Dataset 2",
				data: prices,
				borderColor: "rgb(53, 162, 235)",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	};

	return <Line options={options} data={data} />;
}
