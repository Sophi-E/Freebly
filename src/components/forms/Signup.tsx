import React, { useCallback } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';

// import Config from '../../config';
import * as FirebaseService from '../../services/firestore'

import styles from './formStyles.module.css';

const Signup: React.FC<RouteComponentProps> = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await FirebaseService.registerViaEmail(
          email.value,
          password.value
        );
        history.push('/login');
      } catch (error) {
        const errorBox = document.getElementById('errorBox');
        console.log(errorBox);
        if (errorBox !== null) {
          errorBox.innerText = error.message;
        }
      }
    },
    [history]
  );
  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSignUp} className={styles.white}>
        <p id='errorBox' className={styles.errorBox}></p>

        <input type='email' id='email' placeholder='Email' required />
        <input type='password' id='password' placeholder='Password' required />
        <input type='submit' value='Sign Up' />
        <small>
          already have an account?{' '}
          <Link className={styles.link} to='/login'>
            Login
          </Link>
        </small>
      </form>
    </div>
  );
};
export default withRouter(Signup);
