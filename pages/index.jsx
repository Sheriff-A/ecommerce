import React from "react";

const Home = () => {
  return (
    <>
      HeroBanner
      <div className="products-heading">
        <h2>Best Selling Product</h2>
        <p>Speakers of Many Variations</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2"].map((product) => {
          return product;
        })}
      </div>
      Footer
    </>
  );
};

export default Home;
