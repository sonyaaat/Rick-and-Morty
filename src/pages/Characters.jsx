import { useEffect, useState } from 'react';
import CharactersList from 'components/CharactersList/CharactersList';
import { getAllCharacters } from 'api';
import Spinner from 'components/Spinner/Spinner';
const Characters = ({ search, page, onData }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAllCharacters(search, page)
      .then(res => {
        console.log(res.data.info.count);
        console.log(1, characters);
        console.log(2, res.data.results);

        const inAlphabeticalOrder = res.data.results.sort((first, second) =>
          first.name.localeCompare(second.name)
        );
        onData(page + 1 < res.data.info.pages );
        if (page === 0) {
          setCharacters(inAlphabeticalOrder);
          return;
        }

        setCharacters([...characters, ...inAlphabeticalOrder]);
      })
      .catch(error => {
        setCharacters([])
        onData(false)
      });
  }, [search, page]);
  return (
    <>{characters?
      <CharactersList characters={characters} page={page} />:
     <Spinner/>}
    </>
  );
};
export default Characters;
