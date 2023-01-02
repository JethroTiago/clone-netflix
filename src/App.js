import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //Taking the total list
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <div>
      <h1>DeadfliX</h1>
    </div>
  );
}