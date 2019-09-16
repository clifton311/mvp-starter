import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      IsRegistered: true,
      currentUser: '',
      message: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handlePageView = this.handlePageView.bind(this)
  
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handlePageView(e) {
    e.preventDefault()
    this.props.pageViewChange()
  }

 CompleteRegistration() {
    if (this.state.message === "Success") {
      this.props.IsRegistered()
    }
  }

  handleSubmit(e) {
    e.preventDefault();
     const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      userName: this.state.userName,
      password: this.state.password
     }

     console.log(newUser)
     axios.post('/api/users/new', newUser)
      .then((response) => {
        console.log('response',response)
        this.setState({
          message: "Success"
        })

        this.CompleteRegistration()
    })
    .catch(
      console.log("user not submitted")
    )
  }

  render () {
    return (
      <div>
      <h1 className="register"> Welcome to Recipe Finder!</h1>
        <p>Please Register Below</p>
        
        <form onSubmit={this.handleSubmit}>
          <label>Enter First Name: </label>
          <input type="text" 
            name="firstName" 
            onChange={this.handleChange}
            placeholder="Enter First Name...">
          </input> <br></br>

          <label>Enter Last Name: </label>
          <input type="text" 
            name="lastName" 
            onChange={this.handleChange}
            placeholder="Enter Last Name...">
          </input> <br></br>

          <label>Enter Password:</label>
          <input type="text" 
            name="password" 
            onChange={this.handleChange}
            placeholder="Enter Password...">
          </input> <br></br>

          <label>Enter Username:</label>
          <input type="text" 
            name="userName" 
            onChange={this.handleChange}
            placeholder="Enter Username...">
          </input> <br></br>

          <label>Enter Email:</label>
          <input type="text" 
            name="email" 
            onChange={this.handleChange}
            placeholder="Enter email...">
          </input> <br></br>

          <button style={{
            width: "150px",
            borderRadius: "3px", }}
            type="submit"
            onSubmit={this.handleSubmit}
            >Sign Up
          </button>

        </form>
        
        <br />
			        <p>
			            Already have an account? &nbsp;
			            <Link to={'/login'}>Login</Link>
			        </p>
      </div>
    )
  }
}

export default Register