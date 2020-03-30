import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../images/undraw_Login.png';
import styles from './formStyles.module.css';

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false
  });

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
        <form //onSubmit={handleSubmit}
          className='white'
        >
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
            id='password2'
            placeholder='Confirm password'
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
export default Signup;
