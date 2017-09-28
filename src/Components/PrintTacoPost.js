import React from 'react';

const PrintTacoPost = (props) => {

  console.log(props.postID);

  console.log(props); //Skriver ut voteID

  //Ninas exempel: db.ref(users/${this.props.currentUser.userId}/acceptedChallenges)
  //så kör jag arrayfunktinen och så kan jag hantera bara då min lista med "accepted challenges" för en specifik användare


                 //Senaste testet. Filtrerar ut alla posts som har votes
           /*      const voteNamestest = props.allTacoPosts.map((item, index) => {
                //Skriver ut alla voteNames-objekt

                    console.log(item.value.voteNames)
                    return item.value.voteNames   
                    
                  }).filter((item, index) => {
                    for(let vote in item){
                      console.log(item[vote]) //Skriver ut ett vote-objekt för varje post
                      return item[vote];
                    }
                  }).map((item, index) => {
                    console.log("Item", item);  //Skriver ut en votes per post (?)
                     //Jag vill kolla om IDt på varje votes postID är samma som varje posts key
                     
                      return <li key={index}>{item.userID}</li>                   
                   }) */
/*                    //Senaste testet. Filtrerar ut alla posts som har votes
                const voteNamestest = props.allTacoPosts.filter((item, index) => {
                  console.log(item.value.voteNames)                 
                    return item.value.voteNames
                  }).map((item => {
                    for(let key in item ){
                      return item[key];
                    }              
                    //return <p key={item.key}>{item.key}</p>
                  })).map((item, index) => {
                    console.log(item.value.userID)
                    return <p key={index}>{item.value.userID}</p>
                  })
 */


    return(

        <div className=" w-50 p-3 card-deck">
        <div className="d-flex-column justify-content-center card">
          <div className="card-block">
            <h4 className="card-title">{props.tacoName}</h4>
            <p className="card-text">{props.tacoContent}</p>
          </div>

          <div className="d-flex justify-content-between card-footer">
            <small className="text-muted">Created By {props.userID}</small>
            {props.loggedIn === props.userID && <button onClick={() => props.deleteClick(props.id)} className="deleteButton">Delete</button>}
            <button onClick={() => props.onClick(props.id)} className="voteButton">Vote</button>            
            <small className="text-muted">Voted By
              <ul>
                {/*{voteNamestest}*/}
              </ul>
            </small>            
          </div>
          {/*<VotesList />*/}
          {/*<Votes tacoCombiPostID={item.key} userID={this.state.user.uid} countVotes={this.countVotes}/>*/}
        </div>
      </div>
    )

}


export default PrintTacoPost;