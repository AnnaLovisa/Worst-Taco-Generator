/* import React, { Component } from 'react';
import firebase from '../firebase.js';

class Votes extends Component {

    state = {
        votedFor: "",
        votedBy: [],
        countUp: 0,
    }

 */
    //Hämta ett värde från databasen och öka med 1


      //Function that adds new vote to Firebase
      /*addNewVote = (event) => {*/

        //Borde jag ha en funktion här som tar post-objektet och uppdaterar själva VoteName-värdet?


        //Function that counts up votes everytime the button is pushed. Limited to one per user and post.
        /*countVotes = () => {
        this.setState({countUp: this.state.countUp + 1})
        console.log(this.state.countUp);
        }*/
    
        //Create a new vote-object   Hur ska jag koppla dessa nedan till rätt värden i appen? är det key i tacoCombiPostID?
        /*const newVote = {
            votedFor: this.props.tacoCombiPostID,
            votedBy: this.props.userID,  /* this.props.user.email */
            /*countUp: this.props.countVotes
      }
    
        /*event.preventDefault();
    
        firebase.database().ref(`Votes`).push(newVote)
        .then(() => {console.log("Created new vote: " + {newVote})})
        .catch(error => {console.log(error)})


    
    }

    render(){

        return(
            <div>
                <button onClick={this.props.addNewVote} className="btn btn-primary">
                    <p>{this.state.countUp}</p>
                </button>
            </div>

        )
    }
}

export default Votes;

/*firebase.ref(votes/idt på användaren som röstat)*/