import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Sample Images
import neon1 from "./g2page.jpg";
import neon2 from "./g3page.jpg";
import neon3 from "./g7page.jpg";
import neon4 from "./g6page.jpg";

import acrylic1 from "./g1page.jpg";
import acrylic2 from "./g9page.jpg";
import acrylic3 from "./g11.jpg";
import acrylic4 from "./g12.jpg";

import name1 from "./g13.jpg";
import name2 from "./g14.jpg";
import name3 from "./g22.jpg";
import name4 from "./g16.jpg";

import best1 from "./s1.jpg";
import best2 from "./s2.jpg";
import best3 from "./s3.jpg";
import best4 from "./s4.jpg";

function Recent() {
  const collections = {
    "Neon Signs": [
      { img: neon1, price: 3250 },
      { img: neon2, price: 3300 },
      { img: neon3, price: 3450 },
      { img: neon4, price: 3350 },
    ],
    "Acrylic Logos": [
      { img: acrylic1, price: 3400 },
      { img: acrylic2, price: 3350 },
      { img: acrylic3, price: 3500 },
      { img: acrylic4, price: 3280 },
    ],
    "Name Plates": [
      { img: name1, price: 3320 },
      { img: name2, price: 3450 },
      { img: name3, price: 3390 },
      { img: name4, price: 3270 },
    ],
    "Stickers": [
      { img: best1, price: 120 },
      { img: best2, price: 99 },
      { img: best3, price: 125 },
      { img: best4, price: 150 },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("Neon Signs");

  return (
    <>
      <div id="recent-anchor" style={{ position: "relative", top: "-80px" }}></div>
      <section className="recent container-fluid py-4 py-md-5" id="recent">
        <div className="container">
          <div className="row mb-5 text-center">
            <div className="col-12">
              <h2 className="section-title mt-0 mb-3 fade-in">Our Collections</h2>
              <p className="section-subtitle">
                Explore our stunning range of custom creations
              </p>
            </div>
          </div>

          <div className="row mb-4 justify-content-center">
            {Object.keys(collections).map((category) => (
              <div className="col-6 col-md-3 text-center mb-3" key={category}>
                <button
                  className={`category-btn ${activeCategory === category ? "active" : ""}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              </div>
            ))}
          </div>

          <div className="row g-4">
            {collections[activeCategory].map((item, index) => (
              <div className="col-6 col-md-3 text-center" key={index}>
                <div className="image-card">
                  <img src={item.img} alt={activeCategory} className="img-fluid" />
                </div>
                <div className="price-tag">₹{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Recent;
