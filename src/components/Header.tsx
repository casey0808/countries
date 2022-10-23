import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography
            component="div"
            sx={{ flexGrow: 1, fontWeight: 800, fontSize: 24, marginLeft: 6 }}
          >
            Where in the world?
          </Typography>
          <Button color="inherit" sx={{ marginRight: 8 }}>
            Dark Mode
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
