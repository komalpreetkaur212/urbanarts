import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import imglogo from "./logo.jpg";

function Navbar() {
  useEffect(() => {
    const bsCollapseEl = document.getElementById("navbarNav");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    if (!bsCollapseEl || !window.bootstrap) return;

    const collapseInstance = new window.bootstrap.Collapse(bsCollapseEl, { toggle: false });

    const handleLinkClick = () => {
      if (bsCollapseEl.classList.contains("show")) {
        collapseInstance.hide();
      }
    };

    navLinks.forEach(link => link.addEventListener("click", handleLinkClick));

    return () => {
      navLinks.forEach(link => link.removeEventListener("click", handleLinkClick));
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home-anchor">
          <img src={imglogo} alt="Urban Arts Logo" className="logo-img" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item"><a className="nav-link" href="#home-anchor">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about-anchor">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#recent-anchor">Collections</a></li>
            <li className="nav-item"><a className="nav-link" href="#work-anchor">Work</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact-anchor">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
