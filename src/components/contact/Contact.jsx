import { useState, useRef  } from "react";
import "./contact.scss"
import emailjs from "emailjs-com";

export default function Contact() {
    const [message, setMessage] = useState(false);
    const form = useRef();
    const handleSubmit = (e) => {
      e.preventDefault();
      
      emailjs.sendForm('gmailMessage', 'template_46fuucl', form.current, 'user_vJdh5LwlnpZVsIYspQ3SN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setMessage(true);
      e.target.reset()
    }
    return (
        <div className="contact" id="contact">
          <div className="left">
            <img src="assets/contact.jpeg" alt="" />
          </div>
          <div className="right">
            <h2>Contato</h2>
            <form ref={form} onSubmit={handleSubmit} >
              <input type="text" name="email" placeholder="Email"/>
              <textarea name="message" placeholder="Mensagem"></textarea>
              <button type="submit">Enviar</button>
              {message && <span>Obrigado pelo contato!</span>}
            </form>
          </div>
        </div>
    )
}
