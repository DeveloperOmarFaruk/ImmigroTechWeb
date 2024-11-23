import React from "react";
import "./Banner.css";
import Banner1 from "../../Assets/Images/banner/banner-1-img.jpg";
import Banner2 from "../../Assets/Images/banner/banner-5-img.jpg";
import Banner3 from "../../Assets/Images/banner/banner-2-img.jpg";
import { Link } from "react-router-dom";
import useFunctions from "../../Hooks/useFunction";

const Banner = () => {
const {scrollToSection} = useFunctions();

  return (
    <>
    <div className="banner-container">
      <div
        id="carouselExampleInterval"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div
            className="carousel-item active banner-container-div"
            data-bs-interval="5000"
          >
            <img
              src={Banner1}
              className="d-block banner-image"
              alt="banner_image"
            />
            <div className="carousel-caption d-flex flex-column h-100 align-items-start justify-content-center bottom-0 banner-text ">
              <p className="z-0 mb-3">Web Design for Lawyers</p>
              <h1 className="pb-0 mb-2"> We create impactful</h1>
              <h1 className="pt-0 mt-0" style={{ marginBottom: "2rem" }}>
                {" "}
                websites tailored to your needs.
              </h1>

          

<div className="btn-box clearfix">
                                <Link to="/"  onClick={() => scrollToSection("contact")} className="theme-btn btn-one">Start Your Application</Link>
                            </div>
            </div>
          </div>


          <div
            className="carousel-item banner-container-div"
            data-bs-interval="5000"
          >
            <img
              src={Banner2}
              className="d-block banner-image"
              alt="banner_image"
            />
            <div className="carousel-caption d-flex flex-column h-100 align-items-start justify-content-center bottom-0 banner-text">
            <p className="z-0 mb-3">Web Design for Immigration Experts</p>
              <h1 className="pb-0 mb-2"> We craft responsive,</h1>
              <h1 className="pt-0 mt-0" style={{ marginBottom: "2rem" }}>
                {" "}
                 user-friendly websites for law firms
              </h1>

              <div className="btn-box clearfix">
                                <Link to="/"  onClick={() => scrollToSection("contact")} className="theme-btn btn-one">Start Your Application</Link>
                            </div>
            </div>
          </div>


          <div
            className="carousel-item banner-container-div"
            data-bs-interval="5000"
          >
            <img
              src={Banner3}
              className="d-block banner-image"
              alt="banner_image"
            />
            <div className="carousel-caption d-flex flex-column h-100 align-items-start justify-content-center bottom-0 banner-text">
            <p className="z-0 mb-3">Professional Websites for Lawyers</p>
              <h1 className="pb-0 mb-2"> Delivering high-quality,</h1>
              <h1 className="pt-0 mt-0" style={{ marginBottom: "2rem" }}>
                websites for the legal industry
              </h1>

              <div className="btn-box clearfix">
                                <Link to="/"  onClick={() => scrollToSection("contact")} className="theme-btn btn-one">Start Your Application</Link>
                            </div>
            </div>
          </div>

        </div>



        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="overlay"></div>
    </div>

  
  </>
  );
};

export default Banner;
