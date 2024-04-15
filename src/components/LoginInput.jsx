import { useContext } from "react";
import { login } from "../utils/api";
import { AuthedUserContext } from "../contexts/AuthedUserContext";
import useInput from "../hooks/useInput";
 
function LoginInput() {
  const { setUserLogged } = useContext(AuthedUserContext);

  const [email, onEmailChangeHandler] = useInput("")
  const [password, onPasswordChangeHandler] = useInput("")
  
  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
      const { error, data } = await login({ email, password });

      if (!error) {
        setUserLogged(data);
      } else {
        console.error("Login failed:", error.message);
        // Handle error (e.g., show error message to the user)
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      // Handle unexpected errors
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='login-input'>
      <input type="email" placeholder='Email' value={email} onChange={onEmailChangeHandler} />
      <input type="password" placeholder='Password' value={password} onChange={onPasswordChangeHandler} />
      <button>Masuk</button>
    </form>
  );
}
 
export default LoginInput;