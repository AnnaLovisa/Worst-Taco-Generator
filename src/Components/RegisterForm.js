import React, { Component } from 'react';
import firebase from '../firebase.js';

class RegisterForm extends Component {

    state = {
        password: "",
        email: "",
        userID: "",
        displayName: ""
    }
    //Function that push a new user into Firebase
    handleRegister = (event) => {

        event.preventDefault();

        const newUser = {
            email: this.state.email,
            password: this.state.password,
            userID: this.state.userID
        }
      
          firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
          
          .then(console.log("Created a new user: " + this.state.email))
          .then((user) => {
            
            firebase
              .database()
              .ref(`users`)
              .push(newUser)
            })
            
          .catch(error => console.log(error));
    }

    

    
    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
  
    onSubmit = (email) => {
        this.setState({ [email]: email })
    }

    render(){

        return(
        <div className="registerForm p-4">
            {/*Formulär för att registrera sig*/}
            <form onSubmit={this.handleRegister}>
                <div className="form-group">
                <label htmlFor="email">
                    Email
                </label>
                <input 
                    type="email" 
                    className="form-control" 
                    name="email"
                    onChange={this.onChange}
                    value={this.state.email} />
                </div>
                <div className="form-group">
                <label htmlFor="password">
                    Password
                </label>
                <input 
                    type="password" 
                    className="form-control" 
                    name="password"
                    onChange={this.onChange}
                    value={this.state.password} />
                </div>
                <input  type="submit" 
                        className="registerButton" 
                        value="Register" />
            </form>
        </div>
        );
    }
}

export default RegisterForm;