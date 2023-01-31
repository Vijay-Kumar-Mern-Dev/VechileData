import "./styles.css";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { SideMenuProps } from "./SideMenuProps.types";
import CancelIcon from "@mui/icons-material/Cancel";
import { vehicles as vehicleListMain } from "../../data/data";

export const SideMenu = ({
  menuTitle,
  vehicles,
  vehicleHandler
}: SideMenuProps) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedVehicles, setSelectedVehicles] = useState([]);
  const [vehicleList, setVehicleList] = useState(vehicles);
  const [value, setValue] = useState("");

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="side-menu-layout">
      <h1>{menuTitle}</h1>
      <div className="vehicle-buttons">
        <div className="vehicle-add-btn">
          <Button
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            <AddIcon /> Add Vehicle
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
            <Typography className="vehicle-popover">
              <ul className="vehicle-list">
                <div className="search-bar-container">
                  <SearchIcon />
                  <input
                    className="search-bar-custom"
                    placeholder="search..."
                    onChange={(e) => {
                      const currValue = e.target.value;
                      setValue(currValue);
                      const filteredData = vehicleListMain.filter((entry) =>
                        entry.name
                          .toLowerCase()
                          .includes(currValue.toLowerCase())
                      );
                      setVehicleList(filteredData);
                    }}
                  />
                </div>
                {vehicleList.map((vehicle) => {
                  return (
                    <li
                      onClick={() => {
                        setAnchorEl(false);

                        const flag = selectedVehicles.filter(
                          (item) => item.name === vehicle.name
                        );

                        if (flag.length === 0) {
                          setSelectedVehicles([...selectedVehicles, vehicle]);
                        }
                      }}
                      className="vehicle-btn-item"
                    >
                      {vehicle.name}
                    </li>
                  );
                })}
              </ul>
            </Typography>
          </Popover>
        </div>
        <div className="selected-vehicles">
          {selectedVehicles.map((vehicle) => {
            return (
              <Button variant="contained">
                <span className="vehicle-btn-text">
                  <span
                    className="vehicle-btn-title"
                    onClick={() => vehicleHandler(vehicle.name)}
                  >
                    {vehicle.name}
                  </span>{" "}
                  <span className="vehicle-cancel-icon">
                    <CancelIcon
                      onClick={() => {
                        if (selectedVehicles.length === 1) {
                          setSelectedVehicles(
                            selectedVehicles.filter(
                              (item) => item.name !== vehicle.name
                            )
                          );
                          vehicleHandler(null);
                        } else {
                          setSelectedVehicles(
                            selectedVehicles.filter(
                              (item) => item.name !== vehicle.name
                            )
                          );
                        }
                      }}
                    />
                  </span>
                </span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
