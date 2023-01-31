import "./styles.css";
import { VehicleTabProps } from "./VehicleTabProps.types";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LineChartGraph from "../../components/LineChart/LineChart";
import { TableComp } from "../TableComp/TableComp";
import { vehicles } from "../../data/data";

export const VehicleTab = ({ vehicle }: VehicleTabProps) => {
  return (
    <div className="vehicle-tab-layout">
      <div className="tab-title">
        Vehicle {`>`} {vehicle}
      </div>
      <div className="vehicle-status-section">
        <div className="vehicle-status">
          <p className="vehicle-status-title">Vehicle Status</p>
          <div className="vehicle-status-display">
            <ul className="vehicle-status-list">
              <li className="vehicle-status-list-item">
                <span className="vehicle-status-item-title">Elevation</span>
                <span className="vehicle-status-value">200m</span>
              </li>
              <li className="vehicle-status-list-item">
                <span className="vehicle-status-item-title">Temperature</span>
                <span className="vehicle-status-value">45</span>
              </li>
              <li className="vehicle-status-list-item">
                <span className="vehicle-status-item-title">Locked</span>
                <span className="vehicle-status-value">
                  <CheckCircleIcon />
                </span>
              </li>
              <li className="vehicle-status-list-item">
                <span className="vehicle-status-item-title">Battery</span>
                <span className="vehicle-status-value">75.6%</span>
              </li>
            </ul>
            <ul className="vehicle-features-list">
              <li>
                <span>
                  <CheckCircleIcon className="feature-check-icon" />
                </span>
                Throttle
              </li>
              <li>
                <span>
                  <CheckCircleIcon className="feature-check-icon" />
                </span>
                Controller
              </li>
              <li>
                <span>
                  <CheckCircleIcon className="feature-check-icon" />
                </span>
                Motor
              </li>
              <li>
                <span>
                  <CheckCircleIcon className="feature-check-icon" />
                </span>
                Overload
              </li>
              <li>
                <span>
                  <CheckCircleIcon className="feature-check-icon" />
                </span>
                Overcurrent
              </li>
            </ul>
          </div>
        </div>
        <div className="vehicle-stat-graph">
          <div className="vehicle-stat-title-section">
            <div className="graph-title-box">
              <p className="graph-title-text">Statistics</p>
              <button className="button-light">Bookings</button>
              <button className="button-light">Earnings</button>
            </div>
            <div className="vehicle-date-box">
              <button className="button-light">D</button>
              <button className="button-light">W</button>
              <button className="button-light">M</button>
              <button className="button-light">Y</button>
              <button className="button-light">Max</button>
            </div>
          </div>

          <div className="graph-display-container">
            <LineChartGraph
              vehicleGraphData={
                vehicles.filter((item) => item.name === vehicle)[0]
                  .vehicleGraphData
              }
            />
          </div>
        </div>
      </div>
      <div className="vehicle-table-section">
        <div className="vehicle-table-title">Recent Trips</div>
        <div className="vehicle-table-display">
          <TableComp
            rows={vehicles.filter((item) => item.name === vehicle)[0].rowData}
          />
        </div>
      </div>
    </div>
  );
};
