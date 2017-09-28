import React from 'react';


//Function that handles logout
const LogoutButton = (props) => {

    return(
      <button onClick={props.onClick} className="logoutButton">Log Out</button>
    );

  }
export default LogoutButton;