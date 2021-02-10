import react,{useState} from 'react';
import {CognitoUserPool} from 'amazon-cognito-identity-js';
import { Auth } from "aws-amplify";

/*async function handleSubmit(event) {
  event.preventDefault();

  setIsLoading(true);

  try {
    const newUser = await Auth.signUp({
      username: fields.email,
      password: fields.password,
    });
    setIsLoading(false);
    setNewUser(newUser);
  } catch (e) {
    onError(e);
    setIsLoading(false);
  }
}*/
export default () => {
  const [email,setEmail]=useState('');

  const [password,setPassword]=useState('');

  const poolData={
    UserPoolId:'us-east-1_8h3I471aU',
    ClientId:'3nijek4uc0pl7encq4ibg1g9rg'
  };  

  const UserPool = new CognitoUserPool(poolData);

  const onSubmit = event => {
    event.preventDefault();
    UserPool.signUp(email,password,[],null,(err,data)=>{
      if(err) console.error(err);
      console.log(data);
    });
  };
  return(
    <div>
      <form onSubmit={onSubmit}>
        <input
        value={email}
        onChange={event=>setEmail(event.target.value)}
        />
        <input
        value={password}
        onChange={event=>setPassword(event.target.value)}
        />
        <button type='submit'>Signup</button>
      </form>
    </div>
  )
}


/*import react from 'react';
import {GoogleLogin} from 'react-google-login';


function App() {
  return (
    <div class="g-signin2" data-onsuccess="onSignIn">
      <button type="submit">Signin</button>
    </div>
  );
}
export default App;*/
