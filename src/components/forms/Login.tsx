import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../images/undraw_Login.png';
import styles from './formStyles.module.css';

const Login = () => {
  // const [values, setValues] = useState({
  //   email: '',
  //   password: '',
  //   showPassword: false
  // });

  // const handleChange = e => {
  //   console.log(values);
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
        <form //onSubmit={handleSubmit}
          className='white'
        >
          <h5 className={styles.formHeading}>Login</h5>

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
        </form>
        <small>
          don't have an account?{' '}
          <Link className={styles.link} to='/signup'>
            Register
          </Link>
        </small>
      </div>
    </div>
  );
};

export default Login;
