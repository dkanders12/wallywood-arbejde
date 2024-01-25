import React from "react";
import { PosterListComponent } from "../../components/List/list";
import "./Home.scss";
import curtain from "../../assets/Img/curten.png";
import { Footer } from "../../components/Footer/footer";
export const Home = () => {
  return (
    <>
      <header>
        <img src={curtain} alt="" />
      </header>
      <section className="RandomPoster">
        <PosterListComponent></PosterListComponent>
      </section>
      <Footer></Footer>
    </>
  );
};
