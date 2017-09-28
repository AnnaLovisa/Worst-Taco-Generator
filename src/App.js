import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
import Header from './Components/Header.js';
import LoginForm from './Components/LoginForm.js';
import RegisterForm from './Components/RegisterForm.js';
import LogoutButton from './Components/LogoutButton.js';
import PostForm from './Components/PostForm.js';
import PrintTacoPost from './Components/PrintTacoPost.js';
import PrintSearchResults from './Components/PrintSearchResults.js';
import VotesList from './Components/VotesList.js';
import SearchForm from './Components/SearchForm.js';
/*import Votes from './Components/Votes.js';
import Button from './Components/Button.js';*/
import NavBar from './Components/NavBar.js';
import MyPage from './Components/MyPage.js';

export default class App extends Component {

  state = {
    user: "",
    userID: "",
    email: "",
    allTacoPosts: [],
    tacoName: "",
    tacoContent: "",
    searchInputField: "Search for a taco",
    postInputField: "",
    countUp: "",
    postID: [],
    voteNames: [],
    showPage: false,
    displayName: "",
    error: ""
  };

  componentDidMount(){
    //Denna funktion kollar om man är inloggad eller inte
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if(user){
        this.setState({user: user, userID: user.uid});
      }else{
        this.setState({user: ""})
      }
    })

    


         //To convert the vote-values in the database into an array
         /*firebase.database().ref(`Votes`).on('value', (snapshot) => {
          //Konvertera värdet till en array.
          const voteItem = toArray(snapshot.val());
          this.setState({voteNames: voteItem});
          console.log(voteItem); 
        });*/

                //To convert the post-values in the database into an array
                firebase.database().ref(`tacoCombiPosts`).on('value', (snapshot) => {
                  //Konvertera värdet till en array.
                  const postItem = toArray(snapshot.val());
                  this.setState({allTacoPosts: postItem});
                  console.log(postItem)
                });

                 //To convert the post-values in the database into an array
                 firebase.database().ref(`tacoCombiPosts`).on('value', (snapshot) => {
                  //Konvertera värdet till en array.
                  const postItem2 = toArray(snapshot.val());
                  this.setState({postID: postItem2});
                  console.log(postItem2)
                });
                //hur hittar jag till voteNames?
                //To convert the post-values in the database into an array
              /*firebase.database().ref(`tacoCombiPosts`).on('value', (snapshot) => {
                //Konvertera värdet till en array.
                const voteItem = toArray(snapshot.val());
                this.setState({voteNames: voteItem}); //Denna skriver ut en tom array. Jag måste alltså lägga in värden i voteItem
                console.log(voteItem)
              });*/

                


  }
  
  onChange = (event) => {
    this.setState({searchInputField: event.target.value});
  }

  handleLogout = () => {
    firebase.auth().signOut();   
  }

  handleTitleInput = (event) => {
    this.setState({tacoName: event.target.value})
  }

  handleContentInput = (event) => {
    this.setState({tacoContent: event.target.value})
  }

  //Function that creates new post and push it in the database
  handleNewPost = (event) => {
    
    //Skapa en ny post med alla dess egenskaper
    const postItem = {
      /*createdByemail: this.state.email,*/
      createdBy: this.state.user.uid, //För att koppla varje post till varje användare
      tacoName: this.state.tacoName,
      tacoContent: this.state.tacoContent
    }
    
    /*preventDefault hindrar från att submitta formuläret*/
     event.preventDefault();
    
    /*Push skapar och lägger till ett nytt objekt i databasen
    och skapar automatiskt ett unikt ID som är kopplat till det objektet, såhär:
    -KtFrwFN5vgH_U2wtmpL : { text: "Learn Firebase", completed: false }*/
    firebase.database().ref(`tacoCombiPosts`).push(postItem)
     .then(() => {console.log("Created new post: " + postItem)})
     .catch(error => {console.log(error)})   
  }

  //Function that creates a list of all the userID's that like a vote. Not done, since we need to limit
  //the likes per user and post to be only one time.
    addNewVote = (item) => {
    const vote = {userID:this.state.user.uid, postID: item}
    //To push in a new userID in the voteNames-property of tacoCombiPost
   // firebase.database().ref(`tacoCombiPosts/${item}/voteNames`).push(this.state.userID)
   firebase.database().ref(`tacoCombiPosts/${item}/voteNames`).push(vote)
    .then(() => {console.log("Created new vote by: " + this.state.user.uid)})
    .catch(error => {console.log(error)})

  }

  //Testtest
  handleNewVote = (item) => {
    firebase.auth().onAuthStateChanged(item => {
      if (item) {
        this.setState({postID: item.id})
        console.log(this.state.postID);
        //kollar så votes hålls uppdaterat
        firebase.database()
          .ref(`tacoCombiPosts/${item.id}/voteNames`)
          .on("value", snapshot => {
            console.log('Posts votes', snapshot.val())
          });
      } else {
        this.setState({ postID: "" });
      }
    });
  }

  showPage = () => {
    this.setState({showPage: true})
  }

  showHome = () => {
    this.setState({showPage: false})
  }
    

  /* testar med att pusha in i ett eget Votes-objekt istället */
   /*addNewVote = (item) => {
     console.log(this.state.userID);
      const vote = {
        votedBy: this.state.userID,
        value: item
      }
      
    //To push in a new userID in the voteNames-property of tacoCombiPost
   /*firebase.database().ref(`tacoCombiPosts/${item}/voteNames`).push(this.state.userName)*/
   /* firebase.database().ref(`Votes`).push(vote)
    .then(() => {console.log("Created new vote by: " + this.state.userID)})
    .catch(error => {console.log(error)})
  } */

  deletePost = (item) => {
    firebase.database()
    .ref(`tacoCombiPosts/${item}`).remove()
    .then(() => {console.log("Deleted post")})
    .catch(error => {console.log(error)})
  }


  render(){
 /*    console.log(this.state.voteNames);
    const voteNamesList = this.state.voteNames.map(item => {
      console.log(item)
      return item.value.votedFor
    }).map(item => {
      //Returnerar det item som stämmer överens med den post-nyckeln
      if(item === this.state.allTacoPosts.key){
        console.log(item.key)
        return <p key={item.key}>{item}</p>
      }     
    }) */

            //Senaste testet. Filtrerar ut alla posts som har votes
/*             const voteNamestest = this.state.allTacoPosts.map((item, index) => {
              return
                    
                      <PrintTacoPost onClick={this.addNewVote} key={index} id={item.key} deleteClick={this.deletePost} tacoName={item.value.tacoName} tacoContent={item.value.tacoContent} userID={item.value.createdBy}
                      loggedIn={this.state.userID} voteNames={item.value.voteNames}/>
                    
              }).map((item => {
                for(let key in item ){
                  return item[key];
                }              
                //return <p key={item.key}>{item.key}</p>
              })).map((item, index) => {
                console.log(item.userID)
                return <p key={index}>{item.userID}</p>
              }) */



/*             //Senaste testet. Filtrerar ut alla posts som har votes
              const voteNamestest = this.state.allTacoPosts.filter((item, index) => {
              console.log(item.value.voteNames)
              
                return item.value.voteNames
              }).map((item => {
                for(let key in item ){
                  return item[key];
                }              
                //return <p key={item.key}>{item.key}</p>
              })).map((item, index) => {
                console.log(item.userID)
                return <p key={index}>{item.userID}</p>
              }) */

    //Try out
    //Mappar igenom noteNames-arrayen in i sortedList-variabeln
    /* const sortedList = this.state.voteNames.map((item, index) => {
      console.log("Voted by: " + item.value.votedBy + " voted for: :" + item.value.votedFor)
      if(item.key.votedFor === this.state.allTacoPosts.key)
       console.log(item.key.votedFor)
      return item.key.votedFor           
   }) */
    
    //Mappar igenom allTacoPosts-arrayen in i postList-variabeln
    const postList = this.state.allTacoPosts.map((item, index) => {
    
      console.log(item.key)
      return(
        <div key={index} className="d-flex justify-content-center">
          <PrintTacoPost onClick={this.handleNewVote} key={index} voteID={item.key} id={item.key} allTacoPosts={this.state.allTacoPosts} deleteClick={this.deletePost} tacoName={item.value.tacoName} tacoContent={item.value.tacoContent} userID={item.value.createdBy} loggedIn={this.state.userID} voteNames={this.state.voteNames} postID={this.state.postID}/>
          {/*om värdet på postidt är samma som värdet på votespostidt*/}
         </div>
    )})


    //För att endast visa användarens egna posts
    const postListOwnPage = this.state.allTacoPosts.map((item, index) => {
      console.log(item.key)
      if(this.state.showPage && this.state.userID === item.value.createdBy){
        (console.log(this.state.showPage));
        return(      
          <div key={index} className="d-flex justify-content-center">
              <PrintTacoPost onClick={this.handleNewVote} key={index} voteID={item.key} id={item.key} allTacoPosts={this.state.allTacoPosts} deleteClick={this.deletePost} tacoName={item.value.tacoName} tacoContent={item.value.tacoContent} userID={item.value.createdBy} loggedIn={this.state.userID} voteNames={this.state.voteNames} postID={this.state.postID}/>           
          </div>
    )}})
    
    //Try out
    /* const voteList = this.state.allTacoPosts.map(item => {
      console.log(item.value.voteNames)
      return item.value.voteNames;
    }).map((item2, index) => {
      console.log(item2[index])
      return item2[index]
    }) */

  

    //Mappar igenom voteNames-arrayen i allTacoPosts-arrayen
     /*const voteNamesList = this.state.voteNames.map((item, index) => {
       console.log("Voted by: " + item.value.votedBy + " voted for: :" + item.value.votedFor)
        return <li key={index}>{item.value.votedBy}</li>;
        
      })*//*.map((item, index) => {
        return(
          console.log(voteNamesList);
          <small key={index} className="text-muted">Voted By {item.value.voteNames}</small>
        )
      )*/

       /* //Mappar igenom voteNames-arrayen i allTacoPosts-arrayen
      const sortedList = this.state.voteNames.map((item, index) => {
        console.log("Voted by: " + item.value.votedBy + " voted for: :" + item.value.votedFor)
        /*if(item.value.votedFor === this.state.allTacoPosts.key)*/
        /* if(this.state.allTacoPosts.includes(item.value.votedFor))
          return(
              <PrintTacoPost onClick={this.addNewVote} key={index} id={item.key} votedBy={item.value.votedBy} tacoName={item.value.tacoName} tacoContent={item.value.tacoContent} userID={item.value.createdBy}>
                 
              </PrintTacoPost>
          )
       
     })   */
 


        /*const voteNamestest = this.state.allTacoPosts.filter((item, index) => {
              console.log(item.value.voteNames)
              return <p key={index}>{item.value.voteNames}</p>
              }).map((item => {
                console.log(item.key);               
                return <p key={item.key}>{item.key}</p>
              }))*/


    /*const voteNamestest = this.state.allTacoPosts.filter((item, index) => {
              console.log(item.value.voteNames)
              return <p key={index}>{item.value.voteNames}</p>
              }).map((item => {
                console.log(item.key);               
                return <p key={item.key}>{item.key}</p>
              }))*/
                          
              /*.map((item, index) => {
                console.log()
                return 
              })*/

      /*const  voteNamesList= this.state.allTacoPosts.filter(item=> item.value.voteNames 
        


       )*/
      /* const test = voteNamesList.map(item=>{
        let arr = [];   
        arr.push(item.value.voteNames);
        const test2 = arr.map(item2=>{
          console.log(item2);
          return test2
        })
        return <p key={item2.key}>{item2.value} {item2.userID}</p>
       }) 
 */
 /*console.log(voteNamesList)*/
      /*console.log(voteNamestest)
      console.log(this.state.allTacoPosts)*/
    /*.map((item, index) => {
            console.log(item.value.voteNames)
            return <p key={index}>{item.value.voteNames}</p>
    })*/
    
    
    
    /*.map((item, index) => {
        console.log(item.value.voteNames[index])
    })*/

    
            
            
            
            /*.map((item, index) => {
                  return <p key={item.key}>{item.value.voteNames}</p>
            })*/


    return (
     <div className="App">
       <div className="m-5"> 

          {/*Header that shows who is logged in*/}
          <Header loginEmail={this.state.email} loginUser={this.state.user}>
              <LogoutButton onClick={this.handleLogout} />
          </Header>

        {this.state.user && <NavBar showPage={this.showPage} showHome={this.showHome}>
                                <SearchForm onChange={this.onChange} inputField={this.state.searchInputField}/>
                            </NavBar>}
        
        {/*If user is logged out, the login-form and register-form will appear*/}    
        {!this.state.user && <div className="d-flex justify-content-center p-5 formContainer">
                                  <RegisterForm /><LoginForm />
                             </div>}

        {/*If user is logged in, the taco-posts and taco-form will appear*/}    
       {this.state.user && !this.state.showPage &&
       <div className="d-flex-column justify-content-center">
         <h3 className="text-center">All posts</h3>
         <PrintSearchResults allTacoPosts={this.state.allTacoPosts} searchInputField={this.state.searchInputField} onClick={this.onClick} deleteClick={this.deletePost}/>
         {/*<PrintTacoPost allTacoPosts={this.state.allTacoPosts} onClick={this.onClick} />*/}
       </div>}

       {/*All posts to be shown only when someone is logged in and showPage-button is not clicked*/}
       {this.state.user && !this.state.showPage &&
       <div className="d-flex-column justify-content-center">
         <h3 className="text-center">All posts</h3>
         {postList}          
       </div>}

      {/*Users own page to be shown only when clicked on page-link*/}
       {this.state.showPage && 
          <div className="d-flex-column">
              <h3 className="text-center">{this.state.user.email}s Page</h3>
              {postListOwnPage}
          </div>}

       {/*PostForm to be shown only when someone is logged in*/}
       {this.state.user &&
       <div>
          <PostForm onClick={this.handleNewPost} inputTacoName={this.state.tacoName}
          inputTacoContent={this.state.tacoContent} handleTitleInput={this.handleTitleInput}
          handleContentInput={this.handleContentInput}/>          
       </div>}
      </div>
     </div>
    );
  }
}

//Function that converts objects to array to enable mapping
function toArray(firebaseObject) {
  let array = []
  for(let item in firebaseObject){
    array.push({ key: item, value: firebaseObject[item] })
  }
  return array;
}

/*
<Button>Normal button</Button>
<Button primary>Another button</Button>
*/
