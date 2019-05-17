import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }
  
handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
}

handleClick () {
  
}

  render() {
    return (
        <form>

          <label>Log In: 
          <input type="text" name="username" placeholder="Enter Username..." onChange={this.handleChange}></input>
          </label> <br></br>

          <label>Password: </label>
          <input type="text" name="password" placeholder="Enter Password..." onChange={this.handleChange}></input>

          <button onClick={this.handleClick}>Login</button>
        </form>
        
    )
  }
}

export default Login;