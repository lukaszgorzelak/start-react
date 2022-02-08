import './contact.scss';
import Divider from '../divider/Divider';
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

const Contact = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false)
   
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_1x82wdh",
          "template_09ojk3h",
          formRef.current,
          "user_MQSFaVgvjnuPJXvtCZ5EW"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true)
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

    if(done){
        return (
            <div className="success">
                <h3 className="success__heading">Send Message</h3>
                <i className="fas fa-check-circle"></i>
            </div>
        )
    }else {
        return (
       
            <>
                <div className="contact">
                    <h2 id="contact" className="contact__heading">Contact Me</h2>
                    <Divider line="divider__dark" star="star__dark"/>
                    <form id="contact__form" ref={formRef} onSubmit={handleSubmit}>
                        <div className="contact__item name">
                            <input id="name" type="text" name="name" required></input>
                            <label htmlFor="name">Full Name</label>
                        </div>
                        <div className="contact__item email">
                            <input id="email" type="email" name="email" required></input>
                            <label htmlFor="email">Email adress</label>
                        </div>
                        <div className="contact__item phone">
                            <input id="phone" type="number" name="phone" required></input>
                            <label htmlFor="phone">Phone Number</label>
                        </div>
                        <div className="contact__item message">
                           <textarea name="message" id="message" required></textarea>
                            <label htmlFor="message">Message</label>
                        </div>
                        <button className="contact__btn" id="submitButton" type="submit">Send</button>
                    </form>
                </div>
            </>
        );
    }

    
  };
  
  export default Contact;