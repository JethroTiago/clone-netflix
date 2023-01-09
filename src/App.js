import React, { useEffect, useState } from "react";
import './App.css';
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //Taking the total list
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Taking the featured
      let toprated = list.filter(i=>i.slug === 'toprated');
      let randomChosen = Math.floor(Math.random() * (toprated[0].items.results.length -1));
      let chosen = toprated[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

}, []);

  return (
    <div className="page">

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item ={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Criado por <a href="https://github.com/JethroTiago">Jethro Tiago</a>, sob orientação do instrutor <a href="https://www.youtube.com/@bonieky">Bonieky Lacerda</a>.<br/>
        Direitos de imagem para <a href="https://www.netflix.com/br/">Netflix</a>.<br/>
        Dados obtidos do site <a href="https://www.themoviedb.org/">TMDB</a>.
      </footer>

      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://i.gifer.com/8Etj.gif" alt="Carregando" />
        </div>
      }
    </div>
  );
}