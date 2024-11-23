import React from "react";
import "./Process.css";
import process1 from "../../Assets/Images/resource/process-1.png"
import process2 from "../../Assets/Images/resource/process-2.png"
import process3 from "../../Assets/Images/resource/process-3.png"
import process4 from "../../Assets/Images/resource/process-4.png"
import process5 from "../../Assets/Images/resource/process-5.png"
import process6 from "../../Assets/Images/resource/process-6.png"
import process7 from "../../Assets/Images/resource/process-7.png"
import process8 from "../../Assets/Images/resource/process-8.png"
import process9 from "../../Assets/Images/resource/process-9.png"

function Process() {
  return (
    <>
      {/* <!-- process-section --> */}
      <section className="process-section p_relative pt_110 pb_110 centred">
        <div className="auto-container">
          <div className="sec-title p_relative d_block mb_60">
            <span className="p_relative d_block fs_14 lh_20 fw_sbold theme-color mb_7">
              Our Development Process
            </span>
            <h2 className="p_relative d_block lh_55 fw_exbold">
            From Idea to Execution Our Workflow
            </h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 processing-block mb-5">
              <div
                className="processing-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box p_relative d_block">
                  <div className="arrow p_absolute arrow-custom-div"></div>
                  <div className="icon-box p_relative d_iblock w_180 h_180 lh_190 centred fs_65 theme-color b_radius_50 mb_13">
                  <img src={process1} alt="image-process" style={{padding:"40px"}}/>
                    <span className="p_absolute r_0 b_0 w_65 h_65 lh_55 text-left b_radius_50 fs_16 color-white fw_bold pl_20 pb_20 z_1">
                      01
                    </span>
                  </div>
                  <h3 className="d_block fs_24 lh_30 mb_20">
                    Initial Consultation
                  </h3>
                  <p>
                  Understanding your goals and requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 processing-block mb-5">
              <div
                className="processing-block-one wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box p_relative d_block">
                  <div className="arrow p_absolute arrow-custom-div"></div>
                  <div className="icon-box p_relative d_iblock w_180 h_180 lh_190 centred fs_65 theme-color b_radius_50 mb_13">
                  <img src={process2} alt="image-process" style={{padding:"40px"}}/>
                    <span className="p_absolute r_0 b_0 w_65 h_65 lh_55 text-left b_radius_50 fs_16 color-white fw_bold pl_20 pb_20 z_1">
                      02
                    </span>
                  </div>
                  <h3 className="d_block fs_24 lh_30 mb_20">
                    Analysis and Planning
                  </h3>
                  <p>
                  Crafting a strategic roadmap for success.
                  </p>
                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-6 col-sm-12 processing-block mb-5">
              <div
                className="processing-block-one wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box p_relative d_block">
                  <div className="icon-box p_relative d_iblock w_180 h_180 lh_190 centred fs_65 theme-color b_radius_50 mb_13">
                  <img src={process3} alt="image-process" style={{padding:"40px"}}/>
                    <span className="p_absolute r_0 b_0 w_65 h_65 lh_55 text-left b_radius_50 fs_16 color-white fw_bold pl_20 pb_20 z_1">
                      03
                    </span>
                  </div>
                  <h3 className="d_block fs_24 lh_30 mb_20">Design Creation</h3>
                  <p>
                  Developing user-friendly and visually appealing designs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 processing-block mb-5">
              <div
                className="processing-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box p_relative d_block">
                  <div className="arrow p_absolute arrow-custom-div"></div>
                  <div className="icon-box p_relative d_iblock w_180 h_180 lh_190 centred fs_65 theme-color b_radius_50 mb_13">
                  <img src={process4} alt="image-process" style={{padding:"40px"}}/>
                    <span className="p_absolute r_0 b_0 w_65 h_65 lh_55 text-left b_radius_50 fs_16 color-white fw_bold pl_20 pb_20 z_1">
                      04
                    </span>
                  </div>
                  <h3 className="d_block fs_24 lh_30 mb_20">Development</h3>
                  <p>
                  Turning designs into functional, high-quality software.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 processing-block mb-5">
              <div
                className="processing-block-one wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box p_relative d_block">
                  <div className="arrow p_absolute arrow-custom-div"></div>
                  <div className="icon-box p_relative d_iblock w_180 h_180 lh_190 centred fs_65 theme-color b_radius_50 mb_13">
                  <img src={process5} alt="image-process" style={{padding:"40px"}}/>
                    <span className="p_absolute r_0 b_0 w_65 h_65 lh_55 text-left b_radius_50 fs_16 color-white fw_bold pl_20 pb_20 z_1">
                      05
                    </span>
                  </div>
                  <h3 className="d_block fs_24 lh_30 mb_20">
                    Testing Quality Assurance
                  </h3>
                  <p>
                  Ensuring flawless performance and reliability.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 processing-block mb-5">
              <div
                className="processing-block-one wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box p_relative d_block">
                  <div className="icon-box p_relative d_iblock w_180 h_180 lh_190 centred fs_65 theme-color b_radius_50 mb_13">
                  <img src={process6} alt="image-process" style={{padding:"40px"}}/>
                    <span className="p_absolute r_0 b_0 w_65 h_65 lh_55 text-left b_radius_50 fs_16 color-white fw_bold pl_20 pb_20 z_1">
                      06
                    </span>
                  </div>
                  <h3 className="d_block fs_24 lh_30 mb_20">Deployment</h3>
                  <p>
                  Seamlessly launching your solution.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 processing-block mb-5">
              <div
                className="processing-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box p_relative d_block">
                  <div className="arrow p_absolute arrow-custom-div"></div>
                  <div className="icon-box p_relative d_iblock w_180 h_180 lh_190 centred fs_65 theme-color b_radius_50 mb_13">
                  <img src={process7} alt="image-process" style={{padding:"40px"}}/>
                    <span className="p_absolute r_0 b_0 w_65 h_65 lh_55 text-left b_radius_50 fs_16 color-white fw_bold pl_20 pb_20 z_1">
                      07
                    </span>
                  </div>
                  <h3 className="d_block fs_24 lh_30 mb_20">
                    Training and Documentation
                  </h3>
                  <p>
                  Equipping your team with the knowledge to succeed.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 processing-block">
              <div
                className="processing-block-one wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box p_relative d_block">
                  <div className="arrow p_absolute arrow-custom-div"></div>
                  <div className="icon-box p_relative d_iblock w_180 h_180 lh_190 centred fs_65 theme-color b_radius_50 mb_13">
                  <img src={process8} alt="image-process" style={{padding:"40px"}}/>
                    <span className="p_absolute r_0 b_0 w_65 h_65 lh_55 text-left b_radius_50 fs_16 color-white fw_bold pl_20 pb_20 z_1">
                      08
                    </span>
                  </div>
                  <h3 className="d_block fs_24 lh_30 mb_20">
                    Maintenance and Support
                  </h3>
                  <p>
                  Keeping your solution updated and efficient.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 processing-block mb-5">
              <div
                className="processing-block-one wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box p_relative d_block">
                  <div className="icon-box p_relative d_iblock w_180 h_180 lh_190 centred fs_65 theme-color b_radius_50 mb_13">
                  <img src={process9} alt="image-process" style={{padding:"40px"}}/>
                    <span className="p_absolute r_0 b_0 w_65 h_65 lh_55 text-left b_radius_50 fs_16 color-white fw_bold pl_20 pb_20 z_1">
                      09
                    </span>
                  </div>
                  <h3 className="d_block fs_24 lh_30 mb_20">
                    Continuous Improvement
                  </h3>
                  <p>
                  Enhancing functionality to meet evolving needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- process-section end --> */}
    </>
  );
}

export default Process;
