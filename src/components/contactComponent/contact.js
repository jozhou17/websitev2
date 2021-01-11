import React from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_cdav0sn','template_k4jralr', e.target, 'user_yRnXSGqjOeM1fwuZ8CGFW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
}
function Contact(){
    return(
        <>
        <div className = 'contactContainer' id = 'contactID'>
            <header className = 'contactTitleContainer'>
                <h1 className = 'contactTitle'>Contact Me</h1>
            </header>
            <div className = 'contactContent'>
                <form onSubmit = {sendEmail}>
                    <div className = 'inputFields'>
                        <input type="text" name = 'name' className = 'name' placeholder = 'Name'/>
                        <input type="email" name = 'email' className = 'email' placeholder = 'Email' />
                        <textarea className = 'content' name = 'message'placeholder = 'Your Message'></textarea>
                    </div>
                    <div className = 'submitContainer'>
                        <input type = 'submit' value = 'Submit' className = 'submitButton'/>
                    </div>
                </form>
            </div>
        </div>
        </>
        
    )
}

export default Contact;