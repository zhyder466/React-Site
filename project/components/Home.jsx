import React from "react";
import web from "../images/web.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Same from "./Same";

function Home() {
  return (
    <Same
      title="Grow your business with "
      imgsrc={web}
      visit="/service"
      btname="Get Started"
    />
  );
}

export default Home;
