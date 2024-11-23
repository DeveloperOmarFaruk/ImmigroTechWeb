import React from "react";
import service1 from "../../Assets/Images/resource/about-1-img.jpg";
import service2 from "../../Assets/Images/resource/about-3-img.jpg";
import "../About/About.css";
import "../../Assets/CSS//flaticon.css";
import "../../Assets/CSS/style.css";
import "../../Assets/CSS/rtl.css";
import "../../Assets/CSS/color.css";
import "../../Assets/CSS/elpath.css";

const About = () => {
  return (
    <>
      {/* <!-- about-section --> */}
      <section className="about-section p_relative pt_110">
        <div className="pattern-layer p_absolute l_0 about-custom-div"></div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_1">
                <div className="content-box p_relative d_block mr_70 pb_90">
                  <div className="sec-title p_relative d_block mb_40">
                    <span className="p_relative d_block fs_14 lh_20 fw_sbold theme-color mb_7">
                      Get to know us
                    </span>
                    <h2 className="p_relative d_block lh_55 fw_exbold">
                      Immigration Law Firm Web Design Agency
                    </h2>
                  </div>
                  <div className="text p_relative d_block mb_30">
                    {/* <h5 className="fs_18 fw_medium theme-color mb_35">
                      "Immigration Law Firm Web Design Agency" 
                    </h5> */}
                    <p>
                    "ImmigroTech" refers to a
                      specialized web design agency that focuses on creating
                      custom, professional websites for immigration law firms.
                      These agencies provide services tailored to the unique
                      needs of immigration lawyers and firms, ensuring their
                      online presence reflects their expertise and helps attract
                      clients.
                    </p>
                  </div>
                  <ul className="list-style-one clearfix p_relative d_block">
                    <li className="p_relative d_iblock fs_16 lh_25 fw_sbold black-color mb_15 pull-left">
                    Affordable Online Presence
                    </li>
                    <li className="p_relative d_iblock fs_16 lh_25 fw_sbold black-color mb_15 pull-left">
                    Boost Lead Conversion
                    </li>
                    <li className="p_relative d_iblock fs_16 lh_25 fw_sbold black-color mb_15 pull-left">
                    SEO for Higher Visibility

                    </li>
                    <li className="p_relative d_iblock fs_16 lh_25 fw_sbold black-color mb_15 pull-left">
                    Mobile-Responsive Design
                    </li>
                    <li className="p_relative d_iblock fs_16 lh_25 fw_sbold black-color mb_15 pull-left">
                    Custom Legal Content
                    </li>
                    <li className="p_relative d_iblock fs_16 lh_25 fw_sbold black-color mb_15 pull-left">
                    Ongoing Maintenance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image_block_1">
                <div className="image-box p_relative d_block pl_70">
                  <figure className="image p_relative d_block image-1 b_radius_10 tran_5">
                    <img src={service1} alt="" />
                  </figure>
                  <figure
                    className="image image-2 p_absolute r_120 b_radius_10 wow slideInRight animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <img src={service2} alt="" />
                  </figure>
                  <div className="text p_absolute t_160 b_radius_10 b_shadow_7 bg-white pt_35 pr_40 pb_35 pl_110">
                    <div className="icon-box p_absolute l_30 t_30 fs_65 theme-color">
                      <i className="flaticon-customer-service"></i>
                    </div>
                    <h5 className="d_block fs_18">Meet Our Immigration Web Experts</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about-section end --> */}
    </>
  );
};

export default About;
