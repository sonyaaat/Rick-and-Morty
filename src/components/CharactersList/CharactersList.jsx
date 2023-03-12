import css from '../CharactersList/CharactersList.module.css';
import { Link } from 'react-router-dom';
const CharactersList = ({ characters }) => {
  return (
    <ul className={css.list}>
      {characters && characters.length>0?
        characters.map(character => (
          <Link to={`${character.id}`}>
            <li key={character.image}>
              <div className={css.box}>
                <img
                  alt={character.image}
                  className={css.image}
                  src={character.image}
                />
                <p className={css.name}>{character.name}</p>
                <p className={css.species}>{character.species}</p>
              </div>
            </li>
          </Link>
        ) ) : 

        <div className={css.not__found}>There isn`t any character by this name</div>}
    </ul>
  );
};
export default CharactersList;
