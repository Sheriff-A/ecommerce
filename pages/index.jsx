import React from "react";

import { client } from "../lib/client";
import { Product, HeroBanner, FooterBanner } from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
      <div className="products-heading">
        <h2>Best Selling Product</h2>
        <p>Speakers of Many Variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]'; // Grab all products from sanity
  const products = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]'; // Grab all banners from sanity
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
};

export default Home;
