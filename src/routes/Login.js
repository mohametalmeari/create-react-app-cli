import { useState } from 'react';
import styles from '../styles/Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!username) return;
    // console.log(username);
  };
  return (
    <div>
      <h1>Login</h1>
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="button">Login</button>
        </form>
        <a href="https://ibaslogic.com/routing-with-react-router/#adding-a-login-form">
          continue
        </a>
      </div>
    </div>
  );
};
export default Login;
