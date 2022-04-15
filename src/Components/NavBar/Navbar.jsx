import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();

  const trackScreen = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
      if (width > 600) {
        setOpen(true);
      }
    };
  
  const handleClose = () => {
    if (screenWidth < 600) {
      setOpen(false);
    }
  };

  useEffect(() => {
    trackScreen();
    window.addEventListener("resize", trackScreen);
    return () => window.removeEventListener("resize", trackScreen)
  }, []);


  return(
    <nav className="navbar">
      <div className="nav-wrap">
        <div className="logo">
          <Link to="/">
            <img src="file:///C:/Users/CVAQU/Downloads/2c99d08ec0ae463a8901fd9c8d13e35c.png" alt="" />
          </Link>
        </div>
        <div className="list-wrapper">
          <img
          src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true"
          alt=""
          style={{ opacity: !open ? 1 : 0}}
          onClick={() => {
            setOpen(!open);
          }}
          />
        </div>
      </div>
    </nav>
  )
}