export type rowData = {
  startTime: string;
  duration: string;
  maxSpeed: string;
  averageSpeed: string;
  startingVoltage: string;
  endingVoltage: string;
  distance: string;
  driverScore: string;
};

export type TableCompProps = {
  rows: rowData[];
};
