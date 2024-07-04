/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import "./Peliculas.css";

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    try {
      const fetchingData = async () => {
        const response = await fetch("https://dragonball-api.com/api/characters");
        const data = await response.json();
        setTimeout(() => {
          console.log(data.items);
          setPeliculas(data.items);
          setLoader(false);
        }, 5000);
      };

      fetchingData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  //  true
  if (loader) {
    return <p>Cargando</p>;
  }

  
  return (
    <Layout>
      <section className="section-peliculas">
        <div>
          <img src="./logo_dragonball.webp" alt="imagen de logo de dbz" />
        </div>
        <h1>The Dragon Ball API</h1>
        
        <article className="personajes">
          {peliculas.map((pelicula) => {
            return (
              <>
                <div className="personaje">
                  <div className="personaje-cont-img">
                    <img
                      src={pelicula.image}
                      alt={pelicula.name}
                    />
                  </div>
                  <div className="personaje-data">
                    <div key={pelicula.id}>
                      <h3>{pelicula.name}</h3>
                        <h4>{pelicula.gender}</h4>
                        <h3>Base KI</h3>
                        <h4>{pelicula.ki}</h4>
                        <h3>Total KI:</h3>
                        <h4>{pelicula.maxKi}</h4>
                        <h3>Afilliation:</h3>
                        <h4>{pelicula.affiliation}</h4>
                      </div>
                  </div>
                </div>
              </>
            );
          })}
        </article>
      </section>
    </Layout>
  );
};

export default Peliculas;
