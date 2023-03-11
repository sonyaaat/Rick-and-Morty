
import FacebookLogin from '@greatsumini/react-facebook-login';
const LoginPage = ({onLog,fail}) => {
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
        onSuccess={responseFacebook}
        onFail={(error) => {
          console.log('Login Failed!', error);
        }}
        onProfileSuccess={(response) => {
          console.log('Get Profile Success!', response);
          fail()
        }}
      />
   <div>Login to my app</div>
   <div>via facebook</div>
   </>
  );
};
export default LoginPage;
