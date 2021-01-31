import React, { useEffect, useState } from 'react';
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import  "./App.css";
import FeatureMovie from "./components/FeatureMovie";
import Header from "./components/Header";


export default () => {


    const [movieList, setMovieList] = useState([]);

    const [featuredData, setFeaturedData] = useState(null);

    const [blackHeader, setBlackHeader] = useState(false);


    useEffect(() => {

        const loadAll = async () => {

            // Pegando a lista total
            let list = await Tmdb.getHomeList();
            setMovieList(list);
            // console.log(list);

            // Pegando o filme/serie em destaque
            let originals = list.filter(i=>i.slug === "originals");
            let randomChosen = Math.floor(Math.random() * (originals[0].itens.results.length - 1));
            let chosen = originals[0].itens.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
           setFeaturedData(chosenInfo);
        }
        loadAll();

    }, []);


    useEffect(() => {


            const scrollListener = () => {

                if(window.scrollY > 5){

                    setBlackHeader(true);
                    // console.log(blackHeader);
                    // console.log("1000");

                }
                else
                {

                     setBlackHeader(false);
                       // console.log(blackHeader);

                }


            }

                 window.addEventListener("scroll", scrollListener);
                return () => {

                    window.removeEventListener("scroll", scrollListener);

                }
                // scrollListener();




    }, []);

        return(


            <div className = "page" >


                <Header black = {blackHeader} />

                <section  className = "featured-movie">
                    {featuredData &&

                        <FeatureMovie item = {featuredData}/>

                        }

                </section>


                <section className = "lists">
                    {movieList.map((item, key)=>(
                        <div>
                            <MovieRow key = {key} title = {item.title} itens = {item.itens}/>
                        </div>

                    ))}
                </section>


                <footer>

                    Feito com amor por Leonardo Faria de Oliveira Souza por meio de um video da B7Web<br/>
                    Direitos de imagem para Netflix<br/>
                    Dados pegos do site Themoviedb.org
                </footer>


                {movieList.length <= 0 &&

                <div className = "loading">

                    <img className = "rodinha"src ="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt = "Carregando"/>

                </div>
            }

            </div>
        

        );

}