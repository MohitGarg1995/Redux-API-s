import React, { useEffect, useState } from "react";
import { fetchAPIData2 } from "./FetchAPIDataSlice";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function Data() {
  const [value, setValue] = useState(false);

  const renderDataMethodSecond = () => {
    setValue(true);
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const { dataVal, loadingVal, error } = useSelector(
    (state) => state.fetchHouses
  );
  const dispatch = useDispatch();

  // for call second API-------
  useEffect(() => {
    dispatch(fetchAPIData2());
  }, [dispatch]);

  if (loadingVal) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <button onClick={renderDataMethodSecond}>Houses Details</button>

      {/* conditional rendering    &  nested conditional rendering*/}

      {/* for second table */}

      {value && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>REGION</StyledTableCell>
                <StyledTableCell>NAMES</StyledTableCell>
                <StyledTableCell align="right">TITLES</StyledTableCell>
                <StyledTableCell align="right">SEATS</StyledTableCell>
                <StyledTableCell align="right">
                  CURRENT LAND LORD
                </StyledTableCell>
                <StyledTableCell align="right">ARMS</StyledTableCell>
                <StyledTableCell align="right"> LINKS</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataVal.map((item, index) => (
                // {rows.map((row) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {item.region}
                  </StyledTableCell>
                  {/* <StyledTableCell>{item.name}</StyledTableCell> */}
                  <StyledTableCell align="right">{item.titles}</StyledTableCell>
                  <StyledTableCell align="right">{item.seats}</StyledTableCell>
                  <StyledTableCell align="right">
                    {item.currentLord}
                  </StyledTableCell>
                  <StyledTableCell align="right">{}</StyledTableCell>

                  <StyledTableCell align="right">{item.url}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default Data;
