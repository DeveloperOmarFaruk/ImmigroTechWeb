import React from 'react';

function GoogleMap() {
    return (
        <>
            <section>
                
        <div className="row m-auto w-100">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            {/* <BangladeshOfficeMap /> */}
            <div style={{ width:"100%", height: '400px' }}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d283.0911507940508!2d90.4130198!3d23.8121034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70036f76d97%3A0x8b917cf4ad1c566d!2sWISE%20Corporation!5e1!3m2!1sen!2sbd!4v1731384181289!5m2!1sen!2sbd" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>

    </div>
          </div>

          
        </div>
            </section>
        </>
    );
}

export default GoogleMap;