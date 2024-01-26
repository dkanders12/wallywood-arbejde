/*import { useState, useEffect } from "react";
import axios from "axios";
import "./Plakat.genre.scss";

export const PlakatGenre = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost:3000/posters";
    const token = "Bearer YOUR_TOKEN";

    const headers = {
      Authorization: token,
    };
    const params = {
      attributes: "name,image",
    };
    axios
      .get(apiUrl, { headers, params })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("error fetching", error);
      });
  }, []);

  return (
    <>
      {data.map((post) => (
        <article key={post.id}>
          <img src={post.image} alt=""></img>
          <h3>{post.name}</h3>
          <a href="">Læg i kurven</a>
        </article>
      ))}
    </>
  );
};*/
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Plakat.genre.scss";

export const PlakatGenre = () => {
  const [data, setData] = useState([]);
  const [selectedGenreId, setSelectedGenreId] = useState(null);

  useEffect(() => {
    const apiUrl = "http://localhost:3000/posters";
    const token = "Bearer YOUR_TOKEN";

    const headers = {
      Authorization: token,
    };
    const params = {
      attributes: "name,image,price",
    };

    axios
      .get(apiUrl, { headers, params })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("error fetching", error);
      });
  }, []);

  const handleGenreChange = (genreId) => {
    setSelectedGenreId(genreId);
  };

  const filteredData = selectedGenreId
    ? data.filter((post) =>
        post.genres.some(
          (genre) => genre.poster_genre_rel.genre_id === selectedGenreId
        )
      )
    : data;

  return (
    <>
      <section className="main">
        <div className="sorter">
          <p>Sorter</p>
          <i class="fa-solid fa-arrow-down"></i>
        </div>
        <div className="sideBar">
          <div>
            <h2 className="big">Plakater</h2>
            <h2>Filtre</h2>
          </div>
          <div className="aContainer">
            <a href="#" onClick={() => handleGenreChange(20)}>
              KarateFilm
            </a>
            <a href="#" onClick={() => handleGenreChange(10)}>
              Disney
            </a>
            <a href="#" onClick={() => handleGenreChange(8)}>
              Westen
            </a>
            <a href="#" onClick={() => handleGenreChange(6)}>
              Komedie
            </a>
            <a href="#" onClick={() => handleGenreChange(13)}>
              Romantik
            </a>
            <a href="#" onClick={() => handleGenreChange(1)}>
              Drama
            </a>
            <a href="#" onClick={() => handleGenreChange(22)}>
              Marvel Og DC
            </a>
            <a href="#" onClick={() => handleGenreChange(9)}>
              Adventure
            </a>
            <a href="#" onClick={() => handleGenreChange(3)}>
              Thriller
            </a>
            <a href="#" onClick={() => handleGenreChange(16)}>
              KrigsFilm
            </a>
            <a href="#" onClick={() => handleGenreChange(2)}>
              Musik
            </a>
            <a href="#" onClick={() => handleGenreChange(12)}>
              Gysere
            </a>
            <a href="#" onClick={() => handleGenreChange(11)}>
              Danske Film
            </a>
            <a href="#" onClick={() => handleGenreChange(4)}>
              Børne - Familiefilm
            </a>
            <a href="#" onClick={() => handleGenreChange(5)}>
              Science Fiction
            </a>
            <a href="#" onClick={() => handleGenreChange(7)}>
              Action
            </a>
          </div>
          <div className="Price">
            <h4>Prisområde</h4>
            <input type="text" placeholder="0" />
            --
            <input type="text" placeholder="3800" />
            kr.
          </div>
        </div>
        <div className="sellList">
          {filteredData.map((post) => (
            <article className="posterContainer" key={post.id}>
              <img src={post.image} alt={post.name} />
              <h3 className="posterName">{post.name}</h3>
              <p>{post.price}kr.</p>
              <a className="button" href="">
                Læg i kurven
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
