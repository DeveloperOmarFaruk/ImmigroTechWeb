import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import useFunctions from "../../Hooks/useFunction";

function Footer() {
  const { scrollToSection } = useFunctions();
  return (
    <>
      {/* <!-- main-footer --> */}
      <section className="main-footer">
        <div className="image-layer p_absolute r_0 b_0 footer-custom-div"></div>
        <div className="footer-top">
          <div className="auto-container">
            <div className="top-inner">
              <div className="info-box pt-3">
                <div className="icon-box">
                  <i className="flaticon-message"></i>
                </div>
                <span>Email address</span>
                <h5>
                  <Link to="/">info@fleek.com.bd</Link>
                </h5>
              </div>
              {/* <figure className="footer-logo"><a href="index.html"><img src="assets/images/logo-2.png" alt=""/></a></figure> */}
              <div className="info-box pt-3">
                <div className="icon-box">
                  <i className="flaticon-phone-call"></i>
                </div>
                <span>Call now</span>
                <h5>
                  <Link to="/">+880 1977016090</Link>
                </h5>
              </div>

              <div className="info-box pt-3">
                <div className="icon-box">
            
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <span>Office Address</span>
                <h5>
                  <Link to="/"> H-417, R- 7, Baridhara DOHS, Dhaka-1206, Bangladesh</Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-section">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget about-widget">
                  <div className="widget-title">
                    <h4>About</h4>
                  </div>
                  <div className="widget-content">
                    <p>
                      Expert web design services for immigration law firms,
                      creating professional, responsive websites.
                    </p>
                    <ul className="social-links clearfix">
                      <li>
                        <Link to="/" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://www.facebook.com/fleekbd?rdid=MuyULxUADA4dAeYE&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F14GnLqTFMx%2F#"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://www.linkedin.com/company/fleekbangladesh"
                          target="_blank"
                        >
                          <i className="fa-brands fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget ml_80">
                  <div className="widget-title">
                    <h4>Services</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link
                          to="/"
                          onClick={() => scrollToSection("services")}
                        >
                          Custom Web Design
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          onClick={() => scrollToSection("services")}
                        >
                          Web Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          onClick={() => scrollToSection("services")}
                        >
                          Wordpress Experts
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          onClick={() => scrollToSection("services")}
                        >
                          Website Hosting
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          onClick={() => scrollToSection("services")}
                        >
                          Integrated SEO
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/"
                          onClick={() => scrollToSection("services")}
                        >
                          Email Marketing
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h4>Company</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link to="/" onClick={() => scrollToSection("about")}>
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          onClick={() => scrollToSection("services")}
                        >
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          onClick={() => scrollToSection("choose-thrive")}
                        >
                          Choose Thrive
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={() => scrollToSection("contact")}>
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget newsletter-widget">
                  <div className="widget-title">
                    <h4>Newsletter</h4>
                  </div>
                  <div className="widget-content">
                    <form>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email address"
                          required=""
                        />
                        <button type="">
                          <i className="fas fa-paper-plane"></i>
                        </button>
                      </div>
                      <div className="form-group">
                        <div className="check-box">
                          <input
                            className="check"
                            type="checkbox"
                            id="checkbox"
                          />
                          <label for="checkbox">
                            I agree to all your terms and policies
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copyright centred">
            <p>
              &copy; Copyright 2024 by{" "}
              <Link to="https://fleek.com.bd/" target="_blank">
                Fleek Bangladesh
              </Link>
            </p>
          </div>
        </div>
      </section>
      {/* <!-- main-footer end --> */}
    </>
  );
}

export default Footer;
