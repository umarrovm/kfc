import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { Opacity } from "@mui/icons-material";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, position: "fixed", width: "100%" }}>
      <AppBar position="static" id="color">
        <Toolbar id="tol">
          <Container id="navs">
            <Button onClick={() => navigate("/")}>
              <img
                id="logc"
                src="https://devkfcwebsites.fimble.io/admin/files/4672.svg"
                alt=""
              />
            </Button>
            <div id="navs2">
              <Link className="link" to="/restaurants">
                <Button color="inherit" id="btn1">
                  Рестораны
                </Button>
              </Link>
              <Link to="/halal">
                <Button id="btn2">
                  <img
                    className="hl"
                    src="https://www.kfc.kg/admin/files/5384.png"
                  />
                </Button>
              </Link>
              <Link className="link" to="menu">
                <Button color="inherit" id="btn1">
                  Меню
                </Button>
              </Link>
              <div>
                <img
                  id="tel1"
                  src="https://parspng.com/wp-content/uploads/2022/03/telephonepng.parspng.com-2-600x643.png"
                  alt=""
                />
                <a id="tnum" href="tel:+996703783830">
                  +996 (703) 78-38-30
                </a>
              </div>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
