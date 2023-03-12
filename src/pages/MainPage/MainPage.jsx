import Characters from '../Characters';
import css from '../MainPage/MainPage.module.css';
import logo from '../../img/logo.png';
import sprite from '../../img/sprite.svg';
import { useEffect, useState } from 'react';
import LoginPage from 'pages/LoginPage/LoginPage';
const MainPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('loggedIn') === true ? true:false);
  const [search, setSearch] = useState(
    localStorage.getItem('search') ? localStorage.getItem('search') : ''
  );
  const [page, setPage] = useState(1);
  const [showMore, setShowMore] = useState();
  const onChange = evt => {
    setSearch(evt.target.value);
    localStorage.setItem('search', evt.target.value);
  };
  const onIncrement = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    setPage(0);
  }, [search]);

  const handleData = data => {
    setShowMore(data);
  };
  const onLog=(token)=>{
    setIsLoggedIn(true)
    localStorage.setItem("loggedIn", true);
  }
  const logOut=()=>{
    setIsLoggedIn(false)
    localStorage.setItem("loggedIn", false);
  }
  return (
    <div className="container">
      {!isLoggedIn ? (
        <LoginPage onLog={onLog} fail={logOut}/>
      ) : (
        <div>
          <button className={css.logout} onClick={logOut}>Log out</button>
          <img className={css.logo} src={logo} alt="logo" />
          <div className={css.input__box}>
            <input
              className={css.input}
              placeholder="Filter by name..."
              type="text"
              value={search}
              onChange={onChange}
            />
            <button className={css.search__btn}>
              <svg className={css.svg}>
                <use href={`${sprite}#icon-find`} className={css.use}></use>
              </svg>
            </button>
          </div>
          <Characters search={search} page={page} onData={handleData} />
          {showMore && (
            <button onClick={onIncrement} className={css.load}>
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};
export default MainPage;
