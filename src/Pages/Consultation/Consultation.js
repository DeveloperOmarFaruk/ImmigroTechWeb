import React from 'react';
import "./Consultation.css";
import { Link } from 'react-router-dom';
import useFunctions from '../../Hooks/useFunction';


function Consultation() {
    const{scrollToSection} = useFunctions();
    return (
        <>
              {/* <!-- cta-section --> */}
        <section className="cta-section p_relative">
            <div className="bg-layer bg-color-2 p_absolute l_0 b_0"></div>
            <div className="auto-container">
                <div className="inner-container p_relative d_block theme-color-bg b_radius_10 pt_85 pb_75 pl_60 clearfix">
                    <div className="pattern-layer p_absolute l_0 t_0 cta-custom-div" ></div>
                    {/* <figure className="image-box p_absolute t_0 r_0"><img src={cta1} alt=""/></figure> */}
                    <div className="text pull-left">
                        <h2 className="d_block fw_exbold color-white">Professional Website for  <br /> Law Firm?</h2>
                    </div>
                    <div className="btn-box pull-right mt_5">
                        <Link to="/" onClick={() => scrollToSection("contact")} className="theme-btn">Order Now</Link>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- cta-section end --> */}
        </>
    );
}

export default Consultation;