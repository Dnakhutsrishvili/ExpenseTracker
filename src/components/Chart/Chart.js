import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const DataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalmaximum = Math.max(...DataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalmaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
