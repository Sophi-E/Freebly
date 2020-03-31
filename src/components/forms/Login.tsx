import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { Link, RouteComponentProps } from 'react-router-dom';
import Config from '../../config';
import loginImg from '../../images/undraw_Login.png';
import styles from './formStyles.module.css';
import { AuthContext } from '../Auth';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await Config.auth().signInWithEmailAndPassword(
          email.value,
          password.value
        );
        history.push('/dashboard');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/dashboard' />;
  }

  // // const handleClickShowPassword = () => {
  // //   setValues({ ...values, showPassword: !values.showPassword });
  // // };

  return (
    <div className={styles.container}>
      <img src={loginImg} alt='vector' />

      <div className={styles.formContainer}>
        <form onSubmit={handleLogin} className='white'>
          <input
            type='email'
            id='email'
            placeholder='Email'
            // value={values.email}
            // onChange={handleChange}
          />

          <input
            type='password'
            id='password'
            placeholder='Password'
            // value={values.password}
            // onChange={handleChange}
          />

          <input type='submit' value='Login' />
          <small>
            don't have an account?{' '}
            <Link className={styles.link} to='/signup'>
              Register
            </Link>
          </small>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);
