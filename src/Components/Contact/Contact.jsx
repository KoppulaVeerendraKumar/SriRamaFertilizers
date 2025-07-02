import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7d462c6f-9ba9-4eae-a647-30d590b8faf1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
};

  return (
    <div className='contact'  id="Contact us">
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out using the contact form below or through the contact details provided. Your inquiries, feedback, and suggestions are valuable to us as we aim to deliver high-quality agricultural solutions and exceptional service to our farming community.</p>
            <ul>
                <li><img src={mail_icon} alt="" />rayudu.koppula@gmail.com</li>
                <li><img src={phone_icon} alt="" /> +91 9951437772</li>
                <li><img src={location_icon} alt="" />Yerramsettivari palem,P Gannavaram Mandal,konaseema district</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label> Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label> Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your moblie number' required/>
                <label> Write your messages here</label>
                <textarea name="message"   rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now</button> 
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact