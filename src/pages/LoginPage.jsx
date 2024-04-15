import { useContext } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/api';
import { AuthedUserContext } from "../contexts/AuthedUserContext";
 
function LoginPage() {
  const { setUserLogged } = useContext(AuthedUserContext)
  
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      await setUserLogged(data);
    }
  }
 
  return (
    <section className='login-page'>
      <h2>Silakan masuk untuk melanjutkan ...</h2>
      <LoginInput login={onLogin} />
      <p>Belum punya akun? <Link to="/register">Daftar di sini.</Link></p>
    </section>
  );
}

export default LoginPage;