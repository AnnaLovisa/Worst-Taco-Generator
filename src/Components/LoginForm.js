import React, { Component } from 'react';
import firebase from '../firebase.js';

class LoginForm extends Component {

    state = {
        email: "",
        password: ""
        /*user: ""*/
    }

    /*signInWithGoogle = (event) => {
        event.preventDefault();
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result)=> {
        const user = result.user;
        firebase.database().ref(`users/${user.uid}`).set({ email: user.email, uid: user.uid})
        }).catch(error => {
          this.setState({hasError: true})
          this.setState({error: error.message})
          // console.log(error)
        })
      }*/

    //Function that handles login
    handleLogin = (event) => {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(console.log("You are logged in as: " + this.state.email))
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
        /*Formulär för att logga in*/           
        <div className="loginForm p-4">
            <form onSubmit={this.handleLogin}>
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
                        className="loginButton" 
                        value="Login" />
            </form>
            <div>
                

            </div> 
        </div> 

        );
        
    }
}

export default LoginForm;