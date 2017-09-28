/* import React, {Component} from 'react';

class VotesList extends Component {

    render(){

        const sortedList = this.props.voteNames.map((item, index) => {
            console.log("Voted by: " + item.value.votedBy + " voted for: :" + item.value.votedFor)
            /*if(item.value.votedFor === this.state.allTacoPosts.key)*/
          /*   return item.value.votedFor           
         })
        return(
        <div>
            <p>{sortedList}</p>
        </div>
        )


    }



}

export default VotesList; */
 
/* import React from 'react';

const PrintVotesList = (props) => {


    const voteNamesList = props.allTacoPosts.map((item, index) => {

        console.log(item.key)
            return item.key
      }).map((item, index) => {
            return <li key={index}>{props.voteNames}</li>
      })


    return(

        <ul>
            {voteNamesList}
        </ul>
        
    )
}

export default PrintVotesList; */

    /*const voteNamesList = this.state.allTacoPosts.value.voteNames.map((item, index) => {
      return item.value.voteNames;
    })

    return 
    
    
    
    /*${this.props.currentUser.userId}

    const hej = this.state.allTacoPosts.map((item) => {
      return item.key})

    console.log(this.state.allTacoPosts);
    
    function RecepieCard(props){
    let recepie = props.recepies.map(recepie=>{
        const allIngredients = recepie.value.allIngredients.map(item => {
           return <li key={uuid.v4()}> {item.ingredient} {item.qty} {item.measurment}</li>
        })
         const allToDos = recepie.value.howToDo.map(item => {
           return <li key={uuid.v4()}> {item.howToDo}</li>
        })
        const user = props.users.filter(user => user.value.uid === recepie.value.userId ).map(user => user.value.name)

        return <div key={uuid.v4()} className="media flex-wrap" style={ {width: "100%"}}>
      
            <img className="d-flex flex-first mr-3" src={recepie.value.imageURL} alt={recepie.value.recepieName} style={ {width: "10em"}}/>
        
        <div className="media-body"> 
            <h5 className="mt-0">{recepie.value.recepieName} </h5>
           <small className="text-muted">
          Recept av {user[0]} </small>
           <p> {recepie.value.description}</p>
             <div className="media mt-3">
                 <div className="media-body">
                     <div className="d-flex justify-content-start flex-wrap">
                <div className="p-2">
                     <h6 className="mt-0">Du behöver:</h6>
            <ul> {allIngredients}</ul>
            </div>
            <div className="p-2 flex-last">
            <h6 className="mt-0">Gör såhär:</h6>
            <ol> {allToDos}</ol>
            </div>
            </div>
            </div>
        </div>
        </div>

     
    </div>

    })

return(
    <div className="d-flex flex-column justify-content-center m-2">
    {recepie}
    </div>);
}

export default RecepieCard;
    
    
    
    function RecepieCard(props){
    let recepie = props.recepies.map(recepie=>{
        const allIngredients = recepie.value.allIngredients.map(item => {
           return <li key={uuid.v4()}> {item.ingredient} {item.qty} {item.measurment}</li>
        })
         const allToDos = recepie.value.howToDo.map(item => {
           return <li key={uuid.v4()}> {item.howToDo}</li>
        })
        const user = props.users.filter(user => user.value.uid === recepie.value.userId ).map(user => user.value.name)

        return <div key={uuid.v4()} className="media flex-wrap" style={ {width: "100%"}}>
      
            <img className="d-flex flex-first mr-3" src={recepie.value.imageURL} alt={recepie.value.recepieName}
    
    
    
    
    */

   

    /*const voteNamesList = this.state.allTacoPosts.filter((item) => {
      console.log(item.value.voteNames)
      return item.value.voteNames; //Dessa skrivs ut i konsollen men de är fortfarande objekt??

    }).map((item => {
      console.log(item.key);
      return <p key={item.key}>{item.key}</p>
    })*/

     //Mappar igenom voteNames-arrayen i allTacoPosts-arrayen
     /* const voteNamesList = this.state.allTacoPosts.map((item, index) => {
        return item.value.voteItem;
        
      }).map((item, index) => {
        return(
          console.log(voteNamesList);
          <small key={index} className="text-muted">Voted By {item.value.voteNames}</small>
        )
      )
  
      return voteNamesList;
  
      }
 */


/* 
    

export default Header; */