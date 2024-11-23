import React from "react";
import "./Review.css";
import testimonia1 from "../../Assets/Images/resource/client-1-img.jpg";
import testimonia2 from "../../Assets/Images/resource/client-2-img.jpg";
import testimonia3 from "../../Assets/Images/resource/client-3-img.jpg";
import testimonia4 from "../../Assets/Images/resource/client-4-img.jpg";
import testimonia5 from "../../Assets/Images/resource/client-6-img.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  // Silk Carousel
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* <!-- testimonial-section --> */}
      <section className="testimonial-section p_relative pt_110 pb_100 bg-color-2">
        <div className="pattern-layer p_absolute l_0 t_0 review-custom-div"></div>
        <div className="auto-container">
          <div className="sec-title p_relative d_block mb_50 centred">
            <span className="p_relative d_block fs_14 lh_20 fw_sbold theme-color mb_7">
              how we can help
            </span>
            <h2 className="p_relative d_block lh_55 fw_exbold">
              What They’re Saying
            </h2>
          </div>
          <div className="review-slider-container">
            <Slider {...settings}>
              <div className="testimonial-block-one custom-testimonial-div">
                <div className="inner-box p_relative d_block bg-white pt_50 pr_40 pb_50 pl_40 b_radius_10">
                  <div className="quote">
                    <span>“</span>
                  </div>
                  <ul className="rating clearfix p_relative d_block mb_15">
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <div
                    className="text p_relative d_block mb_20"
                    style={{ height: "180px" }}
                  >
                    <p>
                      Great experience working with Fleek Bangladesh – skilled
                      team, valuable insights, and dedicated to client success.
                    </p>
                  </div>
                  <div className="author-box p_relative d_block pl_100 pt_13 pb_14">
                    <figure className="author-thumb p_absolute l_0 t_0 b_radius_50">
                      <img
                        src={testimonia1}
                        alt=""
                        style={{ height: "80px", width: "80px" }}
                      />
                    </figure>
                    <h5 className="d_block fs_18 lh_30 theme-color">
                      Sasha Ho
                    </h5>
                    <span className="designation d_block fs_14 lh_20 fw_medium">
                      Japan
                    </span>
                  </div>
                </div>
              </div>

              <div className="testimonial-block-one custom-testimonial-div">
                <div className="inner-box p_relative d_block bg-white pt_50 pr_40 pb_50 pl_40 b_radius_10">
                  <div className="quote">
                    <span>“</span>
                  </div>
                  <ul className="rating clearfix p_relative d_block mb_15">
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <div
                    className="text p_relative d_block mb_20"
                    style={{ height: "180px" }}
                  >
                    <p>
                      Fleek Bangladesh delivered a high-quality product with
                      skilled developers, seamless communication, and great
                      efficiency.
                    </p>
                  </div>
                  <div className="author-box p_relative d_block pl_100 pt_13 pb_14">
                    <figure className="author-thumb p_absolute l_0 t_0 b_radius_50">
                      <img
                        src={testimonia2}
                        alt=""
                        style={{ height: "80px", width: "80px" }}
                      />
                    </figure>
                    <h5 className="d_block fs_18 lh_30 theme-color">
                      June Cha
                    </h5>
                    <span className="designation d_block fs_14 lh_20 fw_medium">
                      Canada
                    </span>
                  </div>
                </div>
              </div>

              <div className="testimonial-block-one custom-testimonial-div">
                <div className="inner-box p_relative d_block bg-white pt_50 pr_40 pb_50 pl_40 b_radius_10">
                  <div className="quote">
                    <span>“</span>
                  </div>
                  <ul className="rating clearfix p_relative d_block mb_15">
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <div
                    className="text p_relative d_block mb_20"
                    style={{ height: "180px" }}
                  >
                    <p>
                      Fleek Bangladesh delivered an efficient, high-performing
                      solution with great project management and seamless
                      communication.
                    </p>
                  </div>
                  <div className="author-box p_relative d_block pl_100 pt_13 pb_14">
                    <figure className="author-thumb p_absolute l_0 t_0 b_radius_50">
                      <img
                        src={testimonia3}
                        alt=""
                        style={{ height: "80px", width: "80px" }}
                      />
                    </figure>
                    <h5 className="d_block fs_18 lh_30 theme-color">
                      Veeti Seppanen
                    </h5>
                    <span className="designation d_block fs_14 lh_20 fw_medium">
                      Germany
                    </span>
                  </div>
                </div>
              </div>

              <div className="testimonial-block-one custom-testimonial-div">
                <div className="inner-box p_relative d_block bg-white pt_50 pr_40 pb_50 pl_40 b_radius_10">
                  <div className="quote">
                    <span>“</span>
                  </div>
                  <ul className="rating clearfix p_relative d_block mb_15">
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <div
                    className="text p_relative d_block mb_20"
                    style={{ height: "180px" }}
                  >
                    <p>
                      Fleek Bangladesh delivered exceptional service, exceeding
                      expectations with timely, on-budget, and high-quality
                      solutions.
                    </p>
                  </div>
                  <div className="author-box p_relative d_block pl_100 pt_13 pb_14">
                    <figure className="author-thumb p_absolute l_0 t_0 b_radius_50">
                      <img
                        src={testimonia4}
                        alt=""
                        style={{ height: "80px", width: "80px" }}
                      />
                    </figure>
                    <h5 className="d_block fs_18 lh_30 theme-color">
                      Renee Sims
                    </h5>
                    <span className="designation d_block fs_14 lh_20 fw_medium">
                      Australia
                    </span>
                  </div>
                </div>
              </div>

              <div className="testimonial-block-one custom-testimonial-div">
                <div className="inner-box p_relative d_block bg-white pt_50 pr_40 pb_50 pl_40 b_radius_10">
                  <div className="quote">
                    <span>“</span>
                  </div>
                  <ul className="rating clearfix p_relative d_block mb_15">
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                    <li className="p_relative d_iblock pull-left fs_13 lh_20 mr_3">
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <div
                    className="text p_relative d_block mb_20"
                    style={{ height: "180px" }}
                  >
                    <p>
                      Fleek Bangladesh exceeded expectations with expert,
                      user-friendly, scalable solutions delivered on time and
                      with great professionalism.
                    </p>
                  </div>
                  <div className="author-box p_relative d_block pl_100 pt_13 pb_14">
                    <figure className="author-thumb p_absolute l_0 t_0 b_radius_50">
                      <img
                        src={testimonia5}
                        alt=""
                        style={{ height: "80px", width: "80px" }}
                      />
                    </figure>
                    <h5 className="d_block fs_18 lh_30 theme-color">
                      Miyah Myles
                    </h5>
                    <span className="designation d_block fs_14 lh_20 fw_medium">
                      USA
                    </span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* <!-- testimonial-section end --> */}
    </>
  );
};

export default Review;
