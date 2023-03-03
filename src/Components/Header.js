import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Header() {
  return (
    <>
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "space-around",
          fontSize: "32px",
          marginLeft: "5%",
          marginTop: "2%",
        }}
      >
        <Button variant="outlined">
          <Link to="/" style={{ textDecoration: "none" }}>
            BOOKS
          </Link>
        </Button>
        <Button variant="outlined">
          <Link to="/Characters" style={{ textDecoration: "none" }}>
            Characters
          </Link>
        </Button>
        <Button variant="outlined">
          <Link to="/Houses" style={{ textDecoration: "none" }}>
            Houses
          </Link>
        </Button>
        <Button variant="outlined">
          <Link to="/Search" style={{ textDecoration: "none" }}>
            Search
          </Link>
        </Button>
      </Box>
    </>
  );
}

export default Header;
