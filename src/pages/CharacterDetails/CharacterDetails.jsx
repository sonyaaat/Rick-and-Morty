import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner';
import axios from 'axios';
import sprite from "../../img/sprite.svg"
import css from '../CharacterDetails/CharacterDetails.module.css';
const CharacterDetails = () => {
  const [character, setCharacter] = useState();
  const { id } = useParams();
  const location = useLocation();
  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      console.log(data);
      setCharacter(data.data);
    };
    fetch();
  }, [id]);
  const backLink = location.state?.from ?? '/';
  return (
    <div className="container" >
      <Link to={backLink} className={css.back}>
      <svg className={css.svg}>
          <use href={`${sprite}#icon-back`} className={css.use}></use>
        </svg>
        Go back
      </Link>
      {character ? (
        <div className={css.wrapper}>
          <img className={css.img} src={character.image} alt="Avatar" />
          <h1 className={css.name}>{character.name}</h1>
          <h2 className={css.info}>Informations</h2>
          <div className={css.box}>
          <h3 className={css.title}>Gender</h3>
          <p className={css.data}>{character.gender}</p>
          </div>
          <div className={css.box}>
          <h3 className={css.title}>Status</h3>
          <p className={css.data}>{character.status}</p>
          </div>
          <div className={css.box}>
          <h3 className={css.title}>Specie</h3>
          <p className={css.data}>{character.species}</p>
          </div>
          <div className={css.box}>
          <h3 className={css.title}>Origin</h3>
          <p className={css.data}>{character.origin.name}</p>
          </div>
          <div className={css.box}>
          <h3 className={css.title}>Type</h3>
          <p className={css.data}>{character.type ? character.type : 'Unknown'}</p>
          </div>
        </div> 
      ):
      <Spinner/>}
    </div>
  );
};
export default CharacterDetails;
