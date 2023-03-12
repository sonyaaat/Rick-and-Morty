import FacebookLogin from '@greatsumini/react-facebook-login';
import logo from '../../img/logo.png';
import sprite from '../../img/sprite.svg';
import css from '../LoginPage/LoginPage.module.css';
const LoginPage = ({ onLog, fail }) => {
  function responseFacebook(response) {
    if (response.accessToken) {
      onLog(response.accessToken);
    }
  }

  return (
    <>
    
      <img className={css.logo} src={logo} alt="logo" />
      <div className={css.text}>Log into the app with facebook</div>
      <svg className={css.svg}>
                <use href={`${sprite}#icon-arrow-down`} className={css.use}></use>
              </svg>
      <FacebookLogin
        className={css.button}
        appId="3374472702772600"
        onSuccess={responseFacebook}
        onFail={error => {
          console.log(error)
          fail();
        }}
        onProfileSuccess={response => {
          console.log('Get Profile Success!', response);
        }}
      />
    </>
  );
};
export default LoginPage;
