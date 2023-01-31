import { SideMenu } from "./components/SideMenu/SideMenu";
import { VehicleTab } from "./components/VehicleTab/VehicleTab";
import "./styles.css";
import { vehicles } from "./data/data";
import { useState } from "react";

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  return (
    <div className="App">
      <div className="sidemenu-container">
        <SideMenu
          vehicleHandler={setSelectedVehicle}
          vehicles={vehicles}
          menuTitle={"Vehicle Viewer"}
        />
      </div>
      <div className="vehicle-tab-container">
        {selectedVehicle && <VehicleTab vehicle={selectedVehicle} />}
        {!selectedVehicle && <p>Add a vehicle to see the stats</p>}
      </div>
    </div>
  );
}
