import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { Link, RouteComponentProps } from 'react-router-dom';
import * as FirebaseService from '../../services/firestore';

import styles from './formStyles.module.css';
import { AuthContext } from '../Auth';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  // const handleLogin = useCallback(
  //   async (event) => {
  //     event.preventDefault();
  //     const { email, password } = event.target.elements;
  //     try {
  //       await FirebaseService.signInViaEmail(
  //         email.value,
  //         password.value
  //       );
  //       history.push('/dashboard');
  //     } catch (error) {
  //       const errorBox = document.getElementById('errorBox');
  //       console.log(errorBox);
  //       if (errorBox !== null) {
  //         errorBox.innerText = error.message;
  //       }
  //     }
  //   },
  //   [history]
  // );

  // const { currentUser } = useContext(AuthContext);
  // // console.log(currentUser);
  // if (currentUser) {
  //   return <Redirect to='/dashboard' />;
  // }

  return (
    <div className={styles.formContainer}>
      {/* <form onSubmit={handleLogin} className={styles.white}>
        <p id='errorBox' className={styles.errorBox}></p>
        <input
          type='email'
          id='email'
          placeholder='Email'
          required
          // value={values.email}
          // onChange={handleChange}
        />

        <input
          type='password'
          id='password'
          placeholder='Password'
          required
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
      </form> */}
    </div>
  );
};

export default withRouter(Login);
