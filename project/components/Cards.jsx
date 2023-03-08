import React from "react";
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Cards(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto main-div">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top image" alt="pic" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>

            <NavLink to="#" className="btn btn-primary">
              Explore!
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
