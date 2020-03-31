import React, { useState, useCallback } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';

import Config from '../../config';
import loginImg from '../../images/undraw_Login.png';
import styles from './formStyles.module.css';
import { configure } from '@testing-library/react';

const Signup: React.FC<RouteComponentProps> = ({ history }) => {
  const handleSignUp = useCallback(
    async event => {
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
  // const [values, setValues] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  //   showPassword: false
  // });

  // const handleChange = e => {
  //   setValues({ ...values, [e.target.id]: e.target.value });
  // };

  // // const handleClickShowPassword = () => {
  // //   setValues({ ...values, showPassword: !values.showPassword });
  // // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(values);
  // };
  return (
    <div className={styles.container}>
      <img src={loginImg} alt='vector' />

      <div className={styles.formContainer}>
        <form onSubmit={handleSignUp} className='white'>
          <input
            type='name'
            id='name'
            placeholder='Name'
            // value={values.email}
            // onChange={handleChange}
          />
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

          <input
            type='password'
            id='password2'
            placeholder='Confirm password'
            // value={values.email}
            // onChange={handleChange}
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
