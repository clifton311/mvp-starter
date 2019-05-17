import React from 'react';
import Link from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: {}
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
  }
//  const newUser = {
//     username: this.state.username,
//     email: this.state.email,
//     password: this.state.password
//  }

  render () {
    return (
      <div>
        {/* <div>
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
        </div> */}

        <h1 className="register">Register Here</h1>
        
        <form onSubmit={this.onSubmit}>
        
          <label>Enter Email:</label>
          <input type="text" 
            name="email" 
            onChange={this.handleChange}
            placeholder="Enter email..."></input><br></br>

          <label>Enter Password:</label>
          <input type="text" 
            name="password" 
            onChange={this.handleChange}
            placeholder="Enter Password..."></input><br></br>

          <label>Enter Age:</label>
          <input type="text" 
            name="age" 
            onChange={this.handleChange}
            placeholder="Enter Age..."></input><br></br>

          <button style={{
            width: "150px",
            borderRadius: "3px",
            }}
            type="submit"
            > Sign Up
          </button>

        </form>

      </div>
    )
  }
}

export default Register