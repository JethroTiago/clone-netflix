import React, { useEffect } from "react";
import Tmdb from "./Tmdb";

export default () => {

  useEffect(() => {
    const loadAll = async () => {
      //Taking the total list
      let list = await Tmdb.getHomeList();
      console.log(list);
    }

    loadAll();
  }, []);

  return (
    <div>
      <h1>DeadfliX</h1>
    </div>
  );
}