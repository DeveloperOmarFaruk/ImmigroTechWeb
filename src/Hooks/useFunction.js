import React, {  useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";


const useFunctions = () => {

  const [phone, setPhone] = useState("");
  
const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget:"",
    service_seo:"",
    service_web:"",
    service_content:"",
    service_amazon:"",
    service_link:"",
    service_ppc:"",
    service_cro:"",
    service_video:"",
    service_email:"",
    service_social:"",
    service_reviews:"",
    service_hosting:"",
    service_ada:"",
    service_ecommerce:"",
    message:"",
})

const service_id = process.env.REACT_APP_SERVICE_ID;
const template_id = process.env.REACT_APP_TEMPLATE_ID;
const public_key = process.env.REACT_APP_PUBLIC_KEY;

  // Scroll Section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const sendEmailData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        budget: formData.budget,
        phone: phone,
        service_seo: formData.service_seo,
        service_web: formData.service_web,
        service_content: formData.service_content,
        service_amazon: formData.service_amazon,
        service_link: formData.service_link,
        service_ppc: formData.service_ppc,
        service_cro: formData.service_cro,
        service_video: formData.service_video,
        service_email: formData.service_email,
        service_social: formData.service_social,
        service_reviews: formData.service_reviews,
        service_hosting: formData.service_hosting,
        service_ada: formData.service_ada,
        service_ecommerce: formData.service_ecommerce,
        message: formData.message,
    }

    emailjs
    .send(
      service_id, // Replace with your EmailJS Service ID
      template_id, // Replace with your EmailJS Template ID
      sendEmailData, // Form Data Send EmailJS
      public_key // Replace with your EmailJS Public Key
    )
    .then(
      (result) => {
      
       if(result){
        toast.success("Submited Successful");
        handleRefresh();
       }
     
      },
      (error) => {
      if(error){
        toast.error("Submit Not Successful!");
      }
        
      }
    );

  };

  const handleRefresh = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      budget:"",
      service_seo:"",
      service_web:"",
      service_content:"",
      service_amazon:"",
      service_link:"",
      service_ppc:"",
      service_cro:"",
      service_video:"",
      service_email:"",
      service_social:"",
      service_reviews:"",
      service_hosting:"",
      service_ada:"",
      service_ecommerce:"",
      message:"",
  });
  setPhone("");
  window.location.reload();
  };

  
    return {
        phone, 
        setPhone,
        handleChange,
        sendEmail,
        scrollToSection  
    };
  };
  
  export default useFunctions;