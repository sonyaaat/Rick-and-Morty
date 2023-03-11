import axios from 'axios';
export const getAllCharacters=async(search,page)=>{
    const data = await axios.get(`https://rickandmortyapi.com/api/character/?name=${search}&page=${page}`);
    return data
}
