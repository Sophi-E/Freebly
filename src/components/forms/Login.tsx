import React, { useState } from 'react';

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
    <div className='container'>
      <form //onSubmit={handleSubmit}
        className='white'
      >
        <h5 className='grey-text text-darken-3'>Sign In</h5>
        <div className='input-field'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            // value={values.email}
            // onChange={handleChange}
          />
        </div>

        <div className='input-field'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            // value={values.password}
            // onChange={handleChange}
          />
        </div>
        <div className='input-field'>
          <button className='btn pink lighten-1 z-depth-0'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
