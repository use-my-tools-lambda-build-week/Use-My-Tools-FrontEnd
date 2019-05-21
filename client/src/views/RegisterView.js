import React from 'react';

const RegisterView = props => {
  return (
    <div>
      <form onSubmit={props.registerHandler}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={props.username}
          onChange={props.changeHandler}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={props.password}
          onChange={props.changeHandler}
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={props.email}
          onChange={props.changeHandler}
          required
        />
        <div>
          <button
            type='submit'
            onClick={props.registerHandler}
          >Log In</button>
          <button
            type='button'
            onClick={props.displayLogin}
          >Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterView;