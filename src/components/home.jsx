import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './g1page.webp';

function Home() {
  return (
    <>
      <div id="home-anchor" style={{ position: "relative", top: "-80px" }}></div>
      <div className="container-fluid home px-5 py-4 py-md-5" id="home">
        <div className="row align-items-center gx-5">
          
          {/* Left: Hero Image */}
          <div className="col-md-6 text-center" id="hleft">
            <img
              src={img1}
              alt="Urban Arts"
              className="home-img img-fluid"
              loading="lazy"
            />
          </div>

          {/* Right: Text + Contact Button */}
          <div className="col-md-6 d-flex justify-content-center align-items-center text-center" id="hright">
            <div className="content-box">
              <h1 className="brand-title mt-0 mb-3">URBAN ARTS</h1>
              <p className="tagline">
                At Urban Arts, we craft stunning acrylic logos, neon signs,
                and custom stickers that transform ideas into reality.
                Our designs blend creativity with precision, making every
                piece a bold statement for homes, offices, and businesses.
                From eye-catching signs to elegant branding solutions,
                we create works that inspire and captivate.
                With quality and artistry at the core, we ensure your space
                or brand truly stands out.
              </p>

              <a href="#contact-anchor" className="btn btn-dark home-contact-btn mt-3">
                Contact Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
