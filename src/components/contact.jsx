import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaStoreAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <div id="contact-anchor" style={{ position: "relative", top: "-80px" }}></div>
      <section className="contact container-fluid py-4 py-md-5" id="contact">
        <div className="container text-center">
          <div className="mb-5">
            <h2 className="contact-title mt-0 mb-3">Contact Us</h2>
            <p className="contact-subtitle">
              We'd love to hear from you! Reach out to us below 👇
            </p>
          </div>

          <div className="row mb-4 justify-content-center">
            <div className="col-auto d-flex align-items-center">
              <FaStoreAlt className="contact-icon text-danger me-2" />
              <h3 className="shop-name mb-0">URBAN ARTS</h3>
            </div>
          </div>

          <div className="row contact-info-row bg-white rounded shadow-sm text-center py-4">
            <div className="col-md-3 border-end py-3">
              <a
                href="https://www.google.com/maps/place/Sector+123,+Mohali"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link d-flex flex-column align-items-center"
              >
                <FaMapMarkerAlt className="contact-icon text-danger" />
                <h5 className="contact-heading mt-2">Address</h5>
                <p className="contact-text mb-0">Sector 123, Mohali</p>
              </a>
            </div>

            <div className="col-md-3 border-end py-3">
              <a href="tel:+917528859854" className="contact-link d-flex flex-column align-items-center">
                <FaPhoneAlt className="contact-icon text-danger" />
                <h5 className="contact-heading mt-2">Phone</h5>
                <span className="contact-text">+91 75288 59854</span>
              </a>
            </div>

            <div className="col-md-3 border-end py-3">
              <a href="mailto:urbanarts04@gmail.com" className="contact-link d-flex flex-column align-items-center">
                <FaEnvelope className="contact-icon text-danger" />
                <h5 className="contact-heading mt-2">Email</h5>
                <span className="contact-text">urbanarts04@gmail.com</span>
              </a>
            </div>

            <div className="col-md-3 py-3">
              <a
                href="https://instagram.com/urbanarts2025"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link d-flex flex-column align-items-center"
              >
                <FaInstagram className="contact-icon text-danger" />
                <h5 className="contact-heading mt-2">Instagram</h5>
                <span className="contact-text">@urbanarts2025</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
