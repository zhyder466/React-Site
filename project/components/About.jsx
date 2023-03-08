import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import about from '../images/about.svg'
import { NavLink } from "react-router-dom";
import TypeWriterEffect from 'react-typewriter-effect';

function About() {
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  <span>Hello! I am  </span>
                  <span className="brand-name"><strong className="brand-name">Hyder,</strong></span>
                </h1>
                <h2 className="my-3"><span className="typed">
                  <TypeWriterEffect
                    textStyle={{
                      fontFamily: "poppins",
                      fontWeight: 'bold',
                      color: '#484848',
                      fontSize: '70px'

                    }}
                    startDelay={0}
                    cursorColor="#3F3D56"
                    multiText={[
                      'a Programmer.',
                      'a Developer.',
                      'a Coder.',]}
                    multiTextDelay={1000}
                    typeSpeed={40}
                    multiTextLoop
                  />
                </span></h2>

                <div className="mt-3 ">
                  <NavLink to="/contact" className="btn btn-primary">
                    Get in touch!
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img ms-auto">
                <img
                  src={about}
                  className="img-fluid animated"
                  alt="pic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
