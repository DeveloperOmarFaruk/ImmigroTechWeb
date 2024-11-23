import React from "react";
import service1 from "../../Assets/Images/resource/service-1-img.jpg";
import service2 from "../../Assets/Images/resource/service-2-img.jpg";
import service3 from "../../Assets/Images/resource/service-3-img.jpg";
import service4 from "../../Assets/Images/resource/service-4-img.jpg";
import service5 from "../../Assets/Images/resource/service-5-img.png";
import service6 from "../../Assets/Images/resource/service-6-img.jpg";
import service7 from "../../Assets/Images/resource/service-7-img.png";
import service8 from "../../Assets/Images/resource/service-8-img.jpeg";
import service9 from "../../Assets/Images/resource/service-9-img.jpg";

const Services = () => {
  return (
    <>
      {/* <!-- service-section --> */}
      <section className="service-section p_relative pt_175 pb_110">
        <div
          className="pattern-layer p_absolute l_170"
          style={{
            backgroundImage: "url(../../../../Assets/Images/shape/shape-2.png)",
          }}
        ></div>
        <div className="bg-layer p_absolute l_0 t_0"></div>
        <div className="auto-container">
          <div className="inner-container p_relative pb_60 mb_50">
            <div className="sec-title p_relative d_block mb_40 centred">
              <span className="p_relative d_block fs_14 lh_20 fw_sbold theme-color mb_7">
                What we’re offering
              </span>
              <h2 className="p_relative d_block lh_55 fw_exbold">
              Web Design Services for  <br />
              Immigration Lawyers
              </h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 service-block mb-4">
                <div
                  className="service-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box p_relative d_block b_radius_10">
                    <figure className="image-box p_relative d_block">
                      <img src={service1} alt="" style={{height:"245px"}}/>
                    </figure>
                    <div className="lower-content p_relative d_block pt_25 pr_30 pb_30 pl_40">
                      {/* <div className="icon-box p_absolute r_20 w_100 h_100 lh_110 centred fs_65 bg-white theme-color b_radius_10 tran_5 z_2">
                        <i className="flaticon-webdesign"></i>
                      </div> */}
                      <h3 className="d_block fs_24 lh_30 mb_25">
                        <a
                          href="/"
                          className="d_iblock black-color hov-color"
                        >
                          Custom Web Design
                        </a>
                      </h3>
                      <p className="mb_15" style={{height:"100px"}}>
                      Unique designs tailored to represent your immigration law firm's values.
                      </p>
                      <div className="link">
                        <a
                         href="/"
                          className="p_relative d_iblock fs_14 fw_sbold black-color hov-color pl_12"
                        >
                          <i className="fa fa-angle-right"></i>Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 service-block mb-4">
                <div
                  className="service-block-one wow fadeInUp animated"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box p_relative d_block b_radius_10">
                    <figure className="image-box p_relative d_block">
                      <img src={service2} alt="" style={{height:"245px"}}/>
                    </figure>
                    <div className="lower-content p_relative d_block pt_25 pr_30 pb_30 pl_40">
                      {/* <div className="icon-box p_absolute r_20 w_100 h_100 lh_110 centred fs_65 bg-white theme-color b_radius_10 tran_5 z_2">
                        <i className="flaticon-work-from-home"></i>
                      </div> */}
                      <h3 className="d_block fs_24 lh_30 mb_25">
                        <a
                         href="/"
                          className="d_iblock black-color hov-color"
                        >
                          Responsive Web Design
                        </a>
                      </h3>
                      <p className="mb_15" style={{height:"100px"}}>
                      Ensure your website looks stunning on all devices, from desktop to mobile.
                      </p>
                      <div className="link">
                        <a
                          href="/"
                          className="p_relative d_iblock fs_14 fw_sbold black-color hov-color pl_12"
                        >
                          <i className="fa fa-angle-right"></i>Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 service-block mb-4">
                <div
                  className="service-block-one wow fadeInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box p_relative d_block b_radius_10">
                    <figure className="image-box p_relative d_block">
                      <img src={service3} alt="" style={{height:"245px"}}/>
                    </figure>
                    <div className="lower-content p_relative d_block pt_25 pr_30 pb_30 pl_40">
                      {/* <div className="icon-box p_absolute r_20 w_100 h_100 lh_110 centred fs_65 bg-white theme-color b_radius_10 tran_5 z_2">
                        <i className="flaticon-travel"></i>
                      </div> */}
                      <h3 className="d_block fs_24 lh_30 mb_25">
                        <a
                          href="/"
                          className="d_iblock black-color hov-color"
                        >
                         WordPress Experts
                        </a>
                      </h3>
                      <p className="mb_15" style={{height:"100px"}}>
                      Expert WordPress solutions for seamless website management.
                      </p>
                      <div className="link">
                        <a
                       href="/"
                          className="p_relative d_iblock fs_14 fw_sbold black-color hov-color pl_12"
                        >
                          <i className="fa fa-angle-right"></i>Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 service-block mb-4">
                <div
                  className="service-block-one wow fadeInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box p_relative d_block b_radius_10">
                    <figure className="image-box p_relative d_block">
                      <img src={service4} alt="" style={{height:"245px"}}/>
                    </figure>
                    <div className="lower-content p_relative d_block pt_25 pr_30 pb_30 pl_40">
                      {/* <div className="icon-box p_absolute r_20 w_100 h_100 lh_110 centred fs_65 bg-white theme-color b_radius_10 tran_5 z_2">
                        <i className="flaticon-travel"></i>
                      </div> */}
                      <h3 className="d_block fs_24 lh_30 mb_25">
                        <a
                       href="/"
                          className="d_iblock black-color hov-color"
                        >
                          Web Design and Development
                        </a>
                      </h3>
                      <p className="mb_15" style={{height:"100px"}}>
                      Comprehensive design and development for modern, functional websites.
                      </p>
                      <div className="link">
                        <a
                       href="/"
                          className="p_relative d_iblock fs_14 fw_sbold black-color hov-color pl_12"
                        >
                          <i className="fa fa-angle-right"></i>Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 service-block mb-4">
                <div
                  className="service-block-one wow fadeInUp animated"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box p_relative d_block b_radius_10">
                    <figure className="image-box p_relative d_block">
                      <img src={service5} alt="" style={{height:"245px"}}/>
                    </figure>
                    <div className="lower-content p_relative d_block pt_25 pr_30 pb_30 pl_40">
                      {/* <div className="icon-box p_absolute r_20 w_100 h_100 lh_110 centred fs_65 bg-white theme-color b_radius_10 tran_5 z_2">
                        <i className="flaticon-work-from-home"></i>
                      </div> */}
                      <h3 className="d_block fs_24 lh_30 mb_25">
                        <a
                        href="/"
                          className="d_iblock black-color hov-color"
                        >
                          Premium Website Hosting Solutions
                        </a>
                      </h3>
                      <p className="mb_15" style={{height:"100px"}}>
                      Reliable hosting services to keep your website secure and online.
                      </p>
                      <div className="link">
                        <a
                        href="/"
                          className="p_relative d_iblock fs_14 fw_sbold black-color hov-color pl_12"
                        >
                          <i className="fa fa-angle-right"></i>Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 service-block mb-4">
                <div
                  className="service-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box p_relative d_block b_radius_10">
                    <figure className="image-box p_relative d_block">
                      <img src={service6} alt="" style={{height:"245px"}}/>
                    </figure>
                    <div className="lower-content p_relative d_block pt_25 pr_30 pb_30 pl_40">
                      {/* <div className="icon-box p_absolute r_20 w_100 h_100 lh_110 centred fs_65 bg-white theme-color b_radius_10 tran_5 z_2">
                        <i className="flaticon-family"></i>
                      </div> */}
                      <h3 className="d_block fs_24 lh_30 mb_25">
                        <a
                     href="/"
                          className="d_iblock black-color hov-color"
                        >
                        Search Engine Optimization (SEO)
                        </a>
                      </h3>
                      <p className="mb_15" style={{height:"100px"}}>
                      Boost your site's rankings to help clients find you faster online.
                      </p>
                      <div className="link">
                        <a
                        href="/"
                          className="p_relative d_iblock fs_14 fw_sbold black-color hov-color pl_12"
                        >
                          <i className="fa fa-angle-right"></i>Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 service-block mb-4">
                <div
                  className="service-block-one wow fadeInUp animated"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box p_relative d_block b_radius_10">
                    <figure className="image-box p_relative d_block">
                      <img src={service7} alt="" style={{height:"245px"}}/>
                    </figure>
                    <div className="lower-content p_relative d_block pt_25 pr_30 pb_30 pl_40">
                      {/* <div className="icon-box p_absolute r_20 w_100 h_100 lh_110 centred fs_65 bg-white theme-color b_radius_10 tran_5 z_2">
                        <i className="flaticon-work-from-home"></i>
                      </div> */}
                      <h3 className="d_block fs_24 lh_30 mb_25">
                        <a
                          href="/"
                          className="d_iblock black-color hov-color"
                        >
                       Content Writing
                        </a>
                      </h3>
                      <p className="mb_15" style={{height:"100px"}}>
                      Create compelling content to engage and inform your potential clients.
                      </p>
                      <div className="link">
                        <a
                          href="/"
                          className="p_relative d_iblock fs_14 fw_sbold black-color hov-color pl_12"
                        >
                          <i className="fa fa-angle-right"></i>Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

           

              <div className="col-lg-4 col-md-6 col-sm-12 service-block mb-4">
                <div
                  className="service-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box p_relative d_block b_radius_10">
                    <figure className="image-box p_relative d_block">
                      <img src={service8} alt="" style={{height:"245px"}}/>
                    </figure>
                    <div className="lower-content p_relative d_block pt_25 pr_30 pb_30 pl_40">
                      {/* <div className="icon-box p_absolute r_20 w_100 h_100 lh_110 centred fs_65 bg-white theme-color b_radius_10 tran_5 z_2">
                        <i className="flaticon-family"></i>
                      </div> */}
                      <h3 className="d_block fs_24 lh_30 mb_25">
                        <a
                         href="/"
                          className="d_iblock black-color hov-color"
                        >
                          Email Marketing
                        </a>
                      </h3>
                      <p className="mb_15" style={{height:"100px"}}>
                      Build strong client relationships with effective email campaigns.
                      </p>
                      <div className="link">
                        <a
                         href="/"
                          className="p_relative d_iblock fs_14 fw_sbold black-color hov-color pl_12"
                        >
                          <i className="fa fa-angle-right"></i>Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

           

              <div className="col-lg-4 col-md-6 col-sm-12 service-block mb-4">
                <div
                  className="service-block-one wow fadeInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box p_relative d_block b_radius_10">
                    <figure className="image-box p_relative d_block">
                      <img src={service9} alt="" style={{height:"245px"}}/>
                    </figure>
                    <div className="lower-content p_relative d_block pt_25 pr_30 pb_30 pl_40">
                      {/* <div className="icon-box p_absolute r_20 w_100 h_100 lh_110 centred fs_65 bg-white theme-color b_radius_10 tran_5 z_2">
                        <i className="flaticon-travel"></i>
                      </div> */}
                      <h3 className="d_block fs_24 lh_30 mb_25">
                        <a
                          href="/"
                          className="d_iblock black-color hov-color"
                        >
                          Video Production
                        </a>
                      </h3>
                      <p className="mb_15" style={{height:"100px"}}>
                      High-quality video content to promote your services and success stories.
                      </p>
                      <div className="link">
                        <a
                          href="/"
                          className="p_relative d_iblock fs_14 fw_sbold black-color hov-color pl_12"
                        >
                          <i className="fa fa-angle-right"></i>Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
        </div>
      </section>
      {/* <!-- service-section end --> */}
    </>
  );
};

export default Services;
