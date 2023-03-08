import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Cards";
import MyData from "./MyData";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center service" > My Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {MyData.map((data, ind) => {
                return (
                  <Cards
                    key={ind}
                    title={data.title}
                    imgsrc={data.imgsrc}
                    description={data.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
