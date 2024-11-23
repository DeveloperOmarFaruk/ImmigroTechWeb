import React, { useState } from "react";
import "./GetProposal.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import useFunctions from "../../Hooks/useFunction";


const GetProposal = () => {
  
  const{phone, setPhone, handleChange, sendEmail} = useFunctions();
  return (
    <>
      {/* <!-- contact-section --> */}
      <section className="contact-section p_relative pt_120 pb_120">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <div className="sec-title p_relative d_block mb_40">
                  <span className="p_relative d_block fs_14 lh_20 fw_sbold theme-color mb_7">
                    how we can help
                  </span>
                  <h2 className="p_relative d_block lh_55 fw_exbold">
                  Get Your Complimentary Web Design Proposal
                  </h2>
                </div>
                <div className="form-inner">
                  <form
                    
                   onSubmit={sendEmail}
                    id="contact-form"
                    className="default-form"
                  >
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group mb_20">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group mb_20">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 form-group mb_20">
                        <input
                          type="text"
                          name="company"
                          placeholder="Company Name"
                          required
                          onChange={handleChange}
                        />
                      </div>

                      
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group mb_20">
                        <input
                          type="number"
                          name="budget"
                          placeholder="Budget $"
                          required
                          onChange={handleChange}
                        />
                      </div>

                      <div classNameName="mb-3 col-lg-6 col-md-6 col-sm-12 form-group mb_20">
                <PhoneInput
                  country={"us"}
                  enableSearch={true}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                />
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12 form-group mb_20">
                     <h6 className="mt-4">What services can we provide you?</h6>
                   <div className="row">

                 <div className="col-lg-6 col-md-6 col-sm-12">
                 <div>
                     <input type="checkbox" name="service_seo" value="✅" onChange={handleChange}/>
                     <label for="vehicle1" className="ml-3 mt-3">   Optimization (SEO)</label>
                     </div>

                     <div>
                     <input type="checkbox" name="service_web" value="✅" onChange={handleChange}/>
                     <label for="vehicle1" className="ml-3">   Web Design</label>
                     </div>


                     <div>
                     <input type="checkbox" name="service_content" value="✅" onChange={handleChange}/>
                     <label for="vehicle1" className="ml-3">   Content Writing</label>
                     </div>


                     <div>
                     <input type="checkbox" name="service_amazon" value="✅" onChange={handleChange}/>
                     <label for="vehicle1" className="ml-3">   Amazon Marketing</label>
                     </div>


                     <div>
                     <input type="checkbox" name="service_link" value="✅" onChange={handleChange}/>
                     <label for="vehicle1" className="ml-3">   Link Building</label>
                     </div>


                     <div>
                     <input type="checkbox" name="service_ppc" value="✅" onChange={handleChange}/>
                     <label for="vehicle1" className="ml-3">   Pay Per Click (PPC)</label>
                     </div>


                     <div>
                     <input type="checkbox" name="service_cro" value="✅" onChange={handleChange}/>
                     <label for="vehicle1" className="ml-3">  Conversion Rate Optimization (CRO)</label>
                     </div>
                 </div>


                 <div className="col-lg-6 col-md-6 col-sm-12">
                 <div>
                     <input type="checkbox" name="service_video" value="✅" onChange={handleChange}/>
                     <label for="vehicle1" className="ml-3 mt-3">  Photography / Video</label>
                     </div>

                     <div>
                     <input type="checkbox" name="service_email" value="✅" onChange={handleChange}/>
                     <label for="vehicle1" className="ml-3">  Email Marketing</label>
                     </div>


                     <div>
                     <input type="checkbox" name="service_social" value="✅" onChange={handleChange}/>
                     <label for="vehicle1" className="ml-3">   Social Media</label>
                     </div>


                     <div>
                     <input type="checkbox" name="service_reviews" value="✅" onChange={handleChange}/>
                     <label for="vehicle1" className="ml-3">   Reputation / Reviews Management</label>
                     </div>


                     <div>
                     <input type="checkbox" name="service_hosting" value="✅" onChange={handleChange}/>
                     <label for="vehicle1" className="ml-3">   Web Hosting / Maintenance</label>
                     </div>


                     <div>
                     <input type="checkbox" name="service_ada" value="✅" onChange={handleChange}/>
                     <label for="vehicle1" className="ml-3">  ADA Compliance</label>
                     </div>


                     <div>
                     <input type="checkbox" name="service_ecommerce" value="✅" onChange={handleChange}/>
                     <label for="vehicle1" className="ml-3">  eCommerce Optimization</label>
                     </div>
                 </div>


                   </div>
                      </div>


                      <div className="col-lg-12 col-md-12 col-sm-12 form-group mb_20">
                        <textarea
                          name="message"
                          placeholder="Message"
                          required
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn mr-0">
                        <button
                          className="theme-btn btn-one"
                          type="submit"
                         
                        >
                          <span>Submit</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- contact-section end --> */}

    </>
  );
};

export default GetProposal;
