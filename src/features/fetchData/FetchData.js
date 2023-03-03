import React, { useEffect, useState } from "react";
import { fetchData } from "./fetchSlice";
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
  const [val, setVal] = useState(false);

  const renderDataMethod = () => {
    setVal(true);
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

  const { data, loading, error } = useSelector((state) => state.fetch);
  const dispatch = useDispatch();

  // for call first API-------
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <button onClick={renderDataMethod}>Books Details</button>

      {/* conditional rendering    &  nested conditional rendering*/}
      {val && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>BOOK NAME</StyledTableCell>
                <StyledTableCell>AUTHORS</StyledTableCell>
                <StyledTableCell align="right">COUNTRY</StyledTableCell>
                <StyledTableCell align="right">PUBLISHER</StyledTableCell>
                <StyledTableCell align="right">RELEASED</StyledTableCell>
                <StyledTableCell align="right">ISBN Number</StyledTableCell>
                <StyledTableCell align="right">MEDIA Type</StyledTableCell>
                <StyledTableCell align="right">
                  CHARACTERS LINKS
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, isbn) => (
                // {rows.map((row) => (
                <StyledTableRow key={isbn}>
                  <StyledTableCell component="th" scope="row">
                    {item.name}
                  </StyledTableCell>
                  <StyledTableCell>{item.authors}</StyledTableCell>
                  <StyledTableCell align="right">
                    {item.country}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.publisher}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.released}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.isbn}</StyledTableCell>
                  <StyledTableCell align="right">
                    {item.mediaType}
                  </StyledTableCell>
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
