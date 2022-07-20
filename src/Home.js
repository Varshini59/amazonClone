import React from "react";
import "./Home.css";
import Header from "./Header.js";
import Product from "./Product";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="The Immortals of Meluha"
            price={30.5}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/8181LdPn39L.jpg"
          />
          <Product
            title="The Immortals of Meluha"
            price={30.5}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/8181LdPn39L.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="The Immortals of Meluha"
            price={30.5}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/8181LdPn39L.jpg"
          />
          <Product
            title="The Immortals of Meluha"
            price={30.5}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/8181LdPn39L.jpg"
          />
          <Product
            title="The Immortals of Meluha"
            price={30.5}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/8181LdPn39L.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="The Immortals of Meluha"
            price={30.5}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/8181LdPn39L.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
