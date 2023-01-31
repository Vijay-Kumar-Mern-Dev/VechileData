import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./styles.css";
import { TableCompProps } from "./TableCompProps.types";

export const TableComp = ({ rows }: TableCompProps) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Start Time</TableCell>
            <TableCell align="center">Duration</TableCell>
            <TableCell align="center">Max Speed</TableCell>
            <TableCell align="center">Average Speed</TableCell>
            <TableCell align="center">Starting Voltage</TableCell>
            <TableCell align="center">Ending Voltage</TableCell>
            <TableCell align="center">Distance</TableCell>
            <TableCell align="center">Driver Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {row.startTime}
              </TableCell>
              <TableCell align="center">{row.duration}</TableCell>
              <TableCell align="center">{row.maxSpeed}</TableCell>
              <TableCell align="center">{row.averageSpeed}</TableCell>
              <TableCell align="center">{row.startingVoltage}</TableCell>
              <TableCell align="center">{row.endingVoltage}</TableCell>
              <TableCell align="center">{row.distance}</TableCell>
              <TableCell align="center">{row.driverScore}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
