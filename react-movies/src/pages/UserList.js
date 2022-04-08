import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";

const UserList = () => {
  const [ListData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=abb890a85ed39e8f7c4bb5b3442e44a6&language=fr-FR`
        )
        .then((res) => setListData((ListData) => [...ListData, res.data]));
    }
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h1>
        Coup de coeur <span>💖</span>
        <div className="result">
          {ListData.length > 0 ? (
            ListData.map((movie) => <Card movie={movie} key={movie.id} />)
          ) : (
            <h2>Aucun coup de coeur pour le moment</h2>
          )}
        </div>
      </h1>
    </div>
  );
};

export default UserList;
