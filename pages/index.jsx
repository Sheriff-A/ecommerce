import React from "react";

import { Product, HeroBanner, FooterBanner } from "../components"

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Product</h2>
        <p>Speakers of Many Variations</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2"].map((product) => {
          return product;
        })}
      </div>
      <FooterBanner />
    </>
  );
};

export default Home;
