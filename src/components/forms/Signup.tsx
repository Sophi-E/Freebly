import React, { useCallback } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';

import Config from '../../config';
import loginImg from '../../images/undraw_Login.png';
import styles from './formStyles.module.css';

const Signup: React.FC<RouteComponentProps> = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await Config.auth().createUserWithEmailAndPassword(
          email.value,
          password.value
        );
        history.push('/login');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <div className={styles.container}>
      <img src={loginImg} alt='vector' />

      <div className={styles.formContainer}>
        <form onSubmit={handleSignUp} className={styles.white}>
          <input type='name' id='name' placeholder='Name' />
          <input type='email' id='email' placeholder='Email' />
          <input type='password' id='password' placeholder='Password' />

          <input
            type='password'
            id='password2'
            placeholder='Confirm password'
          />

          <input type='submit' value='Sign Up' />
          <small>
            already have an account?{' '}
            <Link className={styles.link} to='/login'>
              Login
            </Link>
          </small>
        </form>
      </div>
    </div>
  );
};
export default withRouter(Signup);
