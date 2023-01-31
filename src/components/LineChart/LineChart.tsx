import "./styles.css";
import { LineChartProps } from "./LineChartProps.types";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJs.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function LineChartGraph({ vehicleGraphData }: LineChartProps) {
  const data = {
    labels: [
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
      "Text"
    ],
    datasets: [
      {
        label: "Second dataset",
        data: vehicleGraphData,
        fill: false,
        borderColor: "#000",
        tension: 0.5
      }
    ]
  };

  const options = {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 100,
        stepSize: 20
      },
      x: {}
    }
  };

  return (
    <div className="line-chart-container">
      <Line options={options} data={data} />
    </div>
  );
}
