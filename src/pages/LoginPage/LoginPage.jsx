
import FacebookLogin from ' @greatsumini/react-facebook-login';
const LoginPage = ({onLog}) => {
  function responseFacebook(response) {
    if(response.accessToken)
    {
    console.log(response.accessToken);
    onLog(response.accessToken)
    }
    // Отримайте токен доступу та інформацію про користувача з об'єкту response
  }

  return (
     <>
     <FacebookLogin
        appId="3374472702772600"
        fields=""
        autoLoad={true}
        callback={responseFacebook}
      />
   <div>Login to my app</div>
   <div>via facebook</div>
   </>
  );
};
export default LoginPage;
