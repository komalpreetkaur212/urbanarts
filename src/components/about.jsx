import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import imga from "./g9page.jpg";

function About() {
  return (
    <>
      <div id="about-anchor" style={{ position: "relative", top: "-80px" }}></div>
      <section className="about container-fluid py-4 py-md-5" id="about">
        <div className="container about-wrapper">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="about-title mt-0 mb-3 fancy-underline">About us</h2>
              <h6>The urban arts journey</h6>
            </div>
          </div>

          <div className="row align-items-center mt-5">
            {/* Left: Image */}
            <div className="col-lg-6 about-image-col">
              <div className="about-image-frame">
                <img
                  src={imga}
                  alt="Urban Arts"
                  className="img-fluid about-img-new"
                />
                <span className="about-image-glow"></span>
              </div>
            </div>

            {/* Right: Text + Explore Button */}
            <div className="col-lg-6 about-text-col mt-4 mt-lg-0">
              <div className="about-card text-center">
                <p>
                  At <strong>Urban Arts</strong>, design speaks louder than words.
                  We craft premium <strong>acrylic logos</strong>, vibrant
                  <strong> neon signs</strong>, and unique <strong>stickers</strong>
                  that bring personality and identity to any space.
                </p>
                <p>
                  From sleek corporate branding to eye-catching décor,
                  our work blends creativity with high-quality materials
                  to create lasting impressions.
                </p>
                <p className="tagline-quote">
                  ✨ Design that lasts. Glow that inspires. Art that speaks —
                  <strong> Urban Arts</strong>.
                </p>

                <a href="#recent-anchor" className="btn btn-dark explore-btn mt-3">
                  Explore Our Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
