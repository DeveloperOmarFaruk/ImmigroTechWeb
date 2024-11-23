import React from "react";
import "./Chooseus.css";
import chooseus1 from "../../Assets/Images/resource/chooseus-1-img.jpg";
import { Link } from "react-router-dom";

function Chooseus() {
  return (
    <>
      {/* <!-- chooseus-section --> */}
      <section className="chooseus-section p_relative pt_120">
        <figure className="image-layer p_absolute r_60">
        
        </figure>
        <div className="bg-layer bg-color-2 p_absolute l_0 t_0"></div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image-box mr_100 p_relative d_block">
                <figure className="image clearfix p_relative">
                  <img src={chooseus1} alt="" />
                </figure>
                <div className="video-btn p_absolute r_0 b_0">
                  <Link
                   to="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
                    target="_blank"
                    className="lightbox-image fs_30 color-white theme-color-bg"
                    data-caption=""
                  >
                    <i className="fa fa-play"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <div className="sec-title p_relative d_block mb_30">
                  <span className="p_relative d_block fs_14 lh_20 fw_sbold theme-color mb_7">
                    Choose Our Trusted Agency
                  </span>
                  <h2 className="p_relative d_block lh_55 fw_exbold">
                    Why Thrive Trusted Experts in Immigration Law Firm Web
                    Solutions
                  </h2>
                </div>
                <div className="text p_relative d_block mb_60">
                  <p>
                    Thrive is a trusted expert in crafting tailored web
                    solutions for immigration law firms. With a focus on
                    professional design, SEO optimization, and user-friendly
                    functionality, we help firms stand out online and attract
                    more clients.
                  </p>
                </div>
                <div className="inner p_relative d_block pl_0 mb_170">
                  {/* <figure className="image-box p_absolute l_0 w_170 h_170 b_radius_50">
                    <img src={chooseus2} alt="" />
                  </figure> */}
                  <ul className="list-style-one clearfix p_relative d_block mb_30">
                    <li className="p_relative d_block fs_18 lh_25 fw_medium black-color mb_19">
                    Skilled Creative Team
                    </li>
                    <li className="p_relative d_block fs_18 lh_25 fw_medium black-color mb_19">
                    Customized Solutions
                    </li>
                    <li className="p_relative d_block fs_18 lh_25 fw_medium black-color mb_19">
                    Integrated SEO
                    </li>
                    <li className="p_relative d_block fs_18 lh_25 fw_medium black-color mb_19">
                    Timely Delivery
                    </li>
                    <li className="p_relative d_block fs_18 lh_25 fw_medium black-color mb_19">
                    Unrivaled Expertise
                    </li>
                   
                  </ul>
                </div>
                <div className="funfact-inner">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 counter-block">
                      <div className="counter-block-one">
                        <div className="inner-box p_relative d_block">
                          <div className="icon-box p_relative d_block fs_65 theme-color mb_10">
                            <i className="flaticon-badge"></i>
                          </div>
                          <div className="count-outer count-box p_relative d_block fs_50 lh_50 fw_bold black-color">
                            <span
                              className="count-text"
                              data-speed="1500"
                              data-stop="99"
                            >
                              100
                            </span>
                            <span>%</span>
                          </div>
                          <p className="lh_26">Project Delivery Success Rate</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 counter-block">
                      <div className="counter-block-one">
                        <div className="inner-box p_relative d_block">
                          <div className="icon-box p_relative d_block fs_65 theme-color mb_10">
                            <i className="flaticon-online-payment"></i>
                          </div>
                          <div className="count-outer count-box p_relative d_block fs_50 lh_50 fw_bold black-color">
                            <span
                              className="count-text"
                              data-speed="1500"
                              data-stop="880"
                            >
                              150+
                            </span>
                          </div>
                          <p className="lh_26">Total Web Application Deliverd</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- chooseus-section end --> */}
    </>
  );
}

export default Chooseus;
