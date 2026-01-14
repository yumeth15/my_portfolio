import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="yumeth595@gmail.com" data-cursor="disable">
                yumeth595@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+94758678728" data-cursor="disable">
                +94 75 867 8728
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/yumeth15"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/yumethnethdula/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>          
          </div>
          <div className="contact-box">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
