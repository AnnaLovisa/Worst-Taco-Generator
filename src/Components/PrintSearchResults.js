import React, { Component } from 'react';

class PrintSearchResults extends Component {

  render(){
          //Mappar igenom allTacoPosts-arrayen in i searchList-variabeln
          const searchList = this.props.allTacoPosts.map((item, index) => {
            //Om någon har skrivit in något i inputfältet
            if(this.props.searchInputField){
              return item.value.tacoContent.includes(this.props.searchInputField) ?              
              <div key={index} className="w-50 p-3 card-deck">       
                <div className="d-flex-column justify-content-center card">
                  <div className="card-block">
                    <h4 className="card-title">{item.value.tacoName}</h4>
                    <p className="card-text">{item.value.tacoContent}</p>
                  </div>
                  <div className="d-flex justify-content-between card-footer">
                    <small className="text-muted">Created By {item.value.createdBy}</small>
                    <button onClick={() => this.props.onClick(item.key)} className="voteButton">Vote</button>
                    <button onClick={() => this.props.deleteClick(this.props.id)} className="deleteButton">Delete</button>
                  </div>
                </div>
              </div>  : '';
           
            }else{
              return null        
            }
          })



    return(
      <div>
        <h3 className="text-center">Searched Tacos</h3>
        {searchList}
      </div>   
    )
  }
  
  
    
}

export default PrintSearchResults;