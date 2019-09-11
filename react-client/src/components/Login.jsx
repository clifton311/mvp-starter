import React from 'react';
import {Link} from 'react-router-dom'

const Login = props => {
    return (
      <div className="container">

        <h1 className="register"> Welcome to Recipe Finder!</h1>
        <p>If already registered, login in below</p>

        {/* <form onSubmit={props.handleSubmit}> 
          <label>Log In: 
          <input type="text" name="username" placeholder="Enter Username..." onChange={props.handleChange} className="login-input"></input>
          </label> <br></br>

          <label>Password: </label>
          <input type="text" name="password" placeholder="Enter Password..." onChange={props.handleChange} className="login-input"></input>

          <button className="login_button" onClick={props.handleClick}>Login</button>
          <button className="button"> 
                <Link to="/">Return Home</Link>
            </button>
        </form> */}
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" name="username" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" name="password" placeholder="Password"/>
          </div>

          <button className="button"> 
              <Link to="/">Sign In</Link>
          </button>

          <button className="button"> 
              <Link to={{pathname:"/register"}}>Register </Link>
          </button>
      
        </form>

      </div>
    )
  }


export default Login;